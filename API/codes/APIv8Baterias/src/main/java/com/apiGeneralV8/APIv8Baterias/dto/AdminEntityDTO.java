package com.apiGeneralV8.APIv8Baterias.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import com.apiGeneralV8.APIv8Baterias.entities.AdminEntity;

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
public class AdminEntityDTO implements Serializable{

	private static final long serialVersionUID = 1L;
	@Getter @Setter private Long idAdmin;
	@Getter @Setter private String strName;
	@Getter @Setter private String strCpf;
	@Getter @Setter private String strMail;
	@Getter @Setter private String strPassword;
	@Getter @Setter private OfficeEntityDTO entOffice;
	
	//Método usado para criar uma instância de DTO a partir de uma entidade
	public AdminEntityDTO createInstance(AdminEntity newEntity) {
		return new AdminEntityDTO(newEntity.getIdAdmin(),newEntity.getStrName(),
				newEntity.getStrCpf(),newEntity.getStrMail(),
				newEntity.getStrPassword(),
				new OfficeEntityDTO().createInstance(newEntity.getOffice_id()));
	}
	
	//Método usado para criar uma instância de lista de DTO a partir de uma lista de entidade
	public List<AdminEntityDTO> createInstanceList(List<AdminEntity> list) {
		List<AdminEntityDTO> listDto = new ArrayList<>();
		for(AdminEntity admin:list) {
			listDto.add(createInstance(admin));
		}
		return listDto;
	}
}
