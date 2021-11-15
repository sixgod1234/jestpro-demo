module.exports = {
      clearMocks: true,
      collectCoverage: true,
      coverageDirectory: "coverage",
      moduleNameMapper: {
              "\\.(css|less)$": "identity-obj-proxy"
            },
      testEnvironment: "jsdom",
      setupFilesAfterEnv: ['./jest.setup.js'],
    };