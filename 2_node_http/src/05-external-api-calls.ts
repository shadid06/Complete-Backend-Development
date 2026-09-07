
const API_URL="https://jsonplaceholder.typicode.com/users/1";

export interface GeoLocation {
  lat: string;
  lng: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoLocation;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

 interface MyInterface{
    id:number;
    name:string;
    email:string;
    company:string;
}

function transformUser(user:User):MyInterface{
    return {
        id:user.id,
        name:user.name,
        email:user.email,
        company:user.company.name
    }
}

async function fetchExternalUser():Promise<void> {
  //we can abort a request if it takes more than given time i.e. 1 second
  const controller=new AbortController();
  const timeoutId=setTimeout(()=>controller.abort(),1000);
  try {
    const response=await fetch(API_URL,
      { method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        signal: controller.signal });
    if (!response.ok) {
        throw new Error(`Request failed with status code: ${response.status}`);
        
    }
    const user:User=await response.json();
    console.log(user);
    console.log(transformUser(user));
    
  } catch (error:any) {
    if(error.name==='AbortError'){
      console.log("Request was aborted");
    }else{
      console.log("Failed to fetch user data");
    }
    
    
  }finally{
    clearTimeout(timeoutId);
  }
}

fetchExternalUser();