import React, { useState } from "react";
import { Button, Col, Row, TableColumnsType } from "antd";
import { Typography } from "antd";
import { Table } from "components/index";
import ModalCreate from "./_components/ModalCreate/ModalCreate";
import { CategoryDTO } from "types/category";
import ModalUpdate from "./_components/ModalUpdate/ModalUpdate";
import { useCategoryDeleteMutation, useCategoryQuery } from "store/endpoints";

const Category: React.FC = () => {
  const categoryQuery = useCategoryQuery();
  const [categoryDelete, { isLoading }] = useCategoryDeleteMutation();
  const [modalCreate, setModalCreate] = useState<boolean>(false);
  const [modalUpdate, setModalUpdate] = useState<boolean>(false);
  const [updateData, setUpdateData] = useState<CategoryDTO>({ name: "" });

  const handleUpdate = (data: CategoryDTO) => {
    setModalUpdate(true);
    setUpdateData(data);
  };
  const handleDelete = (id: number | undefined) => {
    const category = categoryDelete({ id }).unwrap();
    category
      .then((res) => {
        setModalUpdate(false);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const columns: TableColumnsType = [
    {
      title: "№",
      dataIndex: "id",
      key: "id",
      width: "5%",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "75%",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Action",
      key: "action",
      width: "20%",
      render: (value: CategoryDTO) => {
        return (
          <Row wrap={false} gutter={5}>
            <Col>
              <Button
                size="small"
                type="primary"
                onClick={() => handleUpdate(value)}
              >
                Edit
              </Button>
            </Col>
            <Col>
              <Button
                size="small"
                danger
                onClick={() => handleDelete(value.id)}
              >
                Delete
              </Button>
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
        dataSource={categoryQuery.data?.data}
        loading={categoryQuery.isFetching}
        pagination={{ defaultPageSize: 5 }}
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

export default Category;
