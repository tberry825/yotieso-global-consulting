import { createClientFromRequest } from 'npm:@base44/sdk@0.8.44';

export default async function(req) {
  try {
    const base44 = createClientFromRequest(req);

    // Admin-only: a valid admin session is required. Unauthenticated callers
    // (including anonymous external requests) are rejected.
    const user = await base44.auth.me();
    if (!user || user.role !== 'admin') {
      return Response.json({ error: 'Forbidden' }, { status: 403 });
    }

    const retentionDays = 90;
    const cutoff = new Date(Date.now() - retentionDays * 24 * 60 * 60 * 1000);

    // Archive consultation records older than the cutoff that are not already archived.
    const result = await base44.asServiceRole.entities.Consultation.updateMany(
      { status: { $ne: "archived" }, created_date: { $lt: cutoff.toISOString() } },
      { $set: { status: "archived" } }
    );

    return Response.json({
      archived: result?.modified_count ?? result?.matched_count ?? 0,
      cutoff: cutoff.toISOString(),
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}