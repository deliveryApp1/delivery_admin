import React, { useState } from "react";
import { Button, Col, Image, message, Row, Space, TableColumnsType } from "antd";
import { Typography } from "antd";
import { PopConfirm, Table } from "components/index";
import ModalCreate from "./_components/ModalCreate/ModalCreate";
import ModalUpdate from "./_components/ModalUpdate/ModalUpdate";
import { DiscountDTO } from "types/discount";
import { useNavigate } from "react-router-dom";
import { useDiscountDeleteMutation, useDiscountQuery } from "store/endpoints";

const Discount: React.FC = () => {
  const discountQuery = useDiscountQuery();
  const [discountDelete, { isLoading }] = useDiscountDeleteMutation();
  const [modalCreate, setModalCreate] = useState<boolean>(false);
  const [modalUpdate, setModalUpdate] = useState<boolean>(false);
  const [updateData, setUpdateData] = useState<DiscountDTO>({title: '', description: '', image: ''});
  const [page, setPage] = useState(1);
  const history = useNavigate();

  function onChange(page: number) {
    setPage(page);
  }

  const handleUpdate = (data: DiscountDTO) => {
    setModalUpdate(true);
    setUpdateData(data);
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
      render: (item, record) => {
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
                Edit
              </Button>
            </Col>
            <Col>
              <PopConfirm
                onConfirm={() => handleDelete(item.id)}
                title="Oʻchirishga ishonchingiz komilmi?"
              >
                <Button size="small" danger disabled={isLoading}>
                  Delete
                </Button>
              </PopConfirm>
            </Col>
          </Row>
        );
      },
    },
  ];

  

  return (
    <>
      <Row>
        <Col span={20}>
          <Typography.Title level={2}>Kategoriyalar</Typography.Title>
        </Col>
        <Col span={4}>
          <Button
            type="primary"
            onClick={() => setModalCreate((prev) => !prev)}
          >
            Yaratish
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
      <ModalCreate visible={modalCreate} setVisible={setModalCreate} />
      <ModalUpdate
        updateData={updateData}
        visible={modalUpdate}
        setVisible={setModalUpdate}
      />
    </>
  );
};

export default Discount;
