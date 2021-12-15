package com.apiGeneralV8.APIv8Baterias.config.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.apiGeneralV8.APIv8Baterias.config.entities.RoleConfigEntity;

public interface RoleConfigRepository extends JpaRepository<RoleConfigEntity, Long> {
	RoleConfigEntity findByName(String name);
}
