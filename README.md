# PLATEAU 1.0.0

Plateau is an e-ccommerce, fully-responsive and full-stack application build with MERN (Mongo, Express, React/Redux, Node.js) stacks for purpose of:
- Learning React/Reduct from Front to Back
- Writing efficient and re-usable back-end APIs using Node.js and Express
- Making API calls to access data from the database to the client-side page using Axios
- Mananging application states to be mapped to multiple container components
- Plateau is still in development process

## QUICK START
```
# Create default.json file in config folder
# This file must be located in config/default.json
# Add jwtSecret and URI of your mongodb connection (either in your local machine or from mongo atlas). For example:

{
    "mongoURI": "mongodb://localhost/test",
    "jwtSecret": "twt-token-secret"
}
```


```
# Install Server Dependencies
npm install

# Install Client Dependencies
cd client
npm install

# Run both Express & React from root
npm run dev

# Build for production
cd client
npm run build
```


## APP INFO
### Author
Danny Rhee
### Version
1.0.0