import { useEffect, useState } from 'react';
import { Layout, Menu, Space } from 'antd';
import { NavLink, useLocation } from 'react-router-dom';
import {
  AppstoreOutlined,
  InfoCircleOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';
import cls from './Sidebar.module.scss';
import {
  getRouteAbout,
  getRouteInformation,
  getRouteNews,
} from '@/shared/const/router';

export const Sidebar = () => {
  const { pathname } = useLocation();
  const [selectedOption, setSelectedOption] = useState<string>(pathname);

  useEffect(() => {
    setSelectedOption(pathname);
  }, [pathname]);

  return (
    <Layout.Sider width={200} theme="light">
      <nav className={cls.sidebar}>
        <Menu selectedKeys={[selectedOption]} theme="light">
          <Menu.Item key={getRouteNews()}>
            <NavLink className={cls.sidebarItem} to={getRouteNews()}>
              <Space>
                <AppstoreOutlined />
                Новости
              </Space>
            </NavLink>
          </Menu.Item>

          <Menu.Item key={getRouteInformation()}>
            <NavLink className={cls.sidebarItem} to={getRouteInformation()}>
              <Space>
                <InfoCircleOutlined />
                Информация
              </Space>
            </NavLink>
          </Menu.Item>

          <Menu.Item key={getRouteAbout()}>
            <NavLink className={cls.sidebarItem} to={getRouteAbout()}>
              <Space>
                <QuestionCircleOutlined />О нас
              </Space>
            </NavLink>
          </Menu.Item>
        </Menu>
      </nav>
    </Layout.Sider>
  );
};
