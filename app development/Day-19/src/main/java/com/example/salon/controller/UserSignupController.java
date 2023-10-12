package com.example.salon.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.salon.Entity.UserSignupEntity;
import com.example.salon.repository.UserRepository;
// Other imports...

@RestController
@CrossOrigin("*")
@RequestMapping("/usersignup")
public class UserSignupController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/post")
    public UserSignupEntity createUser(@RequestBody UserSignupEntity userSignupEntity) {
        return userRepository.save(userSignupEntity);
    }

    @GetMapping("/get")
    public Iterable<UserSignupEntity> getUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserSignupEntity> getUserById(@PathVariable Integer id) {
        Optional<UserSignupEntity> userOptional = userRepository.findById(id);
        return userOptional.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserSignupEntity> updateUser(
            @PathVariable Integer id,
            @RequestBody UserSignupEntity updatedUser) {
        // Check if the user with the given ID exists
        if (!userRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        updatedUser.setId(id);
        UserSignupEntity savedUser = userRepository.save(updatedUser);
        return ResponseEntity.ok(savedUser);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Integer id) {
        // Check if the user with the given ID exists
        if (!userRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        userRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
