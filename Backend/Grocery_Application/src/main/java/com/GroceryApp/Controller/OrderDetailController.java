
package com.GroceryApp.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.GroceryApp.Entity.OrderDetail;
import com.GroceryApp.Entity.OrderInput;
import com.GroceryApp.Entity.TransactionDetails;
import com.GroceryApp.Service.OrderDetailService;

@RestController
public class OrderDetailController {

	@Autowired
	private OrderDetailService orderDetailService;

	@PreAuthorize("hasRole('User')")
	@PostMapping({ "/placeOrder/{isSingleProductCheckout}" })
	public void placeOrder(@PathVariable(name = "isSingleProductCheckout") boolean isSingleProductCheckout,
			@RequestBody OrderInput orderInput) {
		orderDetailService.placeOrder(orderInput, isSingleProductCheckout);

	}
	
	@GetMapping({"/getOrderDetails"})
	public List<OrderDetail> getOrderDetails() {
	return orderDetailService.getOrderDetails();
	}
	
	@GetMapping({"/getAllOrderDetails/{status}"})
	public List<OrderDetail> getAllOrderDetails(@PathVariable(name ="status") String status ) {
		return orderDetailService.getAllOrderDetails(status);
	}
	
	
	@GetMapping({"/markOrderAsDelivered/{orderId}"})
	public void markOrderAsDelivered(@PathVariable(name = "orderId") Integer orderId) {
		orderDetailService.markOrderAsdelivered(orderId);
	}
	
	@GetMapping({"/createTransaction/{amount}"})
	public TransactionDetails createTransaction(@PathVariable(name = "amount") Double amount) {
	    return orderDetailService.createTransaction(amount);
	}
	
	

}