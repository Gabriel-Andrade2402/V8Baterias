package com.apiGeneralV8.APIv8Baterias.entities;

import java.io.Serializable;
import java.sql.Date;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "tb_request")
public class RequestEntity implements Serializable{
	
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idRequest;
	@ManyToOne
	@JoinColumn(name = "client_id", nullable = false)
	private ClientEntity client_id;
	@ManyToOne
	@JoinColumn(name = "product_id", nullable = false)
	private ProductEntity product_id;
	@ManyToOne
	@JoinColumn(name = "address_id", nullable = false)
	private AddressEntity address_id;
	@ManyToOne
	@JoinColumn(name = "service_id", nullable = false)
	private ServiceEntity service_id;
	@Column(name="dt_request")
	private Date dtRequest;
	@Column(name="str_code_request")
	private String strCodeRequest;
	@Column(name="bol_payment_aproved")
	private Boolean bolPaymentAproved;
	@Column(name="str_situation")
	private String strSituation;
	@Column(name="dt_canceled")
	private Date dtCanceled;
	@Column(name="str_reason_cancel")
	private String strReasonCancel;
	
	public RequestEntity() {
		
	}

	

	public RequestEntity(Long idRequest, ClientEntity client_id, ProductEntity product_id, AddressEntity address_id,
			ServiceEntity service_id, Date dtRequest, String strCodeRequest, Boolean bolPaymentAproved,
			String strSituation, Date dtCanceled, String strReasonCancel) {
		this.idRequest = idRequest;
		this.client_id = client_id;
		this.product_id = product_id;
		this.address_id = address_id;
		this.service_id = service_id;
		this.dtRequest = dtRequest;
		this.strCodeRequest = strCodeRequest;
		this.bolPaymentAproved = bolPaymentAproved;
		this.strSituation = strSituation;
		this.dtCanceled = dtCanceled;
		this.strReasonCancel = strReasonCancel;
	}



	public Long getIdRequest() {
		return idRequest;
	}

	public void setIdRequest(Long idRequest) {
		this.idRequest = idRequest;
	}

	

	public ClientEntity getClient_id() {
		return client_id;
	}



	public void setClient_id(ClientEntity client_id) {
		this.client_id = client_id;
	}



	public ProductEntity getProduct_id() {
		return product_id;
	}



	public void setProduct_id(ProductEntity product_id) {
		this.product_id = product_id;
	}



	public AddressEntity getAddress_id() {
		return address_id;
	}



	public void setAddress_id(AddressEntity address_id) {
		this.address_id = address_id;
	}



	public ServiceEntity getService_id() {
		return service_id;
	}



	public void setService_id(ServiceEntity service_id) {
		this.service_id = service_id;
	}



	public AddressEntity getentAddress() {
		return address_id;
	}

	public void setentAddress(AddressEntity entAddress) {
		this.address_id = entAddress;
	}

	public Date getDtRequest() {
		return dtRequest;
	}

	public void setDtRequest(Date dtRequest) {
		this.dtRequest = dtRequest;
	}

	public String getStrCodeRequest() {
		return strCodeRequest;
	}

	public void setStrCodeRequest(String strCodeRequest) {
		this.strCodeRequest = strCodeRequest;
	}

	public Boolean getBolPaymentAproved() {
		return bolPaymentAproved;
	}

	public void setBolPaymentAproved(Boolean bolPaymentAproved) {
		this.bolPaymentAproved = bolPaymentAproved;
	}

	public String getStrSituation() {
		return strSituation;
	}

	public void setStrSituation(String strSituation) {
		this.strSituation = strSituation;
	}

	public Date getDtCanceled() {
		return dtCanceled;
	}

	public void setDtCanceled(Date dtCanceled) {
		this.dtCanceled = dtCanceled;
	}

	public String getStrReasonCancel() {
		return strReasonCancel;
	}

	public void setStrReasonCancel(String strReasonCancel) {
		this.strReasonCancel = strReasonCancel;
	}



	@Override
	public int hashCode() {
		return Objects.hash(address_id, bolPaymentAproved, client_id, dtCanceled, dtRequest, idRequest, product_id,
				service_id, strCodeRequest, strReasonCancel, strSituation);
	}



	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		RequestEntity other = (RequestEntity) obj;
		return Objects.equals(address_id, other.address_id)
				&& Objects.equals(bolPaymentAproved, other.bolPaymentAproved)
				&& Objects.equals(client_id, other.client_id) && Objects.equals(dtCanceled, other.dtCanceled)
				&& Objects.equals(dtRequest, other.dtRequest) && Objects.equals(idRequest, other.idRequest)
				&& Objects.equals(product_id, other.product_id) && Objects.equals(service_id, other.service_id)
				&& Objects.equals(strCodeRequest, other.strCodeRequest)
				&& Objects.equals(strReasonCancel, other.strReasonCancel)
				&& Objects.equals(strSituation, other.strSituation);
	}



	@Override
	public String toString() {
		return "RequestEntity [idRequest=" + idRequest + ", client_id=" + client_id + ", product_id=" + product_id
				+ ", address_id=" + address_id + ", service_id=" + service_id + ", dtRequest=" + dtRequest
				+ ", strCodeRequest=" + strCodeRequest + ", bolPaymentAproved=" + bolPaymentAproved + ", strSituation="
				+ strSituation + ", dtCanceled=" + dtCanceled + ", strReasonCancel=" + strReasonCancel + "]";
	}

	
	
	
	
}
