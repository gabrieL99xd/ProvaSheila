import { consultarCEP } from './cep.js'

test('consultarCEP retorna dados corretos para um CEP válido', async () => {
    //Crio uma const baseada no que deve ser o retorno da API.
    const mockSuccessResponse = { 
        cep: '01311-100',
        logradouro: 'Avenida Paulista',
        complemento: 'de 611 a 1045 - lado ímpar',
        bairro: 'Bela Vista',
        localidade: 'São Paulo',
        uf: 'SP',
        ibge: '3550308',
        gia: '1004',
        ddd: '11',
        siafi: '7107'
    };
    // Consulto a API  e armazeno o objeto na const result.
    const result = await consultarCEP('01311100');
    //Verifico se o retorno é o esperado.
    expect(result).toEqual(mockSuccessResponse);

});
