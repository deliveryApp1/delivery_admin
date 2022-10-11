export type OrderDTO = {
    id: number;
    createdAt?: string;
    updatedAt?: string;
    data: Object;
    paymentType: string;
    paymentStatus: string;
    status: string;
    courierId: number;
    clientId: number;
    meta: Object;
};
