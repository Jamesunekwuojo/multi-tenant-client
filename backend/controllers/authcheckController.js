import jwt from "jsonwebtoken";


export const checkAuth = (req, res) => {
    try {
        // Extract token from Authorization header
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            console.log("Token required");
            return res.status(401).json({ authenticated: false, message: "No token found" });
        }

        const token = authHeader.split(" ")[1];
        console.log("Token:", token);

        // Verify token
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json({ authenticated: false, message: "Invalid token" });
            }

            return res.json({ authenticated: true, user: decoded });
        });

    } catch (error) {
        console.log("Error in authcontroller:", error);
        return res.status(500).json({ authenticated: false, message: "Server error" });
    }
};
