import { Form, Input, message, Modal, ModalProps } from 'antd'
import { FC, useEffect } from 'react'
import { useCategoryAddMutation, useCategoryUpdateMutation } from 'store/endpoints';
import { useAppDispatch } from 'store/rootHooks';
import { updateCategoryStates } from 'store/slices/categorySlice';
import { CategoryDTO } from 'types/category';



type Props = ModalProps & {
    modalType: string;
    updateData: CategoryDTO | undefined
}



const CategoryModal: FC<Props> = ({ updateData,modalType, ...modalProps }) => {
    const [form] = Form.useForm();
    const [categoryAddMutation, categoryAdd] = useCategoryAddMutation();
    const [categoryUpdateMutation, categoryUpdate] = useCategoryUpdateMutation();
    const dispatch = useAppDispatch()


    const clearState = () => {
        form.resetFields()
    }

    const handleSubmit = () => {    
        form.validateFields()
        .then(data=>{            
            if (modalType === "update") {
                const categoryPromise = categoryUpdateMutation({
                    id: updateData?.id,
                    value : data
                }).unwrap();
                categoryPromise.then((res)=>{
                    if (res.statusCode === 200) {
                        message.success("Muvaffaqiyati tahrirlandi.");
                        dispatch(updateCategoryStates({ openModal: false, modalType: '' }))
                        clearState()
                    }
                })
                .catch(err=>{
                    message.error(`Xatolik yuz berdi. Xatolik: ${err.message}`);
                })
            }else if (modalType === 'create') {
                const productPromise = categoryAddMutation(data).unwrap();
                productPromise
                    .then((res) => {
                        if (res.statusCode === 200) {
                            message.success("Muvaffaqiyati saqlandi.");
                            dispatch(updateCategoryStates({ openModal: false, modalType: '' }))
                            clearState()
                        }
                    })
                    .catch((err) => {
                        message.error(`Xatolik yuz berdi. Xatolik: ${err.message}`);
                    });
            }
            
        }).catch(err => console.log('Form error: ', err))
    }

    useEffect(()=>{
        if (updateData && modalType === "update") {
            form.setFieldsValue({
                name: updateData.name
            })
        }
        return ()=>clearState()
    },[updateData,modalType])

    const props = { onOk: handleSubmit, confirmLoading: modalType.length ? modalType === 'create' ? categoryAdd.isLoading : categoryUpdate.isLoading : false, ...modalProps }
    return (
        <Modal
            {...props}
        >
            <Form
                form={form}
                name="basic"
                layout="vertical"
                autoComplete="off"

            >

                <Form.Item
                    name="name"
                    label="Nomi:"
                    rules={[
                        { required: true, message: `Kategoriyani nomini kiriting` },
                    ]}
                >
                    <Input placeholder="Nomini kiriting" />
                </Form.Item>

            </Form>
        </Modal>
    )
}

export default CategoryModal