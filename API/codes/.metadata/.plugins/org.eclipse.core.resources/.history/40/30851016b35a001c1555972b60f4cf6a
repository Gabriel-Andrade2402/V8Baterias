package com.apiGeneralV8.APIv8Baterias.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "tb_admin")
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class AdminEntity implements Serializable{

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Getter @Setter private Long idAdmin;
	@Column(name="str_name")
	@Getter @Setter private String strName;
	@Column(name="str_cpf")
	@Getter @Setter private String strCpf;
	@Column(name="str_mail", unique=true)
	@Getter @Setter private String strMail;
	@Column(name="str_password")
	@Getter @Setter private String strPassword;
	@ManyToOne
	@JoinColumn(name = "office_id", nullable = false)
	@Getter @Setter private OfficeEntity office_id;
	
}
