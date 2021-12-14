package com.apiGeneralV8.APIv8Baterias.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.apiGeneralV8.APIv8Baterias.dto.ConfigEntityDTO;
import com.apiGeneralV8.APIv8Baterias.entities.ConfigEntity;
import com.apiGeneralV8.APIv8Baterias.repositorys.ConfigRepository;

@Service
public class ConfigService {
	@Autowired
	private ConfigRepository repository;
	
	public ConfigEntityDTO saveConfig(ConfigEntity entity) {
		ConfigEntity config = findConfig(entity);
		if(config==null) {
			repository.save(entity);
			return new ConfigEntityDTO().createInstance(entity);
		}
		return null;
	}
	
	public void deleteConfig(ConfigEntity entity) {
		ConfigEntity config = findConfig(entity);
		if(config!=null) {
			repository.delete(config);
		}
	}
	
	public ConfigEntity findConfig(ConfigEntity entity) {
		return repository.find(entity.getBolReceivePromotions(),entity.getBolReceiveUpdatingPrice());
	}
	
	public ConfigEntityDTO updateConfig(ConfigEntity lastEntity, ConfigEntity newEntity) {
		ConfigEntity entity = findConfig(lastEntity);
		if(entity!=null) {
			entity =entity.updateAllData(newEntity);
			repository.save(entity);
			return new ConfigEntityDTO().createInstance(entity);
		}
		return null;
	}
	public List<ConfigEntity> findAll(){
		return repository.findAll();
	}
}
