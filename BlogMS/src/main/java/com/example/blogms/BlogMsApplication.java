package com.example.blogms;

import com.example.blogms.Model.Blog;
import com.example.blogms.Model.Status;
import com.example.blogms.Repository.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;

import java.time.LocalDateTime;

@EnableEurekaClient
@SpringBootApplication
public class BlogMsApplication {

    public static void main(String[] args) {
        SpringApplication.run(BlogMsApplication.class, args);
    }
    @Autowired
    private BlogRepository repository;

    @Bean
    ApplicationRunner init() {
        return (args) -> {
            repository.save(new Blog(
                    "Sample Blog Title",
                    "This is a sample blog content.",
                    "sample.jpg",
                    Status.Publique,
                    100,
                    LocalDateTime.now()
            ));
            repository.findAll().forEach(System.out::println);

        };
    }
}
