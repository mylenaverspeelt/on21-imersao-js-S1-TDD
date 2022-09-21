const {
  converterCelsiusPraFahrenheit,
  soma,
  verificarNumero,
  reverterString,
  jokenpo,
  gerarCombinacao,
  allKeys,
  isObject,
  receberMoedas,
} = require("./index");

// *****************
describe("função de conversão de temperatura", () => {
  test("deve converter de celcius pra fahrenheit", () => {
    expect(converterCelsiusPraFahrenheit(60)).toEqual(140);
  });
});

// *****************
describe("checa se o numero é par ou impar", () => {

  test("testa se é um numero", () => {
    expect(verificarNumero("banana")).not.toBeNaN();
  });

  test("testa se é par", () => {
    expect(verificarNumero(4)).toEqual("4 é um número par");
  });
  test("testa se é impar", () => {
    expect(verificarNumero(3)).toEqual("3 é um número ímpar");
  });
});

// *****************
describe("Função de soma", () => {
  test("(5, 1) => 6)", () => {
    expect(soma(5, 1)).toEqual(6);
  });
  test("(1, 1) => 6)", () => {
    expect(soma(1, 1)).toEqual(6);
  });
});

// *****************
describe("função de reverterString ", () => {
  test("'casa' => 'asac'", () => {
    expect(reverterString("casa")).toEqual("asac");
  });

  test("'javascript' => 'tpircsavaj'", () => {
    expect(reverterString("javascript")).toEqual("tpircsavaj");
  });
});

// *****************

describe("pedra papel e tesoura", () => {
  test("Testa se a jogada1 for igual a jogada 2", () => {
    const jogada1 = "pedra";
    const jogada2 = "pedra";
    const resultado = jokenpo(jogada1, jogada2);
    expect(resultado).toBe("Empate!");
  });
  test("Condição aleatória pra testar quando o jogador 1 ganha", () => {
    const jogada1 = "papel";
    const jogada2 = "pedra";
    const resultado = jokenpo(jogada1, jogada2);
    expect(resultado).toBe("Jogador 1 venceu!");
  });
  test("Condição aleatória pra testar quando o jogador 2 ganha", () => {
    const jogada1 = "tesoura";
    const jogada2 = "pedra";
    const resultado = jokenpo(jogada1, jogada2);
    expect(resultado).toBe("Jogador 2 venceu!");
  });
});
// seria necessário fazer um teste para cada possibilidade de jogada????

// *****************
describe('gerar combinações de caracteres num array',()=>{
  test('Testa combinação',()=>{
    let resultado = gerarCombinacao('ovo')
    expect(resultado).toEqual(["o", "v", "ov", "o", "oo", "vo", "ovo"])
  })
})

// *****************
describe("Verificar as chaves", () => {
  test("Testa se o input do usuario é um objeto", () => {
    const objetoTeste = {};
    const resultado = isObject(objetoTeste);
    expect(resultado).toBe(true);
  });
  test("Testa o retorno das keys do objeto", () => {
    const objetoTeste = {
      chave1: 2,
      chave2: 1,
      chave3: 5,
    };
    const resultado = allKeys(objetoTeste);
    expect(resultado).toStrictEqual(["chave1", "chave2", "chave3"]);
  });
});
// *****************

describe('Calcular troco', () => {
  const moedasDisponiveis = [1, 0.50, 0.25, 0.10, 0.05]
  test('Calcula troco pra 1 real retorna 1 moeda de 1 real', ()=>{
    expect(receberMoedas(1, moedasDisponiveis)).toStrictEqual([1])
  })
  test('Calcula troco pra 2 reais e retornar um array [1, 1]', () => {
    expect(receberMoedas(2, moedasDisponiveis)).toEqual([1, 1])
  })

  test('Calcula troco pra 2,10 e retornar um array [1 ,1, 0.10]', () => {
    expect(receberMoedas(2.10, moedasDisponiveis)).toEqual([1 , 1, 0.10])
  })

})
