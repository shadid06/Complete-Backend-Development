### Key Functions of V8

Parsing: Reads your code and turns it into a tree structure called an Abstract Syntax Tree (AST).

Interpretation (Ignition): Converts the AST into bytecode for fast startup.

Compilation (TurboFan): Uses Just-In-Time (JIT) compilation to turn frequently used code ("hot code") straight into optimized machine code for high speed.

Memory Management: Automatically cleans up unused data via a built-in garbage collector to prevent leaks.

V8 vs. Node.js
V8 Engine: Only executes the JavaScript language, handles memory, and compiles code.

Node.js: The broader runtime environment built around V8. Node.js adds extra features that V8 lacks—like file system access, networking, and operating system bindings—using libraries like libuv.
