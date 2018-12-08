module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "rules": {
    "react/jsx-filename-extension": [
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ],
   "import/no-extraneous-dependencies": [
     "error", {
       "devDependencies": true, 
     }
    ]
  },
  "env": {
    "browser": true,
    "node": true,
    "jest": true
  }
};
