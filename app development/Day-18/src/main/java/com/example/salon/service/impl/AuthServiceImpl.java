//package com.example.salon.service.impl;
//
//import java.util.Optional;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Service;
//
//import com.example.salon.dto.request.AuthenticationRequest;
//import com.example.salon.dto.request.RegisterRequest;
//import com.example.salon.dto.response.AuthenticationResponse;
//import com.example.salon.model.enumerate.Role;
//import com.example.salon.repository.UserRepository;
//import com.example.salon.service.AuthService;
//import com.example.salon.util.JwtUtil;
//
//import jakarta.transaction.Transactional;
//import lombok.RequiredArgsConstructor;
//
//@Service
//@Transactional
//@RequiredArgsConstructor
//public class AuthServiceImpl implements AuthService {
//
//	@Autowired
//    private  UserRepository userRepository;
//	@Autowired
//	private  PasswordEncoder passwordEncoder;
//    @Autowired
//	private  AuthenticationManager authenticationManager;
//    @Autowired
//	private JwtUtil jwtUtil;
//
//    @Override
//    public boolean userRegistration(RegisterRequest request) {
//        Optional<com.example.salon.model.User> isUserExists = userRepository.findByEmail(request.getEmail());
//        if (!isUserExists.isPresent()) {
//            var user = User.builder()
//                    .name(request.getName())
//                    .email(request.getEmail())
//                    .password(passwordEncoder.encode(request.getPassword()))
//                    .isEnabled(true)
//                    .role(Role.valueOf(request.getRole().toUpperCase()))
//                    .build();
//            userRepository.save(user);
//            return true;
//        } else {
//            return false;
//        }
//    }
//
//    @Override
//    public AuthenticationResponse userAuthentication(AuthenticationRequest request) {
//        authenticationManager.authenticate(
//                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
//        var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
//        var token = jwtUtil.generateToken(user);
//        return AuthenticationResponse.builder()
//                .token(token)
//                .build();
//    }
//}