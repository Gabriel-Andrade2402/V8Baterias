package com.apiGeneralV8.APIv8Baterias.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.apiGeneralV8.APIv8Baterias.services.AddressService;

@RestController
@RequestMapping(value = "/address")
public class AddressResources {
	@Autowired
	private AddressService service;
}
