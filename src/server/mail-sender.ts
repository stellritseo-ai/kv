export interface FormSubmissionPayload {
  formType: string;
  name: string;
  email?: string;
  phone?: string;
  service?: string;
  address?: string;
  propertyType?: string;
  budget?: string | number;
  timeline?: string;
  message?: string;
  rating?: number;
  additionalDetails?: Record<string, any>;
}

export async function sendEmailNotification(data: FormSubmissionPayload): Promise<{ success: boolean; messageId?: string; error?: string }> {
  try {
    if (!data.name && !data.phone && !data.email) {
      return { success: false, error: "Missing required contact details" };
    }

    const host = process.env.SMTP_HOST || "smtp.zoho.com";
    const port = Number(process.env.SMTP_PORT) || 465;
    const user = process.env.SMTP_USER || "jack@stellrit.com";
    const pass = process.env.SMTP_PASS || "9FnXa1pmrk9c";
    const recipient = process.env.NOTIFICATION_EMAIL || "jack@stellrit.com";

    const { default: nodemailer } = await import("nodemailer");

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    const submissionDate = new Date().toLocaleString("en-US", {
      timeZone: "America/New_York",
      dateStyle: "full",
      timeStyle: "short",
    });

    const formattedFields: string[] = [];
    if (data.formType) {
      formattedFields.push(`<tr><td style="padding: 10px 14px; font-weight: bold; color: #555; background: #faf9f6; border-bottom: 1px solid #eee; width: 160px;">Form Source</td><td style="padding: 10px 14px; color: #111; border-bottom: 1px solid #eee;"><strong>${data.formType}</strong></td></tr>`);
    }
    if (data.name) {
      formattedFields.push(`<tr><td style="padding: 10px 14px; font-weight: bold; color: #555; background: #faf9f6; border-bottom: 1px solid #eee;">Customer Name</td><td style="padding: 10px 14px; color: #111; border-bottom: 1px solid #eee;"><strong>${data.name}</strong></td></tr>`);
    }
    if (data.phone) {
      formattedFields.push(`<tr><td style="padding: 10px 14px; font-weight: bold; color: #555; background: #faf9f6; border-bottom: 1px solid #eee;">Phone Number</td><td style="padding: 10px 14px; color: #111; border-bottom: 1px solid #eee;"><a href="tel:${data.phone.replace(/[^0-9]/g, "")}" style="color: #cc7e14; font-weight: bold; text-decoration: none;">${data.phone}</a></td></tr>`);
    }
    if (data.email) {
      formattedFields.push(`<tr><td style="padding: 10px 14px; font-weight: bold; color: #555; background: #faf9f6; border-bottom: 1px solid #eee;">Email Address</td><td style="padding: 10px 14px; color: #111; border-bottom: 1px solid #eee;"><a href="mailto:${data.email}" style="color: #cc7e14; text-decoration: none;">${data.email}</a></td></tr>`);
    }
    if (data.service) {
      formattedFields.push(`<tr><td style="padding: 10px 14px; font-weight: bold; color: #555; background: #faf9f6; border-bottom: 1px solid #eee;">Service Requested</td><td style="padding: 10px 14px; color: #111; border-bottom: 1px solid #eee;">${data.service}</td></tr>`);
    }
    if (data.propertyType) {
      formattedFields.push(`<tr><td style="padding: 10px 14px; font-weight: bold; color: #555; background: #faf9f6; border-bottom: 1px solid #eee;">Property Type</td><td style="padding: 10px 14px; color: #111; border-bottom: 1px solid #eee;">${data.propertyType}</td></tr>`);
    }
    if (data.address) {
      formattedFields.push(`<tr><td style="padding: 10px 14px; font-weight: bold; color: #555; background: #faf9f6; border-bottom: 1px solid #eee;">Address / Location</td><td style="padding: 10px 14px; color: #111; border-bottom: 1px solid #eee;">${data.address}</td></tr>`);
    }
    if (data.budget) {
      formattedFields.push(`<tr><td style="padding: 10px 14px; font-weight: bold; color: #555; background: #faf9f6; border-bottom: 1px solid #eee;">Estimated Budget</td><td style="padding: 10px 14px; color: #111; border-bottom: 1px solid #eee;">${data.budget}</td></tr>`);
    }
    if (data.timeline) {
      formattedFields.push(`<tr><td style="padding: 10px 14px; font-weight: bold; color: #555; background: #faf9f6; border-bottom: 1px solid #eee;">Preferred Timeline</td><td style="padding: 10px 14px; color: #111; border-bottom: 1px solid #eee;">${data.timeline}</td></tr>`);
    }
    if (data.rating) {
      formattedFields.push(`<tr><td style="padding: 10px 14px; font-weight: bold; color: #555; background: #faf9f6; border-bottom: 1px solid #eee;">Review Rating</td><td style="padding: 10px 14px; color: #111; border-bottom: 1px solid #eee;">⭐ ${data.rating} / 5 Stars</td></tr>`);
    }
    if (data.message) {
      formattedFields.push(`<tr><td style="padding: 10px 14px; font-weight: bold; color: #555; background: #faf9f6; border-bottom: 1px solid #eee; vertical-align: top;">Details / Message</td><td style="padding: 10px 14px; color: #111; border-bottom: 1px solid #eee; white-space: pre-wrap;">${data.message}</td></tr>`);
    }

    if (data.additionalDetails) {
      for (const [key, val] of Object.entries(data.additionalDetails)) {
        if (val) {
          formattedFields.push(`<tr><td style="padding: 10px 14px; font-weight: bold; color: #555; background: #faf9f6; border-bottom: 1px solid #eee;">${key}</td><td style="padding: 10px 14px; color: #111; border-bottom: 1px solid #eee;">${String(val)}</td></tr>`);
        }
      }
    }

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>New Website Lead - KV Property Inc.</title>
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f3ef; margin: 0; padding: 24px; color: #222;">
        <div style="max-width: 640px; margin: 0 auto; background: #ffffff; border-radius: 14px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); border: 1px solid #e5e3db;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #1f1b16 0%, #2e261f 100%); padding: 28px 32px; border-bottom: 4px solid #ffa326;">
            <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.02em;">
              KV Property Inc. — New Lead Alert
            </h1>
            <p style="color: #ffa326; margin: 6px 0 0 0; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">
              ${data.formType || "Website Inquiry"}
            </p>
          </div>

          <!-- Body -->
          <div style="padding: 28px 32px;">
            <p style="font-size: 14px; color: #666; margin-top: 0; margin-bottom: 20px;">
              A new inquiry was submitted on <strong>https://www.kvpropertyinc.com</strong> on ${submissionDate}.
            </p>

            <table style="width: 100%; border-collapse: collapse; font-size: 13px; border: 1px solid #eee; border-radius: 8px; overflow: hidden;">
              <tbody>
                ${formattedFields.join("")}
              </tbody>
            </table>

            <!-- Quick action buttons -->
            <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid #eee;">
              ${
                data.phone
                  ? `<a href="tel:${data.phone.replace(/[^0-9]/g, "")}" style="display: inline-block; background: #ffa326; color: #ffffff; text-decoration: none; padding: 11px 22px; border-radius: 8px; font-weight: bold; font-size: 13px; margin-right: 12px; margin-bottom: 8px;">📞 Call Customer</a>`
                  : ""
              }
              ${
                data.email
                  ? `<a href="mailto:${data.email}?subject=${encodeURIComponent("Regarding your KV Property Inc inquiry")}" style="display: inline-block; background: #2e261f; color: #ffffff; text-decoration: none; padding: 11px 22px; border-radius: 8px; font-weight: bold; font-size: 13px; margin-bottom: 8px;">✉️ Reply via Email</a>`
                  : ""
              }
            </div>
          </div>

          <!-- Footer -->
          <div style="background: #faf9f6; padding: 16px 32px; font-size: 11px; color: #888; border-top: 1px solid #eee;">
            This notification was automatically delivered to <strong>${recipient}</strong> via KV Property Inc. lead routing system.
          </div>
        </div>
      </body>
      </html>
    `;

    const plainText = `
NEW INQUIRY: KV Property Inc. (${data.formType || "Website Form"})
Submitted: ${submissionDate}

Customer Name: ${data.name || "N/A"}
Phone: ${data.phone || "N/A"}
Email: ${data.email || "N/A"}
Service: ${data.service || "N/A"}
Property Type: ${data.propertyType || "N/A"}
Address: ${data.address || "N/A"}
Budget: ${data.budget || "N/A"}
Timeline: ${data.timeline || "N/A"}
Rating: ${data.rating ? `${data.rating} / 5` : "N/A"}
Message / Details:
${data.message || "N/A"}
    `.trim();

    const mailOptions = {
      from: `"KV Property Inquiries" <${user}>`,
      to: recipient,
      replyTo: data.email || user,
      subject: `New Lead [${data.formType || "Website"}]: ${data.name} ${data.service ? `(${data.service})` : ""}`.trim(),
      text: plainText,
      html: htmlContent,
    };

    const info = await transporter.sendMail(mailOptions);
    return { success: true, messageId: info.messageId };
  } catch (error: any) {
    console.error("Error sending lead notification email:", error);
    return { success: false, error: error?.message || "Failed to deliver email notification" };
  }
}

