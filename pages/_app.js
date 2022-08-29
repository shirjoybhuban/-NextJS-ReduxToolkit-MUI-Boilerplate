import '../styles/global.css';
import Head from 'next/head';
import Layout from '../components/layout/layout';
import { wrapper } from '../store/store';
import { exafTheme } from 'components/theme/ExAfTheme';
import { ThemeProvider } from '@mui/material';

const ViewPort = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

const App = (props) => {
  return (
    <ThemeProvider theme={exafTheme}>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="nextjs-reduxtoolkit-mui" />
        <meta name="keywords" content="insurance" />
        <title>BBN</title>
      </Head>
      <ViewPort {...props} />
    </ThemeProvider>
  );
};
export default wrapper.withRedux(App);
