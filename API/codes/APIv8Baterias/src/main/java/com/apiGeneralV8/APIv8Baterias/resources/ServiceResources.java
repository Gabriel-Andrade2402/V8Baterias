package com.apiGeneralV8.APIv8Baterias.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.apiGeneralV8.APIv8Baterias.entities.ServiceEntity;
import com.apiGeneralV8.APIv8Baterias.services.ServiceService;

@RestController
@RequestMapping(value = "/service")
public class ServiceResources {
	@Autowired
	private ServiceService service;
	
	@PostMapping(value="/save")
	public ResponseEntity<String> save(@RequestBody ServiceEntity Request){
		if(service.saveService(Request)!=null) {
			return ResponseEntity.ok().body("ok");
		}
		return null;
	}
	@PostMapping(value = "/all")
	public ResponseEntity<List<ServiceEntity>> findAll() {
		List<ServiceEntity> lista= service.findAll();
		return ResponseEntity.ok().body(lista);
	}
	@PostMapping(value="/delete")
	public ResponseEntity<String> delete(@RequestBody ServiceEntity Request){
		service.deleteService(Request);
		return ResponseEntity.ok().body("ok");
	}
	@PostMapping(value="/update")
	public ResponseEntity<String> update(@RequestBody ServiceEntity lastRequest,@RequestBody ServiceEntity newRequest){
		if(service.updateService(lastRequest,newRequest)!=null) {
			return ResponseEntity.ok().body("ok");
		}
		return null;
	}
}
