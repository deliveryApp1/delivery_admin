import React, { useState, useEffect } from 'react';
import { useOrderAddMutation, useOrderUpdateMutation, useProductSearchQuery, useProductListQuery } from "store/endpoints";
import { Form, InputNumber, message, Select, ModalProps, Modal, Button, Spin, List, Space } from "antd";
import { ArrowRightOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { updateOrderStates } from 'store/slices/orderSlice';
import { useDispatch } from 'react-redux';
import MapDrawer from "./Map";
import CurrencyFormat from 'react-currency-format';
import { debounce, isEmpty } from "lodash";

const { Option } = Select;

type Props = ModalProps & {
    productData: any,
    updateData: any,
    modalType: string;
    t: any
};

const formItemLayout = {
    labelCol: {
        span: 5,
    },
    wrapperCol: {
        span: 18,
    },
}
interface Product {
    id: number;
    disabled?: undefined | any;
    key: string | number;
    label: string;
    title: any;
    value: number;
    quantity: number;
    name: string;
    price: number;
}

interface ProductReady {
    productId?: number;
    quantity?: number;
}

const OrdersModal: React.FC<Props> = ({ updateData, t, productData, modalType, ...modalProps }) => {
    // const productSearch = useProductSearchQuery(searchValue)
    const wholeProductList = useProductListQuery({ isHave: true })
    const dispatch = useDispatch()
    const [openMap, setOpenMap] = useState(false);
    const [coords, setCoords] = useState<any>([]);
    const [address, setAddress] = useState("");
    const [products, setProducts] = useState<Array<any>>([])

    const showDrawer = () => {
        setOpenMap(true);
    };
    const [form] = Form.useForm();
    const [orderUpdateMutation, orderUpdate] = useOrderUpdateMutation();
    const [orderMutation, orderCreate] = useOrderAddMutation();
    const clearState = () => {
        setCoords([])
        setAddress("")
        setProducts([])
        form.resetFields()
    }
    useEffect(() => {
        if (updateData && modalType === 'update') {
            const updateProducts = updateData.data.products.map((item: { product: any; quantity: any; }) => {
                return {
                    ...item.product,
                    quantity: item.quantity
                }
            })
            const updateProductsValue = updateData.data.products.map((item: { product: any; }) => JSON.stringify(item.product))
            console.log("updateData: ", updateProducts);
            setProducts(updateProducts)
            setCoords([updateData.data.location.latitude, updateData.data.location.longitude])
            setAddress(updateData.data.location.address)
            form.setFieldsValue({
                productId: updateProductsValue,
            })
        }
        return () => clearState()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [updateData, modalType])

    const handleSubmit = () => {
        form.validateFields()
            .then(data => {
                console.log('data: ', data);
                console.log('products: ', products);
                const newProductArray = products.map(item => {
                    let newObj: ProductReady = {}
                    newObj.productId = item.id
                    newObj.quantity = item.quantity
                    return newObj
                })
                const formData = {
                    data: {
                        products: newProductArray,
                        location: {
                            latitude: coords[0],
                            longitude: coords[1],
                            address: address
                        }
                    },
                    courierId: 1,
                    clientId: 1
                }
                if (modalType === 'update') {
                    const orderPromise = orderUpdateMutation({
                        id: updateData.id,
                        value: formData,
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

    const increamentQuantity = (productId: number) => {
        setProducts(
            products.map(item => {
                if (item.id === productId) {
                    item.quantity++
                }
                return item
            })
        )
    }
    const decreamentQuantity = (productId: number) => {
        setProducts(
            products.map(item => {
                if (item.id === productId) {
                    item.quantity--
                }
                return item
            })
        )
    }
    const onChangeSelect = (e: any[]) => {
        const productList = e.map(item => {
            const isExist = products.find(prod => prod.id === JSON.parse(item).id)
            console.log("isExist: ", isExist);
            return { ...JSON.parse(item), quantity: isExist ? isExist.quantity : 1 }
        })

        setProducts(productList)
    }

    // console.log("wholeProductList: ", wholeProductList);
    // console.log("products: ", products);
    const productOptions = wholeProductList?.data?.data?.map((product: any) =>
        (<Option key={product.id} value={JSON.stringify(product)}>{product.name}</Option>))


    const totalPrice = products.reduce((prevValue, currentValue) => {
        return prevValue + (currentValue.price * currentValue.quantity)
    }, 0)
    const props = { onOk: handleSubmit, confirmLoading: modalType.length ? modalType === 'create' ? orderCreate.isLoading : orderUpdate.isLoading : false, forceRender: true, ...modalProps }
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
                            // labelInValue
                            mode='multiple'
                            allowClear
                            showSearch
                            placeholder={t("ordersMenu.searchProduct")}
                            // value={searchValue}
                            // onSearch={onProductSearch}
                            // filterOption={false}
                            // notFoundContent={productSearch.isLoading ? <Spin size="small" /> : null}
                            onChange={onChangeSelect}
                        >
                            {productOptions}
                        </Select>
                    </Form.Item>
                    {!isEmpty(products) && <Form.Item label={t("ordersMenu.choosen")}>
                        <List
                            itemLayout='horizontal'
                            bordered
                            size='small'
                            // style={{ width: '60%', margin: "auto", marginBottom: 24 }}
                            dataSource={products}
                            footer={<Space direction='vertical' size="small">
                                <span>{t("ordersMenu.product_type")}: {products.length}</span>
                                <span>
                                    {t("ordersMenu.total_sum")}: <CurrencyFormat
                                        value={totalPrice}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                    /> ({t("ruble")})
                                </span>
                            </Space>}
                            renderItem={item => {
                                return (
                                    <List.Item
                                        extra={<Space size={5} wrap><Button size='small' icon={<MinusOutlined />} onClick={() => {
                                            if (item.quantity > 1) {
                                                decreamentQuantity(item.id)
                                            }
                                        }} /> {item.quantity}
                                            <Button size='small' onClick={() => increamentQuantity(item.id)} icon={<PlusOutlined />} /></Space>}
                                        actions={[<><CurrencyFormat
                                            value={item.price * item.quantity}
                                            displayType={'text'}
                                            thousandSeparator={true}
                                        />{" "}({t("ruble")})</>]}
                                    >
                                        {item.name}
                                    </List.Item>
                                )
                            }}
                        />
                    </Form.Item>}
                    <Form.Item name='map' label={t("ordersMenu.address")}
                        rules={[{ required: coords.length === 0, message: "Xatolik" }]}>
                        <Button block onClick={showDrawer}>{coords.length === 0 ? t('ordersMenu.map_point') : t("ordersMenu.edit_map_point")}<ArrowRightOutlined /></Button>
                    </Form.Item>
                </Form>
                <MapDrawer
                    open={openMap}
                    setOpen={setOpenMap}
                    coords={coords}
                    setCoords={setCoords}
                    address={address}
                    setAddress={setAddress}
                    t={t}
                />
            </Modal>
        </>
    );
};

export default OrdersModal;
