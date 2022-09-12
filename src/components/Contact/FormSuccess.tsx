import SystemDialog from '../../design-system/Dialog/Dialog';

interface FormSuccessProps {
  open: boolean;
  onClose: () => void;
}

export default function FormSuccess({ open, onClose }: FormSuccessProps) {
  return (
    <SystemDialog open={open} onClose={onClose}>
      <p>
        Votre message a correctement été envoyé.
        <br />
        Je vous recontacterai dès que possible.
      </p>
    </SystemDialog>
  );
}
