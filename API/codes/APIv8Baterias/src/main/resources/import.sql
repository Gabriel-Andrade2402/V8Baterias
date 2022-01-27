--Inserir dados iniciais em 
--Tabela de Cargos
INSERT INTO tb_office(str_name_office) VALUES ('Chefe');

--Tabela de administradores
INSERT INTO tb_admin(str_name,str_cpf,str_mail,str_password,office_id) VALUES ('Logan','48512756954','gabriel.andradenegocios@gmail.com','biel',1);

--Tabela de endereços
INSERT INTO tb_address(str_road,num_residence,str_cep,str_reference_point,str_observation) VALUES ('RUA 1',100,'04213564','CASA 1','Observação 1');
INSERT INTO tb_address(str_road,num_residence,str_cep,str_reference_point,str_observation) VALUES ('RUA 2',101,'13648779','CASA 2','Observação 2');

--Tabela de configurações
INSERT INTO tb_config(bol_receive_promotions,bol_receive_updating_price,dt_created) VALUES (true,true,SYSDATE);

--Tabela de clientes
INSERT INTO tb_client(str_cpf,str_mail,str_name,str_password,str_telephone,config_id) VALUES ('45123658741','SADA@gmail.com','francisco','sdsadmvi','11986821781',1);

--Tabela de produtos
INSERT INTO tb_product (bol_product_operating,num_price,num_quantity,str_code_product,str_image_base,str_informations,str_name_product) VALUES (true,500,10,'SASD4A878812','Avcnkxvcnkvcnvxcnxkvcknsdfsdbcvbrteruytiyunbmbawewqeqethdfgffsgcxbxhbfurtyewewerwerwrfw4r65we4rwe98r7w987rwerf4s654g87hf8u7tyi897yuhi5h1l5hj41k8g4jfg9ht7erte9erxvcknxknxcvkvxckn','produto','Produto 1');

--Tabela de Serviços
INSERT INTO tb_service (bol_service_operating,num_price,str_code_service,str_informations,str_name_service) VALUES (true,2400,'CASD4AS785241','Serviço','Serviço 1');


--Tabela de Storys
INSERT INTO tb_storys (str_description,str_image_base,str_title) VALUES ('Compre uma bateria e concorra a capacete','teste','Promocao')

--Tabela de requisições
INSERT INTO tb_request (bol_payment_aproved,dt_canceled,dt_request,str_code_request,str_reason_cancel,str_situation,address_id,client_id,product_id,service_id) VALUES (true,null,SYSDATE,'adadadwa46we40a2',null,'Andamento',1,1,1,null);
INSERT INTO tb_request (bol_payment_aproved,dt_canceled,dt_request,str_code_request,str_reason_cancel,str_situation,address_id,client_id,product_id,service_id) VALUES (true,null,SYSDATE,'sadasdasdfwqeq2weqetf',null,'Andamento',1,1,null,1);

--Tabelas criadas por hibernate para relacionamento
--CLIENTE ENDEREÇOS
INSERT INTO tb_client_list_address (client_entity_id_client, list_address_id_adress) VALUES (1,1);
--INSERT INTO tb_address_list_client (address_entity_id_adress,list_client_id_client) VALUES (1,1);
INSERT INTO tb_client_list_address (client_entity_id_client, list_address_id_adress) VALUES (1,2);
--INSERT INTO tb_address_list_client (address_entity_id_adress,list_client_id_client) VALUES (2,1);