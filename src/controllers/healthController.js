const getHealth = (req, res) => {
  res.status(200).json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
};

const getRoot = (req, res) => {
  res.status(200).json({
    message: 'API Express funcionando correctamente',
    version: '1.0.0',
  });
};

module.exports = { getHealth, getRoot };