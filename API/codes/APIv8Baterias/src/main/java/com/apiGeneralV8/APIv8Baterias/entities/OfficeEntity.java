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
@Table(name = "tb_office")
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class OfficeEntity implements Serializable{

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Getter @Setter private Long idOffice;
	@Column(name="str_name_office")
	@Getter @Setter private String strNameOffice;
	@JsonIgnore
	@OneToMany(mappedBy="office_id", fetch = FetchType.EAGER)
	@Getter @Setter private List<AdminEntity> listAdmin=new ArrayList<>();
	
	//Método usado para atualizar uma entidade a partir dos dados de outra
	public OfficeEntity updateAllData(OfficeEntity newEntity) {
		return new OfficeEntity(idOffice, newEntity.getStrNameOffice(),
				newEntity.getListAdmin());
	}
}