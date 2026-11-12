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
// ----------------------------

# HTTP (hyper text transfer protocol)

- URL => Uniform Resource Locator
 A specific type of URI that not only identifies a resource but also provides a network address or location and the protocol needed to access it ``` (e.g., https:// or ftp://) ```.

- URI => Uniform Resource Identifier
 The broad umbrella term for any string of characters that identifies a resource. It can identify something by location, by name, or both. All URLs and URNs are URIs.

- URN => Uniform Resource Name
A specific type of URI that identifies a resource by a persistent, location-independent name within a defined namespace. It tells you what something is called, not where it is located.

## What is headers ?
- metadata => key value send with request & response
- use for => caching ,authentication,manage statel and more
- x-prefix but it deprecated "write hear date when it deprecated"

=> Request headers - from cliend

=> Response headers - from server

=> Representation headers - encoding compression

=> Payload headers - data

### Most common headers 
- Accept : aplication / json
- User - agent "Its only tell request is which application engin like postman,safari,microsoft...
- Autherization 
- content type - pdf,png...
- cookie
- cache - control

### cors
- Access - control -  allow - origin
- Access - control - allow - credentials
- Access - control - method

### Security
- cross - origin - embadder - policy
- cross - origin - opener - policy
- content - security - policy
- X - XSS - Protection

 HTTP Methods
 -
Basic set of operations that can be used to interact with server

- GET : Retrive a resource.
- HEAD : No message body (response headers only)
- OPENTIONS : what operation are available
- TRACE : Loopback test (get same data)
- DELETE : Remove a resource
- PUT : Replace a resource
- POST : Interact with resource
- PATCH : Change part of a resource

Staus Codes
-
- 1xx - Information
- 2xx - Success
- 3xx - Redirection
- 4xx - Client error
- 5xx - Server error

100 continue 

102 Processing

200 OK

201 created 

202 accepted

307 temperary redirect

308 Permanent redirect

400 Bad request

401 Unautherized

402 Payment required

404 Not found

500 Internal server error

504 Gate way time out