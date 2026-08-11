import http ,{IncomingMessage,ServerResponse} from "node:http";

const PORT = 3003;

type User={
    id:number;
    name:string;
    email:string;
}

type ApiResponse<T> ={
    success:boolean;
   message:string;
    data?:T;
    error?:T;
    
}

const users:User[]=[{
    id:1,
    name:"John Doe",
    email:"jn1@exam.com"
},{
    id:2,
    name:"Jane Doe",
    email:"jn2@exam.com"
},{
    id:3,
    name:"Bob Smith",
    email:"jn3@exam.com"
}];

function sendJson<T>(res:ServerResponse,statusCode:number,body:ApiResponse<T>):void{
    res.statusCode=statusCode;
    res.setHeader("Content-Type","application/json");
    res.end(JSON.stringify(body));
}


const server=http.createServer((req:IncomingMessage,res:ServerResponse)=>{
    const method = req.method ?? "GET";
    const requestUrl= new URL(req.url ?? "/",`http://${req.headers.host}`);
    const path=requestUrl.pathname;

    if(method ==="GET" && path==="/"){
        sendJson(res,200,{
            success:true,
            message:"success",
            data:{
                routes:["jfeiwuef"]
            }
        })
    }
    if(method ==="GET" && path==="/users"){
        sendJson(res,200,{
            success:true,
            message:"Users fetched successfully",
            data:{
                routes:users
            }
        })
    }

    sendJson<string>(res,404,{
        success:false,
        message:"Not Found",
        error:`Route ${path} not found`
    })

});

server.listen(PORT,()=>{
    console.log(`Server is running on port: ${PORT}`);
});