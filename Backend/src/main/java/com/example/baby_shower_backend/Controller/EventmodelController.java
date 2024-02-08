// package com.example.baby_shower_backend.Controller;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.*;

// import com.example.baby_shower_backend.Model.eventmodel;
// import com.example.baby_shower_backend.Service.EventmodelService;

// import java.util.List;

// @RestController
// @RequestMapping("/events")
// public class EventmodelController {
//     @Autowired
//     private EventmodelService eventService;

//     @PostMapping
//     public eventmodel addEvent(@RequestBody eventmodel  event) {
//         return eventService.addEvent(event);
//     }

//     @GetMapping
//     public List<eventmodel > getAllEvents() {
//         return eventService.getAllEvents();
//     }

//     @GetMapping("/{eventId}")
//     public eventmodel  getEventById(@PathVariable int eventId) {
//         return eventService.getEventById(eventId);
//     }

//     @PutMapping("/{eventId}")
//     public eventmodel  updateEvent(@PathVariable int eventId, @RequestBody eventmodel  updatedEvent) {
//         return eventService.updateEvent(eventId, updatedEvent);
//     }

//     @DeleteMapping("/{eventId}")
//     public void deleteEvent(@PathVariable int eventId) {
//         eventService.deleteEvent(eventId);
//     }
// }
