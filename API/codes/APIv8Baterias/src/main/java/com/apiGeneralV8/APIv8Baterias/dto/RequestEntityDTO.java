package com.apiGeneralV8.APIv8Baterias.dto;

import java.sql.Date;
import java.util.Objects;

public class RequestEntityDTO {
	private Long idRequest;
	private ClientEntityDTO entClient;
	private ProductEntityDTO entProduct;
	private ServiceEntityDTO entService;
	private AddresEntityDTO strAdress;
	private Date dtRequest;
	private String strCodeRequest;
	private Boolean bolPaymentAproved;
	private String strSituation;
	private Date dtCanceled;
	private String strReasonCancel;
	
	public RequestEntityDTO() {
		
	}

	public RequestEntityDTO(Long idRequest, ClientEntityDTO entClient, ProductEntityDTO entProduct, ServiceEntityDTO entService,
			AddresEntityDTO strAdress, Date dtRequest, String strCodeRequest, Boolean bolPaymentAproved,
			String strSituation, Date dtCanceled, String strReasonCancel) {
		this.idRequest = idRequest;
		this.entClient = entClient;
		this.entProduct = entProduct;
		this.entService = entService;
		this.strAdress = strAdress;
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

	public ClientEntityDTO getEntClient() {
		return entClient;
	}

	public void setEntClient(ClientEntityDTO entClient) {
		this.entClient = entClient;
	}

	public ProductEntityDTO getEntProduct() {
		return entProduct;
	}

	public void setEntProduct(ProductEntityDTO entProduct) {
		this.entProduct = entProduct;
	}

	public ServiceEntityDTO getEntService() {
		return entService;
	}

	public void setEntService(ServiceEntityDTO entService) {
		this.entService = entService;
	}

	public AddresEntityDTO getStrAdress() {
		return strAdress;
	}

	public void setStrAdress(AddresEntityDTO strAdress) {
		this.strAdress = strAdress;
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
		return Objects.hash(bolPaymentAproved, dtCanceled, dtRequest, entClient, entProduct, entService, idRequest,
				strAdress, strCodeRequest, strReasonCancel, strSituation);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		RequestEntityDTO other = (RequestEntityDTO) obj;
		return Objects.equals(bolPaymentAproved, other.bolPaymentAproved)
				&& Objects.equals(dtCanceled, other.dtCanceled) && Objects.equals(dtRequest, other.dtRequest)
				&& Objects.equals(entClient, other.entClient) && Objects.equals(entProduct, other.entProduct)
				&& Objects.equals(entService, other.entService) && Objects.equals(idRequest, other.idRequest)
				&& Objects.equals(strAdress, other.strAdress) && Objects.equals(strCodeRequest, other.strCodeRequest)
				&& Objects.equals(strReasonCancel, other.strReasonCancel)
				&& Objects.equals(strSituation, other.strSituation);
	}

	@Override
	public String toString() {
		return "RequestEntity [idRequest=" + idRequest + ", entClient=" + entClient + ", entProduct=" + entProduct
				+ ", entService=" + entService + ", strAdress=" + strAdress + ", dtRequest=" + dtRequest
				+ ", strCodeRequest=" + strCodeRequest + ", bolPaymentAproved=" + bolPaymentAproved + ", strSituation="
				+ strSituation + ", dtCanceled=" + dtCanceled + ", strReasonCancel=" + strReasonCancel + "]";
	}
	
	
	
}
