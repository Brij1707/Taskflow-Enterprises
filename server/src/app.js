const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

app.use(helmet());
app.use(cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
}));
app.use(express.json({ limit: '1mb' }));
app.use(morgan('dev'));

app.get('/api/v1/health', (req, res) => {
    res.status(200).json({ 
        success: true,
        message: 'Server is healthy',
        env: process.env.NODE_ENV || 'development',
        
    });

});

module.exports = app;
