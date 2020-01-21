import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="fr">
        <Head />

        <title>Damien Monni - Développeur web et mobile freelance</title>

        <meta
          name="description"
          content="Je m'appelle Damien et je suis développeur web freelance, full-stack et spécialisé dans les technologies modernes, principalement liées au JavaScript."
        />

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
