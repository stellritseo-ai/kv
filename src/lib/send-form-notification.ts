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

/**
 * Dispatches form submission notifications to jack@stellrit.com via Zoho SMTP
 * via the server endpoint /api/send-email
 */
export async function sendFormNotification(
  payload: FormSubmissionPayload
): Promise<{ success: boolean; messageId?: string; error?: string }> {
  try {
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errJson = await res.json().catch(() => ({}));
      console.warn("Server responded with error for email notification:", errJson);
      return { success: false, error: errJson.error || res.statusText };
    }

    const json = await res.json();
    return { success: true, messageId: json.messageId };
  } catch (error: any) {
    console.error("Network error delivering form notification:", error);
    return { success: false, error: error?.message || "Network error" };
  }
}
