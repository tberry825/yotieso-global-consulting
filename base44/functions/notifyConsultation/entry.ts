import { createClientFromRequest } from 'npm:@base44/sdk@0.8.44';

const NOTIFY_EMAIL = "mgiddens@yotiesoglobalconsulting.com";

export default async function(req) {
  try {
    const base44 = createClientFromRequest(req);

    // Admin-only: this function is invoked by the Consultation Notification
    // workflow, which runs with an admin/service context. Anonymous external
    // requests hitting the public URL are rejected.
    const user = await base44.auth.me();
    if (!user || user.role !== 'admin') {
      return Response.json({ error: 'Forbidden' }, { status: 403 });
    }

    let payload = {};
    try {
      payload = await req.json();
    } catch {
      return Response.json({ error: 'Invalid request body' }, { status: 400 });
    }

    const name = (payload.name || "").toString().trim();
    const email = (payload.email || "").toString().trim();
    const service = (payload.service || "").toString().trim();
    const message = (payload.message || "").toString().trim();
    const source = (payload.source || "Consultation").toString().trim();

    const subject = `New Consultation Request — ${source}`;
    const body =
      `A new consultation request was submitted.\n\n` +
      `Name: ${name || "—"}\n` +
      `Email: ${email || "—"}\n` +
      `Service Interest: ${service || "—"}\n` +
      `Message: ${message || "—"}\n` +
      `Source: ${source}\n`;

    await base44.asServiceRole.integrations.Core.SendEmail({
      to: NOTIFY_EMAIL,
      subject,
      body,
    });

    return Response.json({ ok: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}