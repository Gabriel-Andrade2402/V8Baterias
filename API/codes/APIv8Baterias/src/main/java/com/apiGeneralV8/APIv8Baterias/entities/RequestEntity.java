package com.apiGeneralV8.APIv8Baterias.entities;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
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
@Table(name = "tb_request")
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class RequestEntity implements Serializable{
	
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Getter @Setter private Long idRequest;
	@ManyToOne(fetch =FetchType.EAGER)
	@JoinColumn(name = "client_id", nullable = false)
	@Getter @Setter private ClientEntity client_id;
	@ManyToOne(fetch =FetchType.EAGER)
	@JoinColumn(name = "product_id")
	@Getter @Setter private ProductEntity product_id;
	@ManyToOne(fetch =FetchType.EAGER)
	@JoinColumn(name = "address_id", nullable = false)
	@Getter @Setter private AddressEntity address_id;
	@ManyToOne(fetch =FetchType.EAGER)
	@JoinColumn(name = "service_id")
	@Getter @Setter private ServiceEntity service_id;
	@Column(name="dt_request")
	@Getter @Setter private Date dtRequest;
	@Column(name="str_code_request")
	@Getter @Setter private String strCodeRequest;
	@Column(name="bol_payment_aproved")
	@Getter @Setter private Boolean bolPaymentAproved;
	@Column(name="str_situation")
	@Getter @Setter private String strSituation;
	@Column(name="dt_canceled")
	@Getter @Setter private Date dtCanceled;
	@Column(name="str_reason_cancel")
	@Getter @Setter private String strReasonCancel;
	
	//Método usado para atualizar uma entidade a partir dos dados de outra
	public RequestEntity updateAllData(RequestEntity newEntity) {
		return new RequestEntity(idRequest, newEntity.getClient_id(), newEntity.getProduct_id(),
				newEntity.getAddress_id(), newEntity.getService_id(),newEntity.getDtRequest(),
				newEntity.getStrCodeRequest(), newEntity.getBolPaymentAproved(),
				newEntity.getStrSituation(), newEntity.getDtCanceled(), newEntity.getStrReasonCancel());
	}
}