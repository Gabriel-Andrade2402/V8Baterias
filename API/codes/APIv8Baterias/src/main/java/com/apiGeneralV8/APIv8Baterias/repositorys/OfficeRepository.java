package com.apiGeneralV8.APIv8Baterias.repositorys;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.apiGeneralV8.APIv8Baterias.entities.OfficeEntity;

@Repository
public interface OfficeRepository extends JpaRepository<OfficeEntity,Long>{
	//Consulta de igualdade padrão, semelhante ao EQUALS.
	@Query(value = "SELECT * FROM tb_office WHERE str_name_office = :strNameOffice", nativeQuery=true)
	OfficeEntity find(@Param("strNameOffice") String strNameOffice);
}
