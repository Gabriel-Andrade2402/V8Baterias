package com.apiGeneralV8.APIv8Baterias.dto;

import java.util.Objects;

public class OfficeEntityDTO {
	private Long idOffice;
	private String strNameOffice;
	
	public OfficeEntityDTO() {
		
	}

	public OfficeEntityDTO(Long idOffice, String strNameOffice) {
		this.idOffice = idOffice;
		this.strNameOffice = strNameOffice;
	}

	public Long getIdOffice() {
		return idOffice;
	}

	public void setIdOffice(Long idOffice) {
		this.idOffice = idOffice;
	}

	public String getStrNameOffice() {
		return strNameOffice;
	}

	public void setStrNameOffice(String strNameOffice) {
		this.strNameOffice = strNameOffice;
	}

	@Override
	public int hashCode() {
		return Objects.hash(idOffice, strNameOffice);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		OfficeEntityDTO other = (OfficeEntityDTO) obj;
		return Objects.equals(idOffice, other.idOffice) && Objects.equals(strNameOffice, other.strNameOffice);
	}

	@Override
	public String toString() {
		return "OfficeEntity [idOffice=" + idOffice + ", strNameOffice=" + strNameOffice + "]";
	}
	
	
}
