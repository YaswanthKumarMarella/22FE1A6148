
const express = require("express");
const app = express();
const getLog =async (reqq,ress,next) =>{
    const options = {
        "method":"POST",
        "Authentication" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJ5YXN3YW50aGt1bWFybWFyZWxsYTE0QGdtYWlsLmNvbSIsImV4cCI6MTc1Njk2Mzc2NywiaWF0IjoxNzU2OTYyODY3LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiNzAyYjAyYzgtZDk0MS00ZDFlLWEwZjMtM2VlYjBlNmM0MzYxIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoieWFzd2FudGgga3VtYXIgbWFyZWxsYSIsInN1YiI6IjliYzNiYjZkLWNiYmEtNDNhMi1iODRmLWQxOTkwYThkOWFhOCJ9LCJlbWFpbCI6Inlhc3dhbnRoa3VtYXJtYXJlbGxhMTRAZ21haWwuY29tIiwibmFtZSI6Inlhc3dhbnRoIGt1bWFyIG1hcmVsbGEiLCJyb2xsTm8iOiIyMmZlMWE2MTQ4IiwiYWNjZXNzQ29kZSI6Ill6dUplVSIsImNsaWVudElEIjoiOWJjM2JiNmQtY2JiYS00M2EyLWI4NGYtZDE5OTBhOGQ5YWE4IiwiY2xpZW50U2VjcmV0IjoiWXJDYUJqQ3h6ZkRSSnRmTSJ9.h_Mi21h9hwewMaR3Xz4ssLTro2HmDeiL74LEMwXMFMw"
    };
    let jsonData;
    // console.log("1");
    const res = await fetch("http://20.244.56.144/evaluation-service/logs",options).then((data)=>{return data.json()}).then((res)=>{jsonData=res;})
    console.log(jsonData);
    next();
}
app.use(getLog)


app.listen(3000,()=>console.log("running"));
app.use(express.json());



app.post("/shorturls",(request,response)=>{
    const {url,validity,shortcode} =request.body;
    // response.send(url);
    const filter = url.split("//")
    const paths = filter[1].split("/")
    
    let short="";
    for(each of paths){
        if(each[0]!=":"&& each[each.length-1]!="/"){
short=short+each[0]+each[each.length-1];
        }
        
    }
    console.log(short);
    response.send({
        "short":`http://localhost:3000/${short}`,
        "expriry":new Date()+validity,
    });
})