package com.GroceryApp.dao;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.GroceryApp.Entity.User;

@Repository
public interface UserDao extends CrudRepository<User, String> {
	
}
