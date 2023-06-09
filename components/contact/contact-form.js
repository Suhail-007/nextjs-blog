import { useState, useEffect } from 'react'
import Notification from '../ui/notification';

import styles from './contact-form.module.css';

const sendMessageData = async function (contactDetails) {
    const res = await fetch('/api/contact', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactDetails),
    })

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.message || 'Something went wrong');
    }
}

export default function ContactForm() {
    const [requestStatus, setRequestStatus] = useState(null);
    const [requestErrorStatus, setRequestErrorStatus] = useState(null);
    const [contactForm, setContactForm] = useState({
        email: '',
        name: '',
        message: ''
    });

    useEffect(() => {
        let timeout;

        if (requestStatus !== 'pending') {
            timeout = setTimeout(() => {
                setRequestErrorStatus(null);
                setRequestStatus(null);
            }, 2000);
        }

        return () => clearTimeout(timeout);
    }, [requestStatus]);


    const sendMessageHandler = async function (e) {
        e.preventDefault();


        try {
            setRequestStatus('pending');
            await sendMessageData(contactForm);
            setRequestStatus('success');
            setContactForm({
                email: '',
                name: '',
                message: '',
            });
        } catch (error) {
            setRequestStatus('error');
            setRequestErrorStatus(error.message)
            console.error(error);
        }
    }

    let notification;

    if (requestStatus === 'pending') {
        notification = {
            status: 'pending',
            title: 'Sending notification...',
            message: 'Your message is on its way ',
        }
    }
    if (requestStatus === 'success') {
        notification = {
            status: 'success',
            title: 'Success',
            message: 'Your message has been sent successfully',
        }
    }
    if (requestStatus === 'error') {
        notification = {
            status: 'error',
            title: 'Error',
            message: requestErrorStatus,
        }
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

        {
            notification && <Notification {...notification} />
        }
    </section>
}