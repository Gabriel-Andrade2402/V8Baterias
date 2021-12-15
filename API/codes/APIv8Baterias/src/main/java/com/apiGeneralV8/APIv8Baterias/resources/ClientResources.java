package com.apiGeneralV8.APIv8Baterias.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.apiGeneralV8.APIv8Baterias.dto.ClientEntityDTO;
import com.apiGeneralV8.APIv8Baterias.dto.RequestEntityDTO;
import com.apiGeneralV8.APIv8Baterias.entities.ClientEntity;
import com.apiGeneralV8.APIv8Baterias.enums.RolesConfig;
import com.apiGeneralV8.APIv8Baterias.services.ClientService;

@RestController
@RequestMapping(value = "/client")
public class ClientResources {
	@Autowired
	private ClientService service;
	
	@Secured({RolesConfig.ROLE_ADMIN})
	@PostMapping(value="/save")
	public ResponseEntity<String> save(@RequestBody ClientEntity Client){
		if(service.saveClient(Client)!=null) {
			return ResponseEntity.ok().body("ok");
		}else {
			return ResponseEntity.ok().body("exists");
		}
	}
	@Secured({RolesConfig.ROLE_ADMIN})
	@PostMapping(value = "/all")
	public ResponseEntity<List<ClientEntityDTO>> findAll() {
		List<ClientEntityDTO> lista= service.findAll();
		return ResponseEntity.ok().body(lista);
	}
	
	@Secured({RolesConfig.ROLE_ADMIN})
	@PostMapping(value="/delete")
	public ResponseEntity<String> delete(@RequestBody ClientEntity Client){
		service.deleteClient(Client);
		return ResponseEntity.ok().body("ok");
	}
	
	@Secured({RolesConfig.ROLE_ADMIN})
	@PostMapping(value="/update")
	public ResponseEntity<String> update(@RequestBody List<ClientEntity> listClient){
		ClientEntity lastClient = listClient.get(0);
		ClientEntity newClient = listClient.get(1);
		if(service.updateClient(lastClient,newClient)!=null) {
			return ResponseEntity.ok().body("ok");
		}
		return null;
	}
	@Secured({RolesConfig.ROLE_ADMIN})
	@PostMapping(value="/getRequests")
	public ResponseEntity<List<RequestEntityDTO>> findRequests(@RequestBody ClientEntity entity){
		List<RequestEntityDTO> list = service.findRequests(entity);
		if(list!=null) {
			return ResponseEntity.ok().body(list);
		}else {
			return ResponseEntity.ok().body(null);
		}
	}
}