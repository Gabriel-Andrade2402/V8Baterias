package com.apiGeneralV8.APIv8Baterias.dto;

import java.io.Serializable;

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
	
	public StorysEntityDTO createInstance(StorysEntity entity) {
		StorysEntityDTO dto = new StorysEntityDTO(entity.getIdStorys(), 
				entity.getStrImageBase(), entity.getStrDescription(), entity.getStrTitle());
		return dto;
	}
}
