package com.apiGeneralV8.APIv8Baterias.dto;

import java.util.Objects;

public class ClientEntityDTO {
	private Long idClient;
	private String strName;
	private String strCpf;
	private AddresEntityDTO adress;
	private String strTelephone;
	private String strEmail;
	private ConfigEntityDTO config;
	private String strPassword;
	
	public ClientEntityDTO() {
		
	}

	public ClientEntityDTO(Long idClient, String strName, String strCpf, AddresEntityDTO adress, String strTelephone,
			String strEmail, ConfigEntityDTO config, String strPassword) {
		this.idClient = idClient;
		this.strName = strName;
		this.strCpf = strCpf;
		this.adress = adress;
		this.strTelephone = strTelephone;
		this.strEmail = strEmail;
		this.config = config;
		this.strPassword = strPassword;
	}



	public Long getIdClient() {
		return idClient;
	}

	public void setIdClient(Long idClient) {
		this.idClient = idClient;
	}

	public String getStrName() {
		return strName;
	}

	public void setStrName(String strName) {
		this.strName = strName;
	}

	public String getStrCpf() {
		return strCpf;
	}

	public void setStrCpf(String strCpf) {
		this.strCpf = strCpf;
	}

	public AddresEntityDTO getAdress() {
		return adress;
	}

	public void setAdress(AddresEntityDTO adress) {
		this.adress = adress;
	}

	public String getStrTelephone() {
		return strTelephone;
	}

	public void setStrTelephone(String strTelephone) {
		this.strTelephone = strTelephone;
	}

	public String getStrEmail() {
		return strEmail;
	}

	public void setStrEmail(String strEmail) {
		this.strEmail = strEmail;
	}

	public ConfigEntityDTO getConfig() {
		return config;
	}

	public void setConfig(ConfigEntityDTO config) {
		this.config = config;
	}
	
	public String getStrPassword() {
		return strPassword;
	}

	public void setStrPassword(String strPassword) {
		this.strPassword = strPassword;
	}

	@Override
	public int hashCode() {
		return Objects.hash(adress, config, idClient, strCpf, strEmail, strName, strPassword, strTelephone);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ClientEntityDTO other = (ClientEntityDTO) obj;
		return Objects.equals(adress, other.adress) && Objects.equals(config, other.config)
				&& Objects.equals(idClient, other.idClient) && Objects.equals(strCpf, other.strCpf)
				&& Objects.equals(strEmail, other.strEmail) && Objects.equals(strName, other.strName)
				&& Objects.equals(strPassword, other.strPassword) && Objects.equals(strTelephone, other.strTelephone);
	}

	@Override
	public String toString() {
		return "ClientEntity [idClient=" + idClient + ", strName=" + strName + ", strCpf=" + strCpf + ", adress="
				+ adress + ", strTelephone=" + strTelephone + ", strEmail=" + strEmail + ", config=" + config
				+ ", strPassword=" + strPassword + "]";
	}

	
	
	
}
