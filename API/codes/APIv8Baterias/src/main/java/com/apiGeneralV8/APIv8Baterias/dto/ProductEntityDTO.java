package com.apiGeneralV8.APIv8Baterias.dto;

import java.util.Objects;

public class ProductEntityDTO {
	private Long idProduct;
	private String strNameProduct;
	private String strImageBase;
	private Boolean bolProductOperating;
	private Double numPrice;
	private String strCodeProduct;
	private String strInformations;
	private Integer numQuantity;
	
	public ProductEntityDTO() {
		
	}

	

	public ProductEntityDTO(Long idProduct, String strNameProduct, String strImageBase, Boolean bolProductOperating,
			Double numPrice, String strCodeProduct, String strInformations, Integer numQuantity) {
		this.idProduct = idProduct;
		this.strNameProduct = strNameProduct;
		this.strImageBase = strImageBase;
		this.bolProductOperating = bolProductOperating;
		this.numPrice = numPrice;
		this.strCodeProduct = strCodeProduct;
		this.strInformations = strInformations;
		this.numQuantity = numQuantity;
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

	

	@Override
	public int hashCode() {
		return Objects.hash(bolProductOperating, idProduct, numPrice, numQuantity, strCodeProduct, strImageBase,
				strInformations, strNameProduct);
	}



	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ProductEntityDTO other = (ProductEntityDTO) obj;
		return Objects.equals(bolProductOperating, other.bolProductOperating)
				&& Objects.equals(idProduct, other.idProduct) && Objects.equals(numPrice, other.numPrice)
				&& Objects.equals(numQuantity, other.numQuantity)
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
				+ numQuantity + "]";
	}

	
	
}
