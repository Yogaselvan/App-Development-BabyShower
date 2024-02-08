

// package com.example.baby_shower_backend.Service;

// import com.example.baby_shower_backend.Model.Theme;
// import com.example.baby_shower_backend.Repository.ThemeRepository;
// import org.springframework.stereotype.Service;

// import java.util.List;

// @Service
// public class ThemeServiceImpl implements ThemeService {

//     private final ThemeRepository themeRepository;

//     public ThemeServiceImpl(ThemeRepository themeRepository) {
//         this.themeRepository = themeRepository;
//     }

//     @Override
//     public List<Theme> getAllThemes() {
//         return themeRepository.findAll();
//     }

//     @Override
//     public Theme getThemeById(Long id) {
//         return themeRepository.findById(id).orElse(null);
//     }

//     @Override
//     public Theme createOrUpdateTheme(Theme theme) {
//         return themeRepository.save(theme);
//     }

//     @Override
//     public void deleteTheme(Long id) {
//         themeRepository.deleteById(id);
//     }
// }
