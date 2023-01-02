import { useDiscountAddMutation, useDiscountUpdateMutation } from "store/endpoints";
import { Form, message, Input, Upload, ModalProps, Modal } from "antd";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import type { UploadChangeParam } from 'antd/es/upload';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import React, { useState, useEffect } from 'react';
import { updateDiscountStates } from "store/slices/discountSlice";
import { DiscountDTO } from "types/discountTypes";
import { useAppDispatch } from "store/rootHooks";
import { baseUrl } from "constants/url";


type Props = ModalProps & {
    updateData: DiscountDTO | undefined,
    modalType: string;
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

const DiscountModal: React.FC<Props> = ({ updateData, modalType, ...modalProps }) => {
    const dispatch = useAppDispatch()
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState<string>();
    const [responseImageUrl, setResponseImageUrl] = useState<string>();
    const [discountAddMutation, discountAdd] = useDiscountAddMutation();
    const [discountUpdateMutation, discountUpdate] = useDiscountUpdateMutation();
    const clearState = () => {
        setImageUrl('')
        form.resetFields()
    }
    const handleSubmit = () => {
        form.validateFields()
            .then(data => {
                const formData = { ...data, image: responseImageUrl }
                if (modalType === 'update') {
                    data.image = responseImageUrl
                    const dicountPromise = discountUpdateMutation({
                        id: updateData?.id,
                        value: formData,
                    }).unwrap();
                    dicountPromise
                        .then((res) => {
                            if (res.statusCode === 200) {
                                message.success("Muvaffaqiyati tahrirlandi.");
                                setImageUrl("")
                                form.resetFields();
                                dispatch(updateDiscountStates({ openModal: false, modalType: '' }))
                            }
                        })
                        .catch((err: { message: any; }) => {
                            message.error(`Xatolik yuz berdi. Xatolik: ${err.message}`);
                        });
                } else if (modalType === 'create') {
                    const dicountPromise = discountAddMutation(formData).unwrap();
                    dicountPromise
                        .then((res) => {
                            if (res.statusCode === 200) {
                                message.success("Muvaffaqiyati saqlandi.");
                                setImageUrl("")
                                form.resetFields();
                                dispatch(updateDiscountStates({ openModal: false, modalType: '' }))
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


    useEffect(() => {
        if (updateData && modalType === 'update') {
            setImageUrl(`${baseUrl}${updateData?.image}`)
            form.setFieldsValue({
                image: updateData?.image,
                description: updateData?.description,
                title: updateData?.title,
            })
        }
        return () => clearState()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [updateData, modalType])

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );
    const props = { onOk: handleSubmit, confirmLoading: modalType.length ? modalType === 'create' ? discountAdd.isLoading : discountUpdate.isLoading : false, ...modalProps }
    return (
        <>
            <Modal
                {...props}
            >
                <Form
                    form={form}
                    name="basic"
                    layout="vertical"
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
                            action={`${baseUrl}image-upload`}
                            beforeUpload={beforeUpload}
                            onChange={handleChange}
                            maxCount={1}
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
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="description"
                        label="Tavsif:"
                        rules={[
                            { required: true, message: `Iltimos Tavsifini kiriting` },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default DiscountModal;
