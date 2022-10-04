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

export const disabledDateStart = (current: any) => current && current >= moment().endOf('day');
export const dateFormat = "DD.MM.YYYY";