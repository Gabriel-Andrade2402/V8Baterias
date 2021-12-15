package com.apiGeneralV8.APIv8Baterias.config.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.apiGeneralV8.APIv8Baterias.config.entities.UserConfigEntity;

public interface UserConfigRepository  extends JpaRepository<UserConfigEntity, Long> {
	UserConfigEntity findByEmail(String email);
	
	//Consulta de igualdade padrão, semelhante ao EQUALS.
	@Query(value = "SELECT * FROM tb_user_config WHERE str_email = :strEmail "
			+ "AND str_password = :strPassword", nativeQuery=true)
	UserConfigEntity find(@Param("strEmail") String strEmail,
			@Param("strPassword") String strPassword);
}
