package com.apiGeneralV8.APIv8Baterias.dto;

import java.util.Objects;

public class ServiceEntityDTO {
	private Long idService;
	private String strNameService;
	private Double numPrice;
	private Boolean bolProductOperating;
	private String strCodeService;
	private String strInformations;
	
	public ServiceEntityDTO() {
		
	}

	public ServiceEntityDTO(Long idService, String strNameService, Double numPrice, Boolean bolProductOperating,
			String strCodeService, String strInformations) {
		this.idService = idService;
		this.strNameService = strNameService;
		this.numPrice = numPrice;
		this.bolProductOperating = bolProductOperating;
		this.strCodeService = strCodeService;
		this.strInformations = strInformations;
	}

	public Long getIdService() {
		return idService;
	}

	public void setIdService(Long idService) {
		this.idService = idService;
	}

	public String getStrNameService() {
		return strNameService;
	}

	public void setStrNameService(String strNameService) {
		this.strNameService = strNameService;
	}

	public Double getNumPrice() {
		return numPrice;
	}

	public void setNumPrice(Double numPrice) {
		this.numPrice = numPrice;
	}

	public Boolean getBolProductOperating() {
		return bolProductOperating;
	}

	public void setBolProductOperating(Boolean bolProductOperating) {
		this.bolProductOperating = bolProductOperating;
	}

	public String getStrCodeService() {
		return strCodeService;
	}

	public void setStrCodeService(String strCodeService) {
		this.strCodeService = strCodeService;
	}

	public String getStrInformations() {
		return strInformations;
	}

	public void setStrInformations(String strInformations) {
		this.strInformations = strInformations;
	}

	@Override
	public int hashCode() {
		return Objects.hash(bolProductOperating, idService, numPrice, strCodeService, strInformations, strNameService);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ServiceEntityDTO other = (ServiceEntityDTO) obj;
		return Objects.equals(bolProductOperating, other.bolProductOperating)
				&& Objects.equals(idService, other.idService) && Objects.equals(numPrice, other.numPrice)
				&& Objects.equals(strCodeService, other.strCodeService)
				&& Objects.equals(strInformations, other.strInformations)
				&& Objects.equals(strNameService, other.strNameService);
	}

	@Override
	public String toString() {
		return "ServiceEntity [idService=" + idService + ", strNameService=" + strNameService + ", numPrice=" + numPrice
				+ ", bolProductOperating=" + bolProductOperating + ", strCodeService=" + strCodeService
				+ ", strInformations=" + strInformations + "]";
	}
	
	
}
