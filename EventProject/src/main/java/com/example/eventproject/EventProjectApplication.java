package com.example.eventproject;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import com.example.eventproject.Event.EventModel;
import com.example.eventproject.Event.EventRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

import java.util.Date;

@SpringBootApplication
@EnableEurekaClient
public class EventProjectApplication {

    public static void main(String[] args) {
        SpringApplication.run(EventProjectApplication.class, args);

    }

    }



