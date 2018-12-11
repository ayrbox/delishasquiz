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
    "jsx-a11y/label-has-for": [ 2, {
      "components": [ "Label" ],
      "required": {
          "some": [ "nesting", "id" ]
      },
      "allowChildren": false,
    }]
  },
  "env": {
    "browser": true,
    "node": true,
    "jest": true
  }, 
  "settings": {
    "import/resolver": {
      "babel-plugin-root-import": {}
    }  
  }
};
