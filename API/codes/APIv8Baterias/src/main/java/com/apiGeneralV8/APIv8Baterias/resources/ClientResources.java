package com.apiGeneralV8.APIv8Baterias.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.apiGeneralV8.APIv8Baterias.entities.ClientEntity;
import com.apiGeneralV8.APIv8Baterias.services.ClientService;

@RestController
@RequestMapping(value = "/client")
public class ClientResources {
	@Autowired
	private ClientService service;
	
	@PostMapping(value="/save")
	public ResponseEntity<String> save(@RequestBody ClientEntity Client){
		if(service.saveClient(Client)!=null) {
			return ResponseEntity.ok().body("ok");
		}
		return null;
	}
	@PostMapping(value = "/all")
	public ResponseEntity<List<ClientEntity>> findAll() {
		List<ClientEntity> lista= service.findAll();
		return ResponseEntity.ok().body(lista);
	}
	@PostMapping(value="/delete")
	public ResponseEntity<String> delete(@RequestBody ClientEntity Client){
		service.deleteClient(Client);
		return ResponseEntity.ok().body("ok");
	}
	@PostMapping(value="/update")
	public ResponseEntity<String> update(@RequestBody ClientEntity lastClient,@RequestBody ClientEntity newClient){
		if(service.updateClient(lastClient,newClient)!=null) {
			return ResponseEntity.ok().body("ok");
		}
		return null;
	}
}
