package com.apiGeneralV8.APIv8Baterias.repositorys;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.apiGeneralV8.APIv8Baterias.entities.ConfigEntity;

@Repository
public interface ConfigRepository extends JpaRepository<ConfigEntity,Long>{
	//Consulta de igualdade padrão, semelhante ao EQUALS.
	@Query(value = "SELECT * FROM tb_config WHERE bol_receive_promotions = :bolReceivePromotions "
			+ "AND str_receive_updating_price = :strReceiveUpdatingPrice ", nativeQuery=true)
	ConfigEntity find(@Param("bolReceivePromotions") Boolean bolReceivePromotions,
			@Param("strReceiveUpdatingPrice") Boolean strReceiveUpdatingPrice);
}
