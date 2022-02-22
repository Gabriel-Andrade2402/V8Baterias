package com.apiGeneralV8.APIv8Baterias.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;

import com.apiGeneralV8.APIv8Baterias.enums.RolesConfig;
import com.apiGeneralV8.APIv8Baterias.services.PaymentService;

@RestController
@RequestMapping(value = "/payment")
public class PaymentResources {
	@Autowired
	private PaymentService servicePayment;
	
	@Secured({RolesConfig.ROLE_ADMIN,RolesConfig.ROLE_CLIENT})
	@GetMapping(value = "/teste")
	public ResponseEntity<String> teste(){
		//https://api.mercadopago.com/users/test_user
		//Bearer TEST-5733289434620462-021313-2d8589e80ce978cc5111abf8e9ec51d1-1073610524
		String url = "https://api.mercadopago.com";
		String uri = "/users/test_user";

		WebClient.create(url)
		            .post()
		            .uri(uri)
		            .retrieve()
		            .bodyToMono(String.class).block();
		return null;
	}
	
}
