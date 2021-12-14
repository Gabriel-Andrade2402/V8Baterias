package com.apiGeneralV8.APIv8Baterias.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.apiGeneralV8.APIv8Baterias.dto.ClientEntityDTO;
import com.apiGeneralV8.APIv8Baterias.entities.ClientEntity;
import com.apiGeneralV8.APIv8Baterias.repositorys.ClientRepository;

@Service
public class ClientService {
	@Autowired
	private ClientRepository repository;
	
	public ClientEntityDTO saveClient(ClientEntity entity) {
		repository.save(entity);
		return new ClientEntityDTO().createInstance(entity);
	}
	
	public void deleteClient(ClientEntity entity) {
		repository.delete(entity);
	}
	
	private ClientEntity findClient(ClientEntity entity) {
		return repository.find(entity.getStrCpf(),entity.getStrEmail());
	}
	
	public ClientEntityDTO updateClient(ClientEntity lastEntity, ClientEntity newEntity) {
		ClientEntity entity = findClient(lastEntity);
		if(entity!=null) {
			entity =entity.updateAllData(newEntity);
			repository.save(entity);
			return new ClientEntityDTO().createInstance(entity);
		}
		return null;
	}
	public List<ClientEntity> findAll(){ 
		return repository.findAll();
	}
}
