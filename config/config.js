const config = {
	env: process.env.NODE_ENV || "development",
	port: process.env.PORT || 3001,
	jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
	mongoUri:
		process.env.MONGODB_URI ||
		process.env.MONGO_HOST ||
		"mongodb+srv://mern_simplelearn:mern@121122@cluster0.jx6wun4.mongodb.net/?retryWrites=true&w=majority",
};
export default config;
