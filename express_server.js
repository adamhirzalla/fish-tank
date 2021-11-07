let express = require('express');


let PORT = process.env.PORT || 8080;


let app = express();

app.use(express.static('public'));

app.listen(8080, () => {
  console.log(`Listening on port ${PORT}`);
});
