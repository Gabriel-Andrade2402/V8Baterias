package com.apiGeneralV8.APIv8Baterias.services;

import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;

import org.springframework.stereotype.Service;

@Service
public class ValidateService {
	
	public ValidateService() {}
	
	public boolean validateEmail(String email) {
		boolean result = true;
	    try {
	        InternetAddress emailAddr = new InternetAddress(email);
	        emailAddr.validate();
	    } catch (AddressException ex) {
	        result = false;
	    }
	    return result;
	}
}
