package com.GroceryApp.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.GroceryApp.Entity.Role;

@Repository
public interface RoleDao extends CrudRepository<Role, String> {

}