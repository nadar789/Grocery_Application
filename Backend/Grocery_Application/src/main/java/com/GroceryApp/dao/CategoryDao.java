package com.GroceryApp.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.GroceryApp.Entity.Category;

public interface CategoryDao extends JpaRepository<Category, Integer> {

}
