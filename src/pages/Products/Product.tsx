import React, { useState } from "react";
import type { RootState } from '../../store/store'
import { Button, Col, message, Row, TableColumnsType, Image, Space, Typography } from "antd";
import { useTranslation } from 'react-i18next';
import { PopConfirm, Table } from "components/index";
import ProductModal from "./components/Modal";
import { ProductDTO } from "types";
import { useProductDeleteMutation, useProductQuery, useCategoryQuery } from "store/endpoints";
import { useSelector, useDispatch } from 'react-redux';
import { updateProductStates } from "./productSlice";

const Category: React.FC = () => {
    const { t } = useTranslation()
    const { openModal, modalType } = useSelector((state: RootState) => state.productSlice)
    const dispatch = useDispatch()

    const categoryQuery = useCategoryQuery();
    const productQuery = useProductQuery();
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

    const columns: TableColumnsType = [
        {
            title: "№",
            dataIndex: "id",
            key: "id",
            width: "5%",
            render: (item, record, index) => <span>{index + 1}</span>,
        },
        {
            title: "Nomi",
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
            title: "Tarifi",
            dataIndex: "description",
            key: "description",
            // width: "75%",
            render: (item, record) => <>{item}</>
        },
        {
            title: "Narxi",
            dataIndex: "price",
            key: "price",
            // width: "75%",
            render: (item, record) => <>{item}</>
        },
        {
            title: "Chegirma",
            dataIndex: "discount",
            key: "discount",
            // width: "75%",
            render: (item, record) => <>{item}</>
        },
        {
            title: "Amallar",
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
                            <PopConfirm
                                onConfirm={() => handleDelete(item.id)}
                                title="Oʻchirishga ishonchingiz komilmi?"
                            >
                                <Button size="small" danger disabled={isLoading}>
                                    O'chirish
                                </Button>
                            </PopConfirm>
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

    const modalProps = {
        title: "Mahsulot qo'shish",
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
                pagination={{ defaultPageSize: 5 }}
                rowKey={record => record.id}
            />
            <ProductModal updateData={updateData} modalType={modalType} categoryData={categoryQuery.data?.data} {...modalProps} />
            {/* <UpdateModal
                updateData={updateData}
                visible={modalUpdate}
                setVisible={setModalUpdate}
                categoryData={categoryQuery.data?.data}
            /> */}
        </>
    );
};

export default Category;
