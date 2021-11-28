package com.apiGeneralV8.APIv8Baterias.dto;

import java.util.Objects;

public class StorysEntityDTO {
	private Long idStorys;
	private String strImageBase;
	private String strDescription;
	private String strTitle;
	
	public StorysEntityDTO() {
	}

	public StorysEntityDTO(Long idStorys, String strImageBase, String strDescription, String strTitle) {
		this.idStorys = idStorys;
		this.strImageBase = strImageBase;
		this.strDescription = strDescription;
		this.strTitle = strTitle;
	}

	public Long getIdStorys() {
		return idStorys;
	}

	public void setIdStorys(Long idStorys) {
		this.idStorys = idStorys;
	}

	public String getStrImageBase() {
		return strImageBase;
	}

	public void setStrImageBase(String strImageBase) {
		this.strImageBase = strImageBase;
	}

	public String getStrDescription() {
		return strDescription;
	}

	public void setStrDescription(String strDescription) {
		this.strDescription = strDescription;
	}

	public String getStrTitle() {
		return strTitle;
	}

	public void setStrTitle(String strTitle) {
		this.strTitle = strTitle;
	}

	@Override
	public int hashCode() {
		return Objects.hash(idStorys, strDescription, strImageBase, strTitle);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		StorysEntityDTO other = (StorysEntityDTO) obj;
		return Objects.equals(idStorys, other.idStorys) && Objects.equals(strDescription, other.strDescription)
				&& Objects.equals(strImageBase, other.strImageBase) && Objects.equals(strTitle, other.strTitle);
	}

	@Override
	public String toString() {
		return "StorysEntity [idStorys=" + idStorys + ", strImageBase=" + strImageBase + ", strDescription="
				+ strDescription + ", strTitle=" + strTitle + "]";
	}
	
	
	
	
}
