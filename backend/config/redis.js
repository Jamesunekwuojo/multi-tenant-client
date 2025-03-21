import redis from 'redis';
import process from 'process';

const redisClient = redis.createClient({
    url: process.env.REDIS_URL
});


redisClient.on('connect', () => {
    console.log('Redis client connected');
} );

redisClient.on('error', (error) => {
    console.error('Redis not connected', error);
}
);

redisClient.connect();

export default redisClient;