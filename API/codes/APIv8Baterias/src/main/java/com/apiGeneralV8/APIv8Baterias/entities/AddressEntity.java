package com.apiGeneralV8.APIv8Baterias.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
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
@Table(name = "tb_address")
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class AddressEntity implements Serializable {

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Getter
	@Setter
	private Long idAdress;
	@Column(name = "str_road")
	@Getter
	@Setter
	private String strRoad;
	@Column(name = "num_residence")
	@Getter
	@Setter
	private Integer numResidence;
	@Column(name = "str_cep")
	@Getter
	@Setter
	private String strCep;
	@Column(name = "str_reference_point")
	@Getter
	@Setter
	private String strReferencePoint;
	@Column(name = "str_observation")
	@Getter
	@Setter
	private String strObservation;
	@OneToMany(mappedBy = "address_id", fetch = FetchType.EAGER)
	@JsonIgnore
	@Getter
	@Setter
	private List<RequestEntity> listRequests = new ArrayList<>();
	@Getter
	@Setter
	@JsonIgnore
	@ManyToMany(fetch = FetchType.EAGER)
	private List<ClientEntity> listClient;
	
	//Método usado para atualizar uma entidade a partir dos dados de outra
	public AddressEntity updateAllData(AddressEntity newEntity) {
		return new AddressEntity(idAdress, newEntity.getStrRoad(),
				newEntity.getNumResidence(), newEntity.getStrCep(), 
				newEntity.getStrReferencePoint(),newEntity.getStrObservation(),
				newEntity.getListRequests(), newEntity.getListClient());
	}
}