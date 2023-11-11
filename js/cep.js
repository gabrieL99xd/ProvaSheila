//Espera receber uma string representando o CEP , o template da string será apenas números e sem o ' - '.
export async function consultarCEP(cep){
    //Interpolo o cep com a url da api
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    // Faço a função retornar a resposta da API ou um erro.
    return await fetch(url).then(response => {
        //Caso o retorno não seja ok.
        if(!response.ok){
            throw new Error('Erro ao consultar CEP');
        }
        return response.json();
    })
    .then( data => {
        //A API retorna uma propriedade erro caso tenha ocorrido um problema.
        if(data.erro){
            throw new Error('Erro ao consultar CEP');
        }
        return data;
    })
    //Por garantia , pego um erro que não esteja previsto acima.
    .catch( error => {
        throw new Error('Erro ao consultar CEP');
    });
}