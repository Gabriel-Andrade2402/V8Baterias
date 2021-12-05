package com.apiGeneralV8.APIv8Baterias.dto;

import java.sql.Date;

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
public class ConfigEntityDTO {
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
}
