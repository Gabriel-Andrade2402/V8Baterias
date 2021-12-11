package com.apiGeneralV8.APIv8Baterias.dto;

import java.io.Serializable;
import java.sql.Date;

import com.apiGeneralV8.APIv8Baterias.entities.RequestEntity;

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
public class RequestEntityDTO implements Serializable{

	private static final long serialVersionUID = 1L;
	@Getter @Setter private Long idRequest;
	@Getter @Setter private ClientEntityDTO entClient;
	@Getter @Setter private ProductEntityDTO entProduct;
	@Getter @Setter private ServiceEntityDTO entService;
	@Getter @Setter private AddressEntityDTO strAdress;
	@Getter @Setter private Date dtRequest;
	@Getter @Setter private String strCodeRequest;
	@Getter @Setter private Boolean bolPaymentAproved;
	@Getter @Setter private String strSituation;
	@Getter @Setter private Date dtCanceled;
	@Getter @Setter private String strReasonCancel;
	
	public RequestEntityDTO createInstance(RequestEntity entity) {
		RequestEntityDTO dto = new RequestEntityDTO(entity.getIdRequest(),
				new ClientEntityDTO().createInstance(entity.getClient_id()),
				new ProductEntityDTO().createInstance(entity.getProduct_id()),
				new ServiceEntityDTO().createInstance(entity.getService_id()),
				new AddressEntityDTO().createInstance(entity.getAddress_id()),
				entity.getDtRequest(), entity.getStrCodeRequest(),
				entity.getBolPaymentAproved(), entity.getStrSituation(),
				entity.getDtCanceled(), entity.getStrReasonCancel());
		return dto;
	}
}
