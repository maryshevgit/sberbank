import { Button, Card } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { INewsCard } from '../../model/types/types';
import cls from './SelectedCard.module.scss';

interface SelectedCardProps {
  selectedItem: INewsCard;
}

export const SelectedCard = ({ selectedItem }: SelectedCardProps) => {
  return (
    <Card className={cls.card}>
      <Button className={cls.closeButton} type="ghost">
        <CloseOutlined className={cls.icon} />
      </Button>
      <div className={cls.body}>
        {selectedItem?.imagePath && (
          <img
            className={cls.cardImage}
            alt={selectedItem.title}
            src={selectedItem.imagePath}
          />
        )}

        <Card.Meta
          title={<h2 className={cls.cardTitle}>{selectedItem.title}</h2>}
          description={<p className={cls.cardText}>{selectedItem?.fullText}</p>}
        />
      </div>
    </Card>
  );
};
