package com.apiGeneralV8.APIv8Baterias.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import com.apiGeneralV8.APIv8Baterias.entities.ClientEntity;

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
public class ClientEntityDTO implements Serializable{
	private static final long serialVersionUID = 1L;
	@Getter @Setter private Long idClient;
	@Getter @Setter private String strName;
	@Getter @Setter private String strCpf;
	@Getter @Setter private List<AddressEntityDTO> listAddress=new ArrayList<>();
	@Getter @Setter private String strTelephone;
	@Getter @Setter private String strEmail;
	@Getter @Setter private ConfigEntityDTO config_id;
	@Getter @Setter private String strPassword;
	@Getter @Setter private List<RequestEntityDTO> listRequest= new ArrayList<>();
	
	//Método usado para criar uma instância de DTO a partir de uma entidade
	public ClientEntityDTO createInstance(ClientEntity entity) {
		ClientEntityDTO dto = new ClientEntityDTO(entity.getIdClient(),entity.getStrName(),entity.getStrCpf(),
				new AddressEntityDTO().createInstanceList(entity.getListAddress()), entity.getStrTelephone(),entity.getStrEmail(),
				new ConfigEntityDTO().createInstance(entity.getConfig_id()),entity.getStrPassword(),
				new RequestEntityDTO().createInstanceList(entity.getListRequests()));
		return dto;
	}
	//Método usado para criar uma instância de lista de DTO a partir de uma lista de entidade
	public List<ClientEntityDTO> createInstanceList(List<ClientEntity> list) {
		List<ClientEntityDTO> listDto = new ArrayList<>();
		for(ClientEntity client:list) {
			listDto.add(createInstance(client));
		}
		return listDto;
	}

}