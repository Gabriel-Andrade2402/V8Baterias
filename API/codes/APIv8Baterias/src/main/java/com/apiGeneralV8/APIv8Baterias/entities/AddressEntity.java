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
@Table(name = "tb_address")
public class AddressEntity implements Serializable{

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idAdress;
	@Column(name="str_road")
	private String strRoad;
	@Column(name="num_residence")
	private Integer numResidence;
	@Column(name="str_cep")
	private String strCep;
	@Column(name="str_reference_point")
	private String strReferencePoint;
	@Column(name="str_observation")
	private String strObservation;
	@OneToMany(mappedBy="address_id")
	private List<RequestEntity> listRequests=new ArrayList<>();
	@ManyToOne
	@JoinColumn(name = "client_id", nullable = false)
	private ClientEntity client_id;
	
	public AddressEntity() {
		
	}	
	

	public AddressEntity(Long idAdress, String strRoad, Integer numResidence, String strCep, String strReferencePoint,
			String strObservation, ClientEntity clientId, List<RequestEntity> listRequests) {
		this.idAdress = idAdress;
		this.strRoad = strRoad;
		this.numResidence = numResidence;
		this.strCep = strCep;
		this.strReferencePoint = strReferencePoint;
		this.strObservation = strObservation;
		this.client_id = clientId;
		this.listRequests = listRequests;
	}


	public Long getIdAdress() {
		return idAdress;
	}
	public void setIdAdress(Long idAdress) {
		this.idAdress = idAdress;
	}
	public String getStrRoad() {
		return strRoad;
	}
	public void setStrRoad(String strRoad) {
		this.strRoad = strRoad;
	}
	public Integer getNumResidence() {
		return numResidence;
	}
	public void setNumResidence(Integer numResidence) {
		this.numResidence = numResidence;
	}
	public String getStrCep() {
		return strCep;
	}
	public void setStrCep(String strCep) {
		this.strCep = strCep;
	}
	public String getStrReferencePoint() {
		return strReferencePoint;
	}
	public void setStrReferencePoint(String strReferencePoint) {
		this.strReferencePoint = strReferencePoint;
	}
	public String getStrObservation() {
		return strObservation;
	}
	public void setStrObservation(String strObservation) {
		this.strObservation = strObservation;
	}
	
	public ClientEntity getclientId() {
		return client_id;
	}

	public void setclientId(ClientEntity clientId) {
		this.client_id = clientId;
	}


	public ClientEntity getClientId() {
		return client_id;
	}


	public void setClientId(ClientEntity clientId) {
		this.client_id = clientId;
	}


	public List<RequestEntity> getListRequests() {
		return listRequests;
	}


	public void setListRequests(List<RequestEntity> listRequests) {
		this.listRequests = listRequests;
	}

	
	@Override
	public int hashCode() {
		return Objects.hash(client_id, idAdress, listRequests, numResidence, strCep, strObservation, strReferencePoint,
				strRoad);
	}


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		AddressEntity other = (AddressEntity) obj;
		return Objects.equals(client_id, other.client_id) && Objects.equals(idAdress, other.idAdress)
				&& Objects.equals(listRequests, other.listRequests) && Objects.equals(numResidence, other.numResidence)
				&& Objects.equals(strCep, other.strCep) && Objects.equals(strObservation, other.strObservation)
				&& Objects.equals(strReferencePoint, other.strReferencePoint) && Objects.equals(strRoad, other.strRoad);
	}


	@Override
	public String toString() {
		return "AddressEntity [idAdress=" + idAdress + ", strRoad=" + strRoad + ", numResidence=" + numResidence
				+ ", strCep=" + strCep + ", strReferencePoint=" + strReferencePoint + ", strObservation="
				+ strObservation + ", clientId=" + client_id + ", listRequests=" + listRequests + "]";
	}

	

	
	
	
}
