import { OrderQuantity } from "./orderQuantity"

export interface OrderDetails{
    fullName: string
    fullAddress: string
    contactNumber: string
    alternateContactNumber:string
    date:string
    transactionId:string
    orderProductQuantityList:OrderQuantity[]
}