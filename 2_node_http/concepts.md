# Node.js HTTP Module Concepts

This module covers fundamental concepts for building web servers using Node.js's built-in `http` module.

---

## Key Modules & Concepts Covered

### 1. Basic Server (`01-basic-server.ts`)
- **`http.createServer(callback)`**: Instantiates an HTTP server.
- **`IncomingMessage` (`req`)**: Represents the incoming request stream (URL, method, headers).
- **`ServerResponse` (`res`)**: Represents the outgoing response stream.
- **`server.listen(port, callback)`**: Starts the server listening on a specified port.

### 2. Routing and URL Parsing (`02-routing-and-url.ts`)
- **Method Checking**: `req.method` (`GET`, `POST`, `PUT`, `DELETE`).
- **URL Path Parsing**: Using standard `new URL(req.url, base)` to handle pathname and query parameters.
- **Conditional Routing**: Returning distinct responses based on endpoint patterns.

### 3. Headers and Status Codes (`03-headers-and-status.ts`)
- **Status Codes**: `200 OK`, `201 Created`, `400 Bad Request`, `404 Not Found`, `500 Internal Server Error`.
- **Headers**: `res.setHeader(name, value)` vs `res.writeHead(status, headers)`.
- **Content-Type**: Serving `text/plain`, `text/html`, and `application/json`.

### 4. Handling Request Body (`04-handling-post-body.ts`)
- **Streams & Events**: `req.on('data', chunk)` and `req.on('end', callback)`.
- **Buffer Concatenation**: Assembling binary/text stream chunks.
- **JSON Parsing**: Safely parsing incoming payload with `JSON.parse()`.

### 5. Serving Static Files (`05-serving-static-files.ts`)
- **File System Integration**: Reading static assets (HTML, CSS, JS, Images) from disk.
- **Streaming Response**: Using `fs.createReadStream().pipe(res)` for memory-efficient file delivery.

### 6. Custom Router Architecture (`06-custom-router.ts`)
- **Modular Routes**: Abstracting HTTP request handling into clean route registrations.
- **Middleware Concept**: Intercepting requests for logging, auth, and error handling before dispatching to handlers.
