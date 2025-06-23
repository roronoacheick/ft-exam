const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'hello world' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 

// Remove me