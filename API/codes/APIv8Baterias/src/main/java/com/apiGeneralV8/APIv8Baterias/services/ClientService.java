package com.apiGeneralV8.APIv8Baterias.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.apiGeneralV8.APIv8Baterias.config.entities.UserConfigEntity;
import com.apiGeneralV8.APIv8Baterias.dto.ClientEntityDTO;
import com.apiGeneralV8.APIv8Baterias.dto.RequestEntityDTO;
import com.apiGeneralV8.APIv8Baterias.entities.AddressEntity;
import com.apiGeneralV8.APIv8Baterias.entities.ClientEntity;
import com.apiGeneralV8.APIv8Baterias.entities.ConfigEntity;
import com.apiGeneralV8.APIv8Baterias.entities.RequestEntity;
import com.apiGeneralV8.APIv8Baterias.repositorys.ClientRepository;

@Service
public class ClientService {
	@Autowired
	private ClientRepository repository;
	@Autowired
	private AddressService addressService;
	@Autowired
	private ConfigService configService;
	@Autowired
	private RequestService requestService;
	@Autowired
	private UserConfigService userConfigService;
	
	public ClientEntityDTO saveClient(ClientEntity entity) {
		List<AddressEntity> listAddress = new ArrayList<>();
		listAddress = addressService.getListAddress(entity.getListAddress());
		if(listAddress.size()>1) {
			entity.setListAddress(listAddress);
		}
		ConfigEntity config = configService.findConfig(entity.getConfig_id());
		if(config!=null) {
			entity.setConfig_id(config);
		}else {
			configService.saveConfig(entity.getConfig_id());
			entity.setConfig_id(configService.findConfig(entity.getConfig_id()));
		}
		if(findClient(entity)==null) {
			repository.save(entity);
			return new ClientEntityDTO().createInstance(entity);
		}
		return null;
	}
	
	public void deleteClient(ClientEntity entity) {
		if(findClient(entity)!=null) {
			repository.delete(findClient(entity));
		}
	}
	
	public ClientEntity findClient(ClientEntity entity) {
		return repository.find(entity.getStrCpf(),entity.getStrEmail());
	}
	
	public ClientEntityDTO findClientDTO(ClientEntity entity) {
		return new ClientEntityDTO().createInstance(repository.find(entity.getStrCpf(),entity.getStrEmail()));
	}
	
	public ClientEntityDTO updateClient(ClientEntity lastEntity, ClientEntity newEntity) {
		ClientEntity entity = findClient(lastEntity);
		List<AddressEntity> listAddress = new ArrayList<>();
		listAddress = addressService.getListAddress(newEntity.getListAddress());
		if(listAddress.size()>1) {
			newEntity.setListAddress(listAddress);
		}
		ConfigEntity config = configService.findConfig(newEntity.getConfig_id());
		if(config!=null) {
			newEntity.setConfig_id(config);
		}else {
			configService.saveConfig(newEntity.getConfig_id());
			newEntity.setConfig_id(configService.findConfig(newEntity.getConfig_id()));
		}
		if(entity!=null) {
			entity =entity.updateAllData(newEntity);
			repository.save(entity);
			return new ClientEntityDTO().createInstance(entity);
		}
		return null;
	}
	public List<ClientEntityDTO> findAll(){ 
		return new ClientEntityDTO().createInstanceList(repository.findAll());
	}
	
	public List<RequestEntityDTO> findRequests(ClientEntity entity){
		ClientEntity clientEntity = repository.login(entity.getStrPassword(),entity.getStrEmail());
		if(clientEntity!=null) {
			List<RequestEntity> listRequests = requestService.findRequestsClient(clientEntity.getIdClient());
			if(listRequests!=null) {
				ClientEntityDTO client = new ClientEntityDTO().createInstance(clientEntity);
				return client.getListRequest();
			}
		}
		return null;
	}
}