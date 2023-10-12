package com.example.salon.repository;


import com.example.salon.Entity.PaymentEntity;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentRepository extends JpaRepository<PaymentEntity, Long> {
}
