package com.apiGeneralV8.APIv8Baterias.dto;

import java.sql.Date;
import java.util.Objects;

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
public class RequestEntityDTO {
	@Getter @Setter private Long idRequest;
	@Getter @Setter private ClientEntityDTO entClient;
	@Getter @Setter private ProductEntityDTO entProduct;
	@Getter @Setter private ServiceEntityDTO entService;
	@Getter @Setter private AddresEntityDTO strAdress;
	@Getter @Setter private Date dtRequest;
	@Getter @Setter private String strCodeRequest;
	@Getter @Setter private Boolean bolPaymentAproved;
	@Getter @Setter private String strSituation;
	@Getter @Setter private Date dtCanceled;
	@Getter @Setter private String strReasonCancel;
	
}
