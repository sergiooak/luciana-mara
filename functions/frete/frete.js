const Correios = require('node-correios');
const correios = new Correios();

async function calculaFrete(sCepDestino, nVlPeso, nVlComprimento, nVlAltura, nVlLargura) {
  let argsPac = {
    nCdServico: '04510',
    sCepOrigem: '38400436',
    sCepDestino: sCepDestino,
    nVlPeso: nVlPeso,
    nCdFormato: 1,
    nVlComprimento: nVlComprimento,
    nVlAltura: nVlLargura,
    nVlLargura: nVlLargura,
    nVlDiametro: 0
  };

  let argsSedex = {
    nCdServico: '04014',
    sCepOrigem: '38400436',
    sCepDestino: sCepDestino,
    nVlPeso: nVlPeso,
    nCdFormato: 1,
    nVlComprimento: nVlComprimento,
    nVlAltura: nVlLargura,
    nVlLargura: nVlLargura,
    nVlDiametro: 0
  };

  let pac = await correios.calcPrecoPrazo(argsPac)
  .then(result => {
    return result.map(function (e) {
      return {
        'valor': parseFloat((e['Valor']).replace(',','.')).toFixed(2),
        'prazo': e['PrazoEntrega'],
      }
    });
  })
  .catch(error => {
    return error;
  });

  let sedex = await correios.calcPrecoPrazo(argsSedex)
  .then(result => {
    return result.map(function (e) {
      return {
        'valor': parseFloat((e['Valor']).replace(',','.')).toFixed(2),
        'prazo': e['PrazoEntrega'],
      }
    });
  })
  .catch(error => {
    return error;
  });

  return {
    "pac": pac[0],
    "sedex": sedex[0]
  };
}

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async (event, context) => {
  try {
    const response = await calculaFrete(
      event.queryStringParameters.sCepDestino,
      event.queryStringParameters.nVlPeso        || '1',
      event.queryStringParameters.nVlComprimento || 39,
      event.queryStringParameters.nVlAltura      || 7,
      event.queryStringParameters.nVlLargura     || 27,
    )
    return {
      statusCode: 200,
      body: JSON.stringify(response),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
