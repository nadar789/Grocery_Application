package com.GroceryApp.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.GroceryApp.Entity.Cart;
import com.GroceryApp.Entity.User;

@Repository
public interface CartDao extends CrudRepository<Cart, Integer> {

	public List<Cart> findByUser(User user);

}
