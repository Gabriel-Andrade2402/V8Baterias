package com.apiGeneralV8.APIv8Baterias.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.apiGeneralV8.APIv8Baterias.dto.AdminEntityDTO;
import com.apiGeneralV8.APIv8Baterias.entities.AdminEntity;
import com.apiGeneralV8.APIv8Baterias.enums.RolesConfig;
import com.apiGeneralV8.APIv8Baterias.services.AdminService;

@RestController
@RequestMapping(value = "/admin")
public class AdminResources {
	@Autowired
	private AdminService service;
	
	@Secured({RolesConfig.ROLE_ADMIN})
	@PostMapping(value="/save")
	public ResponseEntity<String> save(@RequestBody AdminEntity Admin){
		if(service.saveAdmin(Admin)!=null) {
			return ResponseEntity.ok().body("ok");
		}
		return null;
	}
	@Secured({RolesConfig.ROLE_ADMIN})
	@PostMapping(value = "/all")
	public ResponseEntity<List<AdminEntityDTO>> findAll() {
		List<AdminEntityDTO> lista= service.findAll();
		return ResponseEntity.ok().body(lista);
	}
	@Secured({RolesConfig.ROLE_ADMIN})
	@PostMapping(value="/delete")
	public ResponseEntity<String> delete(@RequestBody AdminEntity Admin){
		service.deleteAdmin(Admin);
		return ResponseEntity.ok().body("ok");
	}
	@Secured({RolesConfig.ROLE_ADMIN})
	@PostMapping(value="/update")
	public ResponseEntity<String> update(@RequestBody List<AdminEntity> listAdmin){
		AdminEntity lastAdmin = listAdmin.get(0);
		AdminEntity newAdmin = listAdmin.get(1);
		if(service.updateAdmin(lastAdmin,newAdmin)!=null) {
			return ResponseEntity.ok().body("ok");
		}
		return null;
	}
}
