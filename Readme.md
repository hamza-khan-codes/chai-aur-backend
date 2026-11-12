# Lecture 06
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

# Lecture 08

## Node DNS node:dns

# Lecture 09 

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

# Lecture 10

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

#
# Lecture 12

# Controllers in Express.js

## 1. What is a Controller?

A **Controller** is a function responsible for handling incoming HTTP requests and sending appropriate HTTP responses.

In simple words:

- **Route:** Defines which URL should handle a request.
- **Controller:** Defines what should happen when that request arrives.
- **Response:** Sends the result back to the client.

For example, when a user sends a registration request, the controller handles the registration process.

---

## 2. Why do we use Controllers?

Imagine writing all your API logic inside `app.js`.

As your application grows, you might have:

- User registration
- User login
- User logout
- User profile
- Product creation
- Product updates
- Order management

Putting everything inside one file makes the application difficult to maintain.

Controllers solve this problem by separating request-handling logic into individual functions.

### Benefits

1. **Separation of concerns:** Routes and business logic remain separate.
2. **Reusability:** Controller functions can be reused where appropriate.
3. **Maintainability:** Easier to update and debug code.
4. **Scalability:** Suitable for large applications.
5. **Readability:** Makes project structure cleaner.

---

## 3. Project Structure

Your current backend structure:

```text
src/
│
├── controllers/
│   └── user.controller.js
│
├── routes/
│   └── user.routes.js
│
├── utils/
│   └── asyncHandler.js
│
└── app.js
```

Each folder has a separate responsibility.

| Folder/File | Responsibility |
|---|---|
| controllers | Handles request logic |
| routes | Defines API endpoints |
| utils | Contains reusable utility functions |
| app.js | Configures Express application and registers routes |

---

## 4. Understanding Your User Controller

File: `controllers/user.controller.js`

```javascript
import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: "ok"
    });
});

export { registerUser };
```

Let's understand it line by line.

### Step 1: Import asyncHandler

```javascript
import { asyncHandler } from "../utils/asyncHandler.js";
```

You are importing a reusable function from your utility folder.

Its responsibility is to handle errors from asynchronous request handlers.

We will understand its implementation in the next section.

### Step 2: Create registerUser

```javascript
const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: "ok"
    });
});
```

Here, you are creating a controller named `registerUser`.

Let's break it down:

**A. async**

```javascript
async (req, res) => {}
```

The `async` keyword allows you to use `await` inside the function.

You will need it when performing asynchronous operations such as:

- Saving users in MongoDB.
- Checking whether an email already exists.
- Hashing passwords asynchronously.
- Uploading profile images.

**B. req**

```javascript
req
```

`req` stands for Request.

It contains information sent by the client.

For example:

```javascript
req.body
req.params
req.query
req.headers
req.cookies
```

If the frontend sends:

```json
{
    "username": "hamza",
    "email": "hamza@example.com",
    "password": "123456"
}
```

You can access these values using:

```javascript
req.body.username
req.body.email
req.body.password
```

**C. res**

```javascript
res
```

`res` stands for Response.

It allows you to send a response back to the client.

For example:

```javascript
res.status(200).json({
    message: "User registered successfully"
});
```

**D. status(200)**

```javascript
res.status(200)
```

Sets the HTTP response status code to 200 (OK).

**E. json()**

```javascript
res.json({
    message: "ok"
});
```

Sends a JSON response to the frontend.

---

## 5. What is asyncHandler?

File: `utils/asyncHandler.js`

Your code:

```javascript
const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next))
            .catch((err) => next(err));
    };
};

export { asyncHandler };
```

### Why do we need asyncHandler?

Imagine your controller performs a database operation:

```javascript
const registerUser = async (req, res) => {
    const user = await User.create(req.body);
};
```

What happens if the database operation fails?

It can throw an error.

We need a proper way to pass that error to Express error-handling middleware.

This is where `asyncHandler` helps.

