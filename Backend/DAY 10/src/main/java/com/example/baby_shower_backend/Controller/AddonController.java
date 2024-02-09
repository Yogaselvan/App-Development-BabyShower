package com.example.baby_shower_backend.Controller;

import com.example.baby_shower_backend.Model.Addon;
import com.example.baby_shower_backend.Service.AddonService;

import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/addons")
public class AddonController {
    private final AddonService addonService;
    public AddonController(AddonService addonService) {
        this.addonService = addonService;
    }

    @GetMapping("/getadd")
    public List<Addon> getAllAddons() {
        return addonService.getAllAddons();
    }

    @GetMapping("/{id}")
    public Optional<Addon> getAddonById(@PathVariable int id) {
        return addonService.getAddonById(id);
    }

    @PostMapping("/postadd")
    public Addon saveAddon(@RequestBody Addon addon) {
        return addonService.saveAddon(addon);
    }

    @DeleteMapping("/{id}")
    public void deleteAddon(@PathVariable int id) {
        addonService.deleteAddon(id);
    }
   @PutMapping("/putadd/{id}")
    public Addon updateAddon(@PathVariable int id, @RequestBody Addon updatedAddon) throws NotFoundException {
        return addonService.updateAddon(id, updatedAddon);
    }
}
