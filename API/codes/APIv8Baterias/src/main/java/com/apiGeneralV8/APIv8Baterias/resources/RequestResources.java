package com.apiGeneralV8.APIv8Baterias.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.apiGeneralV8.APIv8Baterias.dto.RequestEntityDTO;
import com.apiGeneralV8.APIv8Baterias.entities.RequestEntity;
import com.apiGeneralV8.APIv8Baterias.enums.RolesConfig;
import com.apiGeneralV8.APIv8Baterias.services.RequestService;

@RestController
@RequestMapping(value = "/request")
public class RequestResources {
	@Autowired
	private RequestService service;
	
	@Secured({RolesConfig.ROLE_ADMIN})
	@PostMapping(value="/save")
	public ResponseEntity<String> save(@RequestBody RequestEntity Request){
		if(service.saveRequest(Request)!=null) {
			return ResponseEntity.ok().body("ok");
		}
		return null;
	}
	
	@Secured({RolesConfig.ROLE_ADMIN})
	@PostMapping(value = "/all")
	public ResponseEntity<List<RequestEntityDTO>> findAll() {
		List<RequestEntityDTO> lista= service.findAll();
		return ResponseEntity.ok().body(lista);
	}
	
	@Secured({RolesConfig.ROLE_ADMIN})
	@PostMapping(value="/delete")
	public ResponseEntity<String> delete(@RequestBody RequestEntity Request){
		service.deleteRequest(Request);
		return ResponseEntity.ok().body("ok");
	}
	
	@Secured({RolesConfig.ROLE_ADMIN})
	@PostMapping(value="/update")
	public ResponseEntity<String> update(@RequestBody List<RequestEntity> listRequest){
		RequestEntity lastRequest = listRequest.get(0);
		RequestEntity newRequest = listRequest.get(1);
		if(service.updateRequest(lastRequest,newRequest)!=null) {
			return ResponseEntity.ok().body("ok");
		}
		return null;
	}
}
