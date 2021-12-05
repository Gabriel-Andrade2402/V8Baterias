package com.apiGeneralV8.APIv8Baterias.dto;

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
public class ProductEntityDTO {
	@Getter @Setter private Long idProduct;
	@Getter @Setter private String strNameProduct;
	@Getter @Setter private String strImageBase;
	@Getter @Setter private Boolean bolProductOperating;
	@Getter @Setter private Double numPrice;
	@Getter @Setter private String strCodeProduct;
	@Getter @Setter private String strInformations;
	@Getter @Setter private Integer numQuantity;
	
}
