const i18nextParserConfig = {
  input: ['src/**/*.{js,jsx,ts,tsx}'],
  locales: ['en', 'fr'],
  output: 'public/locales/$LOCALE/common.json',
};

export default i18nextParserConfig;
