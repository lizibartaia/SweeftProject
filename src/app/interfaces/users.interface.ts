export interface Users{
  
  id: number,
  firstName: string,
  lastName: string,
  profilePic: string,
  description:string,
  
}
export interface friendList{
  id: number,
  userId:number,
  friendId:number
}