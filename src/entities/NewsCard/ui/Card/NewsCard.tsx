import { Card } from 'antd';
import clsx from 'clsx';
import { ReactElement } from 'react';
import { INewsCard } from '../../model/types/types';
import cls from './NewsCard.module.scss';
import { useAppSelector } from '@/shared/lib/hooks/useSelector';

type ActionsType = {
  edit: ReactElement;
};

interface NewsCardProps {
  newsItem: INewsCard;
  lessImage?: boolean;
  actions: ActionsType;
  setSelectedId: (param: string) => void;
}

export const NewsCard = ({
  newsItem,
  lessImage,
  actions,
  setSelectedId,
}: NewsCardProps) => {
  const { isAuth } = useAppSelector((state) => state.user);

  return (
    <Card hoverable onClick={() => setSelectedId(newsItem.id)}>
      {newsItem?.imagePath && (
        <img
          className={clsx(cls.image, { [cls.lessImage]: lessImage })}
          alt={newsItem.title}
          src={newsItem.imagePath}
        />
      )}

      <Card.Meta
        description={<p>{newsItem?.text}</p>}
        title={<h2 className={cls.title}>{newsItem.title}</h2>}
      />

      {isAuth && <div onClick={(e) => e.stopPropagation()}>{actions.edit}</div>}
    </Card>
  );
};
