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

import com.example.salon.Entity.AppointmentEntity;
import com.example.salon.repository.AppointmentRepository;

@RestController
@CrossOrigin("*")
@RequestMapping("/appointments")
public class AppointmentController {

    @Autowired
    private AppointmentRepository appointmentRepository;

    @PostMapping("/book")
    public AppointmentEntity bookAppointment(@RequestBody AppointmentEntity appointment) {
        return appointmentRepository.save(appointment);
    }

    @GetMapping("/all")
    public Iterable<AppointmentEntity> getAllAppointments() {
        return appointmentRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<AppointmentEntity> getAppointmentById(@PathVariable Long id) {
        Optional<AppointmentEntity> appointmentOptional = appointmentRepository.findById(id);
        return appointmentOptional.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<AppointmentEntity> updateAppointment(
            @PathVariable Long id,
            @RequestBody AppointmentEntity updatedAppointment) {
        // Check if the appointment with the given ID exists
        if (!appointmentRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        updatedAppointment.setId(id);
        AppointmentEntity savedAppointment = appointmentRepository.save(updatedAppointment);
        return ResponseEntity.ok(savedAppointment);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAppointment(@PathVariable Long id) {
        // Check if the appointment with the given ID exists
        if (!appointmentRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        appointmentRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
