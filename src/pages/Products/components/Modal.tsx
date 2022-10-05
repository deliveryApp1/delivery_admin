import { useProductAddMutation, useProductUpdateMutation } from "store/endpoints";
import { Form, message, Input, InputNumber, Upload, Select, ModalProps, Modal } from "antd";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import type { UploadChangeParam } from 'antd/es/upload';
import { useDispatch } from 'react-redux';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import React, { useState, useEffect } from 'react';
import { updateProductStates } from "../productSlice";

const { TextArea } = Input
const { Option } = Select;

type Props = ModalProps & {
    categoryData: any,
    updateData: any,
    modalType: string;
    t: any
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

const ProductModal: React.FC<Props> = ({ updateData, t, categoryData, modalType, ...modalProps }) => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState<string>();
    const [responseImageUrl, setResponseImageUrl] = useState<string>();
    const [form] = Form.useForm();
    const [productUpdateMutation, productUpdate] = useProductUpdateMutation();
    const [productMutation, productCreate] = useProductAddMutation();
    const clearState = () => {
        setImageUrl('')
        form.resetFields()
    }
    useEffect(() => {
        if (updateData && modalType === 'update') {
            setImageUrl(`http://147.182.130.242:3000/${updateData?.image}`)
            form.setFieldsValue({
                image: updateData?.image,
                name: updateData?.name,
                categoryId: updateData?.categoryId,
                description: updateData?.description,
                price: updateData?.price,
                discount: updateData?.discount
            })
        }
        return () => clearState()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [updateData, modalType])

    const handleSubmit = () => {
        form.validateFields()
            .then(data => {
                console.log('data: ', data);
                const formData = { ...data, image: responseImageUrl }
                if (modalType === 'update') {
                    data.image = responseImageUrl
                    const productPromise = productUpdateMutation({
                        id: updateData.id,
                        value: formData,
                    }).unwrap();
                    productPromise
                        .then((res: { statusCode: number; }) => {
                            if (res.statusCode === 200) {
                                message.success("Muvaffaqiyati tahrirlandi.");
                                dispatch(updateProductStates({ openModal: false, modalType: '' }))
                                setImageUrl("")
                                form.resetFields();
                            }
                        })
                        .catch((err: { message: any; }) => {
                            message.error(`Xatolik yuz berdi. Xatolik: ${err.message}`);
                        });
                } else if (modalType === 'create') {
                    const productPromise = productMutation(formData).unwrap();
                    productPromise
                        .then((res) => {
                            if (res.statusCode === 200) {
                                message.success("Muvaffaqiyati saqlandi.");
                                dispatch(updateProductStates({ openModal: false, modalType: '' }))
                                setImageUrl("")
                                form.resetFields();
                            }
                        })
                        .catch((err) => {
                            message.error(`Xatolik yuz berdi. Xatolik: ${err.message}`);
                        });
                }
            }).catch(err => console.log('Form error: ', err))

    };

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
    const props = { onOk: handleSubmit, confirmLoading: modalType.length ? modalType === 'create' ? productCreate.isLoading : productUpdate.isLoading : false, forceRender: true, ...modalProps }
    return (
        <>
            <Modal
                {...props}
            >
                <Form
                    {...formItemLayout}
                    form={form}
                    name="basic"
                    layout="horizontal"
                    autoComplete="off"
                >
                    <Form.Item
                        name='image'
                        label={t("image")}
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
                            maxCount={1}
                        >
                            {imageUrl ? <img src={imageUrl} alt="productImage" style={{ width: '100%' }} /> : uploadButton}
                        </Upload>
                    </Form.Item>
                    <Form.Item
                        name="name"
                        label={t("productsMenu.productName")}
                        rules={[
                            { required: true, message: `Mahsulot nomini kiriting` },
                        ]}
                    >
                        <Input placeholder="Nomini kiriting" />
                    </Form.Item>
                    <Form.Item
                        name="categoryId"
                        label={t("productsMenu.category")}
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
                        label={t("productsMenu.description")}
                        rules={[
                            { required: true, message: `Ta'rif kiriting` },
                        ]}
                    >
                        <TextArea allowClear autoSize placeholder="Ta'rifni kiriting" />
                    </Form.Item>
                    <Form.Item
                        name="price"
                        label={t("productsMenu.price")}
                        style={{ width: '100%' }}
                        rules={[
                            { required: true, message: `Narxni kiriting` },
                        ]}
                    >
                        <InputNumber addonAfter="so'm" placeholder="1000" style={{width: '100%'}} />
                    </Form.Item>
                    <Form.Item
                        name="discount"
                        label={t("productsMenu.discount")}
                        rules={[
                            { required: false, message: `Chegirma kiriting` },
                        ]}
                    >
                        <InputNumber  addonAfter="%" placeholder="5" style={{width: '100%'}}   />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default ProductModal;
