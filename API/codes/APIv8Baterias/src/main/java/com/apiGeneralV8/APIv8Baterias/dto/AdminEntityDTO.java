package com.apiGeneralV8.APIv8Baterias.dto;

import java.io.Serializable;

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
	
	public AdminEntityDTO createInstance(AdminEntity newEntity) {
		return new AdminEntityDTO(newEntity.getIdAdmin(),newEntity.getStrName(),
				newEntity.getStrCpf(),newEntity.getStrMail(),
				newEntity.getStrPassword(),
				new OfficeEntityDTO().createInstance(newEntity.getOffice_id()));
	}
}
