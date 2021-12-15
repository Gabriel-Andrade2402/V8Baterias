package com.apiGeneralV8.APIv8Baterias.config.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.apiGeneralV8.APIv8Baterias.config.entities.UserConfigEntity;

public interface UserConfigRepository  extends JpaRepository<UserConfigEntity, Long> {
	UserConfigEntity findByEmail(String email);
}
