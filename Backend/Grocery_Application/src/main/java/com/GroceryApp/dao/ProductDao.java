package com.GroceryApp.dao;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import com.GroceryApp.Entity.Product;


public interface ProductDao extends CrudRepository<Product, Integer> {

	public	List<Product> findAll(Pageable pageable);

	public	List<Product> findByProductNameContainingIgnoreCaseOrProductDescriptionContainingIgnoreCase(
			String key1, String key2
			);
}
