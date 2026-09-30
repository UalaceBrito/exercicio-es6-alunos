const { alunos, filtrarAprovados } = require('../src/alunos');

describe('filtrarAprovados', () => {
  test('retorna apenas alunos com nota >= 6', () => {
    const resultado = filtrarAprovados(alunos);

    expect(resultado.length).toBe(5);
    resultado.forEach(({ nota }) => expect(nota).toBeGreaterThanOrEqual(6));
  });

  test('não muta o array original', () => {
    const copia = [...alunos];
    filtrarAprovados(alunos);
    expect(alunos).toEqual(copia);
  });

  test('aceita nota mínima customizada', () => {
    const resultado = filtrarAprovados(alunos, 9);
    expect(resultado.every(({ nota }) => nota >= 9)).toBe(true);
  });

  test('lança erro se não receber um array', () => {
    expect(() => filtrarAprovados('não é array')).toThrow(TypeError);
  });
});