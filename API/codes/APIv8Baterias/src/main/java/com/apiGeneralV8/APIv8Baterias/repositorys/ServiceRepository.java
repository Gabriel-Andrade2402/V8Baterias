package com.apiGeneralV8.APIv8Baterias.repositorys;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.apiGeneralV8.APIv8Baterias.entities.ServiceEntity;

@Repository
public interface ServiceRepository extends JpaRepository<ServiceEntity,Long>{
	//Consulta de igualdade padrão, semelhante ao EQUALS.
	@Query(value = "SELECT * FROM tb_service WHERE str_name_service = :strNameService", nativeQuery=true)
	ServiceEntity find(@Param("strNameService") String strNameService);
}
