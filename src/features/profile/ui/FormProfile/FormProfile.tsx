import React, { useCallback, useEffect } from 'react';
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Row,
  Skeleton,
} from 'antd';
import dayjs from 'dayjs';
import { editProfile } from '../../model/service/editProfile/editProfile';
import { IProfile } from '../../model/types/ProfileSchema';
import { useAppSelector } from '@/shared/lib/hooks/useSelector';
import { useAppDispatch } from '@/shared/lib/hooks/useDispatch';

interface FormProfileProps {
  isEditable: boolean;
}

export const FormProfile = ({ isEditable }: FormProfileProps) => {
  const [form] = Form.useForm<IProfile>();
  const { profile, isLoading } = useAppSelector((state) => state.profile);
  const dispatch = useAppDispatch();

  const onFinish = useCallback(
    (values: IProfile) => {
      dispatch(editProfile(values));
    },
    [dispatch]
  );

  useEffect(() => {
    if (profile) {
      form.setFieldsValue({
        name: profile.name,
        age: profile.age,
        surname: profile.surname,
        phone: profile.phone,
        registrationDate: dayjs(profile.registrationDate),
        middleName: profile.middleName,
      });
    }
  }, [profile, form]);

  return (
    <Form
      form={form}
      labelAlign="left"
      labelCol={{ span: 3 }}
      layout="horizontal"
      disabled={!isEditable}
      onFinish={onFinish}
    >
      <Form.Item name="surname" label="Фамилия">
        <>
          {isLoading ? (
            <Skeleton.Input active={isLoading} block />
          ) : (
            <Input placeholder="укажите фамилию" type="text" />
          )}
        </>
      </Form.Item>

      <Form.Item name="name" label="Имя">
        <>
          {isLoading ? (
            <Skeleton.Input active={isLoading} block />
          ) : (
            <Input placeholder="укажите имя" type="text" />
          )}
        </>
      </Form.Item>

      <Form.Item name="middleName" label="Отчество">
        <>
          {isLoading ? (
            <Skeleton.Input active={isLoading} block />
          ) : (
            <Input placeholder="укажите отчество" type="text" />
          )}
        </>
      </Form.Item>

      <Form.Item
        name="phone"
        label="Телефон"
        rules={[
          ({ getFieldValue }) => ({
            validator(_, value) {
              const phoneRegex = /^\+?[1-9]\d{10}$/;

              const isValidPhone = value && phoneRegex.test(value);

              if (isValidPhone) {
                return Promise.resolve();
              }

              return Promise.reject(new Error('Телефон указан не корректно'));
            },
          }),
        ]}
      >
        <>
          {isLoading ? (
            <Skeleton.Input active={isLoading} block />
          ) : (
            <Input placeholder="укажите номер телефона" type="tel" />
          )}
        </>
      </Form.Item>

      <Form.Item name="age" label="Возраст">
        <>
          {isLoading ? (
            <Skeleton.Input active={isLoading} />
          ) : (
            <InputNumber placeholder="25" type="number" />
          )}
        </>
      </Form.Item>

      <Form.Item name="registrationDate" label="Дата регистрации">
        <>
          {isLoading ? (
            <Skeleton.Input active={isLoading} />
          ) : (
            <DatePicker placeholder="укажите дату" />
          )}
        </>
      </Form.Item>

      {isEditable && (
        <Row justify="end">
          <Form.Item>
            <Button htmlType="submit">Сохранить</Button>
          </Form.Item>
        </Row>
      )}
    </Form>
  );
};
