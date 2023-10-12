package com.example.salon.service;


import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.salon.Entity.Customer;
import com.example.salon.Entity.UserSignupEntity;
import com.example.salon.dto.LoginRequest;
import com.example.salon.dto.LoginResponse;
import com.example.salon.dto.RegisterRequest;
import com.example.salon.enumerate.Role;
import com.example.salon.repository.CustomerRepository;
import com.example.salon.util.JwtUtil;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor

public class AuthService {
	 private final CustomerRepository userRepository;
	    private final PasswordEncoder passwordEncoder;
	    private final AuthenticationManager authenticationManager;
	    private final JwtUtil jwtUtil;

	    public boolean userRegistration(RegisterRequest request) {
	        Optional<Customer> isUserExists = userRepository.findByEmail(request.getEmail());
	        if (!isUserExists.isPresent()) {
	            var user = Customer.builder()
	                    .email(request.getEmail())
	                    .password(passwordEncoder.encode(request.getPassword()))
	                    .role(Role.valueOf(request.getRole().toUpperCase()))
	                    .build();
	            userRepository.save(user);
	            return true;
	        } else {
	            return false;
	        }
	    }

	    public ResponseEntity<?> userAuthentication(LoginRequest request) {
	        var user = userRepository.findByEmail(request.getEmail()).orElse(null);

	        if (user == null) {
	            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
	                    .body("No user found! Kindly Register or check Mail");
	        }

	        // Check if the user has signed up
	        if (!userRepository.existsByEmail(request.getEmail())) {
	            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
	                    .body("User not found. Please sign up first.");
	        }

	        // Check if the provided password matches the stored hashed password
	        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
	            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
	                    .body("Invalid password. Please try again.");
	        }

	        try {
	            authenticationManager.authenticate(
	                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
	            
	            var token = jwtUtil.generateToken(user);

	            return ResponseEntity.ok(LoginResponse.builder()
	                .token(token).role(user.getRole())
	                .build());
	        } catch (BadCredentialsException e) {
	            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
	                .body("Wrong password! Please try again.");
	        }
	    }
	   
}
