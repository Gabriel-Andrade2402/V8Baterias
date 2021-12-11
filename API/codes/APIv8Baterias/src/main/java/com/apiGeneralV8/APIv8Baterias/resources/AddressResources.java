package com.apiGeneralV8.APIv8Baterias.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.apiGeneralV8.APIv8Baterias.entities.AddressEntity;
import com.apiGeneralV8.APIv8Baterias.services.AddressService;

@RestController
@RequestMapping(value = "/address")
public class AddressResources {
	@Autowired
	private AddressService service;
	
	@PostMapping(value="/save")
	public ResponseEntity<String> save(@RequestBody AddressEntity address){
		if(service.saveAddress(address)!=null) {
			return ResponseEntity.ok().body("ok");
		}
		return null;
	}
	@PostMapping(value = "/all")
	public ResponseEntity<List<AddressEntity>> findAll() {
		List<AddressEntity> lista= service.findAll();
		return ResponseEntity.ok().body(lista);
	}
	@PostMapping(value="/delete")
	public ResponseEntity<String> delete(@RequestBody AddressEntity address){
		service.deleteAddress(address);
		return ResponseEntity.ok().body("ok");
	}
	@PostMapping(value="/update")
	public ResponseEntity<String> update(@RequestBody AddressEntity lastAdress,@RequestBody AddressEntity newAddress){
		if(service.updateAdress(lastAdress,newAddress)!=null) {
			return ResponseEntity.ok().body("ok");
		}
		return null;
	}
}
