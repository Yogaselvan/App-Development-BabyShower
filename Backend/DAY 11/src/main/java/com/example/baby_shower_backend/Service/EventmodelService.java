package com.example.baby_shower_backend.Service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.baby_shower_backend.Model.eventmodel;
import com.example.baby_shower_backend.Repository.eventmodelRepository;
@Service
public class EventmodelService {
    @Autowired
    eventmodelRepository repository;

    public String bookEvents(eventmodel event) {
	repository.save(event);
	return "added";
}

public List<eventmodel > getEvent(){
	return repository.findAll();
}

public String deleteEventById(int id) {
	repository.deleteById(id);;
	return "deleted";
}

public eventmodel editEventById(eventmodel event) {
	repository.save(event);
	return event;
}

}

