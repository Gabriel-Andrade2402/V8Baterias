package com.apiGeneralV8.APIv8Baterias.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.apiGeneralV8.APIv8Baterias.dto.ServiceEntityDTO;
import com.apiGeneralV8.APIv8Baterias.entities.ServiceEntity;
import com.apiGeneralV8.APIv8Baterias.repositorys.ServiceRepository;

@Service
public class ServiceService {
	@Autowired
	private ServiceRepository repository;
	
	public ServiceEntityDTO saveService(ServiceEntity entity) {
		repository.save(entity);
		return new ServiceEntityDTO().createInstance(entity);
	}
	
	public void deleteService(ServiceEntity entity) {
		repository.delete(entity);
	}
	
	private ServiceEntity findService(ServiceEntity entity) {
		return repository.find(entity.getStrNameService());
	}
	
	public ServiceEntityDTO updateService(ServiceEntity lastEntity, ServiceEntity newEntity) {
		ServiceEntity entity = findService(lastEntity);
		if(entity!=null) {
			entity =entity.updateAllData(newEntity);
			repository.save(entity);
			return new ServiceEntityDTO().createInstance(entity);
		}
		return null;
	}
	public List<ServiceEntity> findAll(){
		return repository.findAll();
	}
		
}
