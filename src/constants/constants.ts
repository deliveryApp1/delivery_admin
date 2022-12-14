import moment from 'moment'
export const roles: Array<Object> = [
    // {
    //     id: 1,
    //     name: 'CLIENT'
    // },
    {
        id: 2,
        name: 'ADMIN'
    },
    {
        id: 3,
        name: 'COURIER'
    }
]

export const orderStatus: Array<Object> = [
    {
        text: "Pending",
        value: 'PENDING'
    },
    {
        text: "In progress",
        value: 'INPROGRESS'
    },
    {
        text: "On the way",
        value: 'ONTHEWAY'
    },
    {
        text: "Delivered",
        value: 'DELIVERED'
    },
]

export const disabledDateStart = (current: any) => current && current >= moment().endOf('day');
export const dateFormat = "DD.MM.YYYY";
export const timeFormat = "DD.MM.YYYY HH:mm:ss";