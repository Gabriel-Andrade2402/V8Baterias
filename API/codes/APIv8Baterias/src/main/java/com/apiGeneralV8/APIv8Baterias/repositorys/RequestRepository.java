package com.apiGeneralV8.APIv8Baterias.repositorys;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.apiGeneralV8.APIv8Baterias.entities.RequestEntity;

@Repository
public interface RequestRepository extends JpaRepository<RequestEntity,Long>{
	//Consulta de igualdade padrão, semelhante ao EQUALS.
	@Query(value = "SELECT * FROM tb_request WHERE str_code_request = :strCodeRequest", nativeQuery=true)
	RequestEntity find(@Param("strCodeRequest") String strCodeRequest);
	
	@Query(value = "SELECT * FROM tb_request WHERE client_id = :clientId", nativeQuery=true)
	List<RequestEntity> findRequestsClient(@Param("clientId") Long clientId);
}