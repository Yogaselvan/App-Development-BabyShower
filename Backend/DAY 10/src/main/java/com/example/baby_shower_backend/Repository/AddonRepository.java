package com.example.baby_shower_backend.Repository;

import com.example.baby_shower_backend.Model.Addon;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddonRepository extends JpaRepository<Addon, Integer> {
}
