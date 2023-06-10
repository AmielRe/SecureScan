package com.amiel.usermanagementservice.repository;

import com.amiel.usermanagementservice.models.ERole;
import com.amiel.usermanagementservice.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}