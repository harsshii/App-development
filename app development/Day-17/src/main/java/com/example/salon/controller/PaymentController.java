package com.example.salon.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

import com.example.salon.Entity.PaymentEntity;
import com.example.salon.repository.PaymentRepository;

@RestController
@RequestMapping("/payments")
@CrossOrigin("*")
public class PaymentController {

    @Autowired
    private PaymentRepository paymentRepository;

    @PostMapping("/pay")
    public ResponseEntity<PaymentEntity> makePayment(@RequestBody PaymentEntity paymentEntity) {
        PaymentEntity savedPayment = paymentRepository.save(paymentEntity);
        return new ResponseEntity<>(savedPayment, HttpStatus.CREATED);
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<PaymentEntity>> getAllPayments() {
        List<PaymentEntity> payments = paymentRepository.findAll();
        return new ResponseEntity<>(payments, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PaymentEntity> getPaymentById(@PathVariable Long id) {
        Optional<PaymentEntity> paymentOptional = paymentRepository.findById(id);
        return paymentOptional.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<PaymentEntity> updatePayment(
            @PathVariable Long id,
            @RequestBody PaymentEntity updatedPayment) {
        // Check if the payment with the given ID exists
        if (!paymentRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        updatedPayment.setId(id);
        PaymentEntity savedPayment = paymentRepository.save(updatedPayment);
        return ResponseEntity.ok(savedPayment);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePayment(@PathVariable Long id) {
        // Check if the payment with the given ID exists
        if (!paymentRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        paymentRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}