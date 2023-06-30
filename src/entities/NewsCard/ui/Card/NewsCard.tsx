import { Card } from 'antd';
import clsx from 'clsx';
import { ReactElement } from 'react';
import { INewsCard } from '../../model/types/types';
import cls from './NewsCard.module.scss';
import { useAppSelector } from '@/shared/lib/hooks/useSelector';
import { LazyImage } from '@/shared/ui/LazyImage/LazyImage';

type ActionsType = {
  edit: ReactElement;
};

interface NewsCardProps {
  newsItem: INewsCard;
  lessImage?: boolean;
  actions: ActionsType;
  setSelectedId: (param: string) => void;
  leftCol?: boolean;
}

export const NewsCard = ({
  newsItem,
  lessImage,
  actions,
  setSelectedId,
  leftCol,
}: NewsCardProps) => {
  const { isAuth } = useAppSelector((state) => state.user);

  return (
    <Card hoverable onClick={() => setSelectedId(newsItem.id)}>
      <div className={clsx(cls.wrapperHead, { [cls.leftCol]: leftCol })}>
        <Card.Meta
          description={<p>{newsItem?.text}</p>}
          title={<h2 className={cls.title}>{newsItem.title}</h2>}
          className={cls.meta}
        />

        {newsItem?.imagePath && (
          <div
            className={clsx(cls.image, {
              [cls.lessImage]: lessImage,
              [cls.leftColImage]: leftCol,
            })}
          >
            <LazyImage alt={newsItem.title} src={newsItem.imagePath} />
          </div>
        )}
      </div>

      {isAuth && <div onClick={(e) => e.stopPropagation()}>{actions.edit}</div>}
    </Card>
  );
};
