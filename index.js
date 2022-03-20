const app = require("./setting/app");
const PORT = process.env.PORT || 3001;
require("./db/db");
app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log("Server start");
});
