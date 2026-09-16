A Node.js Cluster is a built-in module that lets you run multiple copies of your app at the same time to use all of your computer's CPU cores.

Why You Need It

Single-Threaded Limit: Node.js runs on a single CPU core by default, even if your machine has 4, 8, or more cores.Performance Boost: Clustering spawns "worker" processes to handle heavy traffic loads in parallel.

How It Works

Primary (Master) Process: The main process manages the workers. It does not handle client requests directly; instead, it distributes incoming connections to the workers.

Worker Processes: These child processes run your actual server code. Each worker has its own event loop and memory space, but they all share a single server port
