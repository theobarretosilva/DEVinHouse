package main

type Veiculo struct {
	Marca  string
	Modelo string
}

type Carro struct {
	Veiculo
	numeroDePortas int
}

type Moto struct {
	Veiculo
	cilindradas int
}

type Revisao interface {
	fazerRevisao(Carro, Moto)
}

func agendarRevisao(r Revisao) {
	carro := Carro{Veiculo{"Honda", "City"}, 4}
	moto := Moto{Veiculo{"Honda", "Biz"}, 124}

	r.fazerRevisao(carro, moto)
}
