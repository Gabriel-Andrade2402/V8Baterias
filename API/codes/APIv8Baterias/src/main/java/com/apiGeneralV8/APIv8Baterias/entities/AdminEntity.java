package com.apiGeneralV8.APIv8Baterias.entities;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "tb_admin")
public class AdminEntity implements Serializable{

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idAdmin;
	@Column(name="str_name")
	private String strName;
	@Column(name="str_cpf")
	private String strCpf;
	@Column(name="str_mail", unique=true)
	private String strMail;
	@Column(name="str_password")
	private String strPassword;
	@ManyToOne
	@JoinColumn(name = "office_id", nullable = false)
	private OfficeEntity office_id;
	
	public AdminEntity() {
		
	}

	public AdminEntity(Long idAdmin, String strName, String strCpf, String strMail, String strPassword,
			OfficeEntity entOffice) {
		this.idAdmin = idAdmin;
		this.strName = strName;
		this.strCpf = strCpf;
		this.strMail = strMail;
		this.strPassword = strPassword;
		this.office_id = entOffice;
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

	public OfficeEntity getEntOffice() {
		return office_id;
	}

	public void setEntOffice(OfficeEntity entOffice) {
		this.office_id = entOffice;
	}

	@Override
	public int hashCode() {
		return Objects.hash(office_id, idAdmin, strCpf, strMail, strName, strPassword);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		AdminEntity other = (AdminEntity) obj;
		return Objects.equals(office_id, other.office_id) && Objects.equals(idAdmin, other.idAdmin)
				&& Objects.equals(strCpf, other.strCpf) && Objects.equals(strMail, other.strMail)
				&& Objects.equals(strName, other.strName) && Objects.equals(strPassword, other.strPassword);
	}

	@Override
	public String toString() {
		return "AdminEntity [idAdmin=" + idAdmin + ", strName=" + strName + ", strCpf=" + strCpf + ", strMail="
				+ strMail + ", strPassword=" + strPassword + ", entOffice=" + office_id + "]";
	}

	
	
	
	
	
}
