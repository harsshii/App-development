package com.example.salon.repository;

import com.example.salon.Entity.AppointmentEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppointmentRepository extends JpaRepository<AppointmentEntity, Long> {
}
