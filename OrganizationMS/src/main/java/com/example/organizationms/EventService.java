package com.example.organizationms;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@FeignClient(name = "AppEvents", url="http://localhost:8090")
public interface EventService {
    @GetMapping("/events/org/{orgId}")
    public List<Event> getEventsByOrganization(@PathVariable Long orgId);
}
