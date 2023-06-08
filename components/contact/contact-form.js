import { useState } from 'react'
import styles from './contact-form.module.css';

export default function ContactForm() {
    const [contactForm, setContactForm] = useState({
        email: '',
        name: '',
        message: ''
    });

    const sendMessageHandler = function (e) {
        e.preventDefault();

        fetch('/api/contact', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contactForm)
        })
            .then(data => {
                console.log(data)
            })
            .catch(err => console.log(err))
            .finally(() => {
                setContactForm({
                    email: '',
                    name: '',
                    message: '',
                });
            })

    }

    return <section className={styles.contact}>
        <h1>How can i help you</h1>
        <form onSubmit={sendMessageHandler} className={styles.form}>
            <div className={styles.controls}>
                <div className={styles.control}>
                    <label htmlFor='email'>Your Email</label>
                    <input
                        onChange={e => setContactForm(pCF => {
                            return { ...pCF, email: e.target.value }
                        })
                        }
                        type='email'
                        id='email'
                        value={contactForm.email}
                        required />
                </div>
                <div className={styles.control}>
                    <label htmlFor='name'>Your Name</label>
                    <input
                        onChange={e => setContactForm(pCF => {
                            return { ...pCF, name: e.target.value }
                        })
                        }
                        type='text'
                        id='name'
                        value={contactForm.name}
                        required />
                </div>
            </div>

            <div className={styles.control}>
                <label htmlFor='message'>Your Message</label>
                <textarea
                    onChange={e => setContactForm(pCF => {
                        return { ...pCF, message: e.target.value }
                    })
                    }
                    id='message'
                    rows='5'
                    value={contactForm.message}
                    required></textarea>
            </div>

            <div className={styles.action}>
                <button>Send Message</button>
            </div>
        </form>
    </section>
}