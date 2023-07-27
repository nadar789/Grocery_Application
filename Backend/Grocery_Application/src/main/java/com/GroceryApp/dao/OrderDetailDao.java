package com.GroceryApp.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.GroceryApp.Entity.OrderDetail;
import com.GroceryApp.Entity.User;

public interface OrderDetailDao extends CrudRepository<OrderDetail, Integer> {
	public List<OrderDetail> findByUser(User user);
	
	public List<OrderDetail> findByOrderStatus(String status);
}
