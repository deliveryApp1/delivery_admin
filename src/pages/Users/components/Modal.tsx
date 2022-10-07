// import type { DatePickerProps } from 'antd';
import { useUsersAddMutation, useUsersUpdateMutation } from "store/endpoints";
import { Form, message, Input, InputNumber, Select, ModalProps, Modal, DatePicker } from "antd";
// import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { roles, dateFormat, disabledDateStart } from 'constants/constants';
import { updateUsersStates } from "../../../store/slices/usersSlice";

const { Option } = Select;

type Props = ModalProps & {
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

const UsersModal: React.FC<Props> = ({ updateData, t, modalType, ...modalProps }) => {
    const dispatch = useDispatch()
    const [form] = Form.useForm();
    const [birthday, setBirthday] = useState<string>()
    const [usersUpdateMutation, usersUpdate] = useUsersUpdateMutation();
    const [usersMutation, usersCreate] = useUsersAddMutation();
    const clearState = () => {
        form.resetFields()
    }
    useEffect(() => {
        if (updateData && modalType === 'update') {
            console.log('updateData: ', updateData);
            form.setFieldsValue({
                username: updateData?.username,
                password: updateData.password,
                phone: updateData?.phone,
                role: updateData?.role,
                price: updateData?.price,
                // birthday: updateData?.birthday
            })
        }
        return () => clearState()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [updateData, modalType])

    const handleSubmit = () => {
        form.validateFields()
            .then(data => {
                const formData = { ...data, phone: data.phone.toString(), birthday: birthday }
                console.log('formData: ', formData);
                if (modalType === 'update') {
                    const usersPromise = usersUpdateMutation({
                        id: updateData.id,
                        value: formData,
                    }).unwrap();
                    usersPromise
                        .then((res: { statusCode: number; }) => {
                            if (res.statusCode === 200) {
                                message.success("Muvaffaqiyati tahrirlandi.");
                                dispatch(updateUsersStates({ openModal: false, modalType: '' }))
                                form.resetFields();
                            }
                        })
                        .catch((err: { message: any; }) => {
                            message.error(`Xatolik yuz berdi. Xatolik: ${err.message}`);
                        });
                } else if (modalType === 'create') {
                    const usersPromise = usersMutation(formData).unwrap();
                    usersPromise
                        .then((res) => {
                            if (res.statusCode === 200) {
                                message.success("Muvaffaqiyati saqlandi.");
                                dispatch(updateUsersStates({ openModal: false, modalType: '' }))
                                form.resetFields();
                            }
                        })
                        .catch((err) => {
                            message.error(`Xatolik yuz berdi. Xatolik: ${err.message}`);
                        });
                }
            }).catch(err => console.log('Form error: ', err))

    };

    const roleOptions = roles.map((role: any) => (<Option key={role.id} value={role.name}>{role.name}</Option>))
    const props = { onOk: handleSubmit, confirmLoading: modalType.length ? modalType === 'create' ? usersCreate.isLoading : usersUpdate.isLoading : false, forceRender: true, ...modalProps }
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
                        name='username'
                        label={t("usersMenu.username")}
                        rules={[
                            { required: true, message: `Username kiriting` },
                        ]}
                    >
                        <Input placeholder="Username kiriting" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        label="Parol:"
                        rules={[
                            { required: true, message: `Parol kiriting` },
                        ]}
                    >
                        <Input placeholder="Parol kiriting" />
                    </Form.Item>
                    <Form.Item
                        name="phone"
                        label={t("usersMenu.phone_number")}
                        rules={[
                            {
                                type: "regexp",
                                pattern: new RegExp(/^[0-9]*$/gm),
                            },
                            {
                                required: true,
                                message: `Noto'g'ri format`
                            },
                        ]}
                    >
                        <InputNumber style={{ width: '100%' }} placeholder="Telefon raqamini kiriting" />
                    </Form.Item>
                    <Form.Item
                        name="role"
                        label={t("usersMenu.role")}
                        rules={[
                            { required: true, message: `Rolini tanlang` },
                        ]}
                    >
                        <Select allowClear placeholder='Rolini tanlang'>
                            {roleOptions}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="birthday"
                        label={t("usersMenu.birthday")}
                        rules={[
                            { required: true, message: `Tug'ilgan sanasini kiriting` },
                        ]}
                    >
                        <DatePicker allowClear showNow
                            format={dateFormat}
                            onChange={(_, dateString) => setBirthday(dateString)}
                            style={{ width: '100%' }}
                            disabledDate={disabledDateStart}
                            placeholder='Sanani kiriting' />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default UsersModal;
