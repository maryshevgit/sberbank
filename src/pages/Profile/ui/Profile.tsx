import { Col, Divider, Row, Space, Switch, Typography } from 'antd';
import { useState } from 'react';
import { FormProfile } from '@/features/profile';
import cls from './Profile.module.scss';

const Profile = () => {
  const [isEditable, setIsEditable] = useState<boolean>(false);

  return (
    <>
      <Row justify="space-between" align="middle">
        <Col>
          <Typography.Title className={cls.title}>Профиль</Typography.Title>
        </Col>
        <Col>
          <Space direction="horizontal" align="center">
            <Switch
              checked={isEditable}
              onChange={(checked) => setIsEditable(checked)}
            />
            <Typography.Paragraph style={{ marginBottom: 0 }}>
              Редактировать
            </Typography.Paragraph>
          </Space>
        </Col>
      </Row>

      <Divider />

      <FormProfile isEditable={isEditable} />
    </>
  );
};

export default Profile;
