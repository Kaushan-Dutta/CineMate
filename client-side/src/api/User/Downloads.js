import React, { useState,useEffect,useCallback } from 'react'
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

const Downloads=()=>{

  const { user} = useAuth0();  
  const [downloads,setDownloads]=useState([]);

  const { refetch } = useQuery(getDownloads);
  
  useEffect(()=>{
    FetchDownloads();
  },[])

  
  const AddDownloads=async()=>{

   }
   const FetchDownloads = useCallback(async()=>{
    const downloads=await refetch({
      email:user?.email      
    })
    setDownloads(downloads);
 },[AddDownloads])

 return {FetchDownloads,downloads}
}
export default Downloads;