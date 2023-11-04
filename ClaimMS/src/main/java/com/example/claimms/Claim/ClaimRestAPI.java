package com.example.claimms.Claim;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/claims")
@CrossOrigin(origins = "http://localhost:4200")
public class ClaimRestAPI {

    @Autowired
    private ClaimService claimService;

    @GetMapping("/getAll")
    public List<Claim> getAllClaims() {
        return claimService.getAllClaims();
    }


    @PostMapping("/addClaim")
    public Claim createClaim(@RequestBody Claim claim) {
        return claimService.createClaim(claim);
    }

    @PutMapping("updateClaim/{id}")
    public  Claim updateClaim(@PathVariable("id") Long id,@RequestBody Claim claim){
        return claimService.updateClaim(id,claim);
    }

    @DeleteMapping("deleteClaim/{id}")
    public void deleteClaim(@PathVariable(value = "id") Long id) {
         claimService.deleteClaim(id);
    }
}
