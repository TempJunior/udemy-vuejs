new Vue({
	el: '#desafio',
	data: {
		meusStyles: 'tamanho',
		aplyC1: false,
		width: 0
	},
	methods: {
		iniciarEfeito() {
			for (let i = 0; i < 1000; i++) {
				setInterval(function () {
					return
				},1000)
			}
		},
		iniciarProgresso() {
			let valor = 0;
			const temporizador = setInterval(() => {
				valor += 5
				this.width = `${valor}%`
				if (valor == 100) clearInterval(temporizador);
			},500)
		}
	},
})
