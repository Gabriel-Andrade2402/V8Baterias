package com.apiGeneralV8.APIv8Baterias.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.apiGeneralV8.APIv8Baterias.entities.ProductEntity;
import com.apiGeneralV8.APIv8Baterias.services.ProductService;

@RestController
@RequestMapping(value = "/product")
public class ProductResources {
	@Autowired
	private ProductService service;
	
	@PostMapping(value="/save")
	public ResponseEntity<String> save(@RequestBody ProductEntity Product){
		if(service.saveProduct(Product)!=null) {
			return ResponseEntity.ok().body("ok");
		}
		return null;
	}
	@PostMapping(value = "/all")
	public ResponseEntity<List<ProductEntity>> findAll() {
		List<ProductEntity> lista= service.findAll();
		return ResponseEntity.ok().body(lista);
	}
	@PostMapping(value="/delete")
	public ResponseEntity<String> delete(@RequestBody ProductEntity Product){
		service.deleteProduct(Product);
		return ResponseEntity.ok().body("ok");
	}
	@PostMapping(value="/update")
	public ResponseEntity<String> update(@RequestBody ProductEntity lastProduct,@RequestBody ProductEntity newProduct){
		if(service.updateProduct(lastProduct,newProduct)!=null) {
			return ResponseEntity.ok().body("ok");
		}
		return null;
	}
}
