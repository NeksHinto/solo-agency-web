import React from "react";
import styles from '.././page.module.css'

export default function ContactForm() {
    const [result, setResult] = React.useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Enviando....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "5708937d-8c8d-405f-b8d6-dbd75827398e");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
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
      <div className={styles.form__container} style={{marginTop: '0px'}}>
        <form onSubmit={onSubmit} className={styles.form}>
          <input type="hidden" name="access_key" value=""/>
          {/* <p>Nombre</p> */}
          <input type="text" name="Name" placeholder="name" required/>
          {/* <p>Email</p> */}
          <input type="email" name="Email" placeholder="email" required/>
          {/* <p>MENSAJE</p> */}
          <textarea name="message" placeholder="Message" required></textarea>
          <span style={{height: '2.5rem', color: 'gray'}}>{result}</span>
          <button className={styles.button} type="submit">ENVIAR</button>
        </form>
      </div>
    );
  }