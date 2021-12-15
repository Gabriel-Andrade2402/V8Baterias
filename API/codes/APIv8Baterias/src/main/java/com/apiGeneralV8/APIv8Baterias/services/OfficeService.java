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
		if(findOffice(entity)==null) {
			repository.save(entity);
			return new OfficeEntityDTO().createInstance(entity);
		}
		return null;
	}
	
	public void deleteOffice(OfficeEntity entity) {
		OfficeEntity office = findOffice(entity);
		if(office!=null) {
			repository.delete(office);
		}
	}
	
	public OfficeEntity findOffice(OfficeEntity entity) {
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
	public List<OfficeEntityDTO> findAll(){
		return new OfficeEntityDTO().createInstanceList(repository.findAll());
	}
}
