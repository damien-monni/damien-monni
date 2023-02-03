import { LanguageSwitch } from '../LanguageSwitch/LanguageSwitch';
import Legal from '../Legal/Legal';

export default function Footer() {
  return (
    <footer className="bg-primary-text text-white py-12 text-center text-sm">
      <p className="my-2">Design et développement Damien Monni.</p>
      <p className="my-2">
        Le code est libre et{' '}
        <a
          href="https://github.com/damien-monni/damien-monni"
          className="underline"
        >
          disponible sur GitHub
        </a>
        .
      </p>

      <Legal />

      <LanguageSwitch className="mt-8" />
    </footer>
  );
}
