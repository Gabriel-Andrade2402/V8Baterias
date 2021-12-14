package com.apiGeneralV8.APIv8Baterias.services;

import java.util.ArrayList;
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
		if(findAddress(entity)==null) {
			repositoryAddress.save(entity);
			return new AddressEntityDTO().createInstance(entity);
		}else {
			return null;
		}
	}
	
	public void deleteAddress(AddressEntity entity) {
		//Validação de existencia dos critérios mínimos para busca.
		if(entity.getStrRoad()!=null && entity.getNumResidence()!=null
			&& entity.getStrCep()!=null) {
			AddressEntity address= findAddress(entity);
			if(address!=null) {
				repositoryAddress.delete(address);
			}
		}
	}
	
	public AddressEntity findAddress(AddressEntity entity) {
		return repositoryAddress.find(entity.getStrRoad(), entity.getNumResidence(),entity.getStrCep());
	}
	
	public AddressEntityDTO updateAdress(AddressEntity lastEntity, AddressEntity newEntity) {
		//Validação de existencia dos critérios mínimos para busca.
		if(lastEntity.getStrRoad()!=null && lastEntity.getNumResidence()!=null
			&& lastEntity.getStrCep()!=null) {
			AddressEntity entity = findAddress(lastEntity);
			if(entity!=null) {
				entity =entity.updateAllData(newEntity);
				repositoryAddress.save(entity);
				return new AddressEntityDTO().createInstance(entity);
			}
		}
		return null;
	}
	public List<AddressEntity> findAll(){
		return repositoryAddress.findAll();
	}
	
	//Método semelhante ao findAddress usado para pegar uma lista sem id e retornar com ID
	//Caso algum endereço da lista não exista no banco ele é criado.
	public List<AddressEntity> getListAddress(List<AddressEntity> list){
		List<AddressEntity> listAddress = new ArrayList<>();
		for(AddressEntity add:list) {
			AddressEntity address =findAddress(add);
			if(address!=null) {
				listAddress.add(findAddress(address));
			}else {
				saveAddress(add);
				listAddress.add(findAddress(add));
			}
		}
		return listAddress;
	}
}
