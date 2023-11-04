package com.example.eventproject.Event;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EventService {
    @Autowired
    private EventRepo eventRepo;
    public EventModel addEvent(EventModel event) {
        return eventRepo.save(event);
    }
    public Optional<EventModel> getEventByID(Long id) {
        return eventRepo.findById(id);
    }
    public EventModel updateEvent(Long id, EventModel newEvent) {



        if (eventRepo.findById(id).isPresent()) {
            EventModel existingEvent = eventRepo.findById(id).get();
            existingEvent.setNomEvent(newEvent.getNomEvent());
            existingEvent.setDescription(newEvent.getDescription());
            existingEvent.setLieu(newEvent.getLieu());
            return eventRepo.save(existingEvent);
        } else
            return null;
    }
    public String deleteEvent(long id) {
        if (eventRepo.findById(id).isPresent()) {
            eventRepo.deleteById(id);
            return "Evenement supprimé";
        } else
            return "evenemnt non supprimé";
    }
    public List<EventModel> getEventsByLieu(String lieu) {
        return eventRepo.findByLieu(lieu);
    }
    public List<EventModel> searchEventsByName(String nom) {
        return eventRepo.findByNomEventContaining(nom);
    }
    public long countEvents() {
        return eventRepo.countEvents();
    }


    public List<EventModel> getEventsByOrganization(Long orgId) {
        return eventRepo.findByOrganizationId(orgId);
    }
}
