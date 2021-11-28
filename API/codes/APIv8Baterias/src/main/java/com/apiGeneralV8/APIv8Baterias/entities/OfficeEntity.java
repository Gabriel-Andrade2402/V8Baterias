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
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "tb_office")
public class OfficeEntity implements Serializable{

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idOffice;
	@Column(name="str_name_office")
	private String strNameOffice;
	@OneToMany(mappedBy="office_id")
	private List<AdminEntity> listAdmin=new ArrayList<>();
	
	public OfficeEntity() {
		
	}

	public OfficeEntity(Long idOffice, String strNameOffice, List<AdminEntity> listAdmin) {
		this.idOffice = idOffice;
		this.strNameOffice = strNameOffice;
		this.listAdmin = listAdmin;
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
	

	public List<AdminEntity> getListAdmin() {
		return listAdmin;
	}

	public void setListAdmin(List<AdminEntity> listAdmin) {
		this.listAdmin = listAdmin;
	}

	@Override
	public int hashCode() {
		return Objects.hash(idOffice, listAdmin, strNameOffice);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		OfficeEntity other = (OfficeEntity) obj;
		return Objects.equals(idOffice, other.idOffice) && Objects.equals(listAdmin, other.listAdmin)
				&& Objects.equals(strNameOffice, other.strNameOffice);
	}

	@Override
	public String toString() {
		return "OfficeEntity [idOffice=" + idOffice + ", strNameOffice=" + strNameOffice + ", listAdmin=" + listAdmin
				+ "]";
	}

	
	
}
