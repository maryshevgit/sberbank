import { Button, Form, Input, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
  UserOutlined,
} from '@ant-design/icons';
import cls from './Auth.module.scss';
import { useAppDispatch } from '@/shared/lib/hooks/useDispatch';
import { loginService } from '@/features/auth';
import { useAppSelector } from '@/shared/lib/hooks/useSelector';
import { getRouteProfile } from '@/shared/const/router';

interface FormValues {
  username: string;
  password: string;
}

const Auth = () => {
  const { isLoading } = useAppSelector((state) => state.login);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onFinish = async (values: FormValues) => {
    const result = await dispatch(
      loginService({ username: values.username, password: values.password })
    );

    if (result.meta.requestStatus === 'fulfilled') {
      navigate(getRouteProfile());
    }
  };

  return (
    <div className={cls.auth}>
      <Typography.Title>Авторизация</Typography.Title>
      <Form onFinish={onFinish}>
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Введите логин' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="введите логин" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Введите пароль' }]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="введите пароль"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>
        <Form.Item className={cls.button}>
          <Button
            loading={isLoading}
            size="large"
            type="primary"
            htmlType="submit"
          >
            Вход
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Auth;
