import { Button } from 'antd';
import React, { useCallback, useState } from 'react';
import { AppstoreAddOutlined } from '@ant-design/icons';
import { useAppSelector } from '@/shared/lib/hooks/useSelector';
import { FormModal } from '@/features/news/ui/FormModal/FormModal';

export const CreateButton = () => {
  const { isAuth } = useAppSelector((state) => state.user);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  return (
    <>
      {isAuth && (
        <>
          <Button onClick={onOpen} size="large" type="primary">
            <AppstoreAddOutlined />
            Создать новость
          </Button>

          <FormModal isOpen={isOpen} onClose={onClose} />
        </>
      )}
    </>
  );
};
