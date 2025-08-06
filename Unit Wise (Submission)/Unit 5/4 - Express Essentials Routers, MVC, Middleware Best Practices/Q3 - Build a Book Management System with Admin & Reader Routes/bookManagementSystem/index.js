const express = require("express");
const app = express();
const adminRoutes = require("./routes/adminRoutes");
const readerRoutes = require("./routes/readerRoutes");
const logger = require("./middlewares/loggerMiddleware");

app.use(express.json());
app.use(logger);

app.use("/admin", adminRoutes);
app.use("/reader", readerRoutes);

app.use((req, res) => {
  res.status(404).send("404 Not Found");
});

app.listen(3000, () => console.log(`Server running on http://localhost:3000`));
