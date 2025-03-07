import "@/styles/globals.css";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
