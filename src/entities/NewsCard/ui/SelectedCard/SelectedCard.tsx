import { Card } from 'antd';
import { INewsCard } from '../../model/types/types';
import cls from './SelectedCard.module.scss';

interface SelectedCardProps {
  selectedItem: INewsCard;
}

export const SelectedCard = ({ selectedItem }: SelectedCardProps) => {
  return (
    <Card>
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
    </Card>
  );
};
