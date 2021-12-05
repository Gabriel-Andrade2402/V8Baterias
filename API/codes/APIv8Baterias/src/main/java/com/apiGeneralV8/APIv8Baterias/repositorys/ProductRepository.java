package com.apiGeneralV8.APIv8Baterias.repositorys;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.apiGeneralV8.APIv8Baterias.entities.ProductEntity;

@Repository
public interface ProductRepository extends JpaRepository<ProductEntity,Long>{

}
