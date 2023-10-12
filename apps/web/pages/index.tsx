import Head from 'next/head'

import PrimaryLayout from "../components/layout/Primary";
import { Input, Button, Space, Typography, Tabs, Flex } from 'antd';

const PageMeta = () => {
  return <Head>
    <title>Generate Page Preview - Concept</title>
    <meta name="description" content="Generate page preview according to <meta> tags" />
  </Head>
}

const { TextArea } = Input;
const { Title, Text } = Typography;

const HomePage = () => {
  const prepareTabList = () => {
    return [
      {
        key: 'single-mode',
        label: 'Single URL',
        children: <>
          <Space.Compact style={{ width: '100%' }}>
            <Input size="large" placeholder="Example: https://exadel.com" />
            <Button size="large" type="primary">Generate</Button>
          </Space.Compact>
        </>
      },
      {
        key: 'multi-mode',
        label: 'Batch Mode',
        children: <>
          <Flex vertical align="flex-end">
            <TextArea
              placeholder={"Example:\nhttps://exadel.com\nhttps://exadel.com/contact-us\n..."}
              rows={5}
              size='large'
              style={{ marginBottom: '1rem' }}
            />
            <Button size="large" type="primary" style={{ width: 'fit-content' }}>Generate</Button>
          </Flex></>
      },
    ];
  }

  return <>
    <PageMeta />
    <PrimaryLayout>
      <Flex vertical style={{ marginBottom: '1rem' }}>
        <Title level={1}>Generate Page Preview</Title>
        <Text>Create meta:image according to meta:title and meta:description.</Text>
      </Flex>
      <Tabs items={prepareTabList()}></Tabs>
    </PrimaryLayout>
  </>;
};

export default HomePage