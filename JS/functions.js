function dadosPacientes(form) {
    var paciente = {
      nome: form.nome.value,
      peso: form.peso.value,
      altura: form.altura.value,
      gordura: form.gordura.value,
      imc: calculaImc(form.peso.value, form.altura.value),
    };
    return paciente;
  }
  
  function calculaImc(peso, altura) {
    var imc = 0;
  
    imc = peso / (altura * altura);
    return imc.toFixed(2);
  }
  
  var botaoCalcular = document.querySelector("#calcular-imc");
  
  botaoCalcular.addEventListener("click", function (event) {
    event.preventDefault();
    var form = document.querySelector("#form-calcula");
  
    var paciente = dadosPacientes(form);
  
    var erros = validaPaciente(paciente);
    
    if (erros.length > 0) {
      exibeMensagensdeErro(erros);
      return;
    } else {
      document.getElementById("resultado").innerHTML = paciente.imc;
    }
  
  
    if (paciente.imc < 18.5){
      var elemento = document.getElementById("baixo-peso");
      elemento.classList.remove("desaparece");
    } else {
      var elemento1 = document.getElementById("baixo-peso");
      elemento1.classList.add("desaparece");
    }
  
    if (paciente.imc >= 18.5 && paciente.imc < 25 ){
      var elemento = document.getElementById("medio-peso");
      elemento.classList.remove("desaparece");
    } else {
      var elemento1 = document.getElementById("medio-peso");
      elemento1.classList.add("desaparece");
    }
  
    if (paciente.imc >= 25 && paciente.imc < 30){    
      var elemento = document.getElementById("sobrepeso");
      elemento.classList.remove("desaparece");
    } else {
      var elemento1 = document.getElementById("sobrepeso");
      elemento1.classList.add("desaparece");
    }
  
  
    if (paciente.imc > 30){
      var elemento = document.getElementById("obesidade");
      elemento.classList.remove("desaparece");
    } else {
      var elemento1 = document.getElementById("obesidade");
      elemento1.classList.add("desaparece");
    }
  
    //form.reset();
    var erro = document.querySelector("#mensagem-erros");
    erro.innerHTML = "";
    event.preventDefault();
  });
  
  
  //erros
  function validaPaciente(paciente) {
    var erros = [];
  
    if (paciente.nome.length < 3)
      erros.push("Digite um nome com pelo menos 3 letras");
  
    if (!validaPeso(paciente.peso)) erros.push("Peso é invalido");
  
    if (paciente.gordura == 0 || paciente.gordura.length >= 3)
      erros.push("Digite uma % de gordura válida");
  
    if (!validaAltura(paciente.altura)) erros.push("Altura é invalido");
  
    return erros;
  }
  
  function exibeMensagensdeErro(erros) {
    var ul = document.querySelector("#mensagem-erros");
    ul.innerHTML = "";
  
    erros.forEach(function (erro) {
      var li = document.createElement("li");
      li.textContent = erro;
      ul.appendChild(li);
    });
  }
  
  function validaPeso(peso) {
    if (peso > 30 && peso < 300) {
      return true;
    } else {
      return false;
    }
  }
  
  function validaAltura(altura) {
    if (altura > 0.3 && altura < 3.0) {
      return true;
    } else {
      return false;
    }
  }
  