package com.example.eventproject.Event;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface EventRepo extends JpaRepository<EventModel,Long> {
    @Query("select e from EventModel e where e.nomEvent like :name")
    public Page<EventModel> eventByNom(@Param("name") String n, Pageable pageable);
    List<EventModel> findByLieu(String lieu);

    List<EventModel> findByNomEventContaining(String nom);

    @Query("SELECT COUNT(e) FROM EventModel e")
    long countEvents();


    List<EventModel> findByOrganizationId(Long orgId);

}
