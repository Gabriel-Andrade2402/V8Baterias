package com.apiGeneralV8.APIv8Baterias.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.apiGeneralV8.APIv8Baterias.dto.StorysEntityDTO;
import com.apiGeneralV8.APIv8Baterias.entities.StorysEntity;
import com.apiGeneralV8.APIv8Baterias.repositorys.StorysRepository;

@Service
public class StorysService {
	@Autowired
	private StorysRepository repository;
	
	public StorysEntityDTO saveStorys(StorysEntity entity) {
		repository.save(entity);
		return new StorysEntityDTO().createInstance(entity);
	}
	
	public void deleteStorys(StorysEntity entity) {
		repository.delete(entity);
	}
	
	private StorysEntity findStorys(StorysEntity entity) {
		return repository.find(entity.getStrImageBase(),entity.getStrDescription(),
				entity.getStrTitle());
	}
	
	public StorysEntityDTO updateStorys(StorysEntity lastEntity, StorysEntity newEntity) {
		StorysEntity entity = findStorys(lastEntity);
		if(entity!=null) {
			entity =entity.updateAllData(newEntity);
			repository.save(entity);
			return new StorysEntityDTO().createInstance(entity);
		}
		return null;
	}
	public List<StorysEntity> findAll(){
		return repository.findAll();
	}
}
