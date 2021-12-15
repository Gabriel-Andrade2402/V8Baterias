package com.apiGeneralV8.APIv8Baterias.dto;

import java.io.Serializable;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import com.apiGeneralV8.APIv8Baterias.entities.ConfigEntity;

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
public class ConfigEntityDTO implements Serializable{

	private static final long serialVersionUID = 1L;
	@Getter
	@Setter
	private Long idConfig;
	@Getter
	@Setter
	private Boolean bolReceivePromotions;
	@Getter
	@Setter
	private Boolean bolReceiveUpdatingPrice;
	@Getter
	@Setter
	private Date dtCreated;
	@Getter
	@Setter
	private Date dtLastUpdated;
	
	//Método usado para criar uma instância de DTO a partir de uma entidade
	public ConfigEntityDTO createInstance(ConfigEntity entity) {
		ConfigEntityDTO dto = new ConfigEntityDTO(entity.getIdConfig(), entity.getBolReceivePromotions(),
				entity.getBolReceiveUpdatingPrice(), entity.getDtCreated(), entity.getDtLastUpdated());
		return dto;
	}
	//Método usado para criar uma instância de lista de DTO a partir de uma lista de entidade
	public List<ConfigEntityDTO> createInstanceList(List<ConfigEntity> list) {
		List<ConfigEntityDTO> listDto = new ArrayList<>();
		for(ConfigEntity config:list) {
			listDto.add(createInstance(config));
		}
		return listDto;
	}
}