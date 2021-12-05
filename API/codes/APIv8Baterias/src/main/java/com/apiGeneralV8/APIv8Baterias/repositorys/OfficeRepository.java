package com.apiGeneralV8.APIv8Baterias.repositorys;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.apiGeneralV8.APIv8Baterias.entities.OfficeEntity;

@Repository
public interface OfficeRepository extends JpaRepository<OfficeEntity,Long>{

}
