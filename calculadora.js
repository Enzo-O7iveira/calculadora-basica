/* Código calculadora*/
        /*Criando a váriavel 'somando' em prol do uso da função 'cliquei'*/
        var somando = document.querySelector('div#teste')
        somando.addEventListener('click', cliquei)
    
    /* Aqui estava testando o comando "add.EventListener" para ver como funcionava nessa ocasião  
        somando.addEventListener('mouseenter', entrei)
        somando.addEventListener('mouseout', saida)*/
        
       /*Chamando a função de somar os números inseridos*/ 
        function somar(){
            var n1 = document.getElementById('txt1')
            var n2 = document.getElementById('txt2')
                var resultado = document.getElementById('resultado')
            var somaN1 = Number(txt1.value)
            var somaN2 = Number(txt2.value)
    
        var somaAmbos = somaN1 + somaN2
        resultado.innerHTML = `A soma de ${somaN1} e ${somaN2} é igual a <strong>${somaAmbos}<strong>`
        }
    /*Chamando a função de multiplicar os números inseridos*/
        function multiplicar(){
            var n1 = document.getElementById('txt1')
            var n2 = document.getElementById('txt2')
                var resultado = document.getElementById('resultado')
                var somaN1 = Number(txt1.value)
                var somaN2 = Number(txt2.value)
            
            var multiplicarAmbos = somaN1 * somaN2
            resultado.innerHTML = `A multiplicação de ${somaN1} e ${somaN2} é igual a <strong>${multiplicarAmbos}<strong>`
        }
    /*Chamando a função de subtrair os números inseridos*/
        function subtracao(){
            var n1 = document.getElementById('txt1')
            var n2 = document.getElementById('txt2')
                var resultado = document.getElementById('resultado')
                var somaN1 = Number(txt1.value)
                var somaN2 = Number(txt2.value)
            
            var subtraiAmbos = somaN1 - somaN2
            resultado.innerHTML = `A subtração de ${somaN1} e ${somaN2} é igual a <strong>${subtraiAmbos}<strong>`
        }
        /*Chamando a função de dividir os números inseridos*/
        function divisao(){
            var n1 = document.getElementById('txt1')
            var n2 = document.getElementById('txt2')
                var resultado = document.getElementById('resultado')
                var somaN1 = Number(txt1.value)
                var somaN2 = Number(txt2.value)
            
            var divideAmbos = somaN1 / somaN2
            resultado.innerHTML = `A divisão de ${somaN1} e ${somaN2} é igual a <strong>${divideAmbos}<strong>`
        }
    
        /*Chamando a função de clicar*/
        function cliquei(){
            somando.innerHTML('Aqui está a resposta')
            somando.style.background = 'black'
        }
        
        
    /*Chamando as funções de 'mouseout' e 'mouseenter' para teste
        
        /*function entrei(){
            somando.innerHTML = `Entrou`
            somando.style.background = 'gray'
        }
        function saida(){
            somando.innerHTML = `Saiu`
            somando.style.background = 'red'
        }
    */
