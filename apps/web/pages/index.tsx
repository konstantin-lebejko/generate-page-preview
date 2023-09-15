import Head from 'next/head'

import PrimaryLayout from "../components/layout/Primary";

const PageMeta = () => {
  return <Head>
    <title>Generate Page Preview - Concept</title>
    <meta name="description" content="Generate page preview according to <meta> tags" />
  </Head>
}

const HomePage = () => {
  return <>
    <PageMeta />
    <PrimaryLayout>
      Hello World
    </PrimaryLayout>
  </>;
};

export default HomePage