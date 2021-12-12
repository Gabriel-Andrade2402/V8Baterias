package com.apiGeneralV8.APIv8Baterias.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "tb_storys")
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class StorysEntity implements Serializable{

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Getter @Setter private Long idStorys;
	@Lob
	@Column(name="str_image_base")
	@Getter @Setter private String strImageBase;
	@Column(name="str_description")
	@Getter @Setter private String strDescription;
	@Column(name="str_title")
	@Getter @Setter private String strTitle;	
	
	public StorysEntity updateAllData(StorysEntity newEntity) {
		return new StorysEntity(newEntity.getIdStorys(), newEntity.getStrImageBase(),
				newEntity.getStrDescription(), newEntity.getStrTitle());
	}
}
