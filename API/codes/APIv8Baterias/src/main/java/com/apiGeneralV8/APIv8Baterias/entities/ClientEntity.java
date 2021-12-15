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
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
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
@Table(name = "tb_client")
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class ClientEntity implements Serializable{

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Getter @Setter private Long idClient;
	@Column(name="str_name")
	@Getter @Setter private String strName;
	@Column(name="str_cpf")
	@Getter @Setter private String strCpf;
	//@JsonIgnore
	@ManyToMany(fetch = FetchType.EAGER)
	@Getter @Setter private List<AddressEntity> listAddress=new ArrayList<>();
	@Column(name="str_telephone")
	@Getter @Setter private String strTelephone;
	@Column(name="str_mail",unique=true)
	@Getter @Setter private String strEmail;
	@ManyToOne
	@JoinColumn(name = "config_id", nullable = false)
	@Getter @Setter private ConfigEntity config_id;
	@Column(name="str_password")
	@Getter @Setter private String strPassword;
	@JsonIgnore
	@OneToMany(mappedBy="client_id", fetch =FetchType.EAGER)
	@Getter @Setter private List<RequestEntity> listRequests=new ArrayList<>();
	
	//Método usado para atualizar uma entidade a partir dos dados de outra
	public ClientEntity updateAllData(ClientEntity newEntity) {
		return new ClientEntity(idClient, newEntity.getStrName(), 
				newEntity.getStrCpf(),newEntity.getListAddress(),
				newEntity.getStrTelephone(),newEntity.getStrEmail(),
				newEntity.getConfig_id(), newEntity.getStrPassword(), newEntity.getListRequests());
	}
}