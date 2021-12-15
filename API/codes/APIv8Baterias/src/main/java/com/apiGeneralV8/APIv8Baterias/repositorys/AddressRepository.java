package com.apiGeneralV8.APIv8Baterias.repositorys;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.apiGeneralV8.APIv8Baterias.entities.AddressEntity;

@Repository
public interface AddressRepository extends JpaRepository<AddressEntity,Long>{
	
	//Consulta de igualdade padrão, semelhante ao EQUALS.
	@Query(value = "SELECT * FROM tb_address WHERE str_road = :strRoad "
			+ "AND num_residence = :numResidence "
			+ "AND str_cep = :strCep", nativeQuery=true)
	AddressEntity find(@Param("strRoad") String strRoad,
			@Param("numResidence") Integer numResidence,
			@Param("strCep") String strCep);
	
}