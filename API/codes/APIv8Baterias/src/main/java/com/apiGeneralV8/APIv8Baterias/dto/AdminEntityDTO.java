package com.apiGeneralV8.APIv8Baterias.dto;

import java.util.Objects;

public class AdminEntityDTO {
	private Long idAdmin;
	private String strName;
	private String strCpf;
	private String strMail;
	private String strPassword;
	private OfficeEntityDTO entOffice;
	
	public AdminEntityDTO() {
		
	}

	public AdminEntityDTO(Long idAdmin, String strName, String strCpf, String strMail, String strPassword,
			OfficeEntityDTO entOffice) {
		this.idAdmin = idAdmin;
		this.strName = strName;
		this.strCpf = strCpf;
		this.strMail = strMail;
		this.strPassword = strPassword;
		this.entOffice = entOffice;
	}



	public Long getIdAdmin() {
		return idAdmin;
	}

	public void setIdAdmin(Long idAdmin) {
		this.idAdmin = idAdmin;
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

	public String getStrMail() {
		return strMail;
	}

	public void setStrMail(String strMail) {
		this.strMail = strMail;
	}

	public OfficeEntityDTO getEntOffice() {
		return entOffice;
	}

	public void setEntOffice(OfficeEntityDTO entOffice) {
		this.entOffice = entOffice;
	}

	@Override
	public int hashCode() {
		return Objects.hash(entOffice, idAdmin, strCpf, strMail, strName, strPassword);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		AdminEntityDTO other = (AdminEntityDTO) obj;
		return Objects.equals(entOffice, other.entOffice) && Objects.equals(idAdmin, other.idAdmin)
				&& Objects.equals(strCpf, other.strCpf) && Objects.equals(strMail, other.strMail)
				&& Objects.equals(strName, other.strName) && Objects.equals(strPassword, other.strPassword);
	}

	@Override
	public String toString() {
		return "AdminEntity [idAdmin=" + idAdmin + ", strName=" + strName + ", strCpf=" + strCpf + ", strMail="
				+ strMail + ", strPassword=" + strPassword + ", entOffice=" + entOffice + "]";
	}

	
	
	
	
	
}
