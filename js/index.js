import { consultarCEP } from './cep.js'

const cepInput = document.getElementById('cepInput');
const bairroInput = document.getElementById('bairroInput');
const localidadeInput = document.getElementById('localidadeInput');
const logradouroInput = document.getElementById('logradouroInput');
const clearButton = document.getElementById('cleanFormButton');

cepInput.addEventListener('keyup', async () => {
   //Remove hífen do cep (na verdade , deixa somente número) , deixando somente números.
  const cep = cepInput.value.replace(/\D/g, '');
  if (cep.length === 8) { // Verifica se o CEP possui 8 dígitos
    try {
      const response = await consultarCEP(cep);
      //preencher os campos com o retorno do cep.
      bairroInput.value = response.bairro;
      localidadeInput.value = response.localidade;
      logradouroInput.value = response.logradouro;
    } catch (error) {
        // Abre o modal
        var bootstrapModal = new bootstrap.Modal(document.getElementById('ErrorModal'));
        bootstrapModal.show();
        // Inicia a barra de progresso
        var progressBar = document.querySelector('.progress-bar');
        var progress = 100;
        var interval = setInterval(function() {
        progress -= 1;
        progressBar.style.width = progress + '%';
        progressBar.setAttribute('aria-valuenow', progress);
        if (progress == 0) {
            clearInterval(interval);
            setTimeout(function() {
                bootstrapModal.hide();
                cleanInput();
              }, 800);
        }
        }, 20);
    }
  }
  else{
    if(cep.length === 5){
        //Quando digitar o 5 elemento irá adicionar um hífen ao input.
        const temporaryCep = cep + '-';
        cepInput.value = temporaryCep;
    } 
  }
});

//Apenas adicionando ao evento de click do botão o clearInput, assim irá remover valores atuais do input.
clearButton.addEventListener('click' , cleanInput());
function cleanInput(){
    cepInput.value = '';
    bairroInput.value = '';
    localidadeInput.value = '';
    logradouroInput.value = '';
}
