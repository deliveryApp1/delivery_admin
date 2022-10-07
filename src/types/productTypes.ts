export type ProductDTO = {
    id: number;
    createdAt?: string;
    updatedAt?: string;
    name: string;
    categoryId: number;
    image: string;
    description: string;
    price: number;
    discount: number;
    meta: Object;
};
