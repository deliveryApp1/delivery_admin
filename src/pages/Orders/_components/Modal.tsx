import React, { useState, useEffect } from 'react';
import { useOrderAddMutation, useOrderUpdateMutation, useProductSearchQuery } from "store/endpoints";
import { Form, InputNumber, message, Select, ModalProps, Modal, Button, Spin } from "antd";
import { ArrowRightOutlined } from '@ant-design/icons';
import { updateOrderStates } from 'store/slices/orderSlice';
import { useDispatch } from 'react-redux';
import MapDrawer from "./Map";
import { debounce } from "lodash";

const { Option } = Select;

type Props = ModalProps & {
    productData: any,
    updateData: any,
    modalType: string;
    t: any
};

const formItemLayout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 14,
    },
}

const OrdersModal: React.FC<Props> = ({ updateData, t, productData, modalType, ...modalProps }) => {
    const [searchValue, setSearchValue] = useState<any>(updateData?.data?.products?.product?.name)
    const productSearch = useProductSearchQuery(searchValue)
    const dispatch = useDispatch()
    const [openMap, setOpenMap] = useState(false);
    const [coords, setCoords] = useState<any>([]);
    const [address, setAddress] = useState("");

    const showDrawer = () => {
        setOpenMap(true);
    };
    const [form] = Form.useForm();
    const [orderUpdateMutation, orderUpdate] = useOrderUpdateMutation();
    const [orderMutation, orderCreate] = useOrderAddMutation();
    const clearState = () => {
        setSearchValue("")
        setCoords([])
        setAddress("")
        form.resetFields()
    }
    useEffect(() => {
        if (updateData && modalType === 'update') {
            setSearchValue(updateData.data.products[0].product.name)
            setCoords([updateData.data.location.latitude, updateData.data.location.longitude])
            setAddress(updateData.data.location.address)
            form.setFieldsValue({
                productId: updateData.data.products[0].product.id,
                quantity: updateData.data.products[0].quantity,
            })
        }
        return () => clearState()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [updateData, modalType])

    const handleSubmit = () => {
        form.validateFields()
            .then(data => {
                console.log('data: ', data);
                console.log('coords: ', coords);
                console.log('address: ', address);
                const formData = {
                    data: {
                        products: [{
                            productId: data.productId.value,
                            quantity: data.quantity
                        }],
                        location: {
                            latitude: coords[0],
                            longitude: coords[1],
                            address: address
                        }
                    },
                    courierId: 1,
                    clientId: 1
                }
                console.log("formData: ", formData);
                if (modalType === 'update') {
                    const orderPromise = orderUpdateMutation({
                        id: updateData.id,
                        value: data,
                    }).unwrap();
                    orderPromise
                        .then((res: { statusCode: number; }) => {
                            if (res.statusCode === 200) {
                                message.success("Muvaffaqiyati tahrirlandi.");
                                dispatch(updateOrderStates({ openModal: false, modalType: '' }))
                                form.resetFields();
                            }
                        })
                        .catch((err: { message: any; }) => {
                            message.error(`Xatolik yuz berdi. Xatolik: ${err.message}`);
                        });
                } else if (modalType === 'create') {
                    const orderPromise = orderMutation(formData).unwrap();
                    orderPromise
                        .then((res) => {
                            if (res.statusCode === 200) {
                                message.success("Muvaffaqiyati saqlandi.");
                                dispatch(updateOrderStates({ openModal: false, modalType: '' }))
                                clearState()
                            }
                        })
                        .catch((err) => {
                            message.error(`Xatolik yuz berdi. Xatolik: ${err.message}`);
                        });
                }
            }).catch(err => console.log('Form error: ', err))

    };

    const onProductSearch = debounce(productName => {
        setSearchValue(productName)
    }, 300)
    const productOptions = productSearch?.data?.data?.map((product: { id: any; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => (<Option key={product.id} value={product.id}>{product.name}</Option>))
    const props = { onOk: handleSubmit, confirmLoading: modalType.length ? modalType === 'create' ? orderCreate.isLoading : orderUpdate.isLoading : false, forceRender: true, ...modalProps }
    console.log("productOptions: ", productOptions);
    return (
        <>
            <Modal
                {...props}
            >
                <Form
                    {...formItemLayout}
                    form={form}
                    name="basic"
                    layout="horizontal"
                    autoComplete="off"
                >
                    <Form.Item
                        name="productId"
                        label={t("menus.products")}
                        rules={[
                            { required: true, message: t("ordersMenu.select_product") },
                        ]}
                    >
                        <Select
                            labelInValue
                            mode='multiple'
                            allowClear
                            showSearch
                            placeholder="Select products"
                            value={searchValue}
                            onSearch={onProductSearch}
                            filterOption={false}
                            notFoundContent={productSearch.isLoading ? <Spin size="small" /> : null}
                        >
                            {productOptions}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="quantity"
                        label={t("ordersMenu.quantity")}
                        rules={[
                            { required: true, message: `Miqdorini kiriting` },
                        ]}
                    >
                        <InputNumber style={{ width: '100%' }} placeholder="Miqdorini kiriting" />
                    </Form.Item>
                    <Form.Item name='map' label="Manzil"
                        rules={[{ required: coords.length === 0, message: "Xatolik" }]}>
                        <Button block onClick={showDrawer}>Xaritadan belgilash<ArrowRightOutlined /></Button>
                    </Form.Item>
                </Form>
                <MapDrawer
                    open={openMap}
                    setOpen={setOpenMap}
                    coords={coords}
                    setCoords={setCoords}
                    address={address}
                    setAddress={setAddress}
                />
            </Modal>
        </>
    );
};

export default OrdersModal;
