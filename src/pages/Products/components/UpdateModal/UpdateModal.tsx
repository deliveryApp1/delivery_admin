import { Button, Col, Form, message, Row, Input, InputNumber, Upload, Select } from "antd";
import { FormElements, Modal as AntdModal } from "components/index";
import { ProductDTO } from "types";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import type { UploadChangeParam } from 'antd/es/upload';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import React, { useState, useEffect } from 'react';
import { useProductUpdateMutation } from "store/endpoints";

const { TextArea } = Input
const { Option } = Select;

type Props = {
    visible: boolean;
    setVisible: (bool: boolean) => void;
    updateData: ProductDTO;
    categoryData: any
};

const formItemLayout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 14,
    },
}

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

const ModalUpdate: React.FC<Props> = ({ visible, setVisible, updateData, categoryData }) => {
    const [productUpdateMutation, { isLoading }] = useProductUpdateMutation();
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState<string>();
    const [responseImageUrl, setResponseImageUrl] = useState<string>();
    const [form] = Form.useForm();

    const handleSubmit = (value: any) => {
        value.image = responseImageUrl
        const categoryPromise = productUpdateMutation({
            id: updateData.id,
            value,
        }).unwrap();
        categoryPromise
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
                name: updateData.name,
                categoryId: updateData.categoryId,
                description: updateData.description,
                discount: updateData.discount,
                price: updateData.price,
                image: `http://147.182.130.242:3000/${updateData.image}`
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
    const categoryOptions = categoryData?.map((category: { id: any; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => (<Option key={category.id} value={category.id}>{category.name}</Option>))

    return (
        <>
            <AntdModal
                title={"Mahsulotni tahrirlash"}
                open={visible}
                onCancel={() => setVisible(false)}
            >
                <Form
                    {...formItemLayout}
                    form={form}
                    name="basic"
                    layout="horizontal"
                    onFinish={handleSubmit} // onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        name='image'
                        label='Rasm:'
                        rules={[
                            { required: true, message: `Rasm yuklanmadi` },
                        ]}
                    >
                        <Upload
                            name="file"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="http://147.182.130.242:3000/image-upload"
                            beforeUpload={beforeUpload}
                            onChange={handleChange}
                        >
                            {imageUrl ? <img src={imageUrl} alt="productImage" style={{ width: '100%' }} /> : uploadButton}
                        </Upload>
                    </Form.Item>
                    <Form.Item
                        name="name"
                        label="Mahsulot nomi:"
                        rules={[
                            { required: true, message: `Mahsulot nomini kiriting` },
                        ]}
                    >
                        <FormElements.Input />
                    </Form.Item>
                    <Form.Item
                        name="categoryId"
                        label="Kategoriyasi:"
                        rules={[
                            { required: true, message: `Kategoriyalar` },
                        ]}
                    >
                        <Select allowClear placeholder='Kategoriyani tanlang'>
                            {categoryOptions}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="description"
                        label="Ta'rifi:"
                        rules={[
                            { required: false, message: `Ta'rif kiriting` },
                        ]}
                    >
                        <TextArea allowClear autoSize />
                    </Form.Item>
                    <Form.Item
                        name="price"
                        label="Narxi:"
                        style={{ width: '100%' }}
                        rules={[
                            { required: true, message: `Narxni kiriting` },
                        ]}
                    >
                        <InputNumber addonAfter="so'm" />
                    </Form.Item>
                    <Form.Item
                        name="discount"
                        label="Chegirma:"
                        rules={[
                            { required: false, message: `Chegirma kiriting` },
                        ]}
                    >
                        <InputNumber addonAfter="%" />
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
