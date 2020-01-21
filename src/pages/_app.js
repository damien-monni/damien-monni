import TopBar from '../components/Layout/TopBar';

import '../normalize.css';
import '../styles.css';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <TopBar />

      <div id="main-content">
        <Component {...pageProps} />
      </div>
    </>
  );
}
