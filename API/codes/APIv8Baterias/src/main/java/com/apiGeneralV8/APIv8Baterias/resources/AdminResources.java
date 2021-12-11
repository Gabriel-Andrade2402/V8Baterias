package com.apiGeneralV8.APIv8Baterias.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.apiGeneralV8.APIv8Baterias.entities.AdminEntity;
import com.apiGeneralV8.APIv8Baterias.services.AdminService;

@RestController
@RequestMapping(value = "/admin")
public class AdminResources {
	@Autowired
	private AdminService service;
	
	@PostMapping(value="/save")
	public ResponseEntity<String> save(@RequestBody AdminEntity Admin){
		if(service.saveAdmin(Admin)!=null) {
			return ResponseEntity.ok().body("ok");
		}
		return null;
	}
	@PostMapping(value = "/all")
	public ResponseEntity<List<AdminEntity>> findAll() {
		List<AdminEntity> lista= service.findAll();
		return ResponseEntity.ok().body(lista);
	}
	@PostMapping(value="/delete")
	public ResponseEntity<String> delete(@RequestBody AdminEntity Admin){
		service.deleteAdmin(Admin);
		return ResponseEntity.ok().body("ok");
	}
	@PostMapping(value="/update")
	public ResponseEntity<String> update(@RequestBody AdminEntity lastAdmin,@RequestBody AdminEntity newAdmin){
		if(service.updateAdmin(lastAdmin,newAdmin)!=null) {
			return ResponseEntity.ok().body("ok");
		}
		return null;
	}
}
