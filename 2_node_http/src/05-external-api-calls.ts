
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
}

function transformUser(user:User):MyInterface{
    return {
        id:user.id,
        name:user.name,
        email:user.email
    }
}
