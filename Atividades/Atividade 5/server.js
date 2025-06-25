const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

let alunos = [
  { id: 1, nome: 'Ana', idade: 20, curso: 'Engenharia' },
  { id: 2, nome: 'Bruno', idade: 22, curso: 'Direito' },
  { id: 3, nome: 'Carla', idade: 19, curso: 'Medicina' },
  { id: 4, nome: 'Diego', idade: 21, curso: 'Computação' }
];

// READ
app.get('/alunos', (req, res) => {
  res.json(alunos);
});

// CREATE
app.post('/alunos', (req, res) => {
  const { nome, idade, curso } = req.body;
  if (!nome || !idade || !curso) {
    return res.status(400).json({ erro: 'Dados incompletos' });
  }
  const id = alunos.length ? Math.max(...alunos.map(a => a.id)) + 1 : 1;
  const novoAluno = { id, nome, idade, curso };
  alunos.push(novoAluno);
  res.status(201).json(novoAluno);
});

// UPDATE
app.put('/alunos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { nome, idade, curso } = req.body;
  const aluno = alunos.find(a => a.id === id);
  if (!aluno) return res.status(404).json({ erro: 'Aluno não encontrado' });
  if (nome) aluno.nome = nome;
  if (idade) aluno.idade = idade;
  if (curso) aluno.curso = curso;
  res.json(aluno);
});

// DELETE
app.delete('/alunos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = alunos.findIndex(a => a.id === id);
  if (index === -1) return res.status(404).json({ erro: 'Aluno não encontrado' });
  alunos.splice(index, 1);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
}); 