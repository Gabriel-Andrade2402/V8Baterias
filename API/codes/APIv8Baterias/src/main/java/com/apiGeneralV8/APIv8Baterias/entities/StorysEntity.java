package com.apiGeneralV8.APIv8Baterias.entities;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tb_storys")
public class StorysEntity implements Serializable{

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idStorys;
	@Column(name="str_image_base")
	private String strImageBase;
	@Column(name="str_description")
	private String strDescription;
	@Column(name="str_title")
	private String strTitle;
	
	public StorysEntity() {
	}

	public StorysEntity(Long idStorys, String strImageBase, String strDescription, String strTitle) {
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
		StorysEntity other = (StorysEntity) obj;
		return Objects.equals(idStorys, other.idStorys) && Objects.equals(strDescription, other.strDescription)
				&& Objects.equals(strImageBase, other.strImageBase) && Objects.equals(strTitle, other.strTitle);
	}

	@Override
	public String toString() {
		return "StorysEntity [idStorys=" + idStorys + ", strImageBase=" + strImageBase + ", strDescription="
				+ strDescription + ", strTitle=" + strTitle + "]";
	}
	
	
	
	
}
