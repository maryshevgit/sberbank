import { Spin } from 'antd';
import cls from './PageLoader.module.scss';

export const PageLoader = () => {
  return (
    <div className={cls.loaderWrapper}>
      <Spin size="large" />
    </div>
  );
};
