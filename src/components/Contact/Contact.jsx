import "./Contact.css";

function Contact() {
  return (
    <section className="contact">
      <h2 className="contact__title">CONTACT ME</h2>
      <a href="mailto:vasilieva.a@icloud.com" target="_blank">
        <button className="contact__button">email</button>
      </a>
      <a href="https://www.linkedin.com/in/anna-vasileva-/" target="_blank">
        <button className="contact__button">linkedin</button>
      </a>
    </section>
  );
}

export default Contact;
