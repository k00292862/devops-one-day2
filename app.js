const express = require('express');
const app = express();

app.get('/', (_, res) => res.send('Hello from DevOps in a Day!'));
app.get('/health', (_, res) => res.json({ status: 'ok' }));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App running on port ${port}`));

module.exports = app;