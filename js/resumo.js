const btnCriar = document.querySelector('.button-abrir') ;
const criar = document.querySelector('.criar');
;

function handleClick() {
   
  criarDiv(); 

}

function criarDiv() {
  const div = document.createElement('div');


// Variavel Renomear
  const divRenomear = document.createElement('div');
  const btnRenomear = document.createElement('button');
  const imgRenomear = document.createElement('img');
//Fim  aariavel Renomear

// Variavel Fechar
  const divFechar = document.createElement('div');
  const btnFechar = document.createElement('button');
// Fim variavel Fechar


// Variavel Cores
  const corEtiqueta = document.createElement('div');
  const labelCor = document.createElement('label');
  const criarSelect  = document.createElement('select');
  const verde = document.createElement('option');
  const amarelo = document.createElement('option');
  const vermelho = document.createElement('option');
// Fim aariavel Cores

//Variavel inputs e textearea
  const inputText = document.createElement('input');
  const inputNumber = document.createElement('input');
  const textearea = document.createElement('textarea');
 //Fim variavel inputs e textearea


 div.classList.add('criar-div');
 div.classList.add('ativo');
 div.style.backgroundColor = '#37cc41'


 //Botao Renomear
  divRenomear.classList.add('renomear')
  imgRenomear.src = "renomear.png";
  btnRenomear.appendChild(imgRenomear);
  divRenomear.appendChild(btnRenomear);
  
  function renomearDiv() {
    inputText.disabled = false;
    inputNumber.disabled = false;
    inputNumber.value = -1;
    inputNumber.placeholder='Invalido';
    inputNumber.style.borderColor = 'red';
    inputNumber.value =  inputNumber.placeholder;
    textearea.disabled = false;

  }
  btnRenomear.addEventListener('click', renomearDiv);

 //Fim botao Renomear 


//Botao de fechar 
  btnFechar.innerHTML = 'X';
  divFechar.classList.add('fechar');
  divFechar.appendChild(btnFechar);

  function botaoFechar() {
    div.remove();
  }


  btnFechar.addEventListener('click', botaoFechar);
// Fim Botao Fechat


//  Mudança de cores das divs
  corEtiqueta.classList.add('cor-etiqueta');  
  criarSelect.name = 'cores';
  verde.innerHTML = 'Verde';
  amarelo.innerHTML = 'Amarelo';
  vermelho.innerHTML = 'Vermelho';
  verde.value = "green";
  amarelo.value = "yellow";
  vermelho.value = "red";
  labelCor.innerHTML = 'Cor:'

  function mudarCor() {

    if(criarSelect.value == 'yellow') {
      div.style.backgroundColor = '#ffff56'
    }
    else if(criarSelect.value == 'red') {
    div.style.backgroundColor = '#ff7575'
    }
    else {
    div.style.backgroundColor = '#37cc41'
    }
  }
  criarSelect.addEventListener('click', mudarCor);
    
//Fim das cores.

//Inputs e textearea
  inputText.type = 'text';
  inputText.placeholder = 'Titulo';
  inputText.classList.add('titulo');
  inputText.style.fontWeight = 'bold'; 
  inputNumber.type ='number';
  inputNumber.placeholder = 0;
  inputNumber.classList.add('numero');
  textearea. placeholder='Descrição';


  function mudaNumero() {
  if(inputText.value !='' && inputNumber.value!='' && textearea.value!='') {
    inputText.disabled = true;
    inputNumber.disabled = true;
    textearea.disabled = true;
    inputNumber.style.borderColor = 'rgba(0, 0, 0, .3)';
  }
    if( inputNumber.value < 0 ) {
      inputNumber.placeholder='Invalido';
      inputNumber.style.borderColor = 'red';
      inputNumber.value =  inputNumber.placeholder;
      inputText.disabled = false;
      inputNumber.disabled = false;
      textearea.disabled = false;
    }

  }

  window.addEventListener('change', mudaNumero);
//Inputs e textearea


  criar.appendChild(div);
  div.appendChild(divRenomear);
  div.appendChild(divFechar);
  div.appendChild(corEtiqueta)
  corEtiqueta.appendChild(labelCor);
  corEtiqueta.appendChild(criarSelect);
  criarSelect.appendChild(verde);
  criarSelect.appendChild(amarelo);
  criarSelect.appendChild(vermelho);
  div.appendChild(inputText);
  div.appendChild(inputNumber);
  div.appendChild(textearea);

}

btnCriar.addEventListener('click', handleClick);


 





    
    








