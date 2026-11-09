import type { Request, Response } from "express";

// Runs only when no route above it matched the request
export function notFound(req: Request, res: Response) {
    res.status(404).json({
        error: {
            message: `Route not found: ${req.method} ${req.originalUrl}`,
        },
    });
}