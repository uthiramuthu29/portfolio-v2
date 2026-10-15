import Banner from "@/components/Banner";
import ContactForm from "@/components/ContactForm";
import ContactLinks from "@/components/ContactLinks";

export default function Contact() {
  return (
    <div className="contact">
      <main>
        <Banner title="Get in touch" para="Let’s build something awesome." />
        <ContactForm />
        <ContactLinks />
      </main>
    </div>
  );
}