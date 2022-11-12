import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { notification, Form, Input, Typography, Button } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { login } from 'store/slices/authSlice';
// import { useLoginMutation } from '../app/auth';
import { useTranslation } from 'react-i18next';
import './Login.css'
import { useDispatch } from 'react-redux';

const { Title } = Typography;

const Login: React.FC = () => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false);
    // const [login, { isUninitialized }] = useLoginMutation()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"
    const token = localStorage.getItem('token')
    const isAuth = localStorage.getItem('isAuth')

    useEffect(() => {
        if (token && isAuth) {
            navigate(from, { replace: true })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuth, navigate])

    const [form] = Form.useForm();

    const handleOk = async () => {
        setLoading(true)
        try {
            await form
                .validateFields()
                .then(values => {
                    if (values.login === 'omadbek' && values.password === '937366669') {
                        dispatch(login(values))
                        navigate(from, { replace: true })
                        console.log("from: ", from);

                    } else {
                        notification.error({ message: "Login yoki parolda xato!" })
                    }

                })
                .catch(err => { console.log("Input error: ", err); })

            // login(formData).unwrap()
            //     .then(payload => {
            //         if (payload.success) {
            //             setLoading(isUninitialized)
            //             navigate(from, { replace: true })
            //         }
            //     })
            //     .catch(err => {
            //         setLoading(false)
            //         form.resetFields()
            //         notification.error({
            //             message: err.data.message
            //         })
            //     })

            setLoading(false)
        } catch (err) { console.log("Handle err: ", err) }
    }

    return (
        // <Layout>
        //     <Content>
        <main className='login-page' >
            <Form form={form} size="large" className="login-wrap" >
                <div style={{ marginBottom: '16px' }}>
                    <Title level={3}>{t('login')}</Title>
                </div>
                <Form.Item name="login" >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} autoComplete='off' placeholder="Username" />
                </Form.Item>
                <Form.Item name="password" >
                    <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} autoComplete='off' type="password" placeholder="Password" />
                </Form.Item>
                <Form.Item shouldUpdate className="submit">
                    <Button
                        type="primary"
                        htmlType="submit"
                        block
                        loading={loading}
                        onClick={handleOk}
                    >
                        {t('login')}
                    </Button>
                </Form.Item>
            </Form>
        </main>
        //     </Content>
        // </Layout>
    );
};

export default Login

