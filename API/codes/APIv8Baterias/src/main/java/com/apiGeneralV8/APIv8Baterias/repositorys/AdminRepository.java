package com.apiGeneralV8.APIv8Baterias.repositorys;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.apiGeneralV8.APIv8Baterias.entities.AdminEntity;

@Repository
public interface AdminRepository extends JpaRepository<AdminEntity,Long>{
	//Consulta de igualdade padrão, semelhante ao EQUALS.
		@Query(value = "SELECT * FROM tb_admin WHERE str_cpf = :strCpf "
				+ "AND str_mail = :strEmail", nativeQuery=true)
		AdminEntity find(@Param("strCpf") String strRoad,
				@Param("strEmail") String numResidence);
}
