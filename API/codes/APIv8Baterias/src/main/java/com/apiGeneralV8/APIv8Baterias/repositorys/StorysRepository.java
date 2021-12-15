package com.apiGeneralV8.APIv8Baterias.repositorys;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.apiGeneralV8.APIv8Baterias.entities.StorysEntity;

@Repository
public interface StorysRepository extends JpaRepository<StorysEntity,Long>{
	//Consulta de igualdade padrão, semelhante ao EQUALS.
	@Query(value = "SELECT * FROM tb_storys WHERE"
			+ " str_image_base = :strImageBase "
			+ "AND str_description = :strDescription "
			+ "AND str_title = :strTitle", nativeQuery=true)
	StorysEntity find(@Param("strImageBase") String strImageBase,
			@Param("strDescription") String strDescription,
			@Param("strTitle") String strTitle);
}