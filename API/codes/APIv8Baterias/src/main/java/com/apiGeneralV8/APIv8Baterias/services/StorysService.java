package com.apiGeneralV8.APIv8Baterias.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.apiGeneralV8.APIv8Baterias.repositorys.StorysRepository;

@Service
public class StorysService {
	@Autowired
	private StorysRepository repositoryStorys;
}
