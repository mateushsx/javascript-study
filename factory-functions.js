function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,
    peso,
    altura,

    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    set nomeCompleto(valor) {
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
    },

    get imc() {
      return (this.peso / (this.altura * this.altura)).toFixed(2);
    },

    fala(assunto) {
      return `${nome} está falando ${assunto || '...'}`;
    },
  };
}

const person1 = criaPessoa('Bob', 'Marley', 1.8, 80);

console.log(person1.fala('Nodejs'));
