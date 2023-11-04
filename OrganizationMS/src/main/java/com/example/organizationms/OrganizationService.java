package com.example.organizationms;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrganizationService {

    @Autowired
    private EventService eventService;
    @Autowired
    private OrganizationRepository organizationRepository;

    public Organization addOrganization(Organization org) {
        return organizationRepository.save(org);
    }

    public List<Organization> getAllOrganizations() {
        return organizationRepository.findAll();
    }

    public Organization getOrganizationById(Long id) {
        return organizationRepository.findById(id).orElse(null);
    }

    public Organization createOrganization(Organization organization) {
        return organizationRepository.save(organization);
    }

    public void updateOrganization(Long id, Organization organization) {
        if (organizationRepository.existsById(id)) {
            organization.setId(id);
            organizationRepository.save(organization);
        }
    }

    public void deleteOrganization(Long id) {
        organizationRepository.deleteById(id);
    }

    public void archiveOrganization(Long id, Organization organization) {
        if (organizationRepository.existsById(id)) {
            organization.setArchived(true);
            organizationRepository.save(organization);
        }
    }

    public List<Event> getOrganizationWithEvents(Long orgId) {
        Optional<Organization> organization = organizationRepository.findById(orgId);
        List<Event> events = eventService.getEventsByOrganization(orgId);
        return events;
    }
}
