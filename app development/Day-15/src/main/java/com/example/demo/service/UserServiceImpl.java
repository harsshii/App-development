package com.example.demo.service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder; 
    
    @Override
    public User signup(User user) {
        // Hash the password before saving to the database
        String hashedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(hashedPassword);

        // Save the user to the database
        return userRepository.save(user);
    }

    @Override
    public User login(User user) {
        // Fetch the user by username from the database
        User existingUser = userRepository.findByUsername(user.getUsername());

        // Check if the user exists and the provided password matches
        if (existingUser != null && passwordEncoder.matches(user.getPassword(), existingUser.getPassword())) {
            return existingUser;
        }

        return null;  // Return null if user not found or password doesn't match
    }
    
    
    @Override
    public User getUserById(Long id) {
        // Implement logic to retrieve user by ID from the database
        // Return null if user not found
        return userRepository.findById(id).orElse(null);
    }

}
