import { useState, useEffect } from 'react';
import { Button, Col, Form, message, Row, Upload } from "antd";
import { FormElements, Modal as AntdModal } from "components/index";
import { DiscountDTO } from "types";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import type { UploadChangeParam } from 'antd/es/upload';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import { useDiscountUpdateMutation } from "store/endpoints";


type Props = {
  visible: boolean;
  setVisible: (bool: boolean) => void;
  updateData: DiscountDTO;
};
const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('Siz faqat JPG/PNG turdagi fayllarni yuklay olasiz!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Surat hajmi 2MB dan kichik bo'lishi kerak!");
  }
  return isJpgOrPng && isLt2M;
};

const ModalUpdate: React.FC<Props> = ({ visible, setVisible, updateData }) => {
  const [discountUpdateMutation, { isLoading }] = useDiscountUpdateMutation();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();
  const [responseImageUrl, setResponseImageUrl] = useState<string>();
  const [form] = Form.useForm();

  const handleSubmit = (value: any) => {
    value.image = responseImageUrl
    const discountPromise = discountUpdateMutation({
      id: updateData.id,
      value,
    }).unwrap();
    discountPromise
      .then((res) => {
        if (res.statusCode === 200) {
          message.success("Muvaffaqiyati tahrirlandi.");
          setVisible(false);
        }
      })
      .catch((err) => {
        message.error(`Xatolik yuz berdi. Xatolik: ${err.message}`);
      });
  };

  useEffect(() => {
    if (form.__INTERNAL__.name) {
      setImageUrl(`http://147.182.130.242:3000/${updateData.image}`)
      form.setFieldsValue({
        title: updateData.title,
        description: updateData.description,
        image: `http://147.182.130.242:3000/${updateData.image}`
      });
    }
  }, [updateData]);

  const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      setResponseImageUrl(info.file.response.result.url)
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as RcFile, url => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <>
      <AntdModal
        title={"Mahsulotni tahrirlash"}
        open={visible}
        onCancel={() => setVisible(false)}
      >
        <Form
          form={form}
          name="basic"
          layout="vertical"
          onFinish={handleSubmit} // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >

          <Form.Item
            name="image"
            label="Rasim:"
            rules={[
              { required: true, message: `Iltimos Rasimni kiriting` },
            ]}
          >
            <Upload
              name="file"
              listType="picture-card"
              showUploadList={false}
              action="http://147.182.130.242:3000/image-upload"
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {imageUrl ? <img src={imageUrl} alt="productImage" style={{ width: '100%' }} /> : uploadButton}
            </Upload>
          </Form.Item>

          <Form.Item
            name="title"
            label="Sarlavha:"
            rules={[
              { required: true, message: `Iltimos Sarlavhani kiriting` },
            ]}
          >
            <FormElements.Input />
          </Form.Item>

          <Form.Item
            name="description"
            label="Tavsifi:"
            rules={[
              { required: true, message: `Iltimos Tavsifini kiriting` },
            ]}
          >
            <FormElements.Input />
          </Form.Item>

          <Form.Item style={{ marginTop: 50 }}>
            <Row justify="end" gutter={5} wrap={false}>
              <Col>
                <Button onClick={() => setVisible(false)} disabled={isLoading}>
                  Bekor qilish
                </Button>
              </Col>
              <Col>
                <Button
                  htmlType="submit"
                  loading={isLoading}
                  disabled={isLoading}
                  type="primary"
                >
                  Tasdiqlash
                </Button>
              </Col>
            </Row>
          </Form.Item>
        </Form>
      </AntdModal>
    </>
  );
};

export default ModalUpdate;
