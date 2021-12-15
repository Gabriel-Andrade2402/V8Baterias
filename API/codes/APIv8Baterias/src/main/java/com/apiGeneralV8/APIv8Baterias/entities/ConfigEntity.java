package com.apiGeneralV8.APIv8Baterias.entities;

import java.io.Serializable;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "tb_config")
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class ConfigEntity implements Serializable{

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Getter @Setter private Long idConfig;
	@Column(name="bol_receive_promotions")
	@Getter @Setter private Boolean bolReceivePromotions;
	@Column(name="bol_receive_updating_price")
	@Getter @Setter private Boolean bolReceiveUpdatingPrice;
	@Column(name="dt_created")
	@Getter @Setter private Date dtCreated;
	@Column(name="dt_updated")
	@Getter @Setter private Date dtLastUpdated;
	@JsonIgnore
	@OneToMany(mappedBy="config_id", fetch = FetchType.EAGER)
	@Getter @Setter private List<ClientEntity> listClient=new ArrayList<>();
	
	//Método usado para atualizar uma entidade a partir dos dados de outra
	public ConfigEntity updateAllData(ConfigEntity newEntity) {
		return new ConfigEntity(idConfig, newEntity.getBolReceivePromotions(),
				newEntity.getBolReceiveUpdatingPrice(), newEntity.getDtCreated(),
				newEntity.getDtLastUpdated(), newEntity.getListClient());
	}
}