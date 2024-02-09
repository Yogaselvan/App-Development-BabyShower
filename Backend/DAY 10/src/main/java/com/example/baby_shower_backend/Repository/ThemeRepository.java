package com.example.baby_shower_backend.Repository;

import com.example.baby_shower_backend.Model.Theme;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ThemeRepository extends JpaRepository<Theme, Integer> {
}
