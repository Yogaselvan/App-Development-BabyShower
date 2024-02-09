package com.example.baby_shower_backend.Service;

import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.baby_shower_backend.dto.request.AuthenticationRequest;
import com.example.baby_shower_backend.dto.request.RegisterRequest;
import com.example.baby_shower_backend.dto.response.AuthenticationResponse;
import com.example.baby_shower_backend.Model.Role;
import com.example.baby_shower_backend.Model.User;
import com.example.baby_shower_backend.Repository.UserRepository;
// import com.example.baby_shower_backend.Repository.AdminRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;
//     private final AdminRepository adminRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest request) {

        Optional<User>  check = userRepository.findByEmail(request.getEmail());
        if(request.getRole().equals("user")){

                if(check.isEmpty()){
                var user = User
                        .builder()
                        .name(request.getName())
                        .email(request.getEmail())
                        .password(passwordEncoder.encode(request.getPassword()))
                        .role(Role.USER)
                        .mobilenumber(request.getMobilenumber())
                        .build();
                userRepository.save(user);
                var jwtToken = jwtService.generateToken(user);
                return AuthenticationResponse.builder()
                        .token(jwtToken)
                        .build();
                }
                return AuthenticationResponse.builder()
                .token("Email Already Exists")
                .build();

        }
        else{
                if(check.isEmpty()){

              
                var user = User
                        .builder()
                        .name(request.getName())
                        .email(request.getEmail())
                        .password(passwordEncoder.encode(request.getPassword()))
                        .role(Role.ADMIN)
                        .mobilenumber(request.getMobilenumber())
                        .build();
                userRepository.save(user);
                var jwtToken = jwtService.generateToken(user);
                return AuthenticationResponse.builder()
                        .token(jwtToken)
                        .build();
                }
                return AuthenticationResponse.builder()
                        .token("Email Already Exists")
                        .build();
        }

    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

}
