package com.example.claimms;

import com.example.claimms.Claim.Claim;
import com.example.claimms.Claim.ClaimRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;

import java.util.Date;

@SpringBootApplication
@EnableEurekaClient
public class ClaimMsApplication {

    public static void main(String[] args) {
        SpringApplication.run(ClaimMsApplication.class, args);
    }
    @Autowired
    private ClaimRepository repository;
    Date date = new Date();
    @Bean
    ApplicationRunner init() {
        return (args) -> {
//            repository.save(new Claim("Hello", "Je veux par ",date ));
//            repository.save(new Claim("Hello2", "123",date));
//            repository.findAll().forEach(System.out::println);
        };
    }
}
