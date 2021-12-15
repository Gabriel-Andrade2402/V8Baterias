package com.apiGeneralV8.APIv8Baterias.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.apiGeneralV8.APIv8Baterias.dto.ProductEntityDTO;
import com.apiGeneralV8.APIv8Baterias.entities.ProductEntity;
import com.apiGeneralV8.APIv8Baterias.enums.RolesConfig;
import com.apiGeneralV8.APIv8Baterias.services.ProductService;

@RestController
@RequestMapping(value = "/product")
public class ProductResources {
	@Autowired
	private ProductService service;
	
	@Secured({RolesConfig.ROLE_ADMIN})
	@PostMapping(value="/save")
	public ResponseEntity<String> save(@RequestBody ProductEntity Product){
		if(service.saveProduct(Product)!=null) {
			return ResponseEntity.ok().body("ok");
		}
		return null;
	}
	
	@Secured({RolesConfig.ROLE_ADMIN})
	@PostMapping(value = "/all")
	public ResponseEntity<List<ProductEntityDTO>> findAll() {
		List<ProductEntityDTO> lista= service.findAll();
		return ResponseEntity.ok().body(lista);
	}
	
	@Secured({RolesConfig.ROLE_ADMIN})
	@PostMapping(value="/delete")
	public ResponseEntity<String> delete(@RequestBody ProductEntity Product){
		service.deleteProduct(Product);
		return ResponseEntity.ok().body("ok");
	}
	
	@Secured({RolesConfig.ROLE_ADMIN})
	@PostMapping(value="/update")
	public ResponseEntity<String> update(@RequestBody List<ProductEntity> listProduct){
		ProductEntity lastProduct = listProduct.get(0);
		ProductEntity newProduct = listProduct.get(1);
		if(service.updateProduct(lastProduct,newProduct)!=null) {
			return ResponseEntity.ok().body("ok");
		}
		return null;
	}
}