package com.apiGeneralV8.APIv8Baterias.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.apiGeneralV8.APIv8Baterias.dto.ProductEntityDTO;
import com.apiGeneralV8.APIv8Baterias.entities.ProductEntity;
import com.apiGeneralV8.APIv8Baterias.repositorys.ProductRepository;

@Service
public class ProductService {
	@Autowired
	private ProductRepository repository;
	
	
	public ProductEntityDTO saveProduct(ProductEntity entity) {
		ProductEntity prod = findProduct(entity);
		if(prod==null) {
			repository.save(entity);
			return new ProductEntityDTO().createInstance(entity);
		}else {
			return null;
		}
	}
	
	public void deleteProduct(ProductEntity entity) {
		ProductEntity prod = findProduct(entity);
		if(prod!=null) {
			repository.delete(prod);
		}
	}
	
	public ProductEntity findProduct(ProductEntity entity) {
		return repository.find(entity.getStrNameProduct());
	}
	
	public ProductEntityDTO updateProduct(ProductEntity lastEntity, ProductEntity newEntity) {
		ProductEntity entity = findProduct(lastEntity);
		if(entity!=null) {
			entity =entity.updateAllData(newEntity);
			repository.save(entity);
			return new ProductEntityDTO().createInstance(entity);
		}
		return null;
	}
	public List<ProductEntityDTO> findAll(){
		return new ProductEntityDTO().createInstanceList(repository.findAll());
	}
}
