import clsx from 'clsx';

interface TextFieldProps {
  className?: string;
  label: string;
}

interface InputProps extends TextFieldProps {
  multiline?: false;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

interface TextareaProps extends TextFieldProps {
  multiline: true;
  inputProps?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
}

export default function TextField({
  className,
  label,
  inputProps,
  multiline,
}: InputProps | TextareaProps) {
  return (
    <label>
      <span className="font-extrabold text-sm inline-flex mb-1.5">{label}</span>

      {multiline ? (
        <textarea
          className={clsx(
            'border-none bg-[#F3F4F6] rounded-sm w-full transition-all py-3',
            'focus:ring-primary-text focus:ring-1',
            className,
          )}
          {...inputProps}
        />
      ) : (
        <input
          type="text"
          className={clsx(
            'border-none bg-[#F3F4F6] rounded-sm w-full transition-all py-3',
            'focus:ring-primary-text focus:ring-1',
            className,
          )}
          {...inputProps}
        />
      )}
    </label>
  );
}
