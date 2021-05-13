const path = require("path");

// storybook에서 절대 경로 사용하기
module.exports = ({ config }) => {
	config.resolve.modules = [
		path.resolve(__dirname, "..", "src"),
		"node_modules",
	];
	return config;
};
