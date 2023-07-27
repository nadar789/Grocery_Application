import { SafeUrl } from "@angular/platform-browser"

export interface Product {
    productId: null
    productName: string
    productDescription: string
    categoryName:string
    productDiscountedPrice: number
    productActualPrice: number
    productImages: fileHandle[]
}

export interface fileHandle {
    file: File,
    url: SafeUrl,
    
}




