package com.apiGeneralV8.APIv8Baterias.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.apiGeneralV8.APIv8Baterias.dto.ServiceEntityDTO;
import com.apiGeneralV8.APIv8Baterias.entities.ServiceEntity;
import com.apiGeneralV8.APIv8Baterias.enums.RolesConfig;
import com.apiGeneralV8.APIv8Baterias.services.ServiceService;

@RestController
@RequestMapping(value = "/service")
public class ServiceResources {
	@Autowired
	private ServiceService service;
	
	@Secured({RolesConfig.ROLE_ADMIN})
	@PostMapping(value="/save")
	public ResponseEntity<String> save(@RequestBody ServiceEntity Request){
		if(service.saveService(Request)!=null) {
			return ResponseEntity.ok().body("ok");
		}
		return null;
	}
	@Secured({RolesConfig.ROLE_ADMIN})
	@PostMapping(value = "/all")
	public ResponseEntity<List<ServiceEntityDTO>> findAll() {
		List<ServiceEntityDTO> lista= service.findAll();
		return ResponseEntity.ok().body(lista);
	}
	@Secured({RolesConfig.ROLE_ADMIN})
	@PostMapping(value="/delete")
	public ResponseEntity<String> delete(@RequestBody ServiceEntity Request){
		service.deleteService(Request);
		return ResponseEntity.ok().body("ok");
	}
	@Secured({RolesConfig.ROLE_ADMIN})
	@PostMapping(value="/update")
	public ResponseEntity<String> update(@RequestBody List<ServiceEntity> listRequest){
		ServiceEntity lastRequest = listRequest.get(0);
		ServiceEntity newRequest = listRequest.get(1);
		if(service.updateService(lastRequest,newRequest)!=null) {
			return ResponseEntity.ok().body("ok");
		}
		return null;
	}
}
