package com.apiGeneralV8.APIv8Baterias.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.apiGeneralV8.APIv8Baterias.dto.ConfigEntityDTO;
import com.apiGeneralV8.APIv8Baterias.entities.ConfigEntity;
import com.apiGeneralV8.APIv8Baterias.enums.RolesConfig;
import com.apiGeneralV8.APIv8Baterias.services.ConfigService;

@RestController
@RequestMapping(value = "/config")
public class ConfigResources {
	@Autowired
	private ConfigService service;
	
	@Secured({RolesConfig.ROLE_ADMIN})
	@PostMapping(value="/save")
	public ResponseEntity<String> save(@RequestBody ConfigEntity Config){
		if(service.saveConfig(Config)!=null) {
			return ResponseEntity.ok().body("ok");
		}
		return null;
	}
	@Secured({RolesConfig.ROLE_ADMIN})
	@PostMapping(value = "/all")
	public ResponseEntity<List<ConfigEntityDTO>> findAll() {
		List<ConfigEntityDTO> lista= service.findAll();
		return ResponseEntity.ok().body(lista);
	}
	
	@Secured({RolesConfig.ROLE_ADMIN})
	@PostMapping(value="/delete")
	public ResponseEntity<String> delete(@RequestBody ConfigEntity Config){
		service.deleteConfig(Config);
		return ResponseEntity.ok().body("ok");
	}
	
	@Secured({RolesConfig.ROLE_ADMIN})
	@PostMapping(value="/update")
	public ResponseEntity<String> update(@RequestBody List<ConfigEntity> listConfig){
		ConfigEntity lastConfig = listConfig.get(0);
		ConfigEntity newConfig = listConfig.get(1);
		if(service.updateConfig(lastConfig,newConfig)!=null) {
			return ResponseEntity.ok().body("ok");
		}
		return null;
	}
}
