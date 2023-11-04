package com.example.claimms.Claim;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ClaimRepository extends JpaRepository<Claim, Long> {
    @Query("select c from Claim c where c.subject like :subject")
    public Page<Claim> findClaimModelBySubject(@Param("subject") String n, Pageable pageable);
}
