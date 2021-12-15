package com.apiGeneralV8.APIv8Baterias.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.apiGeneralV8.APIv8Baterias.config.entities.UserConfigEntity;
import com.apiGeneralV8.APIv8Baterias.config.repository.UserConfigRepository;

@Service
public class UserConfigService {
	@Autowired
	private UserConfigRepository userRepository;
	
	public UserConfigEntity saveUser(UserConfigEntity entity) {
		if(findUser(entity)==null) {
			userRepository.save(entity);
			return entity;
		}else {
			return null;
		}
	}
	
	public void deleteUser(UserConfigEntity entity) {
		//Validação de existencia dos critérios mínimos para busca.
		if(entity.getEmail()!=null && entity.getPassword()!=null) {
			UserConfigEntity User= findUser(entity);
			if(User!=null) {
				userRepository.delete(User);
			}
		}
	}
	
	public UserConfigEntity findUser(UserConfigEntity entity) {
		return userRepository.find(entity.getEmail(), entity.getPassword());
	}
	
	public UserConfigEntity updateAdress(UserConfigEntity lastEntity, UserConfigEntity newEntity) {
		//Validação de existencia dos critérios mínimos para busca.
		if(lastEntity.getEmail()!=null && lastEntity.getPassword()!=null) {
			UserConfigEntity entity = findUser(lastEntity);
			if(entity!=null) {
				entity =entity.updateAllData(newEntity);
				userRepository.save(entity);
				return entity;
			}
		}
		return null;
	}
	public List<UserConfigEntity> findAll(){
		return userRepository.findAll();
	}
	
}