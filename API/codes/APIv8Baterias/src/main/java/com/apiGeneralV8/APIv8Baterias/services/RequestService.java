package com.apiGeneralV8.APIv8Baterias.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.apiGeneralV8.APIv8Baterias.dto.RequestEntityDTO;
import com.apiGeneralV8.APIv8Baterias.entities.RequestEntity;
import com.apiGeneralV8.APIv8Baterias.repositorys.RequestRepository;

@Service
public class RequestService {
	@Autowired
	private RequestRepository repository;
	
	public RequestEntityDTO saveRequest(RequestEntity entity) {
		repository.save(entity);
		return new RequestEntityDTO().createInstance(entity);
	}
	
	public void deleteRequest(RequestEntity entity) {
		repository.delete(entity);
	}
	
	private RequestEntity findRequest(RequestEntity entity) {
		return repository.find(entity.getStrCodeRequest());
	}
	
	public RequestEntityDTO updateRequest(RequestEntity lastEntity, RequestEntity newEntity) {
		RequestEntity entity = findRequest(lastEntity);
		if(entity!=null) {
			entity =entity.updateAllData(newEntity);
			repository.save(entity);
			return new RequestEntityDTO().createInstance(entity);
		}
		return null;
	}
	public List<RequestEntity> findAll(){
		return repository.findAll();
	}
}
