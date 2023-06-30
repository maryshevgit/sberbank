import { Button, Form, Image, message, Space, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

interface UploadImageProps {
  imagePath: string;
  setImagePath: (param: string) => void;
}

export const UploadImage = ({ setImagePath, imagePath }: UploadImageProps) => {
  const handleImageUpload = (file: File) => {
    const isImage = file.type.split('/')[0] === 'image';
    if (!isImage) {
      message.error(`${file.name} не изображение`);

      return Upload.LIST_IGNORE;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const url = reader.result as string;
      if (url) setImagePath(url);
    };
    reader.readAsDataURL(file);

    return isImage;
  };

  return (
    <Form.Item
      label="Изображение"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 22 }}
    >
      {!imagePath && (
        <Upload beforeUpload={handleImageUpload} showUploadList={false}>
          <Button type="primary" icon={<UploadOutlined />} size="large">
            Upload
          </Button>
        </Upload>
      )}
      {imagePath && (
        <Space>
          <Image width={300} src={imagePath} />
          <Button onClick={() => setImagePath('')} type="primary" danger>
            Удалить
          </Button>
        </Space>
      )}
    </Form.Item>
  );
};
