package com.apiGeneralV8.APIv8Baterias.entities;

import java.io.Serializable;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "tb_config")
public class ConfigEntity implements Serializable{

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idConfig;
	@Column(name="bol_receive_promotions")
	private Boolean bolReceivePromotions;
	@Column(name="str_receive_updating_price")
	private Boolean bolReceiveUpdatingPrice;
	@Column(name="dt_created")
	private Date dtCreated;
	@Column(name="str_updated")
	private Date dtLastUpdated;
	@OneToMany(mappedBy="config_id")
	private List<ClientEntity> listClient=new ArrayList<>();
	
	public ConfigEntity() {
		
	}

	public ConfigEntity(Long idConfig, Boolean bolReceivePromotions, Boolean bolReceiveUpdatingPrice, Date dtCreated,
			Date dtLastUpdated, List<ClientEntity> listClient) {
		this.idConfig = idConfig;
		this.bolReceivePromotions = bolReceivePromotions;
		this.bolReceiveUpdatingPrice = bolReceiveUpdatingPrice;
		this.dtCreated = dtCreated;
		this.dtLastUpdated = dtLastUpdated;
		this.listClient = listClient;
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
	
	

	public List<ClientEntity> getListClient() {
		return listClient;
	}

	public void setListClient(List<ClientEntity> listClient) {
		this.listClient = listClient;
	}

	@Override
	public int hashCode() {
		return Objects.hash(bolReceivePromotions, bolReceiveUpdatingPrice, dtCreated, dtLastUpdated, idConfig,
				listClient);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ConfigEntity other = (ConfigEntity) obj;
		return Objects.equals(bolReceivePromotions, other.bolReceivePromotions)
				&& Objects.equals(bolReceiveUpdatingPrice, other.bolReceiveUpdatingPrice)
				&& Objects.equals(dtCreated, other.dtCreated) && Objects.equals(dtLastUpdated, other.dtLastUpdated)
				&& Objects.equals(idConfig, other.idConfig) && Objects.equals(listClient, other.listClient);
	}

	@Override
	public String toString() {
		return "ConfigEntity [idConfig=" + idConfig + ", bolReceivePromotions=" + bolReceivePromotions
				+ ", bolReceiveUpdatingPrice=" + bolReceiveUpdatingPrice + ", dtCreated=" + dtCreated
				+ ", dtLastUpdated=" + dtLastUpdated + ", listClient=" + listClient + "]";
	}

	

	
	
}
