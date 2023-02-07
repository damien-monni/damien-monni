import Service from './Service';
import { useTranslation } from 'next-i18next';

export default function Frontend() {
  const { t } = useTranslation();

  return (
    <Service
      title="Frontend"
      icons={[
        <picture key="react">
          <img className="w-6" src="/img/skills/react.svg" alt="React" />
        </picture>,
        <picture key="nextjs">
          <img className="w-12" src="/img/skills/nextjs.svg" alt="Next.js" />
        </picture>,
        <picture key="tailwind">
          <img
            className="w-24"
            src="/img/skills/tailwind.svg"
            alt="Tailwind CSS"
          />
        </picture>,
      ]}
    >
      <p>{t('Frontend.dailyReact')}</p>

      <p>{t('Frontend.variety')}</p>

      <p>{t('Frontend.svelte')}</p>

      <p>{t('Frontend.lookingForward')}</p>
    </Service>
  );
}
