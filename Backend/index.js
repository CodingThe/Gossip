const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const logger = require('./config/logger');
const errorHandler = require('./middlewares/unifiedErrorHandler');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// DB Connection
connectDB()
  .then(() => logger.info(' MongoDB connected successfully'))
  .catch((err) => logger.error('MongoDB connection error: ', err));

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use(errorHandler);

app.get('/', (req, res) => {
  logger.info('GET / request received');
  res.status(200).json({ success: true, message: 'Gossip API running!' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  logger.info(`Server running at http://localhost:${PORT}`);
});
