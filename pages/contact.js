import BaseLayout from '../components/layout';
import SEO from '../components/seo';
import { useState } from 'react';

const Contact = () => {
  const [error, setError] = useState(null);

  const handleSubmit = () => {
    const form = document.getElementById('contact-form');
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    if (name === '' || email === '' || message === '') {
      setError('Please fill out all fields.');
      return;
    } else {
      setError(null);
    }

    form.submit();
  }

  return (
    <>
      <SEO />
      <section className='contact-page'>
        <article className='contact-form'>
          <h3>get in touch</h3>
          <span style={{color: "red"}}>{error}</span>
          <form action="https://formspree.io/xvowjjkq" id="contact-form"  method="POST">
              <div className="form-group">
                <input type="text" name="name" placeholder="name" className="form-control" />
                <input type="email" name="email" placeholder="email" className="form-control" />
                <textarea name="message" rows="5" placeholder="message" className="form-control" />
              </div>
            </form>
              <button type="submit" onClick={handleSubmit} className="submit-btn btn">submit here</button>
        </article>
      </section>
    </>
  )
}


Contact.Layout = BaseLayout;

export default Contact;