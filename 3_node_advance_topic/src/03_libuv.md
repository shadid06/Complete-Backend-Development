## is a native library used by node

libuv is the multi-platform C library that powers Node.js's asynchronous, non-blocking I/O model.
While JavaScript is single-threaded, Node.js can handle thousands of concurrent tasks (like database queries or file uploads) at the same time. libuv is the engine behind the scenes that makes this possible.
💡 What libuv Does for Node.jslibuv acts as a bridge between your JavaScript code and your computer's operating system. It handles two main types of tasks:

1. System-Level Asynchronous I/O (The OS Handles It)

For tasks like network requests (HTTP/TCP), libuv doesn't use its own threads. Instead, it offloads them directly to the Operating System's native, highly efficient async interfaces (like epoll on Linux, kqueue on macOS, or IOCP on Windows).

2. Thread Pool Managed Tasks (libuv Handles It)

Some tasks cannot be done asynchronously by the OS (like file system operations or heavy cryptography). For these, libuv manages a Thread Pool (by default, 4 threads). It runs these heavy tasks in the background so they don't freeze your main JavaScript thread.

🔄 The Event Loop

The most famous part of libuv is the Event Loop. It continuously orchestrates how callbacks are executed in Node.js by checking for completed tasks in a specific order of phases:

Timers: Executes callbacks from setTimeout() and setInterval().

I/O Poll: Waits for new network connections, incoming data, and file system responses.

Check: Executes callbacks from setImmediate().

🔑 Key Takeaways for a Node.js Learner

JavaScript is single-threaded, but Node.js is not. Your JS code runs on one thread, but libuv utilizes multiple threads and OS features in the background.

Don't block the loop: Because all your JS code runs on that single main thread, doing heavy math or infinite loops will freeze the entire server. Always offload heavy work or use async APIs.
