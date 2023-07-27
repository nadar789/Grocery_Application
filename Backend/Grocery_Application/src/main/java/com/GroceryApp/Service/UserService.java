package com.GroceryApp.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.GroceryApp.Entity.Role;
import com.GroceryApp.Entity.User;
import com.GroceryApp.dao.RoleDao;
import com.GroceryApp.dao.UserDao;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class UserService {

	@Autowired
	private UserDao userDao;

	@Autowired
	private RoleDao roleDao;

	@Autowired
	private PasswordEncoder passwordEncoder;

	public void initRoleAndUser() {

		Role adminRole = new Role();
		adminRole.setRoleName("Admin");
		adminRole.setRoleDescription("Admin role");
		roleDao.save(adminRole);

		Role userRole = new Role();
		userRole.setRoleName("User");
		userRole.setRoleDescription("Default role for newly created record");
		roleDao.save(userRole);

		User adminUser = new User();
		adminUser.setUserName("admin123");
		adminUser.setUserPassword(getEncodedPassword("admin@pass"));
		adminUser.setUserFirstName("admin");
		adminUser.setUserLastName("admin");
		Set<Role> adminRoles = new HashSet<>();
		adminRoles.add(adminRole);
		adminUser.setRole(adminRoles);
		userDao.save(adminUser);

	}

	public User registerNewUser(User user) {
		Role role = roleDao.findById("User").get();
		Set<Role> userRoles = new HashSet<>();
		userRoles.add(role);
		user.setRole(userRoles);
		user.setUserPassword(getEncodedPassword(user.getUserPassword()));
		return userDao.save(user);
	}

	public User getCurrentUserDetails() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
        return userDao.findById(username).orElse(null);
    }

	public String getEncodedPassword(String password) {
		return passwordEncoder.encode(password);
	}

	public List<User> getAllUserDetails() {
		return (List<User>) userDao.findAll();
	}
}