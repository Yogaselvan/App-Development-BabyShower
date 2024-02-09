package com.example.baby_shower_backend.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.baby_shower_backend.Model.eventmodel;
import com.example.baby_shower_backend.Service.EventmodelService;

@RestController
public class EventmodelController {
    @Autowired
	EventmodelService service;
	
	@PostMapping("/bookevent")
	public String bookEvent(@RequestBody eventmodel event) {
		return service.bookEvents(event);
	}
	
	@GetMapping("/getevent")
	public List<eventmodel> viewEvent(){
		return service.getEvent();
	}
	@DeleteMapping("/deleteEvent/{id}")
	public String delete(@PathVariable int id) {
		return service.deleteEventById(id);
	}
	@PutMapping("/editEvent/{id}")
	public eventmodel Update(@RequestBody eventmodel event) {
		return service.editEventById(event);
	}
}