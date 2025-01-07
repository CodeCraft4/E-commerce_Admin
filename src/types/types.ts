export type OrdersType ={
    img: string;
    title: string;
    price: number;
    percentage: number;
    date: string;
}

export type TableData ={
    id: number;
    productName: string;
    orderId: number;
    poster:string,
    date: string;
    customerName: string;
    status: string;
    amount: number;
}

export type SellerType={
    title: string;
    price: number;
    sale: number;
    totalPrice: string | number;
}

export type ProductType={
    title: string;
    category: string;
    description: string;
    sales: number;
    remainingProduct: number;
    img: string;
    price: number;
}