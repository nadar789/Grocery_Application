import { Product } from "../admin/Components/products/product.model"

export interface MyOrderDetails {
    orderId: number
    orderFullName: string
    orderFullAddress: string
    orderContanctNumber: string
    orderAlternateNumber: string
    orderDate:string
    orderStatus: string
    orderAmount: number
    product: Product
    user: any
}