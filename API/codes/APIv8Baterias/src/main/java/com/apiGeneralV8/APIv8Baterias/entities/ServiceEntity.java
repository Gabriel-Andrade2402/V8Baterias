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
@Table(name = "tb_service")
public class ServiceEntity implements Serializable{

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idService;
	@Column(name="str_name_service")
	private String strNameService;
	@Column(name="num_price")
	private Double numPrice;
	@Column(name="bol_product_operating")
	private Boolean bolProductOperating;
	@Column(name="str_code_service")
	private String strCodeService;
	@Column(name="str_informations")
	private String strInformations;
	@OneToMany(mappedBy="service_id")
	private List<RequestEntity> listRequests=new ArrayList<>();
	
	public ServiceEntity() {
		
	}

	

	public ServiceEntity(Long idService, String strNameService, Double numPrice, Boolean bolProductOperating,
			String strCodeService, String strInformations, List<RequestEntity> listRequests) {
		this.idService = idService;
		this.strNameService = strNameService;
		this.numPrice = numPrice;
		this.bolProductOperating = bolProductOperating;
		this.strCodeService = strCodeService;
		this.strInformations = strInformations;
		this.listRequests = listRequests;
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



	public List<RequestEntity> getListRequests() {
		return listRequests;
	}



	public void setListRequests(List<RequestEntity> listRequests) {
		this.listRequests = listRequests;
	}



	@Override
	public int hashCode() {
		return Objects.hash(bolProductOperating, idService, listRequests, numPrice, strCodeService, strInformations,
				strNameService);
	}



	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ServiceEntity other = (ServiceEntity) obj;
		return Objects.equals(bolProductOperating, other.bolProductOperating)
				&& Objects.equals(idService, other.idService) && Objects.equals(listRequests, other.listRequests)
				&& Objects.equals(numPrice, other.numPrice) && Objects.equals(strCodeService, other.strCodeService)
				&& Objects.equals(strInformations, other.strInformations)
				&& Objects.equals(strNameService, other.strNameService);
	}



	@Override
	public String toString() {
		return "ServiceEntity [idService=" + idService + ", strNameService=" + strNameService + ", numPrice=" + numPrice
				+ ", bolProductOperating=" + bolProductOperating + ", strCodeService=" + strCodeService
				+ ", strInformations=" + strInformations + ", listRequests=" + listRequests + "]";
	}

	
	
	
}
