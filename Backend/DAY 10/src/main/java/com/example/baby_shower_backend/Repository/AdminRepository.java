package com.example.baby_shower_backend.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.baby_shower_backend.Model.Admin;


public interface AdminRepository extends JpaRepository<Admin, Long>{

    Optional<Admin> findByEmail(String email);
}
