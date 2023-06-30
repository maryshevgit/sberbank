import React, { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '../config/routeConfig';
import { AppRoutesProps } from '@/shared/types/router';
import { RouteWithAuth } from '@/app/providers/router/ui/RouteWithAuth';
import { PageLoader } from '@/widgets/PageLoader/ui/PageLoader';

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>{route.element}</Suspense>
    );

    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route?.authOnly === false || route?.authOnly === true ? (
            <RouteWithAuth route={route}>{element}</RouteWithAuth>
          ) : (
            element
          )
        }
      />
    );
  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};

export default memo(AppRouter);
