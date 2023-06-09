import Head from "next/head";
import ContactForm from "../../components/contact/contact-form";

export default function Contact() {

    return <>
    <Head>
        <title>Contact me</title>
        <meta name='description' content='Contact me for any queries' />
    </Head>
    <ContactForm />
    </>
}