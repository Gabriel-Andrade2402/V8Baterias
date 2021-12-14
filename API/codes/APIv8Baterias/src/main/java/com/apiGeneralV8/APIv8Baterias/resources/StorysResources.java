package com.apiGeneralV8.APIv8Baterias.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.apiGeneralV8.APIv8Baterias.entities.StorysEntity;
import com.apiGeneralV8.APIv8Baterias.services.StorysService;

@RestController
@RequestMapping(value = "/storys")
public class StorysResources {
	@Autowired
	private StorysService service;

	@PostMapping(value="/save")
	public ResponseEntity<String> save(@RequestBody StorysEntity Request){
		if(service.saveStorys(Request)!=null) {
			return ResponseEntity.ok().body("ok");
		}
		return null;
	}
	@PostMapping(value = "/all")
	public ResponseEntity<List<StorysEntity>> findAll() {
		List<StorysEntity> lista= service.findAll();
		return ResponseEntity.ok().body(lista);
	}
	@PostMapping(value="/delete")
	public ResponseEntity<String> delete(@RequestBody StorysEntity Request){
		service.deleteStorys(Request);
		return ResponseEntity.ok().body("ok");
	}
	@PostMapping(value="/update")
	public ResponseEntity<String> update(@RequestBody List<StorysEntity> listRequest){
		StorysEntity lastStorys =listRequest.get(0);
		StorysEntity newStorys =listRequest.get(1);
		if(service.updateStorys(lastStorys,newStorys)!=null) {
			return ResponseEntity.ok().body("ok");
		}
		return null;
	}
}
