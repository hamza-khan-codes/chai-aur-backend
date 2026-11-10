# Video 06
## How to setup a professional backend project ?

* Model link : https://app.eraser.io/workspace/YtPqZ...
* Source code:
https://github.com/hiteshchoudhary/ch...

### Dev - Dependency vs Dependency
- Dev dependency 
dev dependency are those dependency only required for development not need for production
```shell-session
npm i nodemone
```
Dependency
- dependency for production

```  
 npm i  --save-dev nodemon 
 npm i -D nodemon
```

## Setup prettier 
- install prettier 
`
npm i -D prettier
`
- add prettierrc file

# Video 08

## Node DNS node:dns

# Video 09 

## BSON (Binary JSON) vs JSON (JavaScript Object Notation)

### JSON (JavaScript Object Notation)

JSON is a text-based data format that represents structured data using human-readable text. It relies on key-value pairs and ordered lists, mimicking the way native objects look in JavaScript.


### BSON (Binary JSON)

BSON is a binary-encoded serialization format used to store and transfer documents. While its conceptual design matches the structure of JSON, it translates the text into an optimized stream of bytes (1s and 0s). It acts as the internal engine for MongoDB, meaning you never see or write BSON directly; you write JSON, and the database converts it behind the scenes.


Core Characteristics

- Machine-Optimized: Designed strictly for computers to read, write, and traverse at maximum speed.
- Prefix-Driven: Every element in a BSON document starts with a type byte and a length indicator, allowing systems to skip unwanted data fields instantly without reading them.
- Type-Aware: Treats different kinds of data with strict architectural definitions instead of generalizing everything as a basic string or number.

## Mongoose aggregation query and aggregation pipline (package)

### Mongoose aggrregation

- Mongoose aggregation is a powerful framework that allows you to process, transform, and analyze your MongoDB data directly within your Node.js application.

```
 npm i mongoose-aggregate-paginate-v2

```
//-------------------------------------------
## Bcrypt (package)

For encrypting password 
- bcrypt

```
npm i bcrypt

```

- bcryptjs

```
npm i bcryptjs

```
### bcrypt vs bcryptjs

## JWT (Json Web Token) (package)
JSON Web Token (JWT) is used as a bearer token, it follows this exact rule: whoever sends the token to the server is assumed to be authorized.
//-------------------------------------------
## Cookie-Parser (package)

## Cors (package)

## Dotenv (package)

// -------------------

## Mongoose pre hook middleware 

# Video 10

## File upload on DB

### Third party service cloudnary 
```

npm i cloudinary

```

### Multer

```

npm i multer

```


