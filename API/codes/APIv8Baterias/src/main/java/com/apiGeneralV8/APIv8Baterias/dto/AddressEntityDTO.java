package com.apiGeneralV8.APIv8Baterias.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import com.apiGeneralV8.APIv8Baterias.entities.AddressEntity;

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
public class AddressEntityDTO implements Serializable{

	private static final long serialVersionUID = 1L;
	@Getter @Setter private Long idAdress;
	@Getter @Setter private String strRoad;
	@Getter @Setter private Integer numResidence;
	@Getter @Setter private String strCep;
	@Getter @Setter private String strReferencePoint;
	@Getter @Setter private String strObservation;
	
	//Método usado para criar uma instância de DTO a partir de uma entidade
	public AddressEntityDTO createInstance(AddressEntity entity) {
		AddressEntityDTO adress = new AddressEntityDTO(entity.getIdAdress(), entity.getStrRoad(),
				entity.getNumResidence(), entity.getStrCep(),entity.getStrReferencePoint(),
				entity.getStrObservation());
		return adress;
	}
	
	//Método usado para criar uma instância de lista de DTO a partir de uma lista de entidade
	public List<AddressEntityDTO> createInstanceList(List<AddressEntity> list) {
		List<AddressEntityDTO> listDto = new ArrayList<>();
		for(AddressEntity address:list) {
			listDto.add(createInstance(address));
		}
		return listDto;
	}
}