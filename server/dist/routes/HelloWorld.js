import express from 'express';
const router = express.Router();
router.get('/', (req, res) => {
    console.log('received request');
    res.send('Hello from the Server!');
});
export default router;
