package com.apiGeneralV8.APIv8Baterias.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.apiGeneralV8.APIv8Baterias.dto.AddressEntityDTO;
import com.apiGeneralV8.APIv8Baterias.entities.AddressEntity;
import com.apiGeneralV8.APIv8Baterias.repositorys.AddressRepository;

@Service
public class AddressService {
	@Autowired
	private AddressRepository repositoryAddress;
	
	public AddressEntityDTO saveAddress(AddressEntity entity) {
		repositoryAddress.save(entity);
		return new AddressEntityDTO().createInstance(entity);
	}
	
	public void deleteAddress(AddressEntity entity) {
		repositoryAddress.delete(entity);
	}
	
	private AddressEntity findAddress(AddressEntity entity) {
		return repositoryAddress.find(entity.getStrRoad(), entity.getNumResidence(),entity.getStrCep());
	}
	
	public AddressEntityDTO updateAdress(AddressEntity lastEntity, AddressEntity newEntity) {
		AddressEntity entity = findAddress(lastEntity);
		if(entity!=null) {
			entity =entity.updateAllData(newEntity);
			repositoryAddress.save(entity);
			return new AddressEntityDTO().createInstance(entity);
		}
		return null;
	}
	public List<AddressEntity> findAll(){
		return repositoryAddress.findAll();
	}
}
