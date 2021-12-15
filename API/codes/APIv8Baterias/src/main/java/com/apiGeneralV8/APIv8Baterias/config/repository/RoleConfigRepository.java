package com.apiGeneralV8.APIv8Baterias.config.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.apiGeneralV8.APIv8Baterias.config.entities.RoleConfigEntity;

public interface RoleConfigRepository extends JpaRepository<RoleConfigEntity, Long> {
	RoleConfigEntity findByName(String name);
	
	@Query(value = "SELECT * FROM tb_role_config WHERE str_name = :strName ", nativeQuery=true)
	RoleConfigEntity find(@Param("strName") String strName);
}
