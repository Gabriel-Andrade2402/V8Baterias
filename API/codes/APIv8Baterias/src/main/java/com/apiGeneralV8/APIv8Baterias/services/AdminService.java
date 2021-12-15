package com.apiGeneralV8.APIv8Baterias.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.apiGeneralV8.APIv8Baterias.dto.AdminEntityDTO;
import com.apiGeneralV8.APIv8Baterias.entities.AdminEntity;
import com.apiGeneralV8.APIv8Baterias.entities.OfficeEntity;
import com.apiGeneralV8.APIv8Baterias.repositorys.AdminRepository;

@Service
public class AdminService {
	@Autowired
	private AdminRepository repository;
	@Autowired
	private OfficeService officeService;
	
	public AdminEntityDTO saveAdmin(AdminEntity entity) {
		//Validação de existencia de registro
		if(findAdmin(entity)==null) {
			//Validação de existencia de cargo
			//Caso true utilizar a mesma FK
			OfficeEntity office = officeService.findOffice(entity.getOffice_id());
			if(office!=null) {
				entity.setOffice_id(office);
			}else {
				officeService.saveOffice(entity.getOffice_id());
				entity.setOffice_id(officeService.findOffice(entity.getOffice_id()));
			}
			repository.save(entity);
			return new AdminEntityDTO().createInstance(entity);
		}else {
			return null;
		}
	}
	
	public void deleteAdmin(AdminEntity entity) {
		if(findAdmin(entity)!=null) {
			repository.delete(findAdmin(entity));
		}
	}
	//Método usado como critério para execução de outros métodos
	private AdminEntity findAdmin(AdminEntity entity) {
		return repository.find(entity.getStrCpf(),entity.getStrCpf());
	}
	
	public AdminEntityDTO updateAdmin(AdminEntity lastEntity, AdminEntity newEntity) {
		if(!lastEntity.equals(newEntity)) {
			AdminEntity entity = findAdmin(lastEntity);
			if(!lastEntity.getOffice_id().getStrNameOffice().equals(
					newEntity.getOffice_id().getStrNameOffice())) {
				officeService.saveOffice(newEntity.getOffice_id());
				OfficeEntity newOffice = officeService.findOffice(newEntity.getOffice_id());
				newEntity.setOffice_id(newOffice);
			}else {
				newEntity.setOffice_id(officeService.findOffice(entity.getOffice_id()));
			}
			if(entity!=null) {
				entity =entity.updateAllData(newEntity);
				repository.save(entity);
				return new AdminEntityDTO().createInstance(entity);
			}
		}
		return null;
	}
	public List<AdminEntityDTO> findAll(){
		return new AdminEntityDTO().createInstanceList(repository.findAll());
	}
}