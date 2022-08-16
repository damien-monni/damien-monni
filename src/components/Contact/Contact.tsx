import clsx from 'clsx';
import Underline from '../../design-system/Underline/Underline';
import ContactForm from './ContactForm';

interface ContactProps {
  className?: string;
}

export default function Contact({ className }: ContactProps) {
  return (
    <section className={clsx(className)}>
      <div className="flex justify-center">
        <picture>
          <img src="/img/contact.png" alt="contact" />
        </picture>
      </div>

      <h2 className="text-center">On travaille ensemble ?</h2>

      <p className="text-2xl text-center">
        Écrivez-moi sur{' '}
        <a
          href="mailto:contact@damien-monni.com"
          className="text-blue-500 relative"
        >
          contact@damien-monni.com
          <Underline className="absolute top-9 right-0 w-full fill-blue-500" />
        </a>
      </p>

      <p className="mt-10 mb-14 text-center">
        Ou bien contactez-moi directement depuis le formulaire suivant.{' '}
        <span className="text-lg">😉</span>
      </p>

      <ContactForm className="max-w-2xl mx-auto" />
    </section>
  );
}
