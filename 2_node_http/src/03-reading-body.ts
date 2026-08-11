import http ,{IncomingMessage,ServerResponse} from "node:http";

const PORT = 3002;

const server=http.createServer((req:IncomingMessage,res:ServerResponse)=>{
    const method = req.method ?? "GET";
    const requestUrl= new URL(req.url ?? "/",`http://${req.headers.host}`);
    const path=requestUrl.pathname;

    if(method==="POST" && path==="/users"){
        let body="";
        req.on("data",(chunk:Buffer)=>{
            body+=chunk.toString();
        });
        req.on("end",()=>{
            console.log(JSON.parse(body));
            res.statusCode=201;
            res.end("User Created");
        });
        return;
    }
    else{
        res.statusCode=404;
        res.end("Not Found");
        return;
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
