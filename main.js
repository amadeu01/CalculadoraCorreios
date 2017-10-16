var CorreiosApi = require('correios_api');

var api = new CorreiosApi.DefaultApi()

var nCdServico = "04065";
var sCepOrigem = "88102080";
var sCepDestino = "05311900";
var opts = {'sDtCalculo': new Date("2017-10-20")};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.calcPrazoDataGet(nCdServico, sCepOrigem, sCepDestino, opts, callback);
