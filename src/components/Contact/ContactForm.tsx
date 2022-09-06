import clsx from 'clsx';
import Button from '../../design-system/Button/Button';
import TextField from '../../design-system/TextField/TextField';
import FormSuccess from './FormSuccess';
import useContactForm from './lib/useContactForm';

interface ContactFormProps {
  className?: string;
}

export default function ContactForm({ className }: ContactFormProps) {
  const { state, email, message, onInputChange, onSubmit } = useContactForm();

  return (
    // We use Formspree to avoid creating a backend just for this form
    // https://formspree.io
    <form
      className={clsx(className)}
      name="damien-monni-contact"
      onSubmit={onSubmit}
    >
      {state.succeeded ? <FormSuccess /> : null}

      <div className="mb-8">
        <TextField
          label="Votre e-mail :"
          inputProps={{
            name: 'email',
            required: true,
            type: 'email',
            value: email,
            onChange: onInputChange,
          }}
        />
      </div>

      <div>
        <TextField
          label="Votre message :"
          multiline={true}
          inputProps={{
            rows: 8,
            required: true,
            name: 'message',
            value: message,
            onChange: onInputChange,
          }}
        />
      </div>

      <div className="mt-4">
        <Button type="submit" disabled={state.submitting}>
          Envoyer
        </Button>
      </div>
    </form>
  );
}
