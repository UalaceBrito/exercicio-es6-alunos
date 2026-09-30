/**
 * @typedef {Object} Aluno
 * @property {string} nome  - Nome do aluno
 * @property {number} nota  - Nota do aluno (0 a 10)
 */

/**
 * Lista de alunos com suas respectivas notas.
 * @type {Aluno[]}
 */
const alunos = [
  { nome: 'Ana Souza',       nota: 9.5 },
  { nome: 'Bruno Lima',      nota: 6.0 },
  { nome: 'Carlos Pereira',  nota: 4.5 },
  { nome: 'Daniela Alves',   nota: 7.8 },
  { nome: 'Eduardo Rocha',   nota: 5.9 },
  { nome: 'Fernanda Dias',   nota: 8.2 },
  { nome: 'Gustavo Nunes',   nota: 3.7 },
  { nome: 'Helena Martins',  nota: 10  },
];

/**
 * Retorna apenas os alunos aprovados (nota >= 6).
 *
 * @param {Aluno[]} lista - Array de alunos a ser filtrado.
 * @param {number} [notaMinima=6] - Nota mínima para aprovação.
 * @returns {Aluno[]} Novo array contendo apenas os alunos aprovados.
 */
const filtrarAprovados = (lista, notaMinima = 6) => {
  if (!Array.isArray(lista)) {
    throw new TypeError('O parâmetro "lista" deve ser um array de alunos.');
  }

  return lista.filter(({ nota }) => nota >= notaMinima);
};

// Execução direta (caso o arquivo seja rodado via `node src/alunos.js`)
if (require.main === module) {
  const aprovados = filtrarAprovados(alunos);

  console.log('🎓 Alunos aprovados (nota >= 6):\n');
  aprovados.forEach(({ nome, nota }) =>
    console.log(`  ✅ ${nome.padEnd(18)} — nota: ${nota}`)
  );
  console.log(`\nTotal: ${aprovados.length} de ${alunos.length} alunos.`);
}

module.exports = { alunos, filtrarAprovados };