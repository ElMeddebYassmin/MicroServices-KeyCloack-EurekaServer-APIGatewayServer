package com.example.eventproject.Event;

import javax.persistence.*;
import java.util.Date;

@Entity
public class EventModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String nomEvent;
    private String lieu;
    private String description;

    private Long organizationId;
    @Temporal(TemporalType.TIMESTAMP)
    private Date start;

    @Temporal(TemporalType.TIMESTAMP)
    private Date end;

    public EventModel(String nomEvent, String lieu, String description, Date start, Date end, Long organizationId) {
        this.nomEvent = nomEvent;
        this.lieu = lieu;
        this.description = description;
        this.start = start;
        this.end = end;
        this.organizationId=organizationId;
    }

    public EventModel() {
    }

    public Long getId() {
        return id;
    }

    public String getNomEvent() {
        return nomEvent;
    }

    public void setNomEvent(String nomEvent) {
        this.nomEvent = nomEvent;
    }

    public String getLieu() {
        return lieu;
    }

    public void setLieu(String lieu) {
        this.lieu = lieu;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getStart() {
        return start;
    }

    public void setStart(Date start) {
        this.start = start;
    }

    public Date getEnd() {
        return end;
    }

    public void setEnd(Date end) {
        this.end = end;
    }

    public Long getOrganizationId() {
        return organizationId;
    }

    public void setOrganizationId(Long id) {
        this.organizationId = id;
    }
}
