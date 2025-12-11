"use client";
import { useActionState } from "react";
import { contact } from "./action";

const Form = () => {
  const [state, action, pending] = useActionState(contact, null);

  return (
    <form className="flex-col" action={action}>
      <label htmlFor="full_name">vollständiger Name</label>
      <input
        type="text"
        id="full_name"
        name="full_name"
        placeholder="Geben Sie Ihren vollständiger Name ein"
      />

      <label htmlFor="phone">Telefonnummer</label>
      <input
        type="text"
        id="phone"
        name="phone"
        placeholder="Geben Sie Ihre Telefonnummer ein"
      />

      <label htmlFor="email">E-Mail</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Geben Sie Ihre E-Mail-Adresse ein"
      />

      <button className="btn-pr" disabled={pending}>
        {pending ? "Wird gesendet..." : "Absenden"}
      </button>

      {state &&
        (state?.status == 200 || state?.status == 201 ? (
          <p className="success">Ihre Nachricht wurde erfolgreich gesendet!</p>
        ) : (
          <p className="error">Ihre Nachricht konnte nicht gesendet werden!</p>
        ))}
    </form>
  );
};

export default Form;
