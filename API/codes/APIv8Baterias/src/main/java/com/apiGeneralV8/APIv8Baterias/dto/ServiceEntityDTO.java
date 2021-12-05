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
public class ServiceEntityDTO {
	@Getter @Setter private Long idService;
	@Getter @Setter private String strNameService;
	@Getter @Setter private Double numPrice;
	@Getter @Setter private Boolean bolProductOperating;
	@Getter @Setter private String strCodeService;
	@Getter @Setter private String strInformations;

}
