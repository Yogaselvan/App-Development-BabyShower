package com.example.baby_shower_backend.Repository;
import com.example.baby_shower_backend.Model.FoodMenu;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FoodMenuRepository extends JpaRepository<FoodMenu, Integer> {
}