### Understanding the code

**Step 1: Accept a function**

```javascript
const asyncHandler = (requestHandler) => {}
```

`requestHandler` is the controller function you want to execute.

In your case, it is:

```javascript
async (req, res) => {
    res.status(200).json({
        message: "ok"
    });
}
```

**Step 2: Return another function**

```javascript
return (req, res, next) => {}
```

This returned function receives Express's request, response and next arguments.

**Step 3: Promise.resolve()**

```javascript
Promise.resolve(requestHandler(req, res, next))
```

It executes your controller and wraps its returned value in a Promise.

**Step 4: Catch errors**

```javascript
.catch((err) => next(err))
```

If the controller's Promise rejects, the error is passed to `next(err)`.

Express can then forward it to your error-handling middleware.

### Simple analogy

Think of `asyncHandler` as a safety net.

- Controller performs the work.
- If everything succeeds, the controller continues normally.
- If an asynchronous error occurs, asyncHandler catches it.
- The error is forwarded to Express.

**Important:** `asyncHandler` does not automatically send error responses. You still need error-handling middleware to format and send them.

---

## 6. How Controller Connects With Router

File: `routes/user.routes.js`

```javascript
import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

const router = Router();

router.route("/register").post(registerUser);

export default router;
```

### Step 1: Import Router

```javascript
import { Router } from "express";
```

Imports Express Router.

### Step 2: Import Controller

```javascript
import { registerUser } from "../controllers/user.controller.js";
```

Imports the controller that will handle registration.

### Step 3: Create Router

```javascript
const router = Router();
```

Creates an independent router instance.

### Step 4: Define Endpoint

```javascript
router.route("/register").post(registerUser);
```

This means:

- `route("/register")`: Defines the route path.
- `.post()`: Accepts POST requests.
- `registerUser`: Executes the controller.

---

## 7. How Everything Connects in app.js

```javascript
import userRouter from "./routes/user.routes.js";

app.use("/api/v1/users", userRouter);
```

This registers your user router under `/api/v1/users`.

The router contains:

```javascript
router.route("/register").post(registerUser);
```

Therefore, the complete endpoint becomes:

```text
POST /api/v1/users/register
```

### Complete Request Flow

```text
Frontend
   |
   | POST /api/v1/users/register
   v
app.js
   |
   | app.use("/api/v1/users", userRouter)
   v
user.routes.js
   |
   | router.route("/register").post(registerUser)
   v
user.controller.js
   |
   | registerUser(req, res)
   v
asyncHandler
   |
   | Handles rejected promises
   v
HTTP Response
```

---

## 8. Important Things to Remember

| Concept | Meaning |
|---|---|
| Controller | Handles request logic |
| req | Contains incoming request information |
| res | Sends response to client |
| next | Passes control or errors to middleware |
| async | Allows asynchronous operations |
| await | Waits for a Promise to settle |
| asyncHandler | Forwards rejected controller Promises |
| Promise.resolve() | Wraps a returned value in a Promise |
| .catch() | Handles Promise rejection |
| res.status() | Sets HTTP status code |
| res.json() | Sends JSON response |

### One Important Improvement

Your current controller uses:

```javascript
res.status(200).json({
    message: "ok"
});
```

For actual user registration, a successful creation response should normally use:

```javascript
res.status(201).json({
    success: true,
    message: "User registered successfully"
});
```

HTTP 201 means Created.

---

## 9. Practice Task

Try implementing these controllers yourself:

1. `registerUser` – Register a new user.
2. `loginUser` – Authenticate an existing user.
3. `logoutUser` – Log out a user.
4. `getCurrentUser` – Retrieve the logged-in user's information.
5. `updateUser` – Update user information.

For now, focus on understanding the request-response flow. You can connect MongoDB later.

**Remember this:**

Route decides WHERE the request goes.

Controller decides WHAT happens.

asyncHandler helps handle asynchronous errors.

