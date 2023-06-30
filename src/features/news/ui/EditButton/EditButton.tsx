import React, { useCallback, useState } from 'react';
import { Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { INewsCard } from '@/entities/NewsCard';
import { FormModal } from '../FormModal/FormModal';
import cls from './EditButton.module.scss';

interface EditButtonProps {
  newsItem: INewsCard;
}

export const EditButton = ({ newsItem }: EditButtonProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <Button className={cls.button} onClick={openModal}>
        <EditOutlined />
        Редактировать
      </Button>

      {isOpen && (
        <FormModal isOpen={isOpen} onClose={closeModal} editItem={newsItem} />
      )}
    </>
  );
};
