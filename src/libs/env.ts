export function getOsEnv(key: string): string {
    if (typeof import.meta.env[key] === 'undefined') {
        throw new Error(`Environment variable ${key} is not set.`);
    }

    return import.meta.env[key] as string;
}

export function getOsEnvOptional(key: string): string | undefined {
    return import.meta.env[key];
}

export function toNumber(value: string): number {
    return parseInt(value, 10);
}

export function toBool(value: string): boolean {
    return value === 'true';
}

export function normalizePort(port: string): number | string | boolean {
    const parsedPort = parseInt(port, 10);
    if (isNaN(parsedPort)) {
        // named pipe
        return port;
    }
    if (parsedPort >= 0) {
        // port number
        return parsedPort;
    }
    return false;
}
