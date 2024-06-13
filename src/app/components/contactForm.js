import React from "react";
import styles from "@/styles/styles.module.css";

export default function ContactForm() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Enviando...");
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.NEXT_PUBLIC_FORM_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Muchas gracias!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className={styles.form__container}>
      <form onSubmit={onSubmit} className={styles.form}>
        <input type="hidden" name="access_key" value="" />
        <input type="text" name="Name" placeholder="name" required />
        <input type="email" name="Email" placeholder="email" required />
        <textarea name="message" placeholder="Message" required></textarea>
        <span style={{ height: "2.5rem", color: "gray" }}>{result}</span>
        <button className={styles.button} type="submit">
          ENVIAR
        </button>
      </form>
    </div>
  );
}
