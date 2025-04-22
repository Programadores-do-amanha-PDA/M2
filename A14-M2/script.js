// Class Pai
class Heroi{
  // função para construir a propriedade da classe heroi
  constructor(nome, altura, poder){
    this.nome = nome;
    this.altura = altura;
    this.poder = poder;
  }

  // método = ação
  apresentacao(){
    console.log(`Eu sou ${this.nome}, minha altura é: ${this.altura} e meu super poder é: ${this.poder}`)
  }

}

let heroi1 = new Heroi("Mulher Maravilha", "1.83cm", "laço da verdade/faz tudo");
console.log(heroi1);

let heroi2 = new Heroi("Thor", "1.90cm", "Deus do trovão");
console.log(heroi2.apresentacao());

// class Filha
class HeroiRapido extends Heroi{
  constructor(nome, altura, poder, superVelocidade){
    // Propriedades class pai
    super(nome, altura, poder);
    this.superVelocidade = superVelocidade;
  }
}

let heroi3 = new HeroiRapido("Trem Bala", "1.80", "super velocidade", "1.600 km/h");
console.log(heroi3.superVelocidade)
