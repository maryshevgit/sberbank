import { Button, Layout, Space } from 'antd';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import cls from './Header.module.scss';
import {
  getRouteAuth,
  getRouteNews,
  getRouteProfile,
} from '@/shared/const/router';
import { useAppSelector } from '@/shared/lib/hooks/useSelector';
import { useAppDispatch } from '@/shared/lib/hooks/useDispatch';
import { userActions } from '@/entities/User';

export const Header = () => {
  const { isAuth } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onClickAuthButton = useCallback(() => {
    if (isAuth) {
      dispatch(userActions.logout());
      navigate(getRouteNews());
    } else navigate(getRouteAuth());
  }, [isAuth, navigate, dispatch]);

  const onClickProfileButton = useCallback(() => {
    navigate(getRouteProfile());
  }, [navigate]);

  return (
    <Layout.Header className={cls.header}>
      {isAuth && (
        <Button htmlType="button" onClick={onClickProfileButton} type="dashed">
          <UserOutlined />
          Профиль
        </Button>
      )}

      <Button htmlType="button" onClick={onClickAuthButton}>
        {isAuth ? (
          <Space>
            <LogoutOutlined />
            Выйти
          </Space>
        ) : (
          <Space>
            <LoginOutlined />
            Войти
          </Space>
        )}
      </Button>
    </Layout.Header>
  );
};
