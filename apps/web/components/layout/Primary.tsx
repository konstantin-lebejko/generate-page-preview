import type { Metadata } from "next";
import { ConfigProvider } from "antd";
import type { ThemeConfig } from 'antd';
import { Layout, Menu, Button, theme } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

export const metadata: Metadata = {
  title: "Generate Page Preview",
  description: "Generate page preview according to <meta> tags",
};

const config: ThemeConfig = {
  token: {
    wireframe: true,
    borderRadius: 0,
    sizeStep: 4,
    fontSize: 14,
  },
};

const layoutClasses = {
  width: '100%',
  minHeight: '100vh',
  padding: '10vh 0px'
}

const contentClasses = {
  maxWidth: '950px',
  padding: '25px',
  margin: '0 auto',
  backgroundColor: '#fff',
  width: '100%',
  flex: 'initial'
}

const PrimaryLayout = ({ children }) => {
  return (
      <ConfigProvider theme={config}>
        <Layout style={layoutClasses}>
          <Content style={contentClasses}>
            {children}
          </Content>
        </Layout>
      </ConfigProvider>
  );
};

export default PrimaryLayout;
