/* eslint-disable jsx-a11y/anchor-is-valid */
import { Layout, Space, Tooltip, Menu, Typography } from 'antd';
import { GlobalOutlined, } from "@ant-design/icons";
import AppImage from '../../assets/img/tdirect.jpg'
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import cookies from "js-cookie";
import './InitialPage.css'
const { Header } = Layout;
const { Text } = Typography

function InitialPage() {
    const { t, i18n } = useTranslation();
    const currentLanguageCode = cookies.get("i18next") || "uz";
    const changeLanguage = (lng: string | undefined) => {
        i18n.changeLanguage(lng);
    };
    const languageMenu = (
        <Menu mode='vertical' selectedKeys={[currentLanguageCode]}
            items={[
                {
                    key: 'uz',
                    label: (
                        "O'zbek"
                    ),
                    onClick: () => changeLanguage('uz')
                },
                {
                    key: 'ru',
                    label: (
                        "Русский"
                    ),
                    onClick: () => changeLanguage('ru')
                },
            ]}
        />
    );
    return (
        <Layout style={{ backgroundColor: 'transparent' }}>
            <Header>
                <div style={{ float: 'right' }}>
                    <Space size='middle'>

                        <Tooltip title={languageMenu} placement="bottom" color="#fff">
                            <span className='menuButton'>
                                <Space>
                                    <GlobalOutlined style={{ fontSize: 18, color: '#fff', cursor: 'pointer' }} />
                                    <Text style={{ fontSize: 18, color: '#fff', cursor: 'pointer' }} >{currentLanguageCode === 'uz' ? 'Uz' : 'Ру'}</Text>
                                </Space>
                            </span>
                        </Tooltip>
                        <span>
                            <Text style={{ fontSize: 18, color: '#fff', cursor: 'pointer' }}>
                                <Link to={'/login'}>
                                    Login
                                </Link>
                            </Text>
                        </span>
                    </Space>
                </div>
            </Header>
            <Layout style={{ backgroundColor: 'transparent' }}>
                <div style={{ width: '420px', display: 'inline-block', margin: 'auto' }}>
                    <div style={{ backgroundImage: `url(${AppImage})`, backgroundSize: '300px 360px', height: '360px', margin: '40px 20px', backgroundRepeat: 'no-repeat' }} ></div>
                    <a href="" style={{ textDecoration: 'none' }}>
                        <h1 className="content_title">Zaytun для Android</h1>
                    </a>
                    <div className="content_about">
                        Эта версия Zaytun для
                        <b> Android </b>
                        будет обновляться чаще, чем версия из каталога Google Play, и в ней меньше ограничений.
                    </div>
                    <div className="td_download_wrap">
                        <a href="" className="td_download_btn td_tdirect">Загрузить Zaytun</a>
                    </div>
                </div>
            </Layout>
        </Layout>
    )
}

export default InitialPage