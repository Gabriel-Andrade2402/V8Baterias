package com.apiGeneralV8.APIv8Baterias.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.apiGeneralV8.APIv8Baterias.entities.OfficeEntity;
import com.apiGeneralV8.APIv8Baterias.services.OfficeService;

@RestController
@RequestMapping(value = "/office")
public class OfficeResources {
	@Autowired
	private OfficeService service;
	
	@PostMapping(value="/save")
	public ResponseEntity<String> save(@RequestBody OfficeEntity Office){
		if(service.saveOffice(Office)!=null) {
			return ResponseEntity.ok().body("ok");
		}
		return null;
	}
	@PostMapping(value = "/all")
	public ResponseEntity<List<OfficeEntity>> findAll() {
		List<OfficeEntity> lista= service.findAll();
		return ResponseEntity.ok().body(lista);
	}
	@PostMapping(value="/delete")
	public ResponseEntity<String> delete(@RequestBody OfficeEntity Office){
		service.deleteOffice(Office);
		return ResponseEntity.ok().body("ok");
	}
	@PostMapping(value="/update")
	public ResponseEntity<String> update(@RequestBody OfficeEntity lastOffice,@RequestBody OfficeEntity newOffice){
		if(service.updateOffice(lastOffice,newOffice)!=null) {
			return ResponseEntity.ok().body("ok");
		}
		return null;
	}
}
