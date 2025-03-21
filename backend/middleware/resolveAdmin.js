// import jwt from "jsonwebtoken"

// import process from 'process';


// const resolveAdmin = (req, res, next) => {
//     const token = req.header('Authorization')?.replace('Bearer ', '');
//     if (!token) return res.status(401).json({ error: 'Access denied. No token provided.' });

//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         req.adminId = decoded.adminId; // Extract adminId from JWT
//         next();
//     } catch (err) {
//         console.log(err)
//         res.status(400).json({ error: 'Invalid token.' });
//     }


// };

// export default resolveAdmin;

import jwt from "jsonwebtoken";
import process from "process";

const resolveAdmin = (req, res, next) => {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
        return res.status(401).json({ error: "Access denied. No token provided." });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.adminId = decoded.adminId; // Extract adminId from JWT
        next(); // Proceed to the next middleware or route handler
    } catch (err) {
        console.log("JWT Error:", err);

        if (err.name === "TokenExpiredError") {
            return res.status(401).json({ error: "Token expired. Please log in again." });
        }

        return res.status(400).json({ error: "Invalid token." });
    }
};

export default resolveAdmin;
