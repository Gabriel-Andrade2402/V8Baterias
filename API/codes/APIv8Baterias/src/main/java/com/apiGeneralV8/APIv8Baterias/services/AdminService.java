package com.apiGeneralV8.APIv8Baterias.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.apiGeneralV8.APIv8Baterias.dto.AdminEntityDTO;
import com.apiGeneralV8.APIv8Baterias.entities.AdminEntity;
import com.apiGeneralV8.APIv8Baterias.repositorys.AdminRepository;

@Service
public class AdminService {
	@Autowired
	private AdminRepository repository;
	
	public AdminEntityDTO saveAdmin(AdminEntity entity) {
		repository.save(entity);
		return new AdminEntityDTO().createInstance(entity);
	}
	
	public void deleteAdmin(AdminEntity entity) {
		repository.delete(entity);
	}
	
	private AdminEntity findAdmin(AdminEntity entity) {
		return repository.find(entity.getStrCpf(), entity.getStrCpf());
	}
	
	public AdminEntityDTO updateAdmin(AdminEntity lastEntity, AdminEntity newEntity) {
		AdminEntity entity = findAdmin(lastEntity);
		if(entity!=null) {
			entity =entity.updateAllData(newEntity);
			repository.save(entity);
			return new AdminEntityDTO().createInstance(entity);
		}
		return null;
	}
	public List<AdminEntity> findAll(){
		return repository.findAll();
	}
}
