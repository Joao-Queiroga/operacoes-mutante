const {
  soma,
  subtracao,
  multiplicacao,
  divisao,
  potencia,
  raizQuadrada,
  restoDivisao,
  fatorial,
  mediaArray,
  somaArray,
  maximoArray,
  minimoArray,
  valorAbsoluto,
  arredondar,
  isPar,
  isImpar,
  calcularPorcentagem,
  aumentarPorcentagem,
  diminuirPorcentagem,
  inverterSinal,
  seno,
  cosseno,
  tangente,
  logaritmoNatural,
  logaritmoBase10,
  arredondarParaBaixo,
  arredondarParaCima,
  hipotenusa,
  grausParaRadianos,
  radianosParaGraus,
  mdc,
  mmc,
  isPrimo,
  fibonacci,
  produtoArray,
  clamp,
  isDivisivel,
  celsiusParaFahrenheit,
  fahrenheitParaCelsius,
  inverso,
  areaCirculo,
  areaRetangulo,
  perimetroRetangulo,
  isMaiorQue,
  isMenorQue,
  isEqual,
  medianaArray,
  dobro,
  triplo,
  metade,
} = require("../src/operacoes");

describe("Suíte de Testes Fortalecida para 50 Operações Aritméticas", () => {
  // === TESTES PRINCIPAIS (1-50) ===
  test("1. deve somar dois números positivos", () => {
    expect(soma(2, 3)).toBe(5);
  });
  test("1.1 deve somar com zero", () => {
    expect(soma(5, 0)).toBe(5);
  });
  test("1.2 deve somar negativos", () => {
    expect(soma(-2, -3)).toBe(-5);
  });

  test("2. deve subtrair dois números positivos", () => {
    expect(subtracao(5, 2)).toBe(3);
  });
  test("2.1 deve subtrair com zero", () => {
    expect(subtracao(5, 0)).toBe(5);
  });
  test("2.2 deve subtrair negativo", () => {
    expect(subtracao(5, -2)).toBe(7);
  });

  test("3. deve multiplicar dois números positivos", () => {
    expect(multiplicacao(3, 4)).toBe(12);
  });
  test("3.1 deve multiplicar com zero", () => {
    expect(multiplicacao(10, 0)).toBe(0);
  });
  test("3.2 deve multiplicar com decimal", () => {
    expect(multiplicacao(2.5, 2)).toBe(5);
  });

  test("4. deve dividir e lançar erro para divisão por zero", () => {
    expect(divisao(10, 2)).toBe(5);
    expect(() => divisao(5, 0)).toThrow("Divisão por zero não é permitida.");
  });
  test("4.1 deve dividir com decimal", () => {
    expect(divisao(10, 4)).toBe(2.5);
  });

  test("5. deve calcular a potência com expoente positivo", () => {
    expect(potencia(2, 3)).toBe(8);
  });
  test("5.1 deve calcular potência com expoente zero", () => {
    expect(potencia(5, 0)).toBe(1);
  });

  test("6. deve calcular a raiz quadrada de um quadrado perfeito", () => {
    expect(raizQuadrada(16)).toBe(4);
  });
  test("6.1 deve calcular raiz de zero", () => {
    expect(raizQuadrada(0)).toBe(0);
  });
  test("6.2 deve lançar erro para número negativo", () => {
    expect(() => raizQuadrada(-1)).toThrow(
      "Não é possível calcular a raiz quadrada de um número negativo.",
    );
  });

  test("7. deve retornar o resto da divisão", () => {
    expect(restoDivisao(10, 3)).toBe(1);
  });
  test("7.1 deve retornar zero quando divisível", () => {
    expect(restoDivisao(10, 5)).toBe(0);
  });

  test("8. deve calcular o fatorial de um número maior que 1", () => {
    expect(fatorial(4)).toBe(24);
  });
  test("8.1 deve retornar 1 para fatorial de 0", () => {
    expect(fatorial(0)).toBe(1);
  });
  test("8.2 deve retornar 1 para fatorial de 1", () => {
    expect(fatorial(1)).toBe(1);
  });
  test("8.3 deve lançar erro para número negativo", () => {
    expect(() => fatorial(-5)).toThrow(
      "Fatorial não é definido para números negativos.",
    );
  });

  test("9. deve calcular a média de um array com múltiplos elementos", () => {
    expect(mediaArray([10, 20, 30])).toBe(20);
  });
  test("9.1 deve retornar 0 para array vazio", () => {
    expect(mediaArray([])).toBe(0);
  });

  test("10. deve somar um array com múltiplos elementos", () => {
    expect(somaArray([1, 2, 3])).toBe(6);
  });
  test("10.1 deve retornar 0 para array vazio", () => {
    expect(somaArray([])).toBe(0);
  });

  test("11. deve encontrar o valor máximo em um array", () => {
    expect(maximoArray([1, 50, 10])).toBe(50);
  });
  test("11.1 deve lançar erro para array vazio", () => {
    expect(() => maximoArray([])).toThrow(
      /Array vazio [а-я]+ possui valor máximo\./,
    );
  });

  test("12. deve encontrar o valor mínimo em um array", () => {
    expect(minimoArray([10, 2, 100])).toBe(2);
  });
  test("12.1 deve lançar erro para array vazio", () => {
    expect(() => minimoArray([])).toThrow(
      /Array vazio [а-я]+ possui valor mínimo\./,
    );
  });

  test("13. deve retornar o valor absoluto de um número negativo", () => {
    expect(valorAbsoluto(-5)).toBe(5);
  });
  test("13.1 deve retornar o mesmo para número positivo", () => {
    expect(valorAbsoluto(5)).toBe(5);
  });

  test("14. deve arredondar um número para cima", () => {
    expect(arredondar(9.8)).toBe(10);
  });
  test("14.1 deve arredondar para baixo", () => {
    expect(arredondar(9.2)).toBe(9);
  });

  test("15. deve retornar true para um número par", () => {
    expect(isPar(100)).toBe(true);
  });
  test("15.1 deve retornar false para ímpar", () => {
    expect(isPar(7)).toBe(false);
  });

  test("16. deve retornar true para um número ímpar", () => {
    expect(isImpar(7)).toBe(true);
  });
  test("16.1 deve retornar false para par", () => {
    expect(isImpar(100)).toBe(false);
  });

  test("17. deve calcular uma porcentagem simples", () => {
    expect(calcularPorcentagem(50, 200)).toBe(100);
  });
  test("17.1 deve calcular 0% e 100%", () => {
    expect(calcularPorcentagem(0, 100)).toBe(0);
    expect(calcularPorcentagem(100, 100)).toBe(100);
  });

  test("18. deve aumentar um valor em uma porcentagem", () => {
    expect(aumentarPorcentagem(100, 10)).toBeCloseTo(110);
  });
  test("18.1 deve aumentar com 0%", () => {
    expect(aumentarPorcentagem(100, 0)).toBe(100);
  });

  test("19. deve diminuir um valor em uma porcentagem", () => {
    expect(diminuirPorcentagem(100, 10)).toBeCloseTo(90);
  });
  test("19.1 deve diminuir com 100%", () => {
    expect(diminuirPorcentagem(100, 100)).toBe(0);
  });

  test("20. deve inverter o sinal de um número positivo", () => {
    expect(inverterSinal(42)).toBe(-42);
  });
  test("20.1 deve inverter negativo para positivo", () => {
    expect(inverterSinal(-42)).toBe(42);
  });

  test("21. deve calcular o seno de 0", () => {
    expect(seno(0)).toBe(0);
  });
  test("21.1 deve calcular seno de PI/2", () => {
    expect(seno(Math.PI / 2)).toBeCloseTo(1);
  });

  test("22. deve calcular o cosseno de 0", () => {
    expect(cosseno(0)).toBe(1);
  });
  test("22.1 deve calcular cosseno de PI", () => {
    expect(cosseno(Math.PI)).toBeCloseTo(-1);
  });

  test("23. deve calcular a tangente de 0", () => {
    expect(tangente(0)).toBe(0);
  });
  test("23.1 deve calcular tangente de PI/4", () => {
    expect(tangente(Math.PI / 4)).toBeCloseTo(1);
  });

  test("24. deve calcular o logaritmo natural de Euler", () => {
    expect(logaritmoNatural(Math.E)).toBe(1);
  });
  test("24.1 deve calcular log de 1", () => {
    expect(logaritmoNatural(1)).toBe(0);
  });

  test("25. deve calcular o logaritmo na base 10", () => {
    expect(logaritmoBase10(100)).toBe(2);
  });
  test("25.1 deve calcular log10 de 1", () => {
    expect(logaritmoBase10(1)).toBe(0);
  });

  test("26. deve arredondar para baixo", () => {
    expect(arredondarParaBaixo(5.9)).toBe(5);
  });
  test("26.1 deve arredondar número inteiro", () => {
    expect(arredondarParaBaixo(5)).toBe(5);
  });

  test("27. deve arredondar para cima", () => {
    expect(arredondarParaCima(5.1)).toBe(6);
  });
  test("27.1 deve arredondar número inteiro", () => {
    expect(arredondarParaCima(5)).toBe(5);
  });

  test("28. deve calcular a hipotenusa de um triângulo retângulo", () => {
    expect(hipotenusa(3, 4)).toBe(5);
  });
  test("28.1 deve calcular com catetos iguais", () => {
    expect(hipotenusa(5, 5)).toBeCloseTo(7.071);
  });

  test("29. deve converter graus para radianos", () => {
    expect(grausParaRadianos(180)).toBeCloseTo(Math.PI);
  });
  test("29.1 deve converter 0 graus", () => {
    expect(grausParaRadianos(0)).toBe(0);
  });

  test("30. deve converter radianos para graus", () => {
    expect(radianosParaGraus(Math.PI)).toBeCloseTo(180);
  });
  test("30.1 deve converter 0 radianos", () => {
    expect(radianosParaGraus(0)).toBe(0);
  });

  test("31. deve calcular o MDC de dois números", () => {
    expect(mdc(10, 5)).toBe(5);
  });
  test("31.1 deve calcular MDC com números coprimos", () => {
    expect(mdc(7, 5)).toBe(1);
  });

  test("32. deve calcular o MMC de dois números", () => {
    expect(mmc(10, 5)).toBe(10);
  });
  test("32.1 deve calcular MMC com números coprimos", () => {
    expect(mmc(7, 5)).toBe(35);
  });

  test("33. deve verificar que um número é primo", () => {
    expect(isPrimo(7)).toBe(true);
  });
  test("33.1 deve retornar false para 1 e 0", () => {
    expect(isPrimo(1)).toBe(false);
    expect(isPrimo(0)).toBe(false);
  });
  test("33.2 deve retornar false para número composto (ex: 4)", () => {
    expect(isPrimo(4)).toBe(false);
  });

  test("34. deve calcular o 10º termo de Fibonacci", () => {
    expect(fibonacci(10)).toBe(55);
  });
  test("34.1 deve calcular Fibonacci de 0 e 1", () => {
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(1)).toBe(1);
  });

  test("35. deve calcular o produto de um array", () => {
    expect(produtoArray([2, 3, 4])).toBe(24);
  });
  test("35.1 deve retornar 1 para array vazio", () => {
    expect(produtoArray([])).toBe(1);
  });
  test("35.2 deve retornar 1 para array vazio (cobertura explícita)", () => {
    expect(produtoArray([])).toBe(1);
  });

  test("36. deve manter um valor dentro de um intervalo (clamp)", () => {
    expect(clamp(5, 0, 10)).toBe(5);
  });
  test("36.1 deve clamp abaixo do mínimo", () => {
    expect(clamp(-5, 0, 10)).toBe(0);
  });
  test("36.2 deve clamp acima do máximo", () => {
    expect(clamp(15, 0, 10)).toBe(10);
  });
  test("36.3 deve retornar min quando valor igual a min", () => {
    expect(clamp(0, 0, 10)).toBe(0);
  });
  test("36.4 deve retornar max quando valor igual a max", () => {
    expect(clamp(10, 0, 10)).toBe(10);
  });

  test("37. deve verificar se um número é divisível por outro", () => {
    expect(isDivisivel(10, 2)).toBe(true);
  });
  test("37.1 deve retornar false quando não divisível", () => {
    expect(isDivisivel(10, 3)).toBe(false);
  });

  test("38. deve converter Celsius para Fahrenheit", () => {
    expect(celsiusParaFahrenheit(0)).toBe(32);
  });
  test("38.1 deve converter ponto de ebulição", () => {
    expect(celsiusParaFahrenheit(100)).toBe(212);
  });

  test("39. deve converter Fahrenheit para Celsius", () => {
    expect(fahrenheitParaCelsius(32)).toBe(0);
  });
  test("39.1 deve converter 212°F", () => {
    expect(fahrenheitParaCelsius(212)).toBe(100);
  });

  test("40. deve calcular o inverso de um número", () => {
    expect(inverso(4)).toBe(0.25);
  });
  test("40.1 deve lançar erro para zero", () => {
    expect(() => inverso(0)).toThrow("Não é possível inverter o número zero.");
  });

  test("41. deve calcular a área de um círculo", () => {
    expect(areaCirculo(10)).toBeCloseTo(314.159);
  });
  test("41.1 deve calcular área de raio 0", () => {
    expect(areaCirculo(0)).toBe(0);
  });

  test("42. deve calcular a área de um retângulo", () => {
    expect(areaRetangulo(5, 4)).toBe(20);
  });
  test("42.1 deve calcular com lados iguais", () => {
    expect(areaRetangulo(5, 5)).toBe(25);
  });

  test("43. deve calcular o perímetro de um retângulo", () => {
    expect(perimetroRetangulo(5, 4)).toBe(18);
  });
  test("43.1 deve calcular quadrado", () => {
    expect(perimetroRetangulo(5, 5)).toBe(20);
  });

  test("44. deve verificar se um número é maior que outro", () => {
    expect(isMaiorQue(10, 5)).toBe(true);
  });
  test("44.1 deve retornar false se igual", () => {
    expect(isMaiorQue(5, 5)).toBe(false);
  });

  test("45. deve verificar se um número é menor que outro", () => {
    expect(isMenorQue(5, 10)).toBe(true);
  });
  test("45.1 deve retornar false se igual", () => {
    expect(isMenorQue(5, 5)).toBe(false);
  });

  test("46. deve verificar se dois números são iguais", () => {
    expect(isEqual(7, 7)).toBe(true);
  });
  test("46.1 deve retornar false se diferentes", () => {
    expect(isEqual(7, 8)).toBe(false);
  });

  test("46.2 MATA MUTANTE DO SORT: a - b → a + b", () => {
    const input = [1, 10, -1];
    const result = medianaArray(input);
    expect(result).toBe(1); // ordem correta: [-1, 1, 10] → mediana = 1
  });

  test("47.2 deve lançar erro para array vazio", () => {
    expect(() => medianaArray([])).toThrow(
      /Array vazio [а-я]+ possui mediana\./,
    );
  });
  test("47.3 deve ordenar corretamente antes de calcular mediana", () => {
    expect(medianaArray([3, 1, 4, 2])).toBe(2.5);
  });

  test("48. deve calcular o dobro de um número", () => {
    expect(dobro(10)).toBe(20);
  });
  test("48.1 deve calcular dobro de zero", () => {
    expect(dobro(0)).toBe(0);
  });

  test("49. deve calcular o triplo de um número", () => {
    expect(triplo(10)).toBe(30);
  });
  test("49.1 deve calcular triplo de negativo", () => {
    expect(triplo(-10)).toBe(-30);
  });

  test("50. deve calcular a metade de um número", () => {
    expect(metade(20)).toBe(10);
  });
  test("50.1 deve calcular metade de número ímpar", () => {
    expect(metade(21)).toBe(10.5);
  });

  test("mata || → && no fatorial", () => {
    expect(fatorial(1)).toBe(1); // com && → nunca entra → loop infinito ou erro
  });
});

// describe("Mutation Killers - Mata os 5 mutantes condicionais", () => {
//   test("mata if (false) no fatorial", () => {
//     expect(fatorial(3)).toBe(6); // se if (false), retorna 1 → falha
//   });
//
//   test("mata n === 0 → false", () => {
//     expect(fatorial(0)).toBe(1);
//   });
//
//   test("mata n === 1 → false", () => {
//     expect(fatorial(1)).toBe(1);
//   });
// });

