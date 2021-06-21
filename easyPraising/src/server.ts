import express from 'express';

const app = express();

/**
 * GET    -> Buscar uma informação
 * POST   -> Inserir (criar) uma informação
 * PUT    -> Alterar uma informação
 * DELETE -> Remover um dado
 * PATCH  -> Alterar uma informação específica
 */

app.get('/test', (req, res) => {
    return res.send("Test Easy Praising");
});

app.post('/test-post', (req, res) => {
    return res.send("Test Easy Praising - POST");
})

// http://localhost:3000
app.listen(3000, () => console.log('Server is running'));