import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '@/shared/lib/hooks/useSelector';
import { AppRoutesProps } from '@/shared/types/router';
import { getRouteAuth, getRouteNews } from '@/shared/const/router';

interface RouteWithAuthProps {
  route: AppRoutesProps;
  children: ReactElement;
}

export const RouteWithAuth = ({
  children,
  route,
}: RouteWithAuthProps): ReactElement => {
  const { isAuth } = useAppSelector((state) => state.user);

  if (isAuth && !route.authOnly) {
    return <Navigate to={getRouteNews()} />;
  }

  if (!isAuth && route.authOnly) {
    return <Navigate to={getRouteAuth()} />;
  }

  return children;
};
