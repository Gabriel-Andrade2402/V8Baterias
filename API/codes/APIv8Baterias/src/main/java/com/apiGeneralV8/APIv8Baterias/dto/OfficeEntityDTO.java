package com.apiGeneralV8.APIv8Baterias.dto;

import java.io.Serializable;

import com.apiGeneralV8.APIv8Baterias.entities.OfficeEntity;

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
public class OfficeEntityDTO implements Serializable{

	private static final long serialVersionUID = 1L;
	@Getter @Setter private Long idOffice;
	@Getter @Setter private String strNameOffice;
	
	public OfficeEntityDTO createInstance(OfficeEntity newEntity) {
		return new OfficeEntityDTO(newEntity.getIdOffice(),newEntity.getStrNameOffice());
	}
}
