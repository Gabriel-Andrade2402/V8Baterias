package com.apiGeneralV8.APIv8Baterias.dto;

import java.io.Serializable;

import com.apiGeneralV8.APIv8Baterias.entities.ServiceEntity;

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
public class ServiceEntityDTO implements Serializable{

	private static final long serialVersionUID = 1L;
	@Getter @Setter private Long idService;
	@Getter @Setter private String strNameService;
	@Getter @Setter private Double numPrice;
	@Getter @Setter private Boolean bolProductOperating;
	@Getter @Setter private String strCodeService;
	@Getter @Setter private String strInformations;
	
	public ServiceEntityDTO createInstance(ServiceEntity entity) {
		ServiceEntityDTO dto = new ServiceEntityDTO(entity.getIdService(), 
				entity.getStrNameService(), entity.getNumPrice(), 
				entity.getBolProductOperating(), entity.getStrCodeService(), 
				entity.getStrInformations());
		return dto;
	}
}
