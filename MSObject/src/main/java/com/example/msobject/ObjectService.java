package com.example.msobject;

import antlr.collections.impl.LList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ObjectService {

    @Autowired
    private ObjectRepository objectRepository;

    public List<Object> getAllObjectsWithPag(int pageNo, int pageSize) {
        Pageable paging = PageRequest.of(pageNo, pageSize);
        Page<Object> pagedResult = objectRepository.findAll(paging);
        return pagedResult.toList();
    }
    public List<Object> getAllObjects() {

        List<Object> objects = objectRepository.findAll();
        return objects;
    }

    public Object addObject(Object Object) {
        return objectRepository.save(Object);
    }

    public Object updateObject(int id, Object newObject) {
        if (objectRepository.findById(id).isPresent()) {
            Object existingObject = objectRepository.findById(id).get();
            existingObject.setUserId(newObject.getUserId());
            existingObject.setCategory(newObject.getCategory());
            existingObject.setDescription(newObject.getDescription());
            existingObject.setExpirationDate(newObject.getExpirationDate());
            existingObject.setStatus(newObject.getStatus());
            existingObject.setName(newObject.getName());
            return objectRepository.save(existingObject);
        } else
            return null;
    }

    public String deleteObject(int id) {
        if (objectRepository.findById(id).isPresent()) {
            objectRepository.deleteById(id);
            return "Object supprimé";
        } else
            return "Object non supprimé";
    }


    public List<Object> getObjectsByCatgory(CategoryEnum category) {

        List<Object> objects = objectRepository.findObjectByCategory(category);

        if (objects.isEmpty()) {
            System.out.println("Pas d'objets pour cette catégorie.");
        }

        return objects;
    }

    public List<Object> getObjectsByOrganization(Long organizationId) {

        List<Object> objects = objectRepository.findByOrganizationId(organizationId);

        if (objects.isEmpty()) {
            System.out.println("Pas d'objets pour cette organisation.");
        }

        return objects;
    }
}
