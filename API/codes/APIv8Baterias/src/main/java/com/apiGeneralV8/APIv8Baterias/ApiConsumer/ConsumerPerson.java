package com.apiGeneralV8.APIv8Baterias.ApiConsumer;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import com.apiGeneralV8.APIv8Baterias.Pojo.PersonPojo;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

public class ConsumerPerson {
	private RestTemplate rest = new RestTemplate();
	public ConsumerPerson() {
	}
	
	public void getExample() throws JsonMappingException, JsonProcessingException {
		RestTemplate restTemplate = new RestTemplate();
		String fooResourceUrl = "http://localhost:8080/spring-rest/foos";
		//Uma forma de fazer GET
		//Passando URL + uma parte do URL + String.class para conversão
		ResponseEntity<String> response
		  = restTemplate.getForEntity(fooResourceUrl + "/1", String.class);
		//Forma de recuperar Json no corpo e suas propriedades
		ObjectMapper mapper = new ObjectMapper();
		JsonNode root = mapper.readTree(response.getBody());
		JsonNode name = root.path("name");
		//Outra forma de fazer um GET ja settando a classe POJO que vira no JSON
		PersonPojo foo = restTemplate.getForObject(fooResourceUrl + "/1", PersonPojo.class);
		HttpHeaders httpHeaders = restTemplate.headForHeaders(fooResourceUrl);
	}
	public void postExample() {
		RestTemplate restTemplate = new RestTemplate();
		String fooResourceUrl = "http://localhost:8080/spring-rest/foos";
		//Uma forma de fazer um POST
		//Passando um PersonPojo dentro do body e recebendo outro na volta
		HttpEntity<PersonPojo> request = new HttpEntity<>(new PersonPojo());
		PersonPojo foo = restTemplate.postForObject(fooResourceUrl, request, PersonPojo.class);
		//Para enviar formularios
		//Primeiro é necessario settar o header para alterar o formato com & no final
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
		//Coloque as variaveis do formulario em um MAP
		MultiValueMap<String, String> map= new LinkedMultiValueMap<>();
		map.add("id", "1");
		//Construir a instancia
		HttpEntity<MultiValueMap<String, String>> request2 = new HttpEntity<>(map, headers);
		//Conectar na api
		ResponseEntity<String> response = restTemplate.postForEntity(
				  fooResourceUrl+"/form", request2 , String.class);
	}
}