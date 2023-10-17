import React, { useState } from 'react'
import { useQuery, gql,useMutation } from '@apollo/client';
import { useAuth0 } from '@auth0/auth0-react';

const getDownloads=gql`
    query GetDownloads($email:String!){
      getDownloads(email:$email){
        description
        url
        owner {
          
          profile
          username
          
        }
      }
    }
`
/* const getFavourites=gql`
    query GetFavourites($email:String!){
        getFavourites(email:$email){
            description
            url
            owner {
          
              profile
              username
              
            }
        }
    }
` */
const Downloads=()=>{

  const { user} = useAuth0();  
  const { refetch } = useQuery(getDownloads);
  const FetchDownloads = async()=>{
  
    const downloads=await refetch({
      email:user?.email      
    })
    return (
      {downloads}
    )
 }
/*  const FetchFavourites = ()=>{

    const { favourites } = useQuery(getFavourites,{
      variables:{email:user?.email}
    });
    
    return (
      {favourites}
    )
 }
 */ return {FetchDownloads}
}
export default Downloads;