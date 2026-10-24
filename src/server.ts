import { createApp } from './app';
import { env } from './config/env';

const app = createApp();

const server = app.listen(env.PORT, () => {
    console.log(`Server running on http://localhost:${env.PORT} (${env.NODE_ENV})`);
});

function shutdown(signal: string) {
    console.log(`${signal} received, shutting down...`);

    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    });

    setTimeout(() => {
        console.error('Forcing shutdown');
        process.exit(1);
    }, 10_000).unref();
}

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));