import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, phone, service, message } = await request.json();

  if (!name || !email) {
    return Response.json({ error: "Name and email required" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "EcoFlo Website <noreply@ecoflowash.com>",
    to: ["sales@ecoflowash.com"],
    replyTo: email,
    subject: `New Quote Request: ${service || "General"} - ${name}`,
    html: `
      <h2>New Quote Request from EcoFlo Website</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Service:</strong> ${service || "Not specified"}</p>
      <p><strong>Message:</strong></p>
      <p>${message || "No message"}</p>
    `,
  });

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json({ success: true });
}
