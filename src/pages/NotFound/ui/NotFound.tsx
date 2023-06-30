import { Divider, Typography } from 'antd';
import { NavLink } from 'react-router-dom';
import { getRouteNews } from '@/shared/const/router';

export const NotFound = () => {
  return (
    <>
      <Typography.Title>Страница не найдена</Typography.Title>
      <Divider />
      <NavLink to={getRouteNews()}>Перейти на главную страницу</NavLink>
    </>
  );
};
