import { LanguageIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Button from '../../design-system/Button/Button';

interface LanguageSwitchProps {
  className?: string;
}

export function LanguageSwitch({ className }: LanguageSwitchProps) {
  const { t } = useTranslation();

  const router = useRouter();
  const { pathname, asPath, query } = router;

  const handleSwitchLanguage = () => {
    const nextLocale = router.locale === 'en' ? 'fr' : 'en';
    router.push({ pathname, query }, asPath, { locale: nextLocale });
  };

  return (
    <div className={className}>
      <Button
        color="secondary"
        size="small"
        icon={<LanguageIcon />}
        onClick={handleSwitchLanguage}
      >
        {t('LanguageSwitch.label')}
      </Button>
    </div>
  );
}
