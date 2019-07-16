# GESTÃO CROSS JSL
Controle, rapidez e qualidade para o gerenciamento de suas operações da jsl.

# Requerido
* NodeJS
* yarn

## Como usar

1. clone o repositório: git@github.com:alexandrejuk/jsl-backend.git
2. cd jsl-backend
3. yarn
4. yarn migrate (para criar as tabelas)
5. yarn start (para iniciar a aplicação)

## Endpoints da API
- /register
- /login
- /api/v1/drivers
- /api/v1/vehicles
- /api/v1/companies
- /api/v1/companies/:companyId/users
- /api/v1/companies/:companyId/docas
- /api/v1/companies/:companyId/operations
- /api/v1/companies/:companyId/tickets

Para todos os endpoints abaixo você deve passar a **companyId** :
- /api/v1/companies/:companyId
- /api/v1/companies/:companyId/users
- /api/v1/companies/:companyId/docas
- /api/v1/companies/:companyId/operations
- /api/v1/companies/:companyId/tickets

## EndPoint /register

## Método POST 
A api possibilita cadastrar a company(Empresa) e o primerio usuário do api com o método POST, segue exemplo do **body**, desse método.

```
POST http://localhost:3000/register
```

### Body Params
Field        | Required  | Info 
------------ | --------- | -------
social_name  | true      | nome da empresa
cnpj         | true      | cnpj da empresa
name         | true      | nome completo do funcionário
email        | true      | email do usuário
userName     | true      | nome do usuário para login
password     | true      | senha do usuário para login


```json
{
  "company" : {
    "social_name": "Company name ltda",
    "cnpj": "11222333000100"
  },
  "user": {
    "name": "Alexandre dos Santos Soares",
    "email": "ale_santos.soares@hotmail.com",
    "userName": "alexandre.soares",
    "password": "1234567890"
  }
}
```

## EndPoint /login 

## Método POST 
A api possibilita fazer login para utilizar os outros recursos da api que não são publicos, para a realização da captura a api utiliza o método POST segue exemplo do **body**, desse método.

```
POST http://localhost:3000/login
```

### Body Params
Field                   | Required  | Info 
----------------------- | --------- | -----------------
userName                | true      | login do usuário
password                | true      | senha do usuário

```json
{
  "userName": "alexandre.soares",
  "password": "1234567890"
}
```

## EndPoint /api/v1/companies/companyId/operations

## Método POST 
A api possibilita cadastrar as operações, para cadastrar uma operação você deve utiliza o método POST segue exemplo do **body**, desse método.

```
POST http://localhost:3000/api/v1/companies/companyId/operations
```

### Body Params
Field                   | Required  | Info 
----------------------- | --------- | -----------------
description             | true      | nome da operação


```json
{
  "description": "Hyundai do Brazil Ltda",
}
```

## Método GET 
A api possibilita listar todas as operações, para listar as operações você deve utiliza o método GET segue exemplo desse método.

```
GET http://localhost:3000/api/v1/companies/companyId/operations

```
## Método GET por Id
A api possibilita buscar uma operação por id, para buscar uma operação você deve utiliza o método GET passando o id da operação segue exemplo desse método.

```
GET http://localhost:3000/api/v1/companies/companyId/operations/operationId
```


## EndPoint /api/v1/companies/companyId/docas

## Método POST 
A api possibilita cadastrar as docas, para cadastrar uma doca você deve utiliza o método POST segue exemplo do **body**, desse método.

```
POST http://localhost:3000/api/v1/companies/companyId/docas
```

### Body Params
Field                   | Required  | Info 
----------------------- | --------- | -----------------
description             | true      | nome da doca
docaNumber              | true      | número da doca
status                  | true      | status da doca ('available' ou 'operation')


```json
{
  "description": "DOCA",
  "docaNumber": 5,
  "status": "available"
}
```

## Método GET 
A api possibilita listar todas as docas, para listar as docas você deve utiliza o método GET segue exemplo desse método.

