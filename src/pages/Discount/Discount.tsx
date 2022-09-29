import React, { useState } from "react";
import { Button, Col, message, Row, TableColumnsType } from "antd";
import { Typography } from "antd";
import { PopConfirm, Table } from "components/index";
import ModalCreate from "./_components/ModalCreate/ModalCreate";
import ModalUpdate from "./_components/ModalUpdate/ModalUpdate";
import { DiscountDTO } from "types/discount";
// import { useDiscountDeleteMutation, useDiscountQuery } from "store/endpoints";

const Discount: React.FC = () => {
  // const discountQuery = useDiscountQuery();
  // const [discountDelete, { isLoading }] = useDiscountDeleteMutation();
  const [modalCreate, setModalCreate] = useState<boolean>(false);
  // const [modalUpdate, setModalUpdate] = useState<boolean>(false);
  // const [updateData, setUpdateData] = useState<DiscountDTO>({ name: "" });

  // const handleUpdate = (data: DiscountDTO) => {
  //   setModalUpdate(true);
  //   setUpdateData(data);
  // };
  // const handleDelete = (id: number | undefined) => {
  //   const discount = discountDelete({ id }).unwrap();
  //   discount
  //     .then((res) => {
  //       if (res.statusCode === 200) {
  //         message.success("Muvaffaqiyati ochirildi.");
  //         setModalUpdate(false);
  //       }
  //     })
  //     .catch((err) => {
  //       message.error(`Xatolik yuz berdi. Xatolik: ${err.message}`);
  //     });
  // };

  const columns: TableColumnsType = [
    {
      title: "№",
      dataIndex: "id",
      key: "id",
      width: "5%",
      render: (item, record, index) => <span>{index + 1}</span>,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "75%",
      render: (item) => <span>{item}</span>,
    },
    {
      title: "Action",
      key: "action",
      width: "20%",
      render: (item: DiscountDTO, record, index) => {
        return (
          <Row wrap={false} gutter={5}>
            <Col>
              <Button
                size="small"
                type="primary"
                ghost
                // onClick={() => handleUpdate(item)}
              >
                Edit
              </Button>
            </Col>
            <Col>
              <PopConfirm
                // onConfirm={() => handleDelete(item.id)}
                title="Oʻchirishga ishonchingiz komilmi?"
              >
                {/* <Button size="small" danger disabled={isLoading}>
                  Delete
                </Button> */}
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
        // dataSource={discountQuery.data?.data}
        // loading={discountQuery.isFetching}
        pagination={{ defaultPageSize: 5 }}
      />
      <ModalCreate visible={modalCreate} setVisible={setModalCreate} />
      {/* <ModalUpdate
        updateData={updateData}
        visible={modalUpdate}
        setVisible={setModalUpdate}
      /> */}
    </>
  );
};

export default Discount;
