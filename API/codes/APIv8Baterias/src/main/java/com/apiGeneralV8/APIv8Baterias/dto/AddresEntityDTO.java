package com.apiGeneralV8.APIv8Baterias.dto;

import java.util.Objects;

public class AddresEntityDTO {
	private Long idAdress;
	private String strRoad;
	private Integer numResidence;
	private String strCep;
	private String strReferencePoint;
	private String strObservation;
	public AddresEntityDTO() {
		
	}
	
	public AddresEntityDTO(Long idAdress, String strRoad, Integer numResidence, String strCep, String strReferencePoint,
			String strObservation) {
		this.idAdress = idAdress;
		this.strRoad = strRoad;
		this.numResidence = numResidence;
		this.strCep = strCep;
		this.strReferencePoint = strReferencePoint;
		this.strObservation = strObservation;
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
	@Override
	public int hashCode() {
		return Objects.hash(idAdress, numResidence, strCep, strObservation, strReferencePoint, strRoad);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		AddresEntityDTO other = (AddresEntityDTO) obj;
		return Objects.equals(idAdress, other.idAdress) && Objects.equals(numResidence, other.numResidence)
				&& Objects.equals(strCep, other.strCep) && Objects.equals(strObservation, other.strObservation)
				&& Objects.equals(strReferencePoint, other.strReferencePoint) && Objects.equals(strRoad, other.strRoad);
	}
	@Override
	public String toString() {
		return "Addres [idAdress=" + idAdress + ", strRoad=" + strRoad + ", numResidence=" + numResidence + ", strCep="
				+ strCep + ", strReferencePoint=" + strReferencePoint + ", strObservation=" + strObservation + "]";
	}
	
	
}
