package com.apiGeneralV8.APIv8Baterias.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.apiGeneralV8.APIv8Baterias.services.ServiceService;

@RestController
@RequestMapping(value = "/service")
public class ServiceResources {
	@Autowired
	private ServiceService service;
}
