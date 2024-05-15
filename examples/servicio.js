const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.post('/sumar', (req, res) => {
    
  const matrix1 = req.body.matrix1;
  const matrix2 = req.body.matrix2;

  console.log(matrix1, matrix2);

  if(matrix1.length === matrix2.length && matrix1[0].length === matrix2[0].length) {
    const rows = matrix1.length;
    const cols = matrix1[0].length;

    let resultMatrix = [];
    for (let i = 0; i < rows; i++) {
      resultMatrix[i] = [];
      for (let j = 0; j < cols; j++) {
        resultMatrix[i][j] = parseInt(matrix1[i][j]) + parseInt(matrix2[i][j]);
      }
    }
    return res.status(200).json(resultMatrix);
  } else {
    res.status(400).send('Las matrices deben tener la misma dimensión');
  }
});

app.listen(99, () => {
  console.log('Servidor escuchando en el puerto 99');
});
