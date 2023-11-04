package com.example.claimms.Claim;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClaimService {
    @Autowired
    private ClaimRepository claimRepository;

    public Claim createClaim(Claim claim) {
        return claimRepository.save(claim);
    }

    public List<Claim> getAllClaims() {
        return claimRepository.findAll();
    }

    public void deleteClaim(Long id) {
         claimRepository.deleteById(id);
    }

    public Claim updateClaim(Long id,Claim claim) {
        claimRepository.save(claim);
        return claim;
    }

}
