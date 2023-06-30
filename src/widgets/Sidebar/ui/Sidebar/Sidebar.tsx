import { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
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
    <Layout.Sider className={cls.sidebar} theme="light">
      <nav className={cls.navbar}>
        <Menu selectedKeys={[selectedOption]} theme="light">
          <Menu.Item key={getRouteNews()}>
            <NavLink className={cls.sidebarLink} to={getRouteNews()}>
              <div className={cls.space}>
                <AppstoreOutlined />
                <span className={cls.spanText}>Новости</span>
              </div>
            </NavLink>
          </Menu.Item>

          <Menu.Item key={getRouteInformation()}>
            <NavLink className={cls.sidebarLink} to={getRouteInformation()}>
              <div className={cls.space}>
                <InfoCircleOutlined />
                <span className={cls.spanText}>Информация</span>
              </div>
            </NavLink>
          </Menu.Item>

          <Menu.Item key={getRouteAbout()}>
            <NavLink className={cls.sidebarLink} to={getRouteAbout()}>
              <div className={cls.space}>
                <QuestionCircleOutlined />
                <span className={cls.spanText}>О нас</span>
              </div>
            </NavLink>
          </Menu.Item>
        </Menu>
      </nav>
    </Layout.Sider>
  );
};
