export type OrdersType ={
    id: number;
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
    product?:string[];
    email?:string,
    phoneNumber?:number;
    status: string;
    amount: number;
    paymentMethods?:string

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
    paymentMethods?:string
}