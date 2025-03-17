new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alertaClick: function () {
            alert('O botão foi acionado! ');
        },
        eventoDoTeclado: function (event){
            this.valor = event.target.value;
        }
    }
})