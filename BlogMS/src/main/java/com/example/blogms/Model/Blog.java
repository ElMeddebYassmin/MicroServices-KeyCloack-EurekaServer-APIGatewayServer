package com.example.blogms.Model;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;

/**
 * @author Aymen Laroussi
 * @project BlogMS
 */

@Entity
public class Blog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String title;
    private String content;
    private String image;
    @Enumerated(EnumType.STRING)
    private Status status;
    private int views;
    private LocalDateTime publicationDate;

    public int getId() {
        return id;
    }

    public void setId(int id) {this.id = id; }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public int getViews() {
        return views;
    }

    public void setViews(int views) {
        this.views = views;
    }

    public LocalDateTime getPublicationDate() {
        return publicationDate;
    }

    public void setPublicationDate(LocalDateTime publicationDate) {
        this.publicationDate = publicationDate;
    }

    public Blog(String title, String content, String image, Status status, int views, LocalDateTime publicationDate) {
        this.title = title;
        this.content = content;
        this.image = image;
        this.status = status;
        this.views = views;
        this.publicationDate = publicationDate;
    }

    public Blog(int id, String title, String content, String image, Status status, int views, LocalDateTime publicationDate) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.image = image;
        this.status = status;
        this.views = views;
        this.publicationDate = publicationDate;
    }

    public Blog() {
    }
}
