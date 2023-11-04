package com.example.organizationms;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@FeignClient(name = "Object", url="http://localhost:8090")
public interface ObjectService {
    @GetMapping("/api/objects/getByOrganization/{organizationId}")
    public List<Object> getObjectsByOrganization(@PathVariable Long organizationId);
}
