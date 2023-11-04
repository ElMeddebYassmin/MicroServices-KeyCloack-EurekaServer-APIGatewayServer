package com.example.msobject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;


import java.util.Date;
@EnableEurekaClient
@SpringBootApplication
public class MsObjectApplication {

    public static void main(String[] args) {

        SpringApplication.run(MsObjectApplication.class, args);
    }

   /* @Autowired
    private ObjectRepository objectRepository;

    @Bean
    ApplicationRunner init() {

        return (args) -> {

            objectRepository.save(new Object( 1,CategoryEnum.VETEMENTS,"robe","pas trop utilisée", new Date(), StatusEnum.DISPONIBLE));

            objectRepository.findAll().forEach(System.out::println);
        };
    }

    */
}
