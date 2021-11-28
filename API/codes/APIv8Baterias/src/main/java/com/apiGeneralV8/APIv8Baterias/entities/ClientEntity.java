package com.apiGeneralV8.APIv8Baterias.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "tb_client")
public class ClientEntity implements Serializable{

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idClient;
	@Column(name="str_name")
	private String strName;
	@Column(name="str_cpf")
	private String strCpf;
	@OneToMany(mappedBy="client_id")
	private List<AddressEntity> listAddress=new ArrayList<>();
	@Column(name="str_telephone")
	private String strTelephone;
	@Column(name="str_mail",unique=true)
	private String strEmail;
	@ManyToOne
	@JoinColumn(name = "config_id", nullable = false)
	private ConfigEntity config_id;
	@Column(name="str_password")
	private String strPassword;
	@OneToMany(mappedBy="client_id")
	private List<RequestEntity> listRequests=new ArrayList<>();
	public ClientEntity() {
		
	}
	

	public ClientEntity(Long idClient, String strName, String strCpf, List<AddressEntity> address, String strTelephone,
			String strEmail, ConfigEntity config, String strPassword, List<RequestEntity> listRequests) {
		this.idClient = idClient;
		this.strName = strName;
		this.strCpf = strCpf;
		this.listAddress = address;
		this.strTelephone = strTelephone;
		this.strEmail = strEmail;
		this.config_id = config;
		this.strPassword = strPassword;
		this.listRequests = listRequests;
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

	public List<AddressEntity> getAddress() {
		return listAddress;
	}
	public void setAddress(List<AddressEntity> address) {
		this.listAddress = address;
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

	public ConfigEntity getConfig() {
		return config_id;
	}

	public void setConfig(ConfigEntity config) {
		this.config_id = config;
	}
	
	public String getStrPassword() {
		return strPassword;
	}

	public void setStrPassword(String strPassword) {
		this.strPassword = strPassword;
	}


	public List<RequestEntity> getListRequests() {
		return listRequests;
	}


	public void setListRequests(List<RequestEntity> listRequests) {
		this.listRequests = listRequests;
	}


	@Override
	public int hashCode() {
		return Objects.hash(listAddress, config_id, idClient, listRequests, strCpf, strEmail, strName, strPassword,
				strTelephone);
	}


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ClientEntity other = (ClientEntity) obj;
		return Objects.equals(listAddress, other.listAddress) && Objects.equals(config_id, other.config_id)
				&& Objects.equals(idClient, other.idClient) && Objects.equals(listRequests, other.listRequests)
				&& Objects.equals(strCpf, other.strCpf) && Objects.equals(strEmail, other.strEmail)
				&& Objects.equals(strName, other.strName) && Objects.equals(strPassword, other.strPassword)
				&& Objects.equals(strTelephone, other.strTelephone);
	}


	@Override
	public String toString() {
		return "ClientEntity [idClient=" + idClient + ", strName=" + strName + ", strCpf=" + strCpf + ", address="
				+ listAddress + ", strTelephone=" + strTelephone + ", strEmail=" + strEmail + ", config=" + config_id
				+ ", strPassword=" + strPassword + ", listRequests=" + listRequests + "]";
	}


	

	
	
	
}
