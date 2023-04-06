import { type AppType } from "next/app";

import { api } from "npm/utils/api";

import "npm/styles/globals.css";
import Layout from "npm/components/layout/layout";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
};

export default api.withTRPC(MyApp);
