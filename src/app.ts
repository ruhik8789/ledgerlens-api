import express from 'express';

export function createApp() {
    const app = express();

    app.use(express.json({ limit: '100kb' }));

    app.get('/health', (req, res) => {
        res.json({
            status: 'ok',
            uptimeSeconds: Math.round(process.uptime()),
            timestamp: new Date().toISOString()
        })
    })

    return app;
}