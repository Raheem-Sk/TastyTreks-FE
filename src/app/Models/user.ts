export class User {
  id:number = 0;
  userName: any;
  emailId: any;
  password: any;
  mobile: any;
  address: any;
  wallet:any;
}

export class UserLogin {
  
  emailId: string ='';
  password: string ='';
  
}

export class UserRegistration {
  userName: string ='';
  emailId: string ='';
  password: string ='';
  mobile: number=0;
  address: string ='';
}
