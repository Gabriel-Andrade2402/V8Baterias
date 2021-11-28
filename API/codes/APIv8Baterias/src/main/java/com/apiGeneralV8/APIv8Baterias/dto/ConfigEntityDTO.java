package com.apiGeneralV8.APIv8Baterias.dto;

import java.sql.Date;
import java.util.Objects;

public class ConfigEntityDTO {
	private Long idConfig;
	private Boolean bolReceivePromotions;
	private Boolean bolReceiveUpdatingPrice;
	private Date dtCreated;
	private Date dtLastUpdated;
	
	public ConfigEntityDTO() {
		
	}

	public ConfigEntityDTO(Long idConfig, Boolean bolReceivePromotions, Boolean bolReceiveUpdatingPrice, Date dtCreated,
			Date dtLastUpdated) {
		this.idConfig = idConfig;
		this.bolReceivePromotions = bolReceivePromotions;
		this.bolReceiveUpdatingPrice = bolReceiveUpdatingPrice;
		this.dtCreated = dtCreated;
		this.dtLastUpdated = dtLastUpdated;
	}



	public Long getIdConfig() {
		return idConfig;
	}

	public void setIdConfig(Long idConfig) {
		this.idConfig = idConfig;
	}

	public Boolean getBolReceivePromotions() {
		return bolReceivePromotions;
	}

	public void setBolReceivePromotions(Boolean bolReceivePromotions) {
		this.bolReceivePromotions = bolReceivePromotions;
	}

	public Boolean getBolReceiveUpdatingPrice() {
		return bolReceiveUpdatingPrice;
	}

	public void setBolReceiveUpdatingPrice(Boolean bolReceiveUpdatingPrice) {
		this.bolReceiveUpdatingPrice = bolReceiveUpdatingPrice;
	}
	
	public Date getDtCreated() {
		return dtCreated;
	}

	public void setDtCreated(Date dtCreated) {
		this.dtCreated = dtCreated;
	}

	public Date getDtLastUpdated() {
		return dtLastUpdated;
	}

	public void setDtLastUpdated(Date dtLastUpdated) {
		this.dtLastUpdated = dtLastUpdated;
	}

	@Override
	public int hashCode() {
		return Objects.hash(bolReceivePromotions, bolReceiveUpdatingPrice, dtCreated, dtLastUpdated, idConfig);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ConfigEntityDTO other = (ConfigEntityDTO) obj;
		return Objects.equals(bolReceivePromotions, other.bolReceivePromotions)
				&& Objects.equals(bolReceiveUpdatingPrice, other.bolReceiveUpdatingPrice)
				&& Objects.equals(dtCreated, other.dtCreated) && Objects.equals(dtLastUpdated, other.dtLastUpdated)
				&& Objects.equals(idConfig, other.idConfig);
	}

	@Override
	public String toString() {
		return "ConfigEntity [idConfig=" + idConfig + ", bolReceivePromotions=" + bolReceivePromotions
				+ ", bolReceiveUpdatingPrice=" + bolReceiveUpdatingPrice + ", dtCreated=" + dtCreated
				+ ", dtLastUpdated=" + dtLastUpdated + "]";
	}

	
	
}
