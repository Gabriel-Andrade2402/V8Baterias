package com.apiGeneralV8.APIv8Baterias.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import com.apiGeneralV8.APIv8Baterias.entities.StorysEntity;

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
public class StorysEntityDTO implements Serializable{

	private static final long serialVersionUID = 1L;
	@Getter
	@Setter
	private Long idStorys;
	@Getter
	@Setter
	private String strImageBase;
	@Getter
	@Setter
	private String strDescription;
	@Getter
	@Setter
	private String strTitle;
	
	//Método usado para criar uma instância de DTO a partir de uma entidade
	public StorysEntityDTO createInstance(StorysEntity entity) {
		StorysEntityDTO dto = new StorysEntityDTO(entity.getIdStorys(), 
				entity.getStrImageBase(), entity.getStrDescription(), entity.getStrTitle());
		return dto;
	}
	
	//Método usado para criar uma instância de lista de DTO a partir de uma lista de entidade
	public List<StorysEntityDTO> createInstanceList(List<StorysEntity> list) {
		List<StorysEntityDTO> listDto = new ArrayList<>();
		for(StorysEntity storys:list) {
			listDto.add(createInstance(storys));
		}
		return listDto;
	}
}