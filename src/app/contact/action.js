"use server";

export async function contact(state, formData) {
  const url = "https://api.drivem1.de/website/contacts/";
  const isFormData = formData instanceof FormData;

  const headers = isFormData ? {} : { "Content-Type": "application/json" };
  const body = isFormData ? formData : JSON.stringify(formData || {});

  try {
    const res = await fetch(url, {
      method: "POST",
      cache: "no-store",
      headers,
      body,
    });

    const contentType = res.headers.get("content-type") || "";
    const data = contentType.includes("application/json")
      ? await res.json().catch(() => null)
      : await res.text().catch(() => null);

    return {
      ok: res.ok,
      status: res.status,
      message: res.ok
        ? "ok"
        : data?.error || data?.message || data?.detail || "server error",
      data,
    };
  } catch (err) {
    return {
      ok: false,
      status: 500,
      message: err?.message || "network error",
    };
  }
}
