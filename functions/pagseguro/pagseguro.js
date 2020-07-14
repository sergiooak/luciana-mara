const fetch = require('node-fetch');
const convert = require('xml-js');

async function makePayment(){
  let emailPS = 'loja@lucianamarquesuniformes.com.br'
  let tokenPS = 'ca199256-582b-4754-9740-91784d242e91ed7bf3e44c9db89aef4a58b471c930737d94-1ec9-46c4-8f80-06f83e0d5d32'

  let form = {
    paymentMode:                'default',
    paymentMethod:              'creditCard',
    receiverEmail:              'comprador@teste.com.br',
    currency:                   'BRL',
    extraAmount:                '1.00',
    itemId1:                    '0001',
    itemDescription1:           'NotebookPrata',
    itemAmount1:                '24300.00',
    itemQuantity1:              '1',
    notificationURL:            'https://sualoja.com.br/notifica.html',
    reference:                  'REF1234',
    senderName:                 'JoseComprador',
    senderCPF:                  '22111944785',
    senderAreaCode:             '11',
    senderPhone:                '56273440',
    senderEmail:                'comprador@uol.com.br',
    senderHash:                 '{{ADICIONE O HASH}}',
    shippingAddressStreet:      'Av.Brig.FariaLima',
    shippingAddressNumber:      '1384',
    shippingAddressComplement:  '5oandar',
    shippingAddressDistrict:    'JardimPaulistano',
    shippingAddressPostalCode:  '01452002',
    shippingAddressCity:        'SaoPaulo',
    shippingAddressState:       'SP',
    shippingAddressCountry:     'BRA',
    shippingType:               '3',
    shippingCost:               '1.00',
    creditCardToken:            '{{TOKEN DE CARTÃO}}',
    installmentQuantity:        '5',
    installmentValue:           '125.22',
    noInterestInstallmentQuantity:  '1',
    creditCardHolderName:       'JoseComprador',
    creditCardHolderCPF:        '22111944785',
    creditCardHolderBirthDate:  '27/10/1987',
    creditCardHolderAreaCode:   '11',
    creditCardHolderPhone:      '56273440',
    billingAddressStreet:       'Av.Brig.FariaLima',
    billingAddressNumber:       '1384',
    billingAddressComplement:   '5oandar',
    billingAddressDistrict:     'JardimPaulistano',
    billingAddressPostalCode:   '01452002',
    billingAddressCity:         'SaoPaulo',
    billingAddressState:        'SP',
    billingAddressCountry:      'BRA'
  };

  let formBody = [];

  for (let item in form) {
    let encodedKey = encodeURIComponent(item);
    let encodedValue = encodeURIComponent(form[item]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");

  console.log(formBody);
  

  const response = await fetch(`https://ws.pagseguro.uol.com.br/v2/transactions?email=${emailPS}&token=${tokenPS}`,{
    method: "POST",
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: formBody
  }).then(async function (res) {
    return await res.text()
  })

  return response
}

exports.handler = async function(event, context) {    
    let res = await makePayment();

    return {
      statusCode: 200,
      body: res
    }
}
