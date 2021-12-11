package com.apiGeneralV8.APIv8Baterias.entities;

import java.io.Serializable;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

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
	@Column(name="str_receive_updating_price")
	@Getter @Setter private Boolean bolReceiveUpdatingPrice;
	@Column(name="dt_created")
	@Getter @Setter private Date dtCreated;
	@Column(name="str_updated")
	@Getter @Setter private Date dtLastUpdated;
	@OneToMany(mappedBy="config_id")
	@Getter @Setter private List<ClientEntity> listClient=new ArrayList<>();
	
	public ConfigEntity updateAllData(ConfigEntity newEntity) {
		return new ConfigEntity(newEntity.getIdConfig(), newEntity.getBolReceivePromotions(),
				newEntity.getBolReceiveUpdatingPrice(), newEntity.getDtCreated(),
				newEntity.getDtLastUpdated(), newEntity.getListClient());
	}
}
