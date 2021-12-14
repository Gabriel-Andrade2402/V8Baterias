package com.apiGeneralV8.APIv8Baterias.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.apiGeneralV8.APIv8Baterias.dto.RequestEntityDTO;
import com.apiGeneralV8.APIv8Baterias.entities.AddressEntity;
import com.apiGeneralV8.APIv8Baterias.entities.ClientEntity;
import com.apiGeneralV8.APIv8Baterias.entities.ProductEntity;
import com.apiGeneralV8.APIv8Baterias.entities.RequestEntity;
import com.apiGeneralV8.APIv8Baterias.entities.ServiceEntity;
import com.apiGeneralV8.APIv8Baterias.repositorys.ClientRepository;
import com.apiGeneralV8.APIv8Baterias.repositorys.RequestRepository;

@Service
public class RequestService {
	@Autowired
	private RequestRepository repository;
	@Autowired
	private ClientRepository clientRepository;
	@Autowired
	private ProductService productService;
	@Autowired
	private ServiceService serviceService;
	@Autowired
	private AddressService addressService;
	
	public RequestEntityDTO saveRequest(RequestEntity entity) {
		if(findRequest(entity)==null) {			
			ClientEntity client = clientRepository.find(entity.getClient_id().getStrCpf(),entity.getClient_id().getStrEmail());
			AddressEntity address = addressService.findAddress(entity.getAddress_id());
			ProductEntity product = null;
			ServiceEntity service = null;
			if(entity.getProduct_id()!=null) {
				product = productService.findProduct(entity.getProduct_id());
				if(client!=null && address !=null && product !=null) {
					entity.setAddress_id(address);
					entity.setClient_id(client);
					entity.setProduct_id(product);
				}
			}else {
				service = serviceService.findService(entity.getService_id());
				if(client!=null && address !=null && service!=null) {
					entity.setAddress_id(address);
					entity.setClient_id(client);
					entity.setService_id(service);
				}
			}
			repository.save(entity);
			return new RequestEntityDTO().createInstance(entity);
		}else {
			return null;
		}
	}
	
	public void deleteRequest(RequestEntity entity) {
		RequestEntity request = findRequest(entity);
		if(request!=null) {
			repository.delete(request);
		}
	}
	
	private RequestEntity findRequest(RequestEntity entity) {
		return repository.find(entity.getStrCodeRequest());
	}
	
	public RequestEntityDTO updateRequest(RequestEntity lastEntity, RequestEntity newEntity) {
		RequestEntity entity = findRequest(lastEntity);
		if(entity!=null) {
			ClientEntity client = clientRepository.find(entity.getClient_id().getStrCpf(),entity.getClient_id().getStrEmail());
			AddressEntity address = addressService.findAddress(newEntity.getAddress_id());
			ProductEntity product = null;
			ServiceEntity service = null;
			if(newEntity.getProduct_id()!=null) {
				product = productService.findProduct(newEntity.getProduct_id());
				if(client!=null && address !=null && product !=null) {
					newEntity.setAddress_id(address);
					newEntity.setClient_id(client);
					newEntity.setProduct_id(product);
				}
			}else {
				service = serviceService.findService(newEntity.getService_id());
				if(client!=null && address !=null && service!=null) {
					newEntity.setAddress_id(address);
					newEntity.setClient_id(client);
					newEntity.setService_id(service);
				}
			}
			entity =entity.updateAllData(newEntity);
			repository.save(entity);
			return new RequestEntityDTO().createInstance(entity);
		}
		return null;
	}
	public List<RequestEntity> findAll(){
		return repository.findAll();
	}
	public List<RequestEntity> findRequestsClient(Long id){
		return repository.findRequestsClient(id);
	}
}
