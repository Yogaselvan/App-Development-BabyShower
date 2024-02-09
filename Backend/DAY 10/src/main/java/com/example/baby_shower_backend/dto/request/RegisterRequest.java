package com.example.baby_shower_backend.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RegisterRequest {
    private String Name;
    private String email;
    private String mobilenumber;
    private String password;
    private String role;
}
