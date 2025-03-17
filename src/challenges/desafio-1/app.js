new Vue({
    el: '#desafio',
    data: {
        name: 'Junior Oliveira',
        age: 24,
        img: '/src/challenges/img/imagem.jpg'
    },
    methods: {
        randomNumber: function() {
            return Math.random();
        }
    }
})