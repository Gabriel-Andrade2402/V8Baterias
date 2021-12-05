package com.apiGeneralV8.APIv8Baterias.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.apiGeneralV8.APIv8Baterias.services.ConfigService;

@RestController
@RequestMapping(value = "/config")
public class ConfigResources {
	@Autowired
	private ConfigService service;
}
