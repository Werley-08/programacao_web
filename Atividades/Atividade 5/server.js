const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());

const alunos = [
  { id: 1, nome: 'Ana', idade: 20, curso: 'Engenharia' },
  { id: 2, nome: 'Bruno', idade: 22, curso: 'Direito' },
  { id: 3, nome: 'Carla', idade: 19, curso: 'Medicina' },
  { id: 4, nome: 'Diego', idade: 21, curso: 'Computação' }
];

app.get('/alunos', (req, res) => {
  res.json(alunos);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
}); 