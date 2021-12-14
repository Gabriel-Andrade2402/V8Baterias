package com.apiGeneralV8.APIv8Baterias.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.apiGeneralV8.APIv8Baterias.entities.RequestEntity;
import com.apiGeneralV8.APIv8Baterias.services.RequestService;

@RestController
@RequestMapping(value = "/request")
public class RequestResources {
	@Autowired
	private RequestService service;
	
	@PostMapping(value="/save")
	public ResponseEntity<String> save(@RequestBody RequestEntity Request){
		if(service.saveRequest(Request)!=null) {
			return ResponseEntity.ok().body("ok");
		}
		return null;
	}
	@PostMapping(value = "/all")
	public ResponseEntity<List<RequestEntity>> findAll() {
		List<RequestEntity> lista= service.findAll();
		return ResponseEntity.ok().body(lista);
	}
	@PostMapping(value="/delete")
	public ResponseEntity<String> delete(@RequestBody RequestEntity Request){
		service.deleteRequest(Request);
		return ResponseEntity.ok().body("ok");
	}
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
