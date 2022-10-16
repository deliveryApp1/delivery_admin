import React, { useState } from "react";
import type { RootState } from '../../store/store'
import { Button, Col, message, Row, Image, Space, Typography, Table, Popconfirm, Switch } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import type { ColumnsType } from 'antd/es/table';
import { useTranslation } from 'react-i18next';
import ProductModal from "./_components/Modal";
import { ProductDTO } from "types";
import { useProductDeleteMutation, useProductQuery, useCategoryListQuery, useProductUpdateMutation } from "store/endpoints";
import { useSelector, useDispatch } from 'react-redux';
import { updateProductStates } from "../../store/slices/productSlice";

const Products: React.FC = () => {
    const { t } = useTranslation()
    const { openModal, modalType } = useSelector((state: RootState) => state.productSlice)
    const dispatch = useDispatch()
    const [query, setQuery] = useState({ page: 1, pageSize: 20 })

    const [productUpdateMutation, productUpdate] = useProductUpdateMutation();
    const categoryQuery = useCategoryListQuery();
    const productQuery = useProductQuery(query);
    const [productDelete, { isLoading }] = useProductDeleteMutation();
    const [updateData, setUpdateData] = useState();
    const handleUpdate = (data: any) => {
        setUpdateData(data);
        dispatch(updateProductStates({ openModal: true, modalType: 'update' }))
    };
    const handleDelete = (id: number | undefined) => {
        const category = productDelete({ id }).unwrap();
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

    const columns: ColumnsType<any> = [
        {
            title: "№",
            dataIndex: "id",
            key: "id",
            width: "5%",
            render: (item, record, index) => <span>{index + 1}</span>,
        },
        {
            title: t("productsMenu.name"),
            dataIndex: "name",
            key: "name",
            // width: "75%",
            render: (item, record: any) => {
                return <Space size={5}>
                    <Image
                        width={30}
                        height={30}
                        src={`http://147.182.130.242:3000/${record.image}`}
                        fallback="data:image/png;base64,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"
                    />{item}</Space>
            }
        },
        {
            title: t("productsMenu.description"),
            dataIndex: "description",
            key: "description",
            // width: "75%",
            render: (item, record) => <>{item}</>
        },
        {
            title: <>{t("productsMenu.price")}{" "}(RUB)</>,
            dataIndex: "price",
            key: "price",
            // width: "75%",
            render: (item, record) => <>{item}</>
        },
        {
            title: t("productsMenu.discount"),
            dataIndex: "discount",
            key: "discount",
            // width: "75%",
            render: (item, record) => <>{item}</>
        },
        {
            title: t("productsMenu.isHaveonWareHouse"),
            dataIndex: "isHave",
            key: "isHave",
            width: "12%",
            render: (item, record) => <Switch
                defaultChecked={item}
                onChange={e => productUpdateMutation({ id: record.id, value: { ...record, isHave: e } })}
                size='small' />
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
                                onClick={() => handleUpdate(item)}
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
        dispatch(updateProductStates({ openModal: false, modalType: '' }))
        setUpdateData(undefined)
    }

    const pagination =
    {
        total: productQuery.data?.meta?.total * productQuery.data?.meta?.pagesize,
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
                    <Typography.Title level={2}>{t('menus.products')}</Typography.Title>
                </Col>
                <Col span={4}>
                    <Button
                        type="primary"
                        onClick={() => dispatch(updateProductStates({ openModal: true, modalType: 'create' }))}
                    >
                        {t('add')}
                    </Button>
                </Col>
            </Row>

            <Table
                columns={columns}
                dataSource={productQuery.data?.data}
                loading={productQuery.isFetching}
                rowKey={record => record.id}
                pagination={pagination}
            />
            <ProductModal updateData={updateData} t={t} modalType={modalType} categoryData={categoryQuery.data?.data} {...modalProps} />
        </>
    );
};

export default Products;
