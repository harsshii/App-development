package com.example.salon.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.salon.Entity.UserSignupEntity;

@Repository
public interface UserRepository extends JpaRepository<UserSignupEntity, Integer> {
    Optional<UserSignupEntity> findByEmail(String email);
}
