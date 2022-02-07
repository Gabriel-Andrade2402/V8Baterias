package com.apiGeneralV8.APIv8Baterias.dto;

import java.io.Serializable;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

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
	@Getter @Setter private String strCodeGroupRequest;
	
	//Método usado para criar uma instância de DTO a partir de uma entidade
	//ATENÇÃO UMA LISTA NÃO PODE CHAMAR UM createInstance de CLIENT porque isso gera um looping
	//Um dos dois lados não pode conhecer o outro em DTO.
	public RequestEntityDTO createInstance(RequestEntity entity) {
		RequestEntityDTO dto = null;
		if(entity.getProduct_id()!=null) {
			dto =new RequestEntityDTO(entity.getIdRequest(),
					null,
					new ProductEntityDTO().createInstance(entity.getProduct_id()),
					null,
					new AddressEntityDTO().createInstance(entity.getAddress_id()),
					entity.getDtRequest(), entity.getStrCodeRequest(),
					entity.getBolPaymentAproved(), entity.getStrSituation(),
					entity.getDtCanceled(), entity.getStrReasonCancel(),entity.getStrCodeGroupRequest());
		}else {
			dto =new RequestEntityDTO(entity.getIdRequest(),
					null,
					null,
					new ServiceEntityDTO().createInstance(entity.getService_id()),
					new AddressEntityDTO().createInstance(entity.getAddress_id()),
					entity.getDtRequest(), entity.getStrCodeRequest(),
					entity.getBolPaymentAproved(), entity.getStrSituation(),
					entity.getDtCanceled(), entity.getStrReasonCancel(),entity.getStrCodeGroupRequest());
		}
		return dto;
	}
	
	//Método usado para criar uma instância de lista de DTO a partir de uma lista de entidade
	public List<RequestEntityDTO> createInstanceList(List<RequestEntity> list) {
		List<RequestEntityDTO> listDto = new ArrayList<>();
		for(RequestEntity request:list) {
			listDto.add(createInstance(request));
		}
		return listDto;
	}
}
