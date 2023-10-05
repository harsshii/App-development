package com.example.demo.service;

import com.example.demo.model.User;

public interface UserService {
	
	    User signup(User user);
	    User login(User user);
	    User getUserById(Long id);
	    
	}
	


