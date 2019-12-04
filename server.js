const express = require("express");
const app = express();
const connectDB = require("./config/db");

// Connect DB
connectDB();

app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("HOME");
  console.log("HOME");
});

app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/items", require("./routes/api/items"));
app.use("/api/myCart", require("./routes/api/myCart"));
app.use("/api/delivery", require("./routes/api/deliveryInfo"));
app.use("/api/payment", require("./routes/api/payment"));
app.use("/api/order", require("./routes/api/order"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App is running on server ${PORT}`);
});
