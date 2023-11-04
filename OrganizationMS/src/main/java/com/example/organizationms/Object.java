package com.example.organizationms;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Object {
    @Id
    @GeneratedValue
    private int id;

    private int userId;

    @Enumerated(EnumType.STRING)
    CategoryEnum category;

    private String description,name;
    @Temporal(TemporalType.DATE)
    private Date expirationDate;

    @Enumerated(EnumType.STRING)
    StatusEnum status;

    private Long organizationId;
}
