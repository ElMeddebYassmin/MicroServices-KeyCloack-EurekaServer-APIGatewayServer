package com.example.msobject;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ObjectRepository extends JpaRepository<Object, Integer> {

    @Query("SELECT o FROM Object o WHERE o.category = :category")
    List<Object> findObjectByCategory(@Param("category") CategoryEnum category );

    List<Object> findByOrganizationId(Long organizationId);
}
