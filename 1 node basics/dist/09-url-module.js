//https://api.example.com/users?page=2&limit=10
function runUrlDemo() {
    // how to create url object from url string
    const url = new URL("https://api.example.com/users?page=2&limit=10");
    console.log(url);
    //full url
    console.log('full url', url.href);
    //hostname
    console.log("hostname", url.hostname);
    //port
    console.log("port", url.port);
    //protocol
    console.log("protocol", url.protocol);
    //pathname
    console.log("pathname", url.pathname);
    //query params
    console.log("query params", url.search);
    //hash
    console.log("hash", url.hash);
    //searchParams
    console.log("searchParams", url.searchParams);
    //print the page params value
    const pageValue = url.searchParams.get("page");
    console.log("page value:", pageValue);
    const limitValue = url.searchParams.get("limit");
    console.log("limit value:", limitValue);
    //print all the key values from search params
    for (const [key, value] of url.searchParams.entries()) {
        console.log(`${key}:${value}`);
    }
    const queryParams = new URLSearchParams({
        name: "john",
        age: "25",
        city: "new york"
    });
    console.log("query params", queryParams);
}
runUrlDemo();
export {};
//# sourceMappingURL=09-url-module.js.map