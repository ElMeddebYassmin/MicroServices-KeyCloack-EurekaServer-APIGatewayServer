package com.example.msobject;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;


@Entity
public class Object implements Serializable {
    private static final long serialVersionUID = 795450928237931201L;

    @Id
    @GeneratedValue
    private int id;

    private int userId;

    @Enumerated(EnumType.STRING)
    CategoryEnum category;

    private String description,name;
    @Temporal (TemporalType.DATE)
    private Date expirationDate;

    @Enumerated(EnumType.STRING)
    StatusEnum status;

    private Long organizationId;

    public Long getOrganizationId() {
        return organizationId;
    }

    public void setOrganizationId(Long organizationId) {
        this.organizationId = organizationId;
    }

    public Object() {
        super();
    }

    public Object(int userId, CategoryEnum category, String name, String description, Date expirationDate, StatusEnum status) {
        super();
        this.userId = userId;
        this.category = category;
        this.name = name;
        this.description = description;
        this.expirationDate = expirationDate;
        this.status = status;
    }



    public int getId() {
        return id;
    }

    public int getUserId() {
        return userId;
    }

    public CategoryEnum getCategory() {
        return category;
    }

    public String getDescription() {
        return description;
    }

    public String getName() {
        return name;
    }

    public Date getExpirationDate() {
        return expirationDate;
    }

    public StatusEnum getStatus() {
        return status;
    }



    public void setUserId(int userId) {
        this.userId = userId;
    }

    public void setCategory(CategoryEnum category) {
        this.category = category;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setExpirationDate(Date expirationDate) {
        this.expirationDate = expirationDate;
    }

    public void setStatus(StatusEnum status) {
        this.status = status;
    }
}

