package com.GroceryApp.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.*;

import com.GroceryApp.Entity.ImageModel;
import com.GroceryApp.Entity.Product;
import com.GroceryApp.Service.ProductService;

@RestController
public class ProductController {
	
	@Autowired
	private ProductService productService;
	
	@PostMapping(value= {"/addNewProduct"}, consumes = {MediaType.MULTIPART_FORM_DATA_VALUE} )
	public Product addNewProduct(@RequestPart("product") Product product,
								@RequestPart("ImageFile") MultipartFile[] file) {
		
		try {
			Set<ImageModel> images =uploadImage(file);
			product.setProductImages(images);
		    return	 productService.addNewProduct(product);
		}catch(Exception e) {
			System.out.println(e.getMessage());
			return null;
		}
		
	}

	public Set<ImageModel> uploadImage(MultipartFile[] multipartFiles) throws IOException {
		Set<ImageModel> imageModels = new HashSet<>();
		
		for(MultipartFile file:multipartFiles) {
			ImageModel imageModel = new ImageModel(
				file.getOriginalFilename(),
				file.getContentType(),
				file.getBytes()
	
			);
			
			imageModels.add(imageModel);
		}
		
		return imageModels;
	}
	@GetMapping({"/getAllProducts"} )
	public List<Product> getAllProducts(@RequestParam(defaultValue = "") String searchKey){
	 return	productService.getallProducts(searchKey);
	}
	
	
	@DeleteMapping( {"/deleteProductDetails/{productId}"} )
	public void deleteProductDetails(@PathVariable("productId") Integer productId) {
		productService.deleteProductDetails(productId);
	}
	
	@GetMapping({"/getProductDetailsById/{productId}"} )
	public Product getProductDetailsById(@PathVariable("productId") Integer productId) {
	 return productService.getProductDetailsById(productId);
	}
	
//	@PreAuthorize("hasRole('User')")
	@GetMapping( {"/getProductDetails/{isSingleProductCheckout}/{productId}"} )
	public List<Product> getProductDetails( @PathVariable(name = "isSingleProductCheckout") boolean isSingleProductCheckout,
								   @PathVariable(name = "productId")Integer productId) {
		
	  return productService.getProductDetails(isSingleProductCheckout, productId);
		
	}
	
}
