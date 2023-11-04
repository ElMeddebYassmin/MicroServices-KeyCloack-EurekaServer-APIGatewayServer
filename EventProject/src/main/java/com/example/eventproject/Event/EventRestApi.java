package com.example.eventproject.Event;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/events")
public class EventRestApi {
    @Autowired
    EventRepo eventRepo;
    @Autowired
    private EventService eventService;


    // get all events
    @GetMapping("/getAll")
    public List<EventModel> getallevents(){
        return eventRepo.findAll();
    }
    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<?> getEventByID(@PathVariable(value = "id") Long id) {
        Optional<EventModel> event = eventService.getEventByID(id);

        if (event.isPresent()) {
            return new ResponseEntity<>(event.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Événement introuvable", HttpStatus.NOT_FOUND);
        }
    }
    @PostMapping("/saveEvent")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<EventModel> createEvent(@RequestBody EventModel event) {
        return new ResponseEntity<>(eventService.addEvent(event), HttpStatus.OK);
    }
    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<EventModel> updateEvent(@PathVariable(value = "id") long id, @RequestBody EventModel event){
        return new ResponseEntity<>(eventService.updateEvent(id, event), HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<String> deleteEvent(@PathVariable(value = "id") long id){
        return new ResponseEntity<>(eventService.deleteEvent(id), HttpStatus.OK);
    }
    @GetMapping("/byLieu/{lieu}")
    public List<EventModel> getEventsByLieu(@PathVariable(value = "lieu") String lieu) {
        return eventService.getEventsByLieu(lieu);
    }
    @GetMapping("/searchByName")
    public List<EventModel> searchEventsByName(@RequestParam(value = "nom") String nom) {
        return eventService.searchEventsByName(nom);
    }

    @GetMapping("/count")
    public long countEvents() {
        return eventService.countEvents();
    }



    private String simpleHelloMessage="Hello Mounaa";
    @RequestMapping("/hiMouna")
    public String sayHiToMouna(){
        return simpleHelloMessage;
    }

    @GetMapping("/org/{orgId}")
    public ResponseEntity<List<EventModel>> getOrganizationsByUserId(@PathVariable Long orgId){
        return new ResponseEntity<List<EventModel>>(eventService.getEventsByOrganization(orgId), HttpStatus.OK);
    }


}
