import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { assertAdmin, slugify } from "@/lib/admin.server";


/** Returns whether the caller is an admin, and whether any admin exists yet. */
export const getMyAccess = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data: isAdmin } = await context.supabase.rpc("has_role", {
      _user_id: context.userId,
      _role: "admin",
    });
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { count } = await supabaseAdmin
      .from("user_roles")
      .select("id", { count: "exact", head: true })
      .eq("role", "admin");
    return { isAdmin: Boolean(isAdmin), adminExists: (count ?? 0) > 0, userId: context.userId };
  });

/** Lets the very first signed-in account become admin when no admin exists. */
export const claimFirstAdmin = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data, error } = await context.supabase.rpc("claim_first_admin");
    if (error) throw new Error(error.message);
    return { claimed: Boolean(data) };
  });

export const getAdminStats = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    await assertAdmin(context);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const since = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
    const [{ count: totalLeads }, { count: recentLeads }, { count: adminCount }, users] =
      await Promise.all([
        supabaseAdmin.from("leads").select("id", { count: "exact", head: true }),
        supabaseAdmin
          .from("leads")
          .select("id", { count: "exact", head: true })
          .gte("created_at", since),
        supabaseAdmin
          .from("user_roles")
          .select("id", { count: "exact", head: true })
          .eq("role", "admin"),
        supabaseAdmin.auth.admin.listUsers({ page: 1, perPage: 1000 }),
      ]);

    return {
      totalLeads: totalLeads ?? 0,
      recentLeads: recentLeads ?? 0,
      admins: adminCount ?? 0,
      totalUsers: users.data?.users.length ?? 0,
    };
  });

export const listLeads = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    await assertAdmin(context);
    const { data, error } = await context.supabase
      .from("leads")
      .select("id, name, email, phone, requirement, source, created_at")
      .order("created_at", { ascending: false })
      .limit(500);
    if (error) throw new Error(error.message);
    return data ?? [];
  });

export const deleteLead = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: { id: string }) => input)
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    const { error } = await context.supabase.from("leads").delete().eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const listAppUsers = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    await assertAdmin(context);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const [{ data: usersData, error }, roles] = await Promise.all([
      supabaseAdmin.auth.admin.listUsers({ page: 1, perPage: 1000 }),
      supabaseAdmin.from("user_roles").select("user_id, role"),
    ]);
    if (error) throw new Error(error.message);
    const adminIds = new Set(
      (roles.data ?? []).filter((r) => r.role === "admin").map((r) => r.user_id),
    );
    return (usersData?.users ?? []).map((u) => ({
      id: u.id,
      email: u.email ?? "—",
      createdAt: u.created_at,
      lastSignInAt: u.last_sign_in_at ?? null,
      confirmed: Boolean(u.email_confirmed_at),
      isAdmin: adminIds.has(u.id),
    }));
  });

export const setAdminRole = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: { userId: string; makeAdmin: boolean }) => input)
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    if (data.userId === context.userId && !data.makeAdmin) {
      throw new Error("You cannot remove your own admin access");
    }
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    if (data.makeAdmin) {
      const { error } = await supabaseAdmin
        .from("user_roles")
        .upsert({ user_id: data.userId, role: "admin" }, { onConflict: "user_id,role" });
      if (error) throw new Error(error.message);
    } else {
      const { error } = await supabaseAdmin
        .from("user_roles")
        .delete()
        .eq("user_id", data.userId)
        .eq("role", "admin");
      if (error) throw new Error(error.message);
    }
    return { ok: true };
  });

export const deleteAppUser = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: { userId: string }) => input)
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    if (data.userId === context.userId) throw new Error("You cannot delete your own account");
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.auth.admin.deleteUser(data.userId);
    if (error) throw new Error(error.message);
    return { ok: true };
  });
