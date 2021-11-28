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
@Table(name = "tb_product")
public class ProductEntity implements Serializable{

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idProduct;
	@Column(name="str_name_product")
	private String strNameProduct;
	@Column(name="str_image_base")
	private String strImageBase;
	@Column(name="bol_product_operating")
	private Boolean bolProductOperating;
	@Column(name="num_price")
	private Double numPrice;
	@Column(name="str_code_product")
	private String strCodeProduct;
	@Column(name="str_informations")
	private String strInformations;
	@Column(name="num_quantity")
	private Integer numQuantity;
	@OneToMany(mappedBy="product_id")
	private List<RequestEntity> listRequests=new ArrayList<>();
	
	public ProductEntity() {
		
	}

	public ProductEntity(Long idProduct, String strNameProduct, String strImageBase, Boolean bolProductOperating,
			Double numPrice, String strCodeProduct, String strInformations, Integer numQuantity,
			List<RequestEntity> listRequests) {
		this.idProduct = idProduct;
		this.strNameProduct = strNameProduct;
		this.strImageBase = strImageBase;
		this.bolProductOperating = bolProductOperating;
		this.numPrice = numPrice;
		this.strCodeProduct = strCodeProduct;
		this.strInformations = strInformations;
		this.numQuantity = numQuantity;
		this.listRequests = listRequests;
	}

	public Long getIdProduct() {
		return idProduct;
	}

	public void setIdProduct(Long idProduct) {
		this.idProduct = idProduct;
	}

	public String getStrNameProduct() {
		return strNameProduct;
	}

	public void setStrNameProduct(String strNameProduct) {
		this.strNameProduct = strNameProduct;
	}

	public String getStrImageBase() {
		return strImageBase;
	}

	public void setStrImageBase(String strImageBase) {
		this.strImageBase = strImageBase;
	}

	public Boolean getBolProductOperating() {
		return bolProductOperating;
	}

	public void setBolProductOperating(Boolean bolProductOperating) {
		this.bolProductOperating = bolProductOperating;
	}

	public Double getNumPrice() {
		return numPrice;
	}

	public void setNumPrice(Double numPrice) {
		this.numPrice = numPrice;
	}

	public String getStrCodeProduct() {
		return strCodeProduct;
	}

	public void setStrCodeProduct(String strCodeProduct) {
		this.strCodeProduct = strCodeProduct;
	}

	public String getStrInformations() {
		return strInformations;
	}

	public void setStrInformations(String strInformations) {
		this.strInformations = strInformations;
	}



	public Integer getNumQuantity() {
		return numQuantity;
	}



	public void setNumQuantity(Integer numQuantity) {
		this.numQuantity = numQuantity;
	}

	public List<RequestEntity> getListRequests() {
		return listRequests;
	}

	public void setListRequests(List<RequestEntity> listRequests) {
		this.listRequests = listRequests;
	}

	@Override
	public int hashCode() {
		return Objects.hash(bolProductOperating, idProduct, listRequests, numPrice, numQuantity, strCodeProduct,
				strImageBase, strInformations, strNameProduct);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ProductEntity other = (ProductEntity) obj;
		return Objects.equals(bolProductOperating, other.bolProductOperating)
				&& Objects.equals(idProduct, other.idProduct) && Objects.equals(listRequests, other.listRequests)
				&& Objects.equals(numPrice, other.numPrice) && Objects.equals(numQuantity, other.numQuantity)
				&& Objects.equals(strCodeProduct, other.strCodeProduct)
				&& Objects.equals(strImageBase, other.strImageBase)
				&& Objects.equals(strInformations, other.strInformations)
				&& Objects.equals(strNameProduct, other.strNameProduct);
	}

	@Override
	public String toString() {
		return "ProductEntity [idProduct=" + idProduct + ", strNameProduct=" + strNameProduct + ", strImageBase="
				+ strImageBase + ", bolProductOperating=" + bolProductOperating + ", numPrice=" + numPrice
				+ ", strCodeProduct=" + strCodeProduct + ", strInformations=" + strInformations + ", numQuantity="
				+ numQuantity + ", listRequests=" + listRequests + "]";
	}

	
	
	
}