```
GET http://localhost:3000/api/v1/companies/companyId/docas

```
## Método GET por Id
A api possibilita buscar uma doca por id, para buscar uma doca você deve utiliza o método GET passando o id da doca segue exemplo desse método.

```
GET http://localhost:3000/api/v1/companies/companyId/docas/docaId
```

## EndPoint /api/v1/companies/companyId/tickets

## Método POST 
A api possibilita cadastrar um ticket que será utilizado para controler e gestão da suas docas, para cadastrar um ticket você deve utiliza o método POST segue exemplo do **body**, desse método.

```
POST http://localhost:3000/api/v1/companies/companyId/tickets
```

### Body Params
Field         | Required  | Info 
--------------| --------- | ------------------------------------------
model         | true      | modelo do veículo
brand         | true      | marca do veículo
plate         | true      | placa do veículo
name          | true      | nome do motorista
documentId    | true      | rg do motorista
cpf           | true      | cpf do motorista
service       | true      | serviço que será realizado na operação
operationId   | true      | id da operação


```json
{
 "vehicle": {
    "model": "FORD",
    "brand":"F4000",
    "plate": "PLK1234"
  },
  "driver": {
    "name": "Thiago Ramalho",
    "documentId": "4433322211",
    "cpf": "11122233344"
  },
  "barCode": "888999000",
  "status": "waiting_service",
  "service": "loading",
  "operationId": "3798a10-1312-0fds-43-d12a2ffg-e43re43d"
}
```

## Método GET 
A api possibilita listar todos os tickets, para listar os tickets você deve utiliza o método GET segue exemplo desse método.

```
GET http://localhost:3000/api/v1/companies/companyId/tickets

```
## Método GET por Id
A api possibilita buscar um ticket por id, para buscar um ticket você deve utiliza o método GET passando o id da doca segue exemplo desse método.

```
GET http://localhost:3000/api/v1/companies/companyId/tickets/ticketId
```

## EndPoint /api/v1/drivers

## Método POST 
A api possibilita cadastrar os motoristas de forma individual, para cadastrar um motorista você deve utiliza o método POST segue exemplo do **body**, desse método.

```
POST http://localhost:3000/api/v1/drivers
```

### Body Params
Field         | Required  | Info 
--------------| --------- | -------------------
name          | true      | nome do motorista
documentId    | true      | rg do motorista
cpf           | true      | cpf do motorista


```json
{
  "name": "Thiago Ramalho",
  "documentId": "4433322211",
  "cpf": "11122233344"
}
```

## Método GET 
A api possibilita listar todos os mostoristas, para listar os motoristas você deve utiliza o método GET segue exemplo desse método.

```
GET http://localhost:3000/api/v1/drivers

```
## Método GET por Id
A api possibilita buscar um motorista por id, para buscar um motorista você deve utiliza o método GET passando o id da doca segue exemplo desse método.

```
GET http://localhost:3000/api/v1/drivers
```

## EndPoint /api/v1/vehicles

## Método POST 
A api possibilita cadastrar os veículos de forma individual, para cadastrar um veículo você deve utiliza o método POST segue exemplo do **body**, desse método.

```
POST http://localhost:3000/api/v1/vehicles
```

### Body Params
Field         | Required  | Info 
--------------| --------- | -------------------
name          | true      | nome do motorista
documentId    | true      | rg do motorista
cpf           | true      | cpf do motorista


```json
{
  "model": "FORD",
  "brand":"F4000",
  "plate": "PLK1234"
}
```

## Método GET 
A api possibilita listar todos os veículos, para listar os veículos você deve utiliza o método GET segue exemplo desse método.

```
GET http://localhost:3000/api/v1/vehicles

```
## Método GET por Id
A api possibilita buscar um veículo por id, para buscar um veículo você deve utiliza o método GET passando o id da doca segue exemplo desse método.

```
GET http://localhost:3000/api/v1/vehicles
```


## Autor
[Alexandre dos Santos Soares](https://github.com/alexandrejuk)
