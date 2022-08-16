import clsx from 'clsx';
import Button from '../../design-system/Button/Button';
import TextField from '../../design-system/TextField/TextField';

interface ContactFormProps {
  className?: string;
}

export default function ContactForm({ className }: ContactFormProps) {
  return (
    // We use Netlify Form feature to avoid creating a backend
    // https://docs.netlify.com/forms/setup/
    <form
      name="damien-monni-contact"
      className={clsx(className)}
      method="POST"
      data-netlify="true"
    >
      {/* This hidden input set the Netlify form notification subjet */}
      {/* https://docs.netlify.com/forms/notifications/ */}
      <input
        type="hidden"
        name="subject"
        value="Contact depuis damien-monni.com"
      />

      <div className="mb-8">
        <TextField
          label="Votre e-mail :"
          inputProps={{
            type: 'email',
            // We use the name attribute so Netfliy can set it as
            // the Reply-to value
            name: 'email',
          }}
        />
      </div>

      <div>
        <TextField
          label="Votre message :"
          multiline={true}
          inputProps={{ rows: 8 }}
        />
      </div>

      <div className="mt-4">
        <Button type="submit">Envoyer</Button>
      </div>
    </form>
  );
}
