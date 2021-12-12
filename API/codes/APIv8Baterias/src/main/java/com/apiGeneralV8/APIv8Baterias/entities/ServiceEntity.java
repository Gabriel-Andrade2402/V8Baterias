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
@Table(name = "tb_service")
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class ServiceEntity implements Serializable{

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Getter @Setter private Long idService;
	@Column(name="str_name_service")
	@Getter @Setter private String strNameService;
	@Column(name="num_price")
	@Getter @Setter private Double numPrice;
	@Column(name="bol_service_operating")
	@Getter @Setter private Boolean bolServiceOperating;
	@Column(name="str_code_service")
	@Getter @Setter private String strCodeService;
	@Column(name="str_informations")
	@Getter @Setter private String strInformations;
	@JsonIgnore
	@OneToMany(mappedBy="service_id", fetch = FetchType.EAGER)
	@Getter @Setter private List<RequestEntity> listRequests=new ArrayList<>();	
	
	//Método usado para atualizar uma entidade a partir dos dados de outra
	public ServiceEntity updateAllData(ServiceEntity newEntity) {
		return new ServiceEntity(idService, newEntity.getStrNameService(),
				newEntity.getNumPrice(), newEntity.getBolServiceOperating(), 
				newEntity.getStrCodeService(), newEntity.getStrInformations(), newEntity.getListRequests());
	}
}
