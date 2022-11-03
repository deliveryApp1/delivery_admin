import React, { useState } from "react";
import type { RootState } from '../../store/store'
import { Button, Col, message, Row, Typography, Table, Popconfirm } from "antd";
import type { ColumnsType } from 'antd/es/table';
import { useTranslation } from 'react-i18next';
import OrdersModal from "./_components/Modal";
import { ProductDTO } from "types";
import { useOrderDeleteMutation, useOrderQuery, useProductQuery } from "store/endpoints";
import { useSelector, useDispatch } from 'react-redux';
import { timeFormat } from '../../constants/constants'
import { updateOrderStates } from "store/slices/orderSlice";
import CurrencyFormat from 'react-currency-format';
import moment from "moment";

const Orders: React.FC = () => {
    const { t } = useTranslation()
    const { openModal, modalType } = useSelector((state: RootState) => state.orderSlice)
    const dispatch = useDispatch()
    const [query, setQuery] = useState({ page: 1, pageSize: 20 })

    const productQuery = useProductQuery(query);
    const orderQuery = useOrderQuery(query);
    const [orderDelete, { isLoading }] = useOrderDeleteMutation();
    const [updateData, setUpdateData] = useState();
    const handleUpdate = (data: any) => {
        setUpdateData(data);
        dispatch(updateOrderStates({ openModal: true, modalType: 'update' }))
    };
    const handleDelete = (id: number | undefined) => {
        const category = orderDelete({ id }).unwrap();
        category
            .then((res) => {
                if (res.statusCode === 200) {
                    message.success("Muvaffaqiyati o'chirildi.");
                }
            })
            .catch((err) => {
                message.error(`Xatolik yuz berdi. Xatolik: ${err.message}`);
            });
    };
    // console.log("orderQuery.data?.data: ", orderQuery.data?.data);

    const columns: ColumnsType<any> = [
        {
            title: "№",
            dataIndex: "id",
            key: "id",
            width: "5%",
            render: (item, record, index) => <span>{index + 1}</span>,
        },
        {
            title: t("time"),
            dataIndex: "createdAt",
            key: "createdAt",
            // width: "75%",
            render: (item, record: any) => moment(item).format(timeFormat)
        },
        {
            title: <>{t("productsMenu.price")}{" "}({t("ruble")})</>,
            dataIndex: "total",
            key: "total",
            // width: "75%",
            render: (item, record) => <CurrencyFormat value={item} displayType={'text'} thousandSeparator={true} />
        },
        {
            title: t("ordersMenu.address"),
            dataIndex: "data",
            key: "data",
            // width: "75%",
            render: (item, record) => item.location.address
        },
        {
            title: t("ordersMenu.client"),
            dataIndex: "user",
            key: "user",
            // width: "75%",
            render: (item, record) => <>{t("usersMenu.username")}: <b>{item.username ? item.username : "-"}</b><br />{t("usersMenu.phone_number")}: <b>{item.phone}</b></>
        },
        {
            title: t("ordersMenu.order_status"),
            dataIndex: "status",
            key: "status",
            // width: "75%",
            render: item => {
                switch (item) {
                    case 'PENDING':
                        return t("ordersMenu.pending")
                    case 'INPROGRESS':
                        return t("ordersMenu.inprogress")
                    case 'ONTHEWAY':
                        return t("ordersMenu.ontheway")
                    case 'DELIVERED':
                        return t("ordersMenu.delivered")
                }
            },
            filters: [
                {
                    text: t("ordersMenu.pending"),
                    value: 'PENDING'
                },
                {
                    text: t("ordersMenu.inprogress"),
                    value: 'INPROGRESS'
                },
                {
                    text: t("ordersMenu.ontheway"),
                    value: 'ONTHEWAY'
                },
                {
                    text: t("ordersMenu.delivered"),
                    value: 'DELIVERED'
                },
            ],
            onFilter: (value, record) => record.status.includes(value),
        },
        {
            title: t("actions"),
            key: "action",
            width: "20%",
            render: (item: ProductDTO, record, index) => {
                return (
                    <Row wrap={false} gutter={5}>
                        <Col>
                            <Button
                                size="small"
                                type="primary"
                                ghost
                                onClick={() => handleUpdate(record)}
                            >
                                {t('edit')}
                            </Button>
                        </Col>
                        <Col>
                            <Popconfirm
                                okText={t("yes")}
                                cancelText={t("no")}
                                onConfirm={() => handleDelete(item.id)}
                                title={t("sureDelete")}
                            >
                                <Button size="small" danger disabled={isLoading}>
                                    {t("delete")}
                                </Button>
                            </Popconfirm>
                        </Col>
                    </Row>
                );
            },
        },
    ];
    const handleCloseModal = () => {
        dispatch(updateOrderStates({ openModal: false, modalType: '' }))
        setUpdateData(undefined)
    }

    const pagination =
    {
        total: orderQuery.data?.meta?.total * orderQuery.data?.meta?.pagesize,
        page: query.page,
        pageSizeOptions: ["20", "50", "100"],
        showQuickJumper: true, showSizeChanger: true,
        pageSize: query.pageSize,
        current: query.page,
        onChange: (page: number, pageSize: number) => {
            setQuery({ page: page, pageSize: pageSize })
        }
    }

    const modalProps = {
        title: modalType === 'update' ? t('edit') : t('add'),
        open: openModal,
        okText: modalType === 'update' ? t('edit') : t('add'),
        cancelText: t('close'),
        onCancel: handleCloseModal
    }

    return (
        <>
            <Row>
                <Col span={20}>
                    <Typography.Title level={2}>{t('menus.orders')}</Typography.Title>
                </Col>
                <Col span={4}>
                    <Button
                        type="primary"
                        onClick={() => dispatch(updateOrderStates({ openModal: true, modalType: 'create' }))}
                    >
                        {t('add')}
                    </Button>
                </Col>
            </Row>

            <Table
                columns={columns}
                dataSource={orderQuery.data?.data}
                loading={orderQuery.isFetching}
                rowKey={record => record.id}
                pagination={pagination}
            />
            <OrdersModal updateData={updateData} t={t} modalType={modalType} productData={productQuery.data?.data} {...modalProps} />
        </>
    );
};

export default Orders;
