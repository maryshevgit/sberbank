import { MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { Divider, Space, Typography } from 'antd';
import Link from 'antd/es/typography/Link';

const About = () => {
  return (
    <>
      <Typography.Title>About us</Typography.Title>
      <Divider />
      <Space>
        <Link href="mailto:maryshevgit@gmail.com">
          <Space>
            <MailOutlined />
            Почта
          </Space>
        </Link>
        <Link href="tel:+79991680526">
          <Space>
            <PhoneOutlined /> Телефон
          </Space>
        </Link>
      </Space>
    </>
  );
};

export default About;
