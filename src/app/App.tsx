import { Suspense, useEffect } from 'react';
import { Layout } from 'antd';
import { useDispatch } from 'react-redux';
import { AppRouter } from './providers/router';
import { Sidebar } from '@/widgets/Sidebar';
import { Header } from '@/widgets/Header/ui/Header';
import { userActions } from '@/entities/User';
import { useAppSelector } from '@/shared/lib/hooks/useSelector';

function App() {
  const { isInit } = useAppSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <Layout className="app">
      <Suspense fallback="">
        <Sidebar />
        <Layout>
          <Header />
          <Layout.Content className="main">
            {isInit && <AppRouter />}
          </Layout.Content>
        </Layout>
      </Suspense>
    </Layout>
  );
}

export default App;
