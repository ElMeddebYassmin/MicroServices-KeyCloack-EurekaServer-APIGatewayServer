package com.example.organizationms;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/organizations")
public class OrganizationController {
    @Autowired
    private OrganizationService organizationService;
    @Autowired
    private EventService eventService;
    @Autowired
    private ObjectService objectService;

    @GetMapping("/")
    public List<Organization> getAllOrganizations() {
        return organizationService.getAllOrganizations();
    }

    @GetMapping("/{id}")
    public Organization getOrganizationById(@PathVariable Long id) {
        return organizationService.getOrganizationById(id);
    }

    @PostMapping("/")
    public Organization createOrganization(@RequestBody Organization organization) {
        return organizationService.createOrganization(organization);
    }

    @PutMapping("/{id}")
    public void updateOrganization(@PathVariable Long id, @RequestBody Organization organization) {
        organizationService.updateOrganization(id, organization);
    }

    @DeleteMapping("/{id}")
    public void deleteOrganization(@PathVariable Long id) {
        organizationService.deleteOrganization(id);
    }

    @GetMapping("/events/org/{orgId}")
    public ResponseEntity<List<Event>> getEventsByOrganization(@PathVariable Long orgId){
        return new ResponseEntity<List<Event>>(eventService.getEventsByOrganization(orgId), HttpStatus.OK);
    }

    @GetMapping("/api/objects/getByOrganization/{organizationId}")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<List<Object>> findObjectsByOrganization(@PathVariable Long organizationId ) {

        return new ResponseEntity<>(objectService.getObjectsByOrganization(organizationId), HttpStatus.OK);
    }
}
