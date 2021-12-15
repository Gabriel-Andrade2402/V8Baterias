package com.apiGeneralV8.APIv8Baterias.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.apiGeneralV8.APIv8Baterias.dto.AddressEntityDTO;
import com.apiGeneralV8.APIv8Baterias.entities.AddressEntity;
import com.apiGeneralV8.APIv8Baterias.enums.RolesConfig;
import com.apiGeneralV8.APIv8Baterias.services.AddressService;

@RestController
@RequestMapping(value = "/address")
public class AddressResources {
	@Autowired
	private AddressService service;
	
	@Secured({RolesConfig.ROLE_ADMIN})
	@PostMapping(value="/save")
	public ResponseEntity<String> save(@RequestBody AddressEntity address){
		if(service.saveAddress(address)!=null) {
			return ResponseEntity.ok().body("ok");
		}
		return null;
	}
	@Secured({RolesConfig.ROLE_ADMIN})
	@PostMapping(value = "/all")
	public ResponseEntity<List<AddressEntityDTO>> findAll() {
		List<AddressEntityDTO> lista= service.findAll();
		return ResponseEntity.ok().body(lista);
	}
	@Secured({RolesConfig.ROLE_ADMIN})
	@PostMapping(value="/delete")
	public ResponseEntity<String> delete(@RequestBody AddressEntity address){
		service.deleteAddress(address);
		return ResponseEntity.ok().body("ok");
	}
	@Secured({RolesConfig.ROLE_ADMIN})
	@PostMapping(value="/update")
	public ResponseEntity<String> update(@RequestBody List<AddressEntity> listAddress){
		AddressEntity lastAddress = listAddress.get(0);
		AddressEntity newAddress = listAddress.get(1);
		if(service.updateAdress(lastAddress,newAddress)!=null) {
			return ResponseEntity.ok().body("ok");
		}
		return null;
	}
}