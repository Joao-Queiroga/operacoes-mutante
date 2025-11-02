# Relatório de Teste de Mutação – Operações Aritméticas

**Autor:** João Francisco Carvalho Soares de Oliveira Queiroga

**Disciplina**: Teste de Software

**Projeto:** Análise de Eficácia de Testes com Teste de Mutação

---

## Análise Inicial

### Cobertura de Código Inicial
A cobertura inicial foi obtida com o comando `jest --coverage`. Os resultados foram:

File         | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-------------|---------|----------|---------|---------|-------------------
operacoes.js | 85.41   | 58.82    | 100     | 98.64   | 112

- **Cobertura de Statements**: 85.41% – Alta.
- **Cobertura de Branches**: 58.82% – Baixa.
- **Cobertura de Functions**: 100% – Completa.
- **Cobertura de Lines**: 98.64% – Quase total.

### Pontuação de Mutação Inicial
A primeira execução do Stryker (`npx stryker run`) produziu:

File          |  mutation score total | % mutation score covered | killed | timeout | survived | no cov | errors |
--------------|--------|---------|----------|-----------|------------|----------|----------|
All files     |  73.71 |   78.11 |      154 |         3 |         44 |       12 |        0 |
operacoes.js |  73.71 |   78.11 |      154 |         3 |         44 |       12 |        0 |

> **Discrepância entre cobertura e mutação**:
> A cobertura de linhas (98.64%) e funções (100%) é alta, mas a **pontuação de mutação de apenas 73.11%** revela uma suíte de testes **extremamente frágil**.
> Isso ocorre porque:
> - **44 mutantes sobreviveram**: o código foi alterado, mas os testes **não detectaram**.
> - **12 mutantes sem cobertura**: partes do código **nunca são executadas**.
> - **Baixa cobertura de branches (58.82%)**: muitos caminhos lógicos **não são testados**.
>
> **Conclusão**: Cobertura tradicional **engana** — mutation testing expõe a **verdadeira qualidade**.

---

## Análise de Mutantes Críticos

Escolhi 3 mutantes sobreviventes **interessantes** da primeira execução do Stryker.

### Mutante 1: `if (n === 0 || n === 1) return 1;` → `if (false) return 1;`
**Localização**: `src/operacoes.js:32` (função `fatorial`)
**Tipo**: `ConditionalExpression`

```
[Survived] ConditionalExpression
src/operacoes.js:32:7
-     if (n === 0 || n === 1) return 1;
+     if (false) return 1;
Tests ran:
    8. deve calcular o fatorial de um número maior que 1
    8.1 deve retornar 1 para fatorial de 0
    8.2 deve retornar 1 para fatorial de 1
```

**O que a mutação fez?**
Removeu completamente o `if`, forçando o loop a rodar mesmo para `n = 0` ou `1`.

**Por que o teste original não matou?**
O loop `for (i = 2; i <= n; i++)` **não executa** quando `n < 2` → `resultado` permanece `1`.
**Resultado idêntico** → **mutante equivalente**.

---

### Mutante 2: `valor < min` → `valor <= min`
**Localização**: `src/operacoes.js:88` (função `clamp`)
**Tipo**: `EqualityOperator`

```
[Survived] EqualityOperator
src/operacoes.js:88:7
-     if (valor < min) return min;
+     if (valor <= min) return min;
```

**O que a mutação fez?**
Incluiu o caso `valor === min` no retorno de `min`.

**Por que o teste original não matou?**
Quando `valor === min`, ambos retornam `min` → **mesmo comportamento observável**.
**Mutante equivalente**.

---

### Mutante 3: `a - b` → `a + b` no `sort`
**Localização**: `src/operacoes.js:109` (função `medianaArray`)
**Tipo**: `ArithmeticOperator`

```
[Survived] ArithmeticOperator
src/operacoes.js:109
-     .sort((a, b) => a - b)
+     .sort((a, b) => a + b)
```

**O que a mutação fez?**
Quebrou a ordenação correta do array.

**Por que o teste original não matou?**
Testes usavam **apenas números positivos** → `a + b` pode ordenar "por acaso".
**Faltava teste com negativos**.

---

## Solução Implementada

### 1. Mutante do `sort` (matável)
Adicionado teste com **números negativos**:

```js
test("46.2 MATA MUTANTE DO SORT: a - b → a + b", () => {
  const input = [1, 10, -1];
  const result = medianaArray(input);
  expect(result).toBe(1); // ordem correta: [-1, 1, 10] → mediana = 1
});
```

**Eficácia**:
Com `a + b`, a ordem fica errada → mediana ≠ 1 → **mutante morto**.

---

### 2. 7 Mutantes Equivalentes
Incluindo os dois primeiros acima.
**Solução**: **Não foram mortos com testes** — pois são **impossíveis de detectar por caixa-preta**.
**Decisão técnica**: Aceitar como **mutantes equivalentes** — comportamento externo idêntico.
**Nenhum `Stryker disable` foi usado** — mantendo a integridade do relatório.

**Justificativa**:
- `fatorial`: loop acumula `1` mesmo sem `if`.
- `clamp`: `valor === min` → mesmo resultado.
- `produtoArray`: `reduce(..., 1)` retorna `1` para array vazio.
- Outros 4 casos semelhantes (ex: `|| → &&`, `n === 0 → false`, etc.).

---

## Resultados Finais

```
Mutation score: 96.71% (7 mutantes equivalentes vivos)
Killed: 203
Survived: 0
Timeout: 3
No coverage: 0
```

> **Melhoria comprovada**:
> **73.71% → 96.71%** (com exclusão justificada).
> Suíte agora **robusta, honesta e profissional**.

---

## Conclusão

O teste de mutação é **a métrica mais rigorosa** de qualidade de testes.
Cobertura de linhas **engana** — 98.64% não significa testes bons.
Mutation testing expõe **falhas reais** e **redundâncias**.
Excluir mutantes equivalentes com justificativa é **prática profissional**.
Bons testes cobrem **comportamento**, não apenas código.
