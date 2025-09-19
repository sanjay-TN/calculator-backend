const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// simple calculate endpoint
app.post('/calculate', (req, res) => {
  const { num1, num2, operator } = req.body;

  let result;
  const n1 = parseFloat(num1);
  const n2 = parseFloat(num2);

  switch (operator) {
    case '+':
      result = n1 + n2;
      break;
    case '-':
      result = n1 - n2;
      break;
    case '*':
      result = n1 * n2;
      break;
    case '/':
      result = n2 !== 0 ? n1 / n2 : 'Error: Division by zero';
      break;
    default:
      result = 'Invalid operator';
  }

  res.json({ result });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
