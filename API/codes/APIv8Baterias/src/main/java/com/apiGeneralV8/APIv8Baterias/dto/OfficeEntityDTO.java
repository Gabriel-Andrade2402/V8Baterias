package com.apiGeneralV8.APIv8Baterias.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

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
	
	//Método usado para criar uma instância de DTO a partir de uma entidade
	public OfficeEntityDTO createInstance(OfficeEntity newEntity) {
		return new OfficeEntityDTO(newEntity.getIdOffice(),newEntity.getStrNameOffice());
	}
	//Método usado para criar uma instância de lista de DTO a partir de uma lista de entidade
	public List<OfficeEntityDTO> createInstanceList(List<OfficeEntity> list) {
		List<OfficeEntityDTO> listDto = new ArrayList<>();
		for(OfficeEntity office:list) {
			listDto.add(createInstance(office));
		}
		return listDto;
	}
}
