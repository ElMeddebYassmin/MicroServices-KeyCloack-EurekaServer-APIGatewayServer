package com.example.claimms.Claim;

import javax.persistence.*;
import javax.ws.rs.DefaultValue;
import java.io.Serializable;
import java.util.Date;

@Entity
public class Claim implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String subject;
    private String content;
    @Temporal(TemporalType.DATE)
    private Date claimDate;

    @Enumerated(EnumType.STRING)
    private Status status;


    public Claim() {
    }

    public Claim(String subject, String content, Date claimDate) {
        this.subject = subject;
        this.content = content;
        this.claimDate = claimDate;
        this.status = Status.PENDING;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Long getId() {
        return id;
    }

    public Date getClaimDate() {
        return claimDate;
    }

    public void setClaimDate(Date claimDate) {
        this.claimDate = claimDate;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }
}

