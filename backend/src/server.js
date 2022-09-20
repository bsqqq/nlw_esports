import express from 'express';
const app = express();
app.get('/ads', (req, res) => {
    return res.status(200).json([
        { id: 1, nome: 'ad 1' },
        { id: 2, nome: 'ad 2' },
        { id: 3, nome: 'ad 3' },
        { id: 4, nome: 'ad 4' },
    ]);
});
app.listen(3333, () => console.log('running at 3333'));
