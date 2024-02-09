package com.example.baby_shower_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackages = "com.example.baby_shower_backend.repository")
public class BabyShowerBackendApplication {
    public static void main(String[] args) {
        SpringApplication.run(BabyShowerBackendApplication.class, args);
    }
}
