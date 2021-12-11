package com.apiGeneralV8.APIv8Baterias.dto;

import java.io.Serializable;
import java.sql.Date;

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
	
	public ConfigEntityDTO createInstance(ConfigEntity entity) {
		ConfigEntityDTO dto = new ConfigEntityDTO(entity.getIdConfig(), entity.getBolReceivePromotions(),
				entity.getBolReceiveUpdatingPrice(), entity.getDtCreated(), entity.getDtLastUpdated());
		return dto;
	}
}
