const config = {
	env: process.env.NODE_ENV || "development",
	port: process.env.PORT || 3001,
	jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
	mongoUri:
		process.env.MONGODB_URI ||
		process.env.MONGO_HOST ||
		"",
};
export default config;
