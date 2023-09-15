import type { Metadata } from "next";
import { ConfigProvider } from "antd";
import type { ThemeConfig } from 'antd';

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

const PrimaryLayout = ({ children }) => {
  return (
      <ConfigProvider theme={config}>
        {children}
      </ConfigProvider>
  );
};

export default PrimaryLayout;
