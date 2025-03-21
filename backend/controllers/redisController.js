import redisClient from "../config/redis.js";

export const testRedis = async (req, res) => {
    try {
        await redisClient.set("testKey", "Hello from Redis!", "EX", 60); // Set a test value (expires in 60s)
        const cachedValue = await redisClient.get("testKey"); // Retrieve the value

        res.json({ message: "Redis is working!", cachedValue });
    } catch (error) {
        console.error("Redis Test Error:", error);
        res.status(500).json({ error: "Redis is not working properly!" });
    }
};