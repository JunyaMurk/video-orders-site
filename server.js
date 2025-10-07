const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Маршрут для приёма заказов
app.post("/order", (req, res) => {
  console.log(req.body); // пока просто выводим заказ в консоль
  res.json({ message: "Заявка принята!" });
});

// Запуск сервера
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});