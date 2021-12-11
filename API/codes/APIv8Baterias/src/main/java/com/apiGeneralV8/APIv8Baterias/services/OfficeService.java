package com.apiGeneralV8.APIv8Baterias.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.apiGeneralV8.APIv8Baterias.dto.OfficeEntityDTO;
import com.apiGeneralV8.APIv8Baterias.entities.OfficeEntity;
import com.apiGeneralV8.APIv8Baterias.repositorys.OfficeRepository;

@Service
public class OfficeService {
	@Autowired
	private OfficeRepository repository;
	
	public OfficeEntityDTO saveOffice(OfficeEntity entity) {
		repository.save(entity);
		return new OfficeEntityDTO().createInstance(entity);
	}
	
	public void deleteOffice(OfficeEntity entity) {
		repository.delete(entity);
	}
	
	private OfficeEntity findOffice(OfficeEntity entity) {
		return repository.find(entity.getStrNameOffice());
	}
	
	public OfficeEntityDTO updateOffice(OfficeEntity lastEntity, OfficeEntity newEntity) {
		OfficeEntity entity = findOffice(lastEntity);
		if(entity!=null) {
			entity =entity.updateAllData(newEntity);
			repository.save(entity);
			return new OfficeEntityDTO().createInstance(entity);
		}
		return null;
	}
	public List<OfficeEntity> findAll(){
		return repository.findAll();
	}
}
