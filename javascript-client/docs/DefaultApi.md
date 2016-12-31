# CorreiosApi.DefaultApi

All URIs are relative to *http://ws.correios.com.br/calculador/CalcPrecoPrazo.asmx*

Method | HTTP request | Description
------------- | ------------- | -------------
[**calcPrazoDataGet**](DefaultApi.md#calcPrazoDataGet) | **GET** /CalcPrazoData | 
[**calcPrazoDataPost**](DefaultApi.md#calcPrazoDataPost) | **POST** /CalcPrazoData | 
[**calcPrazoGet**](DefaultApi.md#calcPrazoGet) | **GET** /CalcPrazo | 
[**calcPrazoPost**](DefaultApi.md#calcPrazoPost) | **POST** /CalcPrazo | 
[**calcPrazoRestricaoGet**](DefaultApi.md#calcPrazoRestricaoGet) | **GET** /CalcPrazoRestricao | 
[**calcPrazoRestricaoPost**](DefaultApi.md#calcPrazoRestricaoPost) | **POST** /CalcPrazoRestricao | 
[**calcPrecoDataGet**](DefaultApi.md#calcPrecoDataGet) | **GET** /CalcPrecoData | 
[**calcPrecoDataPost**](DefaultApi.md#calcPrecoDataPost) | **POST** /CalcPrecoData | 
[**calcPrecoFACGet**](DefaultApi.md#calcPrecoFACGet) | **GET** /CalcPrecoFAC | 
[**calcPrecoFACPost**](DefaultApi.md#calcPrecoFACPost) | **POST** /CalcPrecoFAC | 
[**calcPrecoGet**](DefaultApi.md#calcPrecoGet) | **GET** /CalcPreco | 
[**calcPrecoPost**](DefaultApi.md#calcPrecoPost) | **POST** /CalcPreco | 
[**calcPrecoPrazoDataGet**](DefaultApi.md#calcPrecoPrazoDataGet) | **GET** /CalcPrecoPrazoData | 
[**calcPrecoPrazoDataPost**](DefaultApi.md#calcPrecoPrazoDataPost) | **POST** /CalcPrecoPrazoData | 
[**calcPrecoPrazoRestricaoGet**](DefaultApi.md#calcPrecoPrazoRestricaoGet) | **GET** /CalcPrecoPrazoRestricao | 
[**calcPrecoPrazoRestricaoPost**](DefaultApi.md#calcPrecoPrazoRestricaoPost) | **POST** /CalcPrecoPrazoRestricao | 


<a name="calcPrazoDataGet"></a>
# **calcPrazoDataGet**
> calcPrazoDataGet(nCdServico, sCepOrigem, sCepDestino, opts)





### Example
```javascript
var CorreiosApi = require('correios_api');

var apiInstance = new CorreiosApi.DefaultApi();

var nCdServico = "nCdServico_example"; // String | | Código | Serviço               | |--------|-----------------------| | 40010  | SEDEX Varejo          | | 40045  | SEDEX a Cobrar Varejo | | 40215  | SEDEX 10 Varejo       | | 40290  | SEDEX Hoje Varejo     | | 41106  | PAC Varejo            |  ##### Obs:    Pode ser mais de um numa consulta separados por vírgula. 

var sCepOrigem = "sCepOrigem_example"; // String | CEP de origem hífen. Ex:   88102080 

var sCepDestino = "sCepDestino_example"; // String | CEP de destino sem hífen. Ex:   05311900 

var opts = { 
  'sDtCalculo': new Date("2013-10-20") // Date | Data tipo dd/mm/aaaa. Ex:    21/10/2017 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.calcPrazoDataGet(nCdServico, sCepOrigem, sCepDestino, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nCdServico** | **String**| | Código | Serviço               | |--------|-----------------------| | 40010  | SEDEX Varejo          | | 40045  | SEDEX a Cobrar Varejo | | 40215  | SEDEX 10 Varejo       | | 40290  | SEDEX Hoje Varejo     | | 41106  | PAC Varejo            |  ##### Obs:    Pode ser mais de um numa consulta separados por vírgula.  | 
 **sCepOrigem** | **String**| CEP de origem hífen. Ex:   88102080  | 
 **sCepDestino** | **String**| CEP de destino sem hífen. Ex:   05311900  | 
 **sDtCalculo** | **Date**| Data tipo dd/mm/aaaa. Ex:    21/10/2017  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="calcPrazoDataPost"></a>
# **calcPrazoDataPost**
> calcPrazoDataPost(nCdServico, opts)





### Example
```javascript
var CorreiosApi = require('correios_api');

var apiInstance = new CorreiosApi.DefaultApi();

var nCdServico = "nCdServico_example"; // String | | Código | Serviço               | |--------|-----------------------| | 40010  | SEDEX Varejo          | | 40045  | SEDEX a Cobrar Varejo | | 40215  | SEDEX 10 Varejo       | | 40290  | SEDEX Hoje Varejo     | | 41106  | PAC Varejo            |   ##### Obs:    Pode ser mais de um numa consulta separados por vírgula. 

var opts = { 
  'sCepOrigem': "sCepOrigem_example", // String | CEP de origem hífen. Ex:   88102080 
  'sCepDestino': "sCepDestino_example", // String | CEP de destino sem hífen. Ex:   05311900 
  'sDtCalculo': new Date("2013-10-20") // Date | Data tipo dd/mm/aaaa. Ex:    21/10/2017 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.calcPrazoDataPost(nCdServico, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nCdServico** | **String**| | Código | Serviço               | |--------|-----------------------| | 40010  | SEDEX Varejo          | | 40045  | SEDEX a Cobrar Varejo | | 40215  | SEDEX 10 Varejo       | | 40290  | SEDEX Hoje Varejo     | | 41106  | PAC Varejo            |   ##### Obs:    Pode ser mais de um numa consulta separados por vírgula.  | 
 **sCepOrigem** | **String**| CEP de origem hífen. Ex:   88102080  | [optional] 
 **sCepDestino** | **String**| CEP de destino sem hífen. Ex:   05311900  | [optional] 
 **sDtCalculo** | **Date**| Data tipo dd/mm/aaaa. Ex:    21/10/2017  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="calcPrazoGet"></a>
# **calcPrazoGet**
> calcPrazoGet(nCdServico, opts)



Calcula prazo para entrega

### Example
```javascript
var CorreiosApi = require('correios_api');

var apiInstance = new CorreiosApi.DefaultApi();

var nCdServico = "nCdServico_example"; // String | | Código | Serviço               | |--------|-----------------------| | 40010  | SEDEX Varejo          | | 40045  | SEDEX a Cobrar Varejo | | 40215  | SEDEX 10 Varejo       | | 40290  | SEDEX Hoje Varejo     | | 41106  | PAC Varejo            | ##### Obs:    Pode ser mais de um numa consulta separados por vírgula. 

var opts = { 
  'sCepOrigem': "sCepOrigem_example", // String | CEP de origem hífen. Ex:   88102080 
  'sCepDestino': "sCepDestino_example" // String | CEP de destino sem hífen. Ex:    05311900 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.calcPrazoGet(nCdServico, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nCdServico** | **String**| | Código | Serviço               | |--------|-----------------------| | 40010  | SEDEX Varejo          | | 40045  | SEDEX a Cobrar Varejo | | 40215  | SEDEX 10 Varejo       | | 40290  | SEDEX Hoje Varejo     | | 41106  | PAC Varejo            | ##### Obs:    Pode ser mais de um numa consulta separados por vírgula.  | 
 **sCepOrigem** | **String**| CEP de origem hífen. Ex:   88102080  | [optional] 
 **sCepDestino** | **String**| CEP de destino sem hífen. Ex:    05311900  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="calcPrazoPost"></a>
# **calcPrazoPost**
> calcPrazoPost(nCdServico, opts)



Calcula prazo para entrega

### Example
```javascript
var CorreiosApi = require('correios_api');

var apiInstance = new CorreiosApi.DefaultApi();

var nCdServico = "nCdServico_example"; // String | | Código | Serviço               | |--------|-----------------------| | 40010  | SEDEX Varejo          | | 40045  | SEDEX a Cobrar Varejo | | 40215  | SEDEX 10 Varejo       | | 40290  | SEDEX Hoje Varejo     | | 41106  | PAC Varejo            |  ##### Obs:    Pode ser mais de um numa consulta separados por vírgula. 

var opts = { 
  'sCepOrigem': "sCepOrigem_example", // String | CEP de origem hífen. Ex:   88102080 
  'sCepDestino': "sCepDestino_example" // String | CEP de destino sem hífen. Ex:    05311900 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.calcPrazoPost(nCdServico, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nCdServico** | **String**| | Código | Serviço               | |--------|-----------------------| | 40010  | SEDEX Varejo          | | 40045  | SEDEX a Cobrar Varejo | | 40215  | SEDEX 10 Varejo       | | 40290  | SEDEX Hoje Varejo     | | 41106  | PAC Varejo            |  ##### Obs:    Pode ser mais de um numa consulta separados por vírgula.  | 
 **sCepOrigem** | **String**| CEP de origem hífen. Ex:   88102080  | [optional] 
 **sCepDestino** | **String**| CEP de destino sem hífen. Ex:    05311900  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="calcPrazoRestricaoGet"></a>
# **calcPrazoRestricaoGet**
> calcPrazoRestricaoGet(nCdServico, opts)





### Example
```javascript
var CorreiosApi = require('correios_api');

var apiInstance = new CorreiosApi.DefaultApi();

var nCdServico = "nCdServico_example"; // String | | Código | Serviço               | |--------|-----------------------| | 40010  | SEDEX Varejo          | | 40045  | SEDEX a Cobrar Varejo | | 40215  | SEDEX 10 Varejo       | | 40290  | SEDEX Hoje Varejo     | | 41106  | PAC Varejo            | ##### Obs:    Pode ser mais de um numa consulta separados por vírgula. 

var opts = { 
  'sCepOrigem': "sCepOrigem_example", // String | CEP de origem hífen. Ex:   88102080 
  'sCepDestino': "sCepDestino_example", // String | CEP de destino sem hífen. Ex:   05311900 
  'sDtCalculo': new Date("2013-10-20") // Date | Data tipo dd/mm/aaaa. Ex:    21/10/2017 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.calcPrazoRestricaoGet(nCdServico, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nCdServico** | **String**| | Código | Serviço               | |--------|-----------------------| | 40010  | SEDEX Varejo          | | 40045  | SEDEX a Cobrar Varejo | | 40215  | SEDEX 10 Varejo       | | 40290  | SEDEX Hoje Varejo     | | 41106  | PAC Varejo            | ##### Obs:    Pode ser mais de um numa consulta separados por vírgula.  | 
 **sCepOrigem** | **String**| CEP de origem hífen. Ex:   88102080  | [optional] 
 **sCepDestino** | **String**| CEP de destino sem hífen. Ex:   05311900  | [optional] 
 **sDtCalculo** | **Date**| Data tipo dd/mm/aaaa. Ex:    21/10/2017  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="calcPrazoRestricaoPost"></a>
# **calcPrazoRestricaoPost**
> calcPrazoRestricaoPost(nCdServico, opts)





### Example
```javascript
var CorreiosApi = require('correios_api');

var apiInstance = new CorreiosApi.DefaultApi();

var nCdServico = "nCdServico_example"; // String | | Código | Serviço               | |--------|-----------------------| | 40010  | SEDEX Varejo          | | 40045  | SEDEX a Cobrar Varejo | | 40215  | SEDEX 10 Varejo       | | 40290  | SEDEX Hoje Varejo     | | 41106  | PAC Varejo            | ##### Obs:    Pode ser mais de um numa consulta separados por vírgula. 

var opts = { 
  'sCepOrigem': "sCepOrigem_example", // String | CEP de origem hífen. Ex:   88102080 
  'sCepDestino': "sCepDestino_example", // String | CEP de destino sem hífen. Ex:   05311900 
  'sDtCalculo': new Date("2013-10-20") // Date | Data tipo dd/mm/aaaa. Ex:    21/10/2017 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.calcPrazoRestricaoPost(nCdServico, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nCdServico** | **String**| | Código | Serviço               | |--------|-----------------------| | 40010  | SEDEX Varejo          | | 40045  | SEDEX a Cobrar Varejo | | 40215  | SEDEX 10 Varejo       | | 40290  | SEDEX Hoje Varejo     | | 41106  | PAC Varejo            | ##### Obs:    Pode ser mais de um numa consulta separados por vírgula.  | 
 **sCepOrigem** | **String**| CEP de origem hífen. Ex:   88102080  | [optional] 
 **sCepDestino** | **String**| CEP de destino sem hífen. Ex:   05311900  | [optional] 
 **sDtCalculo** | **Date**| Data tipo dd/mm/aaaa. Ex:    21/10/2017  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="calcPrecoDataGet"></a>
# **calcPrecoDataGet**
> calcPrecoDataGet(nCdEmpresa, sDsSenha, nCdServico, sCepOrigem, sCepDestino, nVlPeso, nCdFormato, nVlComprimento, nVlAltura, nVlLargura, nVlDiametro, sCdMaoPropria, nVlValorDeclarado, sCdAvisoRecebimento, sDtCalculo)





### Example
```javascript
var CorreiosApi = require('correios_api');

var apiInstance = new CorreiosApi.DefaultApi();

var nCdEmpresa = ""; // String | Seu código administrativo junto à ECT. O código está disponível no corpo do contrato firmado com os Correios. ##### Obs:   O parâmetro tem que ser passado mesmo vazio. 

var sDsSenha = ""; // String | Senha para acesso ao serviço, associada ao seu código administrativo. A senha inicial corresponde aos 8 primeiros dígitos do CNPJ informado no contrato. A qualquer momento, é possível alterar a senha no endereço  ##### Obs:   O parâmetro tem que ser passado mesmo vazio. 

var nCdServico = "nCdServico_example"; // String | | Código | Serviço               | |--------|-----------------------| | 40010  | SEDEX Varejo          | | 40045  | SEDEX a Cobrar Varejo | | 40215  | SEDEX 10 Varejo       | | 40290  | SEDEX Hoje Varejo     | | 41106  | PAC Varejo            |  ##### Obs:    Pode ser mais de um numa consulta separados por vírgula. 

var sCepOrigem = "sCepOrigem_example"; // String | CEP de origem hífen. Ex:   88102080 

var sCepDestino = "sCepDestino_example"; // String | CEP de destino sem hífen. Ex:    05311900 

var nVlPeso = "nVlPeso_example"; // String | Peso da encomenda, incluindo sua embalagem. O peso deve ser informado em quilogramas. Se o formato for Envelope, o valor máximo permitido será 1 kg 

var nCdFormato = 56; // Number | Formato da encomenda (incluindo embalagem). Valores possíveis:   1. Formato caixa/pacote   2. Formato rolo/prisma   3. Envelope 

var nVlComprimento = "nVlComprimento_example"; // String | Comprimento da encomenda (incluindo embalagem), em *centímetros* 

var nVlAltura = "nVlAltura_example"; // String | Altura da encomenda (incluindo embalagem), em *centímetros*. Se o formato for envelope, informar zero (0). 

var nVlLargura = "nVlLargura_example"; // String | Largura da encomenda (incluindo embalagem), em *centímetros*. 

var nVlDiametro = "nVlDiametro_example"; // String | Diâmetro da encomenda (incluindo embalagem), em *centímetros*. 

var sCdMaoPropria = "sCdMaoPropria_example"; // String | \"Indica se a encomenda será entregue com o serviço adicional mão própria. Valores possíveis: S ou N (S – Sim, N – Não)\" 

var nVlValorDeclarado = "0"; // String | Indica se a encomenda será entregue com o serviço adicional valor declarado. Neste campo deve ser apresentado o valor declarado desejado, em Reais 

var sCdAvisoRecebimento = "N"; // String | \"Indica se a encomenda será entregue com o serviço adicional aviso de recebimento. Valores possíveis: S ou N (S – Sim, N – Não)\" 

var sDtCalculo = new Date("2013-10-20"); // Date | Data tipo dd/mm/aaaa. Ex:    21/10/2017 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.calcPrecoDataGet(nCdEmpresa, sDsSenha, nCdServico, sCepOrigem, sCepDestino, nVlPeso, nCdFormato, nVlComprimento, nVlAltura, nVlLargura, nVlDiametro, sCdMaoPropria, nVlValorDeclarado, sCdAvisoRecebimento, sDtCalculo, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nCdEmpresa** | **String**| Seu código administrativo junto à ECT. O código está disponível no corpo do contrato firmado com os Correios. ##### Obs:   O parâmetro tem que ser passado mesmo vazio.  | [default to ]
 **sDsSenha** | **String**| Senha para acesso ao serviço, associada ao seu código administrativo. A senha inicial corresponde aos 8 primeiros dígitos do CNPJ informado no contrato. A qualquer momento, é possível alterar a senha no endereço  ##### Obs:   O parâmetro tem que ser passado mesmo vazio.  | [default to ]
 **nCdServico** | **String**| | Código | Serviço               | |--------|-----------------------| | 40010  | SEDEX Varejo          | | 40045  | SEDEX a Cobrar Varejo | | 40215  | SEDEX 10 Varejo       | | 40290  | SEDEX Hoje Varejo     | | 41106  | PAC Varejo            |  ##### Obs:    Pode ser mais de um numa consulta separados por vírgula.  | 
 **sCepOrigem** | **String**| CEP de origem hífen. Ex:   88102080  | 
 **sCepDestino** | **String**| CEP de destino sem hífen. Ex:    05311900  | 
 **nVlPeso** | **String**| Peso da encomenda, incluindo sua embalagem. O peso deve ser informado em quilogramas. Se o formato for Envelope, o valor máximo permitido será 1 kg  | 
 **nCdFormato** | **Number**| Formato da encomenda (incluindo embalagem). Valores possíveis:   1. Formato caixa/pacote   2. Formato rolo/prisma   3. Envelope  | 
 **nVlComprimento** | **String**| Comprimento da encomenda (incluindo embalagem), em *centímetros*  | 
 **nVlAltura** | **String**| Altura da encomenda (incluindo embalagem), em *centímetros*. Se o formato for envelope, informar zero (0).  | 
 **nVlLargura** | **String**| Largura da encomenda (incluindo embalagem), em *centímetros*.  | 
 **nVlDiametro** | **String**| Diâmetro da encomenda (incluindo embalagem), em *centímetros*.  | 
 **sCdMaoPropria** | **String**| \&quot;Indica se a encomenda será entregue com o serviço adicional mão própria. Valores possíveis: S ou N (S – Sim, N – Não)\&quot;  | 
 **nVlValorDeclarado** | **String**| Indica se a encomenda será entregue com o serviço adicional valor declarado. Neste campo deve ser apresentado o valor declarado desejado, em Reais  | [default to 0]
 **sCdAvisoRecebimento** | **String**| \&quot;Indica se a encomenda será entregue com o serviço adicional aviso de recebimento. Valores possíveis: S ou N (S – Sim, N – Não)\&quot;  | [default to N]
 **sDtCalculo** | **Date**| Data tipo dd/mm/aaaa. Ex:    21/10/2017  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="calcPrecoDataPost"></a>
# **calcPrecoDataPost**
> calcPrecoDataPost(nCdEmpresa, sDsSenha, sCepOrigem, sCepDestino, nCdFormato, nVlComprimento, nVlAltura, nVlLargura, nVlDiametro, sCdMaoPropria, nVlValorDeclarado, sCdAvisoRecebimento, sDtCalculo, opts)





### Example
```javascript
var CorreiosApi = require('correios_api');

var apiInstance = new CorreiosApi.DefaultApi();

var nCdEmpresa = ""; // String | Seu código administrativo junto à ECT. O código está disponível no corpo do contrato firmado com os Correios. ##### Obs:   O parâmetro tem que ser passado mesmo vazio. 

var sDsSenha = ""; // String | Senha para acesso ao serviço, associada ao seu código administrativo. A senha inicial corresponde aos 8 primeiros dígitos do CNPJ informado no contrato. A qualquer momento, é possível alterar a senha no endereço  ##### Obs:   O parâmetro tem que ser passado mesmo vazio. 

var sCepOrigem = "sCepOrigem_example"; // String | CEP de origem hífen. Ex:   88102080 

var sCepDestino = "sCepDestino_example"; // String | CEP de destino sem hífen. Ex:    05311900 

var nCdFormato = 56; // Number | Formato da encomenda (incluindo embalagem). Valores possíveis:   1. Formato caixa/pacote   2. Formato rolo/prisma   3. Envelope 

var nVlComprimento = "nVlComprimento_example"; // String | Comprimento da encomenda (incluindo embalagem), em *centímetros* 

var nVlAltura = "nVlAltura_example"; // String | Altura da encomenda (incluindo embalagem), em *centímetros*. Se o formato for envelope, informar zero (0). 

var nVlLargura = "nVlLargura_example"; // String | Largura da encomenda (incluindo embalagem), em *centímetros*. 

var nVlDiametro = "nVlDiametro_example"; // String | Diâmetro da encomenda (incluindo embalagem), em *centímetros*. 

var sCdMaoPropria = "sCdMaoPropria_example"; // String | \"Indica se a encomenda será entregue com o serviço adicional mão própria. Valores possíveis: S ou N (S – Sim, N – Não)\" 

var nVlValorDeclarado = "0"; // String | Indica se a encomenda será entregue com o serviço adicional valor declarado. Neste campo deve ser apresentado o valor declarado desejado, em Reais 

var sCdAvisoRecebimento = "N"; // String | \"Indica se a encomenda será entregue com o serviço adicional aviso de recebimento. Valores possíveis: S ou N (S – Sim, N – Não)\" 

var sDtCalculo = new Date("2013-10-20"); // Date | Data tipo dd/mm/aaaa. Ex:    21/10/2017 

var opts = { 
  'nCdServico': "nCdServico_example", // String | | Código | Serviço               | |--------|-----------------------| | 40010  | SEDEX Varejo          | | 40045  | SEDEX a Cobrar Varejo | | 40215  | SEDEX 10 Varejo       | | 40290  | SEDEX Hoje Varejo     | | 41106  | PAC Varejo            | ##### Obs:    Pode ser mais de um numa consulta separados por vírgula. 
  'nVlPeso': "nVlPeso_example" // String | Peso da encomenda, incluindo sua embalagem. O peso deve ser informado em quilogramas. Se o formato for Envelope, o valor máximo permitido será 1 kg 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.calcPrecoDataPost(nCdEmpresa, sDsSenha, sCepOrigem, sCepDestino, nCdFormato, nVlComprimento, nVlAltura, nVlLargura, nVlDiametro, sCdMaoPropria, nVlValorDeclarado, sCdAvisoRecebimento, sDtCalculo, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nCdEmpresa** | **String**| Seu código administrativo junto à ECT. O código está disponível no corpo do contrato firmado com os Correios. ##### Obs:   O parâmetro tem que ser passado mesmo vazio.  | [default to ]
 **sDsSenha** | **String**| Senha para acesso ao serviço, associada ao seu código administrativo. A senha inicial corresponde aos 8 primeiros dígitos do CNPJ informado no contrato. A qualquer momento, é possível alterar a senha no endereço  ##### Obs:   O parâmetro tem que ser passado mesmo vazio.  | [default to ]
 **sCepOrigem** | **String**| CEP de origem hífen. Ex:   88102080  | 
 **sCepDestino** | **String**| CEP de destino sem hífen. Ex:    05311900  | 
 **nCdFormato** | **Number**| Formato da encomenda (incluindo embalagem). Valores possíveis:   1. Formato caixa/pacote   2. Formato rolo/prisma   3. Envelope  | 
 **nVlComprimento** | **String**| Comprimento da encomenda (incluindo embalagem), em *centímetros*  | 
 **nVlAltura** | **String**| Altura da encomenda (incluindo embalagem), em *centímetros*. Se o formato for envelope, informar zero (0).  | 
 **nVlLargura** | **String**| Largura da encomenda (incluindo embalagem), em *centímetros*.  | 
 **nVlDiametro** | **String**| Diâmetro da encomenda (incluindo embalagem), em *centímetros*.  | 
 **sCdMaoPropria** | **String**| \&quot;Indica se a encomenda será entregue com o serviço adicional mão própria. Valores possíveis: S ou N (S – Sim, N – Não)\&quot;  | 
 **nVlValorDeclarado** | **String**| Indica se a encomenda será entregue com o serviço adicional valor declarado. Neste campo deve ser apresentado o valor declarado desejado, em Reais  | [default to 0]
 **sCdAvisoRecebimento** | **String**| \&quot;Indica se a encomenda será entregue com o serviço adicional aviso de recebimento. Valores possíveis: S ou N (S – Sim, N – Não)\&quot;  | [default to N]
 **sDtCalculo** | **Date**| Data tipo dd/mm/aaaa. Ex:    21/10/2017  | 
 **nCdServico** | **String**| | Código | Serviço               | |--------|-----------------------| | 40010  | SEDEX Varejo          | | 40045  | SEDEX a Cobrar Varejo | | 40215  | SEDEX 10 Varejo       | | 40290  | SEDEX Hoje Varejo     | | 41106  | PAC Varejo            | ##### Obs:    Pode ser mais de um numa consulta separados por vírgula.  | [optional] 
 **nVlPeso** | **String**| Peso da encomenda, incluindo sua embalagem. O peso deve ser informado em quilogramas. Se o formato for Envelope, o valor máximo permitido será 1 kg  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="calcPrecoFACGet"></a>
# **calcPrecoFACGet**
> calcPrecoFACGet(nCdServico, nVlPeso, strDataCalculo)



Calcula prazo para entrega

### Example
```javascript
var CorreiosApi = require('correios_api');

var apiInstance = new CorreiosApi.DefaultApi();

var nCdServico = "nCdServico_example"; // String | | Código | Serviço               | |--------|-----------------------| | 40010  | SEDEX Varejo          | | 40045  | SEDEX a Cobrar Varejo | | 40215  | SEDEX 10 Varejo       | | 40290  | SEDEX Hoje Varejo     | | 41106  | PAC Varejo            |  ##### Obs:    Pode ser mais de um numa consulta separados por vírgula. 

var nVlPeso = "nVlPeso_example"; // String | Peso da encomenda, incluindo sua embalagem. O peso deve ser informado em quilogramas. Se o formato for Envelope, o valor máximo permitido será 1 kg. 

var strDataCalculo = new Date("2013-10-20"); // Date | Data tipo dd/mm/aaaa. Ex:    21/10/2017 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.calcPrecoFACGet(nCdServico, nVlPeso, strDataCalculo, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nCdServico** | **String**| | Código | Serviço               | |--------|-----------------------| | 40010  | SEDEX Varejo          | | 40045  | SEDEX a Cobrar Varejo | | 40215  | SEDEX 10 Varejo       | | 40290  | SEDEX Hoje Varejo     | | 41106  | PAC Varejo            |  ##### Obs:    Pode ser mais de um numa consulta separados por vírgula.  | 
 **nVlPeso** | **String**| Peso da encomenda, incluindo sua embalagem. O peso deve ser informado em quilogramas. Se o formato for Envelope, o valor máximo permitido será 1 kg.  | 
 **strDataCalculo** | **Date**| Data tipo dd/mm/aaaa. Ex:    21/10/2017  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="calcPrecoFACPost"></a>
# **calcPrecoFACPost**
> calcPrecoFACPost(nCdServico, nVlPeso, strDataCalculo)





### Example
```javascript
var CorreiosApi = require('correios_api');

var apiInstance = new CorreiosApi.DefaultApi();

var nCdServico = "nCdServico_example"; // String | | Código | Serviço               | |--------|-----------------------| | 40010  | SEDEX Varejo          | | 40045  | SEDEX a Cobrar Varejo | | 40215  | SEDEX 10 Varejo       | | 40290  | SEDEX Hoje Varejo     | | 41106  | PAC Varejo            |  ##### Obs:    Pode ser mais de um numa consulta separados por vírgula. 

var nVlPeso = "nVlPeso_example"; // String | Peso da encomenda, incluindo sua embalagem. O peso deve ser informado em quilogramas. Se o formato for Envelope, o valor máximo permitido será 1 kg. 

var strDataCalculo = new Date("2013-10-20"); // Date | Data tipo dd/mm/aaaa. Ex:    21/10/2017 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.calcPrecoFACPost(nCdServico, nVlPeso, strDataCalculo, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nCdServico** | **String**| | Código | Serviço               | |--------|-----------------------| | 40010  | SEDEX Varejo          | | 40045  | SEDEX a Cobrar Varejo | | 40215  | SEDEX 10 Varejo       | | 40290  | SEDEX Hoje Varejo     | | 41106  | PAC Varejo            |  ##### Obs:    Pode ser mais de um numa consulta separados por vírgula.  | 
 **nVlPeso** | **String**| Peso da encomenda, incluindo sua embalagem. O peso deve ser informado em quilogramas. Se o formato for Envelope, o valor máximo permitido será 1 kg.  | 
 **strDataCalculo** | **Date**| Data tipo dd/mm/aaaa. Ex:    21/10/2017  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="calcPrecoGet"></a>
# **calcPrecoGet**
> calcPrecoGet(nCdEmpresa, sDsSenha, nCdServico, sCepOrigem, sCepDestino, nVlPeso, nCdFormato, nVlComprimento, nVlAltura, nVlLargura, nVlDiametro, sCdMaoPropria, nVlValorDeclarado, sCdAvisoRecebimento)





### Example
```javascript
var CorreiosApi = require('correios_api');

var apiInstance = new CorreiosApi.DefaultApi();

var nCdEmpresa = ""; // String | Seu código administrativo junto à ECT. O código está disponível no corpo do contrato firmado com os Correios. ##### Obs:   O parâmetro tem que ser passado mesmo vazio. 

var sDsSenha = ""; // String | Senha para acesso ao serviço, associada ao seu código administrativo. A senha inicial corresponde aos 8 primeiros dígitos do CNPJ informado no contrato. A qualquer momento, é possível alterar a senha no endereço  ##### Obs:   O parâmetro tem que ser passado mesmo vazio. 

var nCdServico = "nCdServico_example"; // String | | Código | Serviço               | |--------|-----------------------| | 40010  | SEDEX Varejo          | | 40045  | SEDEX a Cobrar Varejo | | 40215  | SEDEX 10 Varejo       | | 40290  | SEDEX Hoje Varejo     | | 41106  | PAC Varejo            |  ##### Obs:    Pode ser mais de um numa consulta separados por vírgula. 

var sCepOrigem = "sCepOrigem_example"; // String | CEP de origem hífen. Ex:   88102080 

var sCepDestino = "sCepDestino_example"; // String | CEP de destino sem hífen. Ex:    05311900 

var nVlPeso = "nVlPeso_example"; // String | Peso da encomenda, incluindo sua embalagem. O peso deve ser informado em quilogramas. Se o formato for Envelope, o valor máximo permitido será 1 kg 

var nCdFormato = 56; // Number | Formato da encomenda (incluindo embalagem). Valores possíveis:   1. Formato caixa/pacote   2. Formato rolo/prisma   3. Envelope 

var nVlComprimento = "nVlComprimento_example"; // String | Comprimento da encomenda (incluindo embalagem), em *centímetros* 

var nVlAltura = "nVlAltura_example"; // String | Altura da encomenda (incluindo embalagem), em *centímetros*. Se o formato for envelope, informar zero (0). 

var nVlLargura = "nVlLargura_example"; // String | Largura da encomenda (incluindo embalagem), em *centímetros*. 

var nVlDiametro = "nVlDiametro_example"; // String | Diâmetro da encomenda (incluindo embalagem), em *centímetros*. 

var sCdMaoPropria = "sCdMaoPropria_example"; // String | \"Indica se a encomenda será entregue com o serviço adicional mão própria. Valores possíveis: S ou N (S – Sim, N – Não)\" 

var nVlValorDeclarado = "0"; // String | Indica se a encomenda será entregue com o serviço adicional valor declarado. Neste campo deve ser apresentado o valor declarado desejado, em Reais 

var sCdAvisoRecebimento = "N"; // String | \"Indica se a encomenda será entregue com o serviço adicional aviso de recebimento. Valores possíveis: S ou N (S – Sim, N – Não)\" 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.calcPrecoGet(nCdEmpresa, sDsSenha, nCdServico, sCepOrigem, sCepDestino, nVlPeso, nCdFormato, nVlComprimento, nVlAltura, nVlLargura, nVlDiametro, sCdMaoPropria, nVlValorDeclarado, sCdAvisoRecebimento, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nCdEmpresa** | **String**| Seu código administrativo junto à ECT. O código está disponível no corpo do contrato firmado com os Correios. ##### Obs:   O parâmetro tem que ser passado mesmo vazio.  | [default to ]
 **sDsSenha** | **String**| Senha para acesso ao serviço, associada ao seu código administrativo. A senha inicial corresponde aos 8 primeiros dígitos do CNPJ informado no contrato. A qualquer momento, é possível alterar a senha no endereço  ##### Obs:   O parâmetro tem que ser passado mesmo vazio.  | [default to ]
 **nCdServico** | **String**| | Código | Serviço               | |--------|-----------------------| | 40010  | SEDEX Varejo          | | 40045  | SEDEX a Cobrar Varejo | | 40215  | SEDEX 10 Varejo       | | 40290  | SEDEX Hoje Varejo     | | 41106  | PAC Varejo            |  ##### Obs:    Pode ser mais de um numa consulta separados por vírgula.  | 
 **sCepOrigem** | **String**| CEP de origem hífen. Ex:   88102080  | 
 **sCepDestino** | **String**| CEP de destino sem hífen. Ex:    05311900  | 
 **nVlPeso** | **String**| Peso da encomenda, incluindo sua embalagem. O peso deve ser informado em quilogramas. Se o formato for Envelope, o valor máximo permitido será 1 kg  | 
 **nCdFormato** | **Number**| Formato da encomenda (incluindo embalagem). Valores possíveis:   1. Formato caixa/pacote   2. Formato rolo/prisma   3. Envelope  | 
 **nVlComprimento** | **String**| Comprimento da encomenda (incluindo embalagem), em *centímetros*  | 
 **nVlAltura** | **String**| Altura da encomenda (incluindo embalagem), em *centímetros*. Se o formato for envelope, informar zero (0).  | 
 **nVlLargura** | **String**| Largura da encomenda (incluindo embalagem), em *centímetros*.  | 
 **nVlDiametro** | **String**| Diâmetro da encomenda (incluindo embalagem), em *centímetros*.  | 
 **sCdMaoPropria** | **String**| \&quot;Indica se a encomenda será entregue com o serviço adicional mão própria. Valores possíveis: S ou N (S – Sim, N – Não)\&quot;  | 
 **nVlValorDeclarado** | **String**| Indica se a encomenda será entregue com o serviço adicional valor declarado. Neste campo deve ser apresentado o valor declarado desejado, em Reais  | [default to 0]
 **sCdAvisoRecebimento** | **String**| \&quot;Indica se a encomenda será entregue com o serviço adicional aviso de recebimento. Valores possíveis: S ou N (S – Sim, N – Não)\&quot;  | [default to N]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="calcPrecoPost"></a>
# **calcPrecoPost**
> calcPrecoPost(nCdEmpresa, sDsSenha, nCdServico, sCepOrigem, sCepDestino, nCdFormato, nVlComprimento, nVlAltura, nVlLargura, nVlDiametro, sCdMaoPropria, nVlValorDeclarado, sCdAvisoRecebimento, opts)





### Example
```javascript
var CorreiosApi = require('correios_api');

var apiInstance = new CorreiosApi.DefaultApi();

var nCdEmpresa = ""; // String | Seu código administrativo junto à ECT. O código está disponível no corpo do contrato firmado com os Correios. ##### Obs:   O parâmetro tem que ser passado mesmo vazio. 

var sDsSenha = ""; // String | Senha para acesso ao serviço, associada ao seu código administrativo. A senha inicial corresponde aos 8 primeiros dígitos do CNPJ informado no contrato. A qualquer momento, é possível alterar a senha no endereço  ##### Obs:   O parâmetro tem que ser passado mesmo vazio. 

var nCdServico = "nCdServico_example"; // String | | Código | Serviço               | |--------|-----------------------| | 40010  | SEDEX Varejo          | | 40045  | SEDEX a Cobrar Varejo | | 40215  | SEDEX 10 Varejo       | | 40290  | SEDEX Hoje Varejo     | | 41106  | PAC Varejo            |  ##### Obs:    Pode ser mais de um numa consulta separados por vírgula. 

var sCepOrigem = "sCepOrigem_example"; // String | CEP de origem hífen. Ex:   88102080 

var sCepDestino = "sCepDestino_example"; // String | CEP de destino sem hífen. Ex:    05311900 

var nCdFormato = 56; // Number | Formato da encomenda (incluindo embalagem). Valores possíveis:   1. Formato caixa/pacote   2. Formato rolo/prisma   3. Envelope 

var nVlComprimento = "nVlComprimento_example"; // String | Comprimento da encomenda (incluindo embalagem), em *centímetros* 

var nVlAltura = "nVlAltura_example"; // String | Altura da encomenda (incluindo embalagem), em *centímetros*. Se o formato for envelope, informar zero (0). 

var nVlLargura = "nVlLargura_example"; // String | Largura da encomenda (incluindo embalagem), em *centímetros*. 

var nVlDiametro = "nVlDiametro_example"; // String | Diâmetro da encomenda (incluindo embalagem), em *centímetros*. 

var sCdMaoPropria = "sCdMaoPropria_example"; // String | \"Indica se a encomenda será entregue com o serviço adicional mão própria. Valores possíveis: S ou N (S – Sim, N – Não)\" 

var nVlValorDeclarado = "0"; // String | Indica se a encomenda será entregue com o serviço adicional valor declarado. Neste campo deve ser apresentado o valor declarado desejado, em Reais 

var sCdAvisoRecebimento = "N"; // String | \"Indica se a encomenda será entregue com o serviço adicional aviso de recebimento. Valores possíveis: S ou N (S – Sim, N – Não)\" 

var opts = { 
  'nVlPeso': "nVlPeso_example" // String | Peso da encomenda, incluindo sua embalagem. O peso deve ser informado em quilogramas. Se o formato for Envelope, o valor máximo permitido será 1 kg 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.calcPrecoPost(nCdEmpresa, sDsSenha, nCdServico, sCepOrigem, sCepDestino, nCdFormato, nVlComprimento, nVlAltura, nVlLargura, nVlDiametro, sCdMaoPropria, nVlValorDeclarado, sCdAvisoRecebimento, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nCdEmpresa** | **String**| Seu código administrativo junto à ECT. O código está disponível no corpo do contrato firmado com os Correios. ##### Obs:   O parâmetro tem que ser passado mesmo vazio.  | [default to ]
 **sDsSenha** | **String**| Senha para acesso ao serviço, associada ao seu código administrativo. A senha inicial corresponde aos 8 primeiros dígitos do CNPJ informado no contrato. A qualquer momento, é possível alterar a senha no endereço  ##### Obs:   O parâmetro tem que ser passado mesmo vazio.  | [default to ]
 **nCdServico** | **String**| | Código | Serviço               | |--------|-----------------------| | 40010  | SEDEX Varejo          | | 40045  | SEDEX a Cobrar Varejo | | 40215  | SEDEX 10 Varejo       | | 40290  | SEDEX Hoje Varejo     | | 41106  | PAC Varejo            |  ##### Obs:    Pode ser mais de um numa consulta separados por vírgula.  | 
 **sCepOrigem** | **String**| CEP de origem hífen. Ex:   88102080  | 
 **sCepDestino** | **String**| CEP de destino sem hífen. Ex:    05311900  | 
 **nCdFormato** | **Number**| Formato da encomenda (incluindo embalagem). Valores possíveis:   1. Formato caixa/pacote   2. Formato rolo/prisma   3. Envelope  | 
 **nVlComprimento** | **String**| Comprimento da encomenda (incluindo embalagem), em *centímetros*  | 
 **nVlAltura** | **String**| Altura da encomenda (incluindo embalagem), em *centímetros*. Se o formato for envelope, informar zero (0).  | 
 **nVlLargura** | **String**| Largura da encomenda (incluindo embalagem), em *centímetros*.  | 
 **nVlDiametro** | **String**| Diâmetro da encomenda (incluindo embalagem), em *centímetros*.  | 
 **sCdMaoPropria** | **String**| \&quot;Indica se a encomenda será entregue com o serviço adicional mão própria. Valores possíveis: S ou N (S – Sim, N – Não)\&quot;  | 
 **nVlValorDeclarado** | **String**| Indica se a encomenda será entregue com o serviço adicional valor declarado. Neste campo deve ser apresentado o valor declarado desejado, em Reais  | [default to 0]
 **sCdAvisoRecebimento** | **String**| \&quot;Indica se a encomenda será entregue com o serviço adicional aviso de recebimento. Valores possíveis: S ou N (S – Sim, N – Não)\&quot;  | [default to N]
 **nVlPeso** | **String**| Peso da encomenda, incluindo sua embalagem. O peso deve ser informado em quilogramas. Se o formato for Envelope, o valor máximo permitido será 1 kg  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="calcPrecoPrazoDataGet"></a>
# **calcPrecoPrazoDataGet**
> calcPrecoPrazoDataGet(nCdEmpresa, sDsSenha, nCdServico, sCepOrigem, sCepDestino, nVlPeso, nCdFormato, nVlComprimento, nVlAltura, nVlLargura, nVlDiametro, sCdMaoPropria, nVlValorDeclarado, sCdAvisoRecebimento, sDtCalculo)





### Example
```javascript
var CorreiosApi = require('correios_api');

var apiInstance = new CorreiosApi.DefaultApi();

var nCdEmpresa = ""; // String | Seu código administrativo junto à ECT. O código está disponível no corpo do contrato firmado com os Correios. ##### Obs:   O parâmetro tem que ser passado mesmo vazio. 

var sDsSenha = ""; // String | Senha para acesso ao serviço, associada ao seu código administrativo. A senha inicial corresponde aos 8 primeiros dígitos do CNPJ informado no contrato. A qualquer momento, é possível alterar a senha no endereço  ##### Obs:   O parâmetro tem que ser passado mesmo vazio. 

var nCdServico = "nCdServico_example"; // String | | Código | Serviço               | |--------|-----------------------| | 40010  | SEDEX Varejo          | | 40045  | SEDEX a Cobrar Varejo | | 40215  | SEDEX 10 Varejo       | | 40290  | SEDEX Hoje Varejo     | | 41106  | PAC Varejo            |  ##### Obs:    Pode ser mais de um numa consulta separados por vírgula. 

var sCepOrigem = "sCepOrigem_example"; // String | CEP de origem hífen. Ex:   88102080 

var sCepDestino = "sCepDestino_example"; // String | CEP de destino sem hífen. Ex:    05311900 

var nVlPeso = "nVlPeso_example"; // String | Peso da encomenda, incluindo sua embalagem. O peso deve ser informado em quilogramas. Se o formato for Envelope, o valor máximo permitido será 1 kg 

var nCdFormato = 56; // Number | Formato da encomenda (incluindo embalagem). Valores possíveis:   1. Formato caixa/pacote   2. Formato rolo/prisma   3. Envelope 

var nVlComprimento = "nVlComprimento_example"; // String | Comprimento da encomenda (incluindo embalagem), em *centímetros* 

var nVlAltura = "nVlAltura_example"; // String | Altura da encomenda (incluindo embalagem), em *centímetros*. Se o formato for envelope, informar zero (0). 

var nVlLargura = "nVlLargura_example"; // String | Largura da encomenda (incluindo embalagem), em *centímetros*. 

var nVlDiametro = "nVlDiametro_example"; // String | Diâmetro da encomenda (incluindo embalagem), em *centímetros*. 

var sCdMaoPropria = "sCdMaoPropria_example"; // String | \"Indica se a encomenda será entregue com o serviço adicional mão própria. Valores possíveis: S ou N (S – Sim, N – Não)\" 

var nVlValorDeclarado = "0"; // String | Indica se a encomenda será entregue com o serviço adicional valor declarado. Neste campo deve ser apresentado o valor declarado desejado, em Reais 

var sCdAvisoRecebimento = "N"; // String | \"Indica se a encomenda será entregue com o serviço adicional aviso de recebimento. Valores possíveis: S ou N (S – Sim, N – Não)\" 

var sDtCalculo = new Date("2013-10-20"); // Date | Data tipo dd/mm/aaaa. Ex:    21/10/2017 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.calcPrecoPrazoDataGet(nCdEmpresa, sDsSenha, nCdServico, sCepOrigem, sCepDestino, nVlPeso, nCdFormato, nVlComprimento, nVlAltura, nVlLargura, nVlDiametro, sCdMaoPropria, nVlValorDeclarado, sCdAvisoRecebimento, sDtCalculo, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nCdEmpresa** | **String**| Seu código administrativo junto à ECT. O código está disponível no corpo do contrato firmado com os Correios. ##### Obs:   O parâmetro tem que ser passado mesmo vazio.  | [default to ]
 **sDsSenha** | **String**| Senha para acesso ao serviço, associada ao seu código administrativo. A senha inicial corresponde aos 8 primeiros dígitos do CNPJ informado no contrato. A qualquer momento, é possível alterar a senha no endereço  ##### Obs:   O parâmetro tem que ser passado mesmo vazio.  | [default to ]
 **nCdServico** | **String**| | Código | Serviço               | |--------|-----------------------| | 40010  | SEDEX Varejo          | | 40045  | SEDEX a Cobrar Varejo | | 40215  | SEDEX 10 Varejo       | | 40290  | SEDEX Hoje Varejo     | | 41106  | PAC Varejo            |  ##### Obs:    Pode ser mais de um numa consulta separados por vírgula.  | 
 **sCepOrigem** | **String**| CEP de origem hífen. Ex:   88102080  | 
 **sCepDestino** | **String**| CEP de destino sem hífen. Ex:    05311900  | 
 **nVlPeso** | **String**| Peso da encomenda, incluindo sua embalagem. O peso deve ser informado em quilogramas. Se o formato for Envelope, o valor máximo permitido será 1 kg  | 
 **nCdFormato** | **Number**| Formato da encomenda (incluindo embalagem). Valores possíveis:   1. Formato caixa/pacote   2. Formato rolo/prisma   3. Envelope  | 
 **nVlComprimento** | **String**| Comprimento da encomenda (incluindo embalagem), em *centímetros*  | 
 **nVlAltura** | **String**| Altura da encomenda (incluindo embalagem), em *centímetros*. Se o formato for envelope, informar zero (0).  | 
 **nVlLargura** | **String**| Largura da encomenda (incluindo embalagem), em *centímetros*.  | 
 **nVlDiametro** | **String**| Diâmetro da encomenda (incluindo embalagem), em *centímetros*.  | 
 **sCdMaoPropria** | **String**| \&quot;Indica se a encomenda será entregue com o serviço adicional mão própria. Valores possíveis: S ou N (S – Sim, N – Não)\&quot;  | 
 **nVlValorDeclarado** | **String**| Indica se a encomenda será entregue com o serviço adicional valor declarado. Neste campo deve ser apresentado o valor declarado desejado, em Reais  | [default to 0]
 **sCdAvisoRecebimento** | **String**| \&quot;Indica se a encomenda será entregue com o serviço adicional aviso de recebimento. Valores possíveis: S ou N (S – Sim, N – Não)\&quot;  | [default to N]
 **sDtCalculo** | **Date**| Data tipo dd/mm/aaaa. Ex:    21/10/2017  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="calcPrecoPrazoDataPost"></a>
# **calcPrecoPrazoDataPost**
> calcPrecoPrazoDataPost(nCdEmpresa, sDsSenha, sCepOrigem, sCepDestino, nCdFormato, nVlComprimento, nVlAltura, nVlLargura, nVlDiametro, sCdMaoPropria, nVlValorDeclarado, sCdAvisoRecebimento, sDtCalculo, opts)





### Example
```javascript
var CorreiosApi = require('correios_api');

var apiInstance = new CorreiosApi.DefaultApi();

var nCdEmpresa = ""; // String | Seu código administrativo junto à ECT. O código está disponível no corpo do contrato firmado com os Correios. ##### Obs:   O parâmetro tem que ser passado mesmo vazio. 

var sDsSenha = ""; // String | Senha para acesso ao serviço, associada ao seu código administrativo. A senha inicial corresponde aos 8 primeiros dígitos do CNPJ informado no contrato. A qualquer momento, é possível alterar a senha no endereço  ##### Obs:   O parâmetro tem que ser passado mesmo vazio. 

var sCepOrigem = "sCepOrigem_example"; // String | CEP de origem hífen. Ex:   88102080 

var sCepDestino = "sCepDestino_example"; // String | CEP de destino sem hífen. Ex:    05311900 

var nCdFormato = 56; // Number | Formato da encomenda (incluindo embalagem). Valores possíveis:   1. Formato caixa/pacote   2. Formato rolo/prisma   3. Envelope 

var nVlComprimento = "nVlComprimento_example"; // String | Comprimento da encomenda (incluindo embalagem), em *centímetros* 

var nVlAltura = "nVlAltura_example"; // String | Altura da encomenda (incluindo embalagem), em *centímetros*. Se o formato for envelope, informar zero (0). 

var nVlLargura = "nVlLargura_example"; // String | Largura da encomenda (incluindo embalagem), em *centímetros*. 

var nVlDiametro = "nVlDiametro_example"; // String | Diâmetro da encomenda (incluindo embalagem), em *centímetros*. 

var sCdMaoPropria = "sCdMaoPropria_example"; // String | \"Indica se a encomenda será entregue com o serviço adicional mão própria. Valores possíveis: S ou N (S – Sim, N – Não)\" 

var nVlValorDeclarado = "0"; // String | Indica se a encomenda será entregue com o serviço adicional valor declarado. Neste campo deve ser apresentado o valor declarado desejado, em Reais 

var sCdAvisoRecebimento = "N"; // String | \"Indica se a encomenda será entregue com o serviço adicional aviso de recebimento. Valores possíveis: S ou N (S – Sim, N – Não)\" 

var sDtCalculo = new Date("2013-10-20"); // Date | Data tipo dd/mm/aaaa. Ex:    21/10/2017 

var opts = { 
  'nCdServico': "nCdServico_example", // String | | Código | Serviço               | |--------|-----------------------| | 40010  | SEDEX Varejo          | | 40045  | SEDEX a Cobrar Varejo | | 40215  | SEDEX 10 Varejo       | | 40290  | SEDEX Hoje Varejo     | | 41106  | PAC Varejo            | ##### Obs:    Pode ser mais de um numa consulta separados por vírgula. 
  'nVlPeso': "nVlPeso_example" // String | Peso da encomenda, incluindo sua embalagem. O peso deve ser informado em quilogramas. Se o formato for Envelope, o valor máximo permitido será 1 kg 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.calcPrecoPrazoDataPost(nCdEmpresa, sDsSenha, sCepOrigem, sCepDestino, nCdFormato, nVlComprimento, nVlAltura, nVlLargura, nVlDiametro, sCdMaoPropria, nVlValorDeclarado, sCdAvisoRecebimento, sDtCalculo, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nCdEmpresa** | **String**| Seu código administrativo junto à ECT. O código está disponível no corpo do contrato firmado com os Correios. ##### Obs:   O parâmetro tem que ser passado mesmo vazio.  | [default to ]
 **sDsSenha** | **String**| Senha para acesso ao serviço, associada ao seu código administrativo. A senha inicial corresponde aos 8 primeiros dígitos do CNPJ informado no contrato. A qualquer momento, é possível alterar a senha no endereço  ##### Obs:   O parâmetro tem que ser passado mesmo vazio.  | [default to ]
 **sCepOrigem** | **String**| CEP de origem hífen. Ex:   88102080  | 
 **sCepDestino** | **String**| CEP de destino sem hífen. Ex:    05311900  | 
 **nCdFormato** | **Number**| Formato da encomenda (incluindo embalagem). Valores possíveis:   1. Formato caixa/pacote   2. Formato rolo/prisma   3. Envelope  | 
 **nVlComprimento** | **String**| Comprimento da encomenda (incluindo embalagem), em *centímetros*  | 
 **nVlAltura** | **String**| Altura da encomenda (incluindo embalagem), em *centímetros*. Se o formato for envelope, informar zero (0).  | 
 **nVlLargura** | **String**| Largura da encomenda (incluindo embalagem), em *centímetros*.  | 
 **nVlDiametro** | **String**| Diâmetro da encomenda (incluindo embalagem), em *centímetros*.  | 
 **sCdMaoPropria** | **String**| \&quot;Indica se a encomenda será entregue com o serviço adicional mão própria. Valores possíveis: S ou N (S – Sim, N – Não)\&quot;  | 
 **nVlValorDeclarado** | **String**| Indica se a encomenda será entregue com o serviço adicional valor declarado. Neste campo deve ser apresentado o valor declarado desejado, em Reais  | [default to 0]
 **sCdAvisoRecebimento** | **String**| \&quot;Indica se a encomenda será entregue com o serviço adicional aviso de recebimento. Valores possíveis: S ou N (S – Sim, N – Não)\&quot;  | [default to N]
 **sDtCalculo** | **Date**| Data tipo dd/mm/aaaa. Ex:    21/10/2017  | 
 **nCdServico** | **String**| | Código | Serviço               | |--------|-----------------------| | 40010  | SEDEX Varejo          | | 40045  | SEDEX a Cobrar Varejo | | 40215  | SEDEX 10 Varejo       | | 40290  | SEDEX Hoje Varejo     | | 41106  | PAC Varejo            | ##### Obs:    Pode ser mais de um numa consulta separados por vírgula.  | [optional] 
 **nVlPeso** | **String**| Peso da encomenda, incluindo sua embalagem. O peso deve ser informado em quilogramas. Se o formato for Envelope, o valor máximo permitido será 1 kg  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="calcPrecoPrazoRestricaoGet"></a>
# **calcPrecoPrazoRestricaoGet**
> calcPrecoPrazoRestricaoGet(nCdEmpresa, sDsSenha, nCdServico, sCepOrigem, sCepDestino, nVlPeso, nCdFormato, nVlComprimento, nVlAltura, nVlLargura, nVlDiametro, sCdMaoPropria, nVlValorDeclarado, sCdAvisoRecebimento, sDtCalculo)





### Example
```javascript
var CorreiosApi = require('correios_api');

var apiInstance = new CorreiosApi.DefaultApi();

var nCdEmpresa = ""; // String | Seu código administrativo junto à ECT. O código está disponível no corpo do contrato firmado com os Correios. ##### Obs:   O parâmetro tem que ser passado mesmo vazio. 

var sDsSenha = ""; // String | Senha para acesso ao serviço, associada ao seu código administrativo. A senha inicial corresponde aos 8 primeiros dígitos do CNPJ informado no contrato. A qualquer momento, é possível alterar a senha no endereço  ##### Obs:   O parâmetro tem que ser passado mesmo vazio. 

var nCdServico = "nCdServico_example"; // String | | Código | Serviço               | |--------|-----------------------| | 40010  | SEDEX Varejo          | | 40045  | SEDEX a Cobrar Varejo | | 40215  | SEDEX 10 Varejo       | | 40290  | SEDEX Hoje Varejo     | | 41106  | PAC Varejo            |  ##### Obs:    Pode ser mais de um numa consulta separados por vírgula. 

var sCepOrigem = "sCepOrigem_example"; // String | CEP de origem hífen. Ex:   88102080 

var sCepDestino = "sCepDestino_example"; // String | CEP de destino sem hífen. Ex:    05311900 

var nVlPeso = "nVlPeso_example"; // String | Peso da encomenda, incluindo sua embalagem. O peso deve ser informado em quilogramas. Se o formato for Envelope, o valor máximo permitido será 1 kg 

var nCdFormato = 56; // Number | Formato da encomenda (incluindo embalagem). Valores possíveis:   1. Formato caixa/pacote   2. Formato rolo/prisma   3. Envelope 

var nVlComprimento = "nVlComprimento_example"; // String | Comprimento da encomenda (incluindo embalagem), em *centímetros* 

var nVlAltura = "nVlAltura_example"; // String | Altura da encomenda (incluindo embalagem), em *centímetros*. Se o formato for envelope, informar zero (0). 

var nVlLargura = "nVlLargura_example"; // String | Largura da encomenda (incluindo embalagem), em *centímetros*. 

var nVlDiametro = "nVlDiametro_example"; // String | Diâmetro da encomenda (incluindo embalagem), em *centímetros*. 

var sCdMaoPropria = "sCdMaoPropria_example"; // String | \"Indica se a encomenda será entregue com o serviço adicional mão própria. Valores possíveis: S ou N (S – Sim, N – Não)\" 

var nVlValorDeclarado = "0"; // String | Indica se a encomenda será entregue com o serviço adicional valor declarado. Neste campo deve ser apresentado o valor declarado desejado, em Reais 

var sCdAvisoRecebimento = "N"; // String | \"Indica se a encomenda será entregue com o serviço adicional aviso de recebimento. Valores possíveis: S ou N (S – Sim, N – Não)\" 

var sDtCalculo = new Date("2013-10-20"); // Date | Data tipo dd/mm/aaaa. Ex:    21/10/2017 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.calcPrecoPrazoRestricaoGet(nCdEmpresa, sDsSenha, nCdServico, sCepOrigem, sCepDestino, nVlPeso, nCdFormato, nVlComprimento, nVlAltura, nVlLargura, nVlDiametro, sCdMaoPropria, nVlValorDeclarado, sCdAvisoRecebimento, sDtCalculo, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nCdEmpresa** | **String**| Seu código administrativo junto à ECT. O código está disponível no corpo do contrato firmado com os Correios. ##### Obs:   O parâmetro tem que ser passado mesmo vazio.  | [default to ]
 **sDsSenha** | **String**| Senha para acesso ao serviço, associada ao seu código administrativo. A senha inicial corresponde aos 8 primeiros dígitos do CNPJ informado no contrato. A qualquer momento, é possível alterar a senha no endereço  ##### Obs:   O parâmetro tem que ser passado mesmo vazio.  | [default to ]
 **nCdServico** | **String**| | Código | Serviço               | |--------|-----------------------| | 40010  | SEDEX Varejo          | | 40045  | SEDEX a Cobrar Varejo | | 40215  | SEDEX 10 Varejo       | | 40290  | SEDEX Hoje Varejo     | | 41106  | PAC Varejo            |  ##### Obs:    Pode ser mais de um numa consulta separados por vírgula.  | 
 **sCepOrigem** | **String**| CEP de origem hífen. Ex:   88102080  | 
 **sCepDestino** | **String**| CEP de destino sem hífen. Ex:    05311900  | 
 **nVlPeso** | **String**| Peso da encomenda, incluindo sua embalagem. O peso deve ser informado em quilogramas. Se o formato for Envelope, o valor máximo permitido será 1 kg  | 
 **nCdFormato** | **Number**| Formato da encomenda (incluindo embalagem). Valores possíveis:   1. Formato caixa/pacote   2. Formato rolo/prisma   3. Envelope  | 
 **nVlComprimento** | **String**| Comprimento da encomenda (incluindo embalagem), em *centímetros*  | 
 **nVlAltura** | **String**| Altura da encomenda (incluindo embalagem), em *centímetros*. Se o formato for envelope, informar zero (0).  | 
 **nVlLargura** | **String**| Largura da encomenda (incluindo embalagem), em *centímetros*.  | 
 **nVlDiametro** | **String**| Diâmetro da encomenda (incluindo embalagem), em *centímetros*.  | 
 **sCdMaoPropria** | **String**| \&quot;Indica se a encomenda será entregue com o serviço adicional mão própria. Valores possíveis: S ou N (S – Sim, N – Não)\&quot;  | 
 **nVlValorDeclarado** | **String**| Indica se a encomenda será entregue com o serviço adicional valor declarado. Neste campo deve ser apresentado o valor declarado desejado, em Reais  | [default to 0]
 **sCdAvisoRecebimento** | **String**| \&quot;Indica se a encomenda será entregue com o serviço adicional aviso de recebimento. Valores possíveis: S ou N (S – Sim, N – Não)\&quot;  | [default to N]
 **sDtCalculo** | **Date**| Data tipo dd/mm/aaaa. Ex:    21/10/2017  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="calcPrecoPrazoRestricaoPost"></a>
# **calcPrecoPrazoRestricaoPost**
> calcPrecoPrazoRestricaoPost(nCdEmpresa, sDsSenha, sCepOrigem, sCepDestino, nCdFormato, nVlComprimento, nVlAltura, nVlLargura, nVlDiametro, sCdMaoPropria, nVlValorDeclarado, sCdAvisoRecebimento, sDtCalculo, opts)





### Example
```javascript
var CorreiosApi = require('correios_api');

var apiInstance = new CorreiosApi.DefaultApi();

var nCdEmpresa = ""; // String | Seu código administrativo junto à ECT. O código está disponível no corpo do contrato firmado com os Correios. ##### Obs:   O parâmetro tem que ser passado mesmo vazio. 

var sDsSenha = ""; // String | Senha para acesso ao serviço, associada ao seu código administrativo. A senha inicial corresponde aos 8 primeiros dígitos do CNPJ informado no contrato. A qualquer momento, é possível alterar a senha no endereço  ##### Obs:   O parâmetro tem que ser passado mesmo vazio. 

var sCepOrigem = "sCepOrigem_example"; // String | CEP de origem hífen. Ex:   88102080 

var sCepDestino = "sCepDestino_example"; // String | CEP de destino sem hífen. Ex:    05311900 

var nCdFormato = 56; // Number | Formato da encomenda (incluindo embalagem). Valores possíveis:   1. Formato caixa/pacote   2. Formato rolo/prisma   3. Envelope 

var nVlComprimento = "nVlComprimento_example"; // String | Comprimento da encomenda (incluindo embalagem), em *centímetros* 

var nVlAltura = "nVlAltura_example"; // String | Altura da encomenda (incluindo embalagem), em *centímetros*. Se o formato for envelope, informar zero (0). 

var nVlLargura = "nVlLargura_example"; // String | Largura da encomenda (incluindo embalagem), em *centímetros*. 

var nVlDiametro = "nVlDiametro_example"; // String | Diâmetro da encomenda (incluindo embalagem), em *centímetros*. 

var sCdMaoPropria = "sCdMaoPropria_example"; // String | \"Indica se a encomenda será entregue com o serviço adicional mão própria. Valores possíveis: S ou N (S – Sim, N – Não)\" 

var nVlValorDeclarado = "0"; // String | Indica se a encomenda será entregue com o serviço adicional valor declarado. Neste campo deve ser apresentado o valor declarado desejado, em Reais 

var sCdAvisoRecebimento = "N"; // String | \"Indica se a encomenda será entregue com o serviço adicional aviso de recebimento. Valores possíveis: S ou N (S – Sim, N – Não)\" 

var sDtCalculo = new Date("2013-10-20"); // Date | Data tipo dd/mm/aaaa. Ex:    21/10/2017 

var opts = { 
  'nCdServico': "nCdServico_example", // String | | Código | Serviço               | |--------|-----------------------| | 40010  | SEDEX Varejo          | | 40045  | SEDEX a Cobrar Varejo | | 40215  | SEDEX 10 Varejo       | | 40290  | SEDEX Hoje Varejo     | | 41106  | PAC Varejo            | ##### Obs:    Pode ser mais de um numa consulta separados por vírgula. 
  'nVlPeso': "nVlPeso_example" // String | Peso da encomenda, incluindo sua embalagem. O peso deve ser informado em quilogramas. Se o formato for Envelope, o valor máximo permitido será 1 kg 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.calcPrecoPrazoRestricaoPost(nCdEmpresa, sDsSenha, sCepOrigem, sCepDestino, nCdFormato, nVlComprimento, nVlAltura, nVlLargura, nVlDiametro, sCdMaoPropria, nVlValorDeclarado, sCdAvisoRecebimento, sDtCalculo, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nCdEmpresa** | **String**| Seu código administrativo junto à ECT. O código está disponível no corpo do contrato firmado com os Correios. ##### Obs:   O parâmetro tem que ser passado mesmo vazio.  | [default to ]
 **sDsSenha** | **String**| Senha para acesso ao serviço, associada ao seu código administrativo. A senha inicial corresponde aos 8 primeiros dígitos do CNPJ informado no contrato. A qualquer momento, é possível alterar a senha no endereço  ##### Obs:   O parâmetro tem que ser passado mesmo vazio.  | [default to ]
 **sCepOrigem** | **String**| CEP de origem hífen. Ex:   88102080  | 
 **sCepDestino** | **String**| CEP de destino sem hífen. Ex:    05311900  | 
 **nCdFormato** | **Number**| Formato da encomenda (incluindo embalagem). Valores possíveis:   1. Formato caixa/pacote   2. Formato rolo/prisma   3. Envelope  | 
 **nVlComprimento** | **String**| Comprimento da encomenda (incluindo embalagem), em *centímetros*  | 
 **nVlAltura** | **String**| Altura da encomenda (incluindo embalagem), em *centímetros*. Se o formato for envelope, informar zero (0).  | 
 **nVlLargura** | **String**| Largura da encomenda (incluindo embalagem), em *centímetros*.  | 
 **nVlDiametro** | **String**| Diâmetro da encomenda (incluindo embalagem), em *centímetros*.  | 
 **sCdMaoPropria** | **String**| \&quot;Indica se a encomenda será entregue com o serviço adicional mão própria. Valores possíveis: S ou N (S – Sim, N – Não)\&quot;  | 
 **nVlValorDeclarado** | **String**| Indica se a encomenda será entregue com o serviço adicional valor declarado. Neste campo deve ser apresentado o valor declarado desejado, em Reais  | [default to 0]
 **sCdAvisoRecebimento** | **String**| \&quot;Indica se a encomenda será entregue com o serviço adicional aviso de recebimento. Valores possíveis: S ou N (S – Sim, N – Não)\&quot;  | [default to N]
 **sDtCalculo** | **Date**| Data tipo dd/mm/aaaa. Ex:    21/10/2017  | 
 **nCdServico** | **String**| | Código | Serviço               | |--------|-----------------------| | 40010  | SEDEX Varejo          | | 40045  | SEDEX a Cobrar Varejo | | 40215  | SEDEX 10 Varejo       | | 40290  | SEDEX Hoje Varejo     | | 41106  | PAC Varejo            | ##### Obs:    Pode ser mais de um numa consulta separados por vírgula.  | [optional] 
 **nVlPeso** | **String**| Peso da encomenda, incluindo sua embalagem. O peso deve ser informado em quilogramas. Se o formato for Envelope, o valor máximo permitido será 1 kg  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

