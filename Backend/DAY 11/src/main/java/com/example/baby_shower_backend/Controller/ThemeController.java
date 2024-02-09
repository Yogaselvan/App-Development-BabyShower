// ThemeController.java
package com.example.baby_shower_backend.Controller;
import com.example.baby_shower_backend.Model.Theme;
import com.example.baby_shower_backend.Service.ThemeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/themes")
public class ThemeController {
    private final ThemeService themeService;

    public ThemeController(ThemeService themeService) {
        this.themeService = themeService;
    }

    @GetMapping("/themeget")
    public List<Theme> getAllThemes() {
        return themeService.getAllThemes();
    }

    @GetMapping("/themeget/{id}")
    public Theme getThemeById(@PathVariable int id) {
        return themeService.getThemeById(id);
    }

    @PostMapping("/addtheme")
    public Theme saveTheme(@RequestBody Theme theme) {
        return themeService.saveTheme(theme);
    }

    @DeleteMapping("/deletetheme/{id}")
    public void deleteTheme(@PathVariable int id) {
        themeService.deleteTheme(id);
    }

    @PutMapping("/updatetheme/{id}")
    public Theme updateTheme(@PathVariable int id, @RequestBody Theme updatedTheme) {
        return themeService.updateTheme(id, updatedTheme);
    }
}
