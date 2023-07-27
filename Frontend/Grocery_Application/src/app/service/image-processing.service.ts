import { Injectable } from '@angular/core';
import { Product, fileHandle } from '../admin/Components/products/product.model';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ImageProcessingService {

  constructor(private sanitizer: DomSanitizer) { }

  public createImages(product: Product) {
    const productImages: any[] = product.productImages

    const productImagesToFileHandle: fileHandle[] = []

    for (let i = 0; i < productImages.length; i++) {
      const imageFileData = productImages[i];

      const imageBlob = this.dataURItoBlob(imageFileData.picByte, imageFileData.type)

      const ImageFile = new File([imageBlob], imageFileData.name, { type: imageFileData.type })

      const finalFileHandle: fileHandle = {
        file: ImageFile,
        url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(ImageFile))
      }

      productImagesToFileHandle.push(finalFileHandle)

    }

    product.productImages = productImagesToFileHandle
    return product

  }

  public dataURItoBlob(picBytes: string, imageType: any) {
    const byteString = window.atob(picBytes)
    const arrayBuffer = new ArrayBuffer(byteString.length)
    const int8Array = new Uint8Array(arrayBuffer)

    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i)
    }

    const blob = new Blob([int8Array], { type: imageType })
    return blob

  }

}
