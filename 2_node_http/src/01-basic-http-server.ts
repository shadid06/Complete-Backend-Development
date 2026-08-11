import http ,{IncomingMessage,ServerResponse} from "node:http";

const PORT = 3000;


//create server

//req ->request object
//method -> get,post,delete,put,patch,head,options,trace,connect
//headers -> actual metadata sent by the client
//req body -> data post/put
//res ->response object
//status code -> 200,404,500,400,401,403,405,501
//res body -> data sent by the server

const server=http.createServer((req:IncomingMessage,res:ServerResponse)=>{
    const url = req.url; //in which path the client is requesting for example /about,/home,/contact
    const method = req.method; //get,post,delete,put,patch,head,options,trace,connect

    const userAgent=req.headers["user-agent"];
    
    res.statusCode=200;
    res.setHeader("Content-Type", "text/plain");
    
    
   
   res.end(`Url: ${url}\nMethod: ${method}\nUser Agent: ${userAgent}`);

});

server.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
