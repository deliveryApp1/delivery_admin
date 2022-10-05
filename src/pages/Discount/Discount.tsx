import React, { useState } from "react";
import { Button, Col, Image, message, Row, Space, TableColumnsType } from "antd";
import { Typography } from "antd";
import { PopConfirm, Table } from "components/index";
import { DiscountDTO } from "types/discount";
import { useDiscountDeleteMutation, useDiscountQuery } from "store/endpoints";
import { updateDiscountStates } from "store/slices/discountSlice";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "store/rootHooks";
import DiscountModal from "./_components/Modal";


const Discount: React.FC = () => {
  const discountQuery = useDiscountQuery();
  const [discountDelete, { isLoading }] = useDiscountDeleteMutation();
  const { t } = useTranslation()
  const { openModal, modalType } = useAppSelector(state=>state.discountSlice)
  const dispatch = useAppDispatch()
  const [updateData, setUpdateData] = useState<DiscountDTO| undefined>({title: '', description: '', image: ''});
  const [page, setPage] = useState(1);


  function onChange(page: number) {
    setPage(page);
  }

  const handleUpdate = (data: DiscountDTO) => {
    setUpdateData(data);
    dispatch(updateDiscountStates({ openModal: true, modalType: 'update' }))
  };


  const handleDelete = (id: number | undefined) => {
    const discount = discountDelete({ id }).unwrap();
    discount
      .then((res) => {
        if (res.statusCode === 200) {
          message.success("Muvaffaqiyati ochirildi.");
        }
      })
      .catch((err) => {
        message.error(`Xatolik yuz berdi. Xatolik: ${err.message}`);
      });
  };


  

  const columns: TableColumnsType<DiscountDTO> = [
    {
      title: "№",
      dataIndex: "id",
      key: "id",
      width: "5%",
      render: (_, __, index) => <span>{index + 1}</span>,
    },
    {
      title: "Rasim",
      dataIndex: "image",
      key: "image",
      width: "5%",
      render: (_ , record) => {
        return <Image
          width={30}
          height={30}
          src={`http://147.182.130.242:3000/${record.image}`}
          />
      }
    },
    {
      title: "Name",
      dataIndex: "title",
      key: "title",
      width: "30%",
      render: (item) => <span>{item}</span>,
    },

    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: "40%",
      render: (item) => <span>{item}</span>,
    },

    {
      title: "Action",
      key: "action",
      width: "20%",
      render: (item: DiscountDTO) => {
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
                {t('delete')}
                </Button>
              </PopConfirm>
            </Col>
          </Row>
        );
      },
    },
  ];



  const handleCloseModal = () => {
    dispatch(updateDiscountStates({ openModal: true, modalType: '' }));
    setUpdateData(undefined)
}

const modalProps = {
    title: "Diskont qo'shish",
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
            onClick={() => dispatch(updateDiscountStates({ openModal: true, modalType: 'create' }))}
          >
             {t('add')}
          </Button>
        </Col>
      </Row>
      <Table
        columns={columns}
        dataSource={discountQuery.data?.data}
        loading={discountQuery.isFetching}
        pagination={{
          total: discountQuery.data?.data.length,
          pageSize: 10,
          current: page,
          onChange: (e) => onChange(e),
          showSizeChanger: false,
        }}
      />

      <DiscountModal updateData={updateData} modalType={modalType}  {...modalProps}/>
    </>
  );
};

export default Discount;
