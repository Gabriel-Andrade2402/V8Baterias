package com.apiGeneralV8.APIv8Baterias.repositorys;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.apiGeneralV8.APIv8Baterias.entities.ProductEntity;

@Repository
public interface ProductRepository extends JpaRepository<ProductEntity,Long>{
	//Consulta de igualdade padrão, semelhante ao EQUALS.
	@Query(value = "SELECT * FROM tb_product WHERE str_code_product = :strCodeProduct", nativeQuery=true)
	ProductEntity find(@Param("strCodeProduct") String strCodeProduct);
	
	@Query(value = "SELECT * FROM tb_product WHERE num_quantity > 1 AND bol_product_operating = true", nativeQuery=true)
	List<ProductEntity> findCommerce();
}
