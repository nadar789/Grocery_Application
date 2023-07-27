package com.GroceryApp.Entity;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class OrderDetail {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO )
	private Integer orderId;
	private String orderFullName;
	private String orderFullAddress;
	private String orderContanctNumber;
	private String orderAlternateNumber;
	private String orderDate;
	private String orderStatus;
	private Double orderAmount;
	@OneToOne(cascade = CascadeType.ALL)
	private Product product;
	@OneToOne(cascade = CascadeType.ALL)
	private User user;
	private String transactionId;

	
	
	
	
	public String getTransactionId() {
		return transactionId;
	}
	public void setTransactionId(String transactionId) {
		this.transactionId = transactionId;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public Product getProduct() {
		return product;
	}
	public void setProduct(Product product) {
		this.product = product;
	}
	public Integer getOrderId() {
		return orderId;
	}
	public void setOrderId(Integer orderId) {
		this.orderId = orderId;
	}
	public String getOrderFullName() {
		return orderFullName;
	}
	public void setOrderFullName(String orderFullName) {
		this.orderFullName = orderFullName;
	}
	public String getOrderFullAddress() {
		return orderFullAddress;
	}
	public void setOrderFullAddress(String orderFullAddress) {
		this.orderFullAddress = orderFullAddress;
	}
	public String getOrderContanctNumber() {
		return orderContanctNumber;
	}
	public void setOrderContanctNumber(String orderContanctNumber) {
		this.orderContanctNumber = orderContanctNumber;
	}
	public String getOrderAlternateNumber() {
		return orderAlternateNumber;
	}
	public void setOrderAlternateNumber(String orderAlternateNumber) {
		this.orderAlternateNumber = orderAlternateNumber;
	}
	public String getOrderStatus() {
		return orderStatus;
	}
	public void setOrderStatus(String orderStatus) {
		this.orderStatus = orderStatus;
	}
	public Double getOrderAmount() {
		return orderAmount;
	}
	public void setOrderAmount(Double orderAmount) {
		this.orderAmount = orderAmount;
	}
	
	
	public String getOrderDate() {
		return orderDate;
	}
	public void setOrderDate(String orderDate) {
		this.orderDate = orderDate;
	}
	
public OrderDetail() {
		
	}
public OrderDetail(String orderFullName, String orderFullAddress, String orderContanctNumber,
		String orderAlternateNumber, String orderDate, String orderStatus, Double orderAmount, Product product,
		User user, String transactionId) {
	super();
	this.orderFullName = orderFullName;
	this.orderFullAddress = orderFullAddress;
	this.orderContanctNumber = orderContanctNumber;
	this.orderAlternateNumber = orderAlternateNumber;
	this.orderDate = orderDate;
	this.orderStatus = orderStatus;
	this.orderAmount = orderAmount;
	this.product = product;
	this.user = user;
	this.transactionId = transactionId;
}
	
	
	
	
	

	
	
	
	
	

}
