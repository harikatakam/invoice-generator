// const express = require('express')
const path = require('path')
// const PORT = process.env.PORT || 5000

// express()
//   .use('/static', express.static(path.join(__dirname, 'public')))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use('/', express.static(path.join(__dirname, 'public')))

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));