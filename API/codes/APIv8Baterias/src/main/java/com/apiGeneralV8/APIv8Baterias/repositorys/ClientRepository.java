package com.apiGeneralV8.APIv8Baterias.repositorys;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.apiGeneralV8.APIv8Baterias.entities.ClientEntity;

@Repository
public interface ClientRepository extends JpaRepository<ClientEntity,Long>{
	//Consulta de igualdade padrão, semelhante ao EQUALS.
	@Query(value = "SELECT * FROM tb_client WHERE str_cpf = :strCpf "
			+ "AND str_mail = :strEmail", nativeQuery=true)
	ClientEntity find(@Param("strCpf") String strCpf,
			@Param("strEmail") String strEmail);
	
	@Query(value = "SELECT * FROM tb_client WHERE str_password = :strPassword "
			+ "AND str_mail = :strEmail", nativeQuery=true)
	ClientEntity login(@Param("strPassword") String strPassword,
			@Param("strEmail") String strEmail);
	
}
