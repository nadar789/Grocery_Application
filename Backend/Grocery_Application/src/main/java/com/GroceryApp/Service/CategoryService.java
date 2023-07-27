package com.GroceryApp.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.GroceryApp.Entity.Category;
import com.GroceryApp.dao.CategoryDao;

@Service
public class CategoryService {
	
	@Autowired
	private CategoryDao categoryDao;
	
	public List<Category> getAllCategories() {
		return categoryDao.findAll();
	}
	
	public void addCategory(Category category) {
        categoryDao.save(category);
    }
	
	public void updateCategory(Category category) {
        categoryDao.save(category);
    }
	
	public void deleteCategory(Integer productId) {
		categoryDao.deleteById(productId);
	}
	

}
