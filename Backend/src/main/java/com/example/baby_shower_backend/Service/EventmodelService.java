// package com.example.baby_shower_backend.Service;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import com.example.baby_shower_backend.Model.eventmodel;
// import com.example.baby_shower_backend.Repository.eventmodelRepository;

// import java.util.List;

// @Service
// public class EventmodelService {
//     @Autowired
//     private eventmodelRepository eventRepository;

//     public eventmodel addEvent(eventmodel event) {
//         return eventRepository.save(event);
//     }

//     public List<eventmodel> getAllEvents() {
//         return eventRepository.findAll();
//     }

//     public eventmodel getEventById(int eventId) {
//         return eventRepository.findById(eventId)
//                 .orElseThrow(() -> new RuntimeException("Event not found with id " + eventId));
//     }

//     public eventmodel updateEvent(int eventId, eventmodel updatedEvent) {
//         eventmodel event = getEventById(eventId);
//         event.setEventName(updatedEvent.getEventName());
//         event.setApplicantName(updatedEvent.getApplicantName());
//         // Update other fields as needed
//         return eventRepository.save(event);
//     }

//     public void deleteEvent(int eventId) {
//         eventmodel event = getEventById(eventId);
//         eventRepository.delete(event);
//     }
// }
