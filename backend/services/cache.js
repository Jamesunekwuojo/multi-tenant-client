
import redisClient from '../config/redis.js';

export const getCache = async (key) => {
    const cachedData = await redisClient.get(key);
    return cachedData ? JSON.parse(cachedData) : null;
};

export const setCache = async (key, data, ttl = 3600) => {
    await redisClient.set(key, JSON.stringify(data), { EX: ttl });
};

