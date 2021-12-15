package com.apiGeneralV8.APIv8Baterias.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.apiGeneralV8.APIv8Baterias.config.entities.RoleConfigEntity;
import com.apiGeneralV8.APIv8Baterias.config.repository.RoleConfigRepository;

@Service
public class ConfigRoleService {
	@Autowired
	private RoleConfigRepository roleRepository;
	
	public RoleConfigEntity saveRole(RoleConfigEntity entity) {
		if(findRole(entity)==null) {
			roleRepository.save(entity);
			return entity;
		}else {
			return null;
		}
	}
	
	public void deleteRole(RoleConfigEntity entity) {
		//Validação de existencia dos critérios mínimos para busca.
		if(entity.getName()!=null) {
			RoleConfigEntity Role= findRole(entity);
			if(Role!=null) {
				roleRepository.delete(Role);
			}
		}
	}
	
	public RoleConfigEntity findRole(RoleConfigEntity entity) {
		return roleRepository.find(entity.getName());
	}
	
	public RoleConfigEntity updateAdress(RoleConfigEntity lastEntity, RoleConfigEntity newEntity) {
		//Validação de existencia dos critérios mínimos para busca.
		if(lastEntity.getName()!=null) {
			RoleConfigEntity entity = findRole(lastEntity);
			if(entity!=null) {
				entity =entity.updateAllData(newEntity);
				roleRepository.save(entity);
				return entity;
			}
		}
		return null;
	}
	public List<RoleConfigEntity> findAll(){
		return roleRepository.findAll();
	}
}
