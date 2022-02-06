import classes from './contact-form.module.css'

function ContactForm() {
  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <lable htmlFor="email">Your Email</lable>
            <input type="email" id="email" required />
          </div>
          <div className={classes.control}>
            <lable htmlFor="name">Your Name</lable>
            <input type="text" id="name" required />
          </div>
        </div>
        <div className={classes.control}>
          <lable htmlFor="message">Your Message</lable>
          <textarea id="message" row="5" />
        </div>

        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  )
}

export default ContactForm
