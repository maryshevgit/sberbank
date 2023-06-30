import { ReactElement } from 'react';
import {
  AppRoutes,
  getRouteAbout,
  getRouteAuth,
  getRouteInformation,
  getRouteNews,
  getRouteProfile,
} from '@/shared/const/router';
import { NewsPage } from '@/pages/News';
import { InformationPage } from '@/pages/Information';
import { AboutPage } from '@/pages/About';
import { ProfilePage } from '@/pages/Profile';
import { AuthPage } from '@/pages/Auth';
import { NotFound } from '@/pages/NotFound';

interface RouteConfig {
  path: string;
  element: ReactElement;
  authOnly?: boolean | undefined;
}

export const routeConfig: Record<AppRoutes, RouteConfig> = {
  [AppRoutes.NEWS]: {
    path: getRouteNews(),
    element: <NewsPage />,
  },
  [AppRoutes.INFORMATION]: {
    path: getRouteInformation(),
    element: <InformationPage />,
  },
  [AppRoutes.ABOUT]: {
    path: getRouteAbout(),
    element: <AboutPage />,
  },
  [AppRoutes.PROFILE]: {
    path: getRouteProfile(),
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoutes.AUTH]: {
    path: getRouteAuth(),
    element: <AuthPage />,
    authOnly: false,
  },
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <NotFound />,
  },
};
