package com.apiGeneralV8.APIv8Baterias.dto;

import java.io.Serializable;

import com.apiGeneralV8.APIv8Baterias.entities.ProductEntity;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class ProductEntityDTO implements Serializable{

	private static final long serialVersionUID = 1L;
	@Getter @Setter private Long idProduct;
	@Getter @Setter private String strNameProduct;
	@Getter @Setter private String strImageBase;
	@Getter @Setter private Boolean bolProductOperating;
	@Getter @Setter private Double numPrice;
	@Getter @Setter private String strCodeProduct;
	@Getter @Setter private String strInformations;
	@Getter @Setter private Integer numQuantity;
	
	public ProductEntityDTO createInstance(ProductEntity entity) {
		ProductEntityDTO dto = new ProductEntityDTO(entity.getIdProduct(), 
				entity.getStrNameProduct(), entity.getStrImageBase(), 
				entity.getBolProductOperating(), entity.getNumPrice(), 
				entity.getStrCodeProduct(), entity.getStrInformations(), entity.getNumQuantity());
		return dto;
	}
}
