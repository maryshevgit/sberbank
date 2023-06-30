import { Button, Form, Input, Modal, Space } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { INewsCard } from '@/entities/NewsCard';
import cls from './FormModa.module.scss';
import { useAppDispatch } from '@/shared/lib/hooks/useDispatch';
import { addNews } from '../../model/services/addNews/addNews';
import { useAppSelector } from '@/shared/lib/hooks/useSelector';
import { UploadImage } from './UploadImage';
import { editNews } from '../../model/services/editNews/editNews';

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
  editItem?: INewsCard;
}

export const FormModal = ({ isOpen, onClose, editItem }: FormModalProps) => {
  const { isLoading } = useAppSelector((state) => state.news);
  const [imagePath, setImagePath] = useState<string>('');
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();

  const onFinish = useCallback(
    async (values: Omit<INewsCard, 'id' | 'imagePath'>) => {
      if (editItem) {
        const newCard = { id: editItem.id, ...values, imagePath };
        const { meta } = await dispatch(editNews(newCard));
        if (meta.requestStatus === 'fulfilled') onClose();
      } else {
        const randomId = uuidv4();
        const newCard = { id: randomId, ...values, imagePath };
        const { meta } = await dispatch(addNews(newCard));
        if (meta.requestStatus === 'fulfilled') onClose();
      }
    },
    [dispatch, onClose, imagePath, editItem]
  );

  const handleReset = useCallback(() => {
    form.resetFields();
    setImagePath('');
  }, [form]);

  useEffect(() => {
    if (editItem) {
      form.setFieldsValue({
        title: editItem.title,
        text: editItem?.text,
        fullText: editItem?.fullText,
      });
      if (editItem?.imagePath) setImagePath(editItem.imagePath);
    }
  }, [editItem, form]);

  return (
    <Modal
      centered
      width={700}
      title={editItem ? 'Редактирование новости' : 'Создание новости'}
      open={isOpen}
      onCancel={onClose}
      footer={<></>}
      afterClose={handleReset}
    >
      <Form
        form={form}
        onFinish={onFinish}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 24 }}
      >
        <Form.Item
          label="Название"
          name="title"
          rules={[{ required: true, message: 'Введите логин' }]}
        >
          <Input placeholder="введите название" />
        </Form.Item>
        <Form.Item label="Текст" name="text">
          <Input placeholder="введите текст" />
        </Form.Item>
        <Form.Item
          tooltip="Когда новость открыта, используется этот текст, если он указан"
          label="Доп.текст"
          name="fullText"
        >
          <Input placeholder="введите текст" />
        </Form.Item>
        <UploadImage imagePath={imagePath} setImagePath={setImagePath} />
        <Space direction="horizontal" align="end" className={cls.space}>
          <Button onClick={onClose} type="default" size="middle">
            Отмена
          </Button>
          <Form.Item className={cls.formButton}>
            <Button
              htmlType="submit"
              type="primary"
              size="middle"
              loading={isLoading}
            >
              {editItem ? 'Сохранить' : 'Создать'}
            </Button>
          </Form.Item>
        </Space>
      </Form>
    </Modal>
  );
};
