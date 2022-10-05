import React, { useState } from "react";
import { Button, Col, message, Row, TableColumnsType  , Popconfirm, Table} from "antd";
import { Typography } from "antd";
import { useCategoryDeleteMutation, useCategoryQuery } from "store/endpoints";
import CategoryModal from "./_components/Modal";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "store/rootHooks";
import { updateCategoryStates } from "store/slices/categorySlice";
import { CategoryDTO } from "types/category";

const Category: React.FC = () => {
  const { t } = useTranslation()
  const { openModal, modalType } = useAppSelector(state => state.categorySlice)
  const dispatch = useAppDispatch()

  const categoryQuery = useCategoryQuery();
  const [categoryDelete, { isLoading }] = useCategoryDeleteMutation();
  const [updateData, setUpdateData] = useState<CategoryDTO | undefined>({ name: "" });
  const handleUpdate = (data: CategoryDTO ) => {
    setUpdateData(data);
    dispatch(updateCategoryStates({ openModal: true, modalType: 'update' }))
  };

  const handleDelete = (id: number | undefined) => {
    const category = categoryDelete({ id }).unwrap();
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

  const columns: TableColumnsType<CategoryDTO> = [
    {
      title: "№",
      dataIndex: "id",
      key: "id",
      width: "5%",
      render: (_, __, index) => <span>{index + 1}</span>,
    },
    {
      title: "Nomi",
      dataIndex: "name",
      key: "name",
      width: "75%",
      render: (item) => <span>{item}</span>,
    },
    {
      title: "Amallar",
      key: "action",
      width: "20%",
      render: (item: CategoryDTO) => {
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
                onConfirm={() => handleDelete(item.id)}
                title="Oʻchirishga ishonchingiz komilmi?"
              >
                <Button size="small" danger disabled={isLoading}>
                {t('delete')}
                </Button>
              </Popconfirm>
            </Col>
          </Row>
        );
      },
    },
  ];

  const handleCloseModal = () => {
    dispatch(updateCategoryStates({ openModal: false, modalType: '' }))
    setUpdateData(undefined)
}

  const modalProps = {
    title: "Kategoriya qo'shish",
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
                        onClick={() => dispatch(updateCategoryStates({ openModal: true, modalType: 'create' }))}
                    >
                        {t('add')}
                    </Button>
                </Col>
            </Row>
      <Table
        columns={columns}
        dataSource={categoryQuery.data?.data}
        loading={categoryQuery.isFetching}
        pagination={{ defaultPageSize: 5 }}
      />

      <CategoryModal updateData={updateData} modalType={modalType} {...modalProps} />
    </>
  );
};

export default Category;
