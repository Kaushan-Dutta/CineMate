import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';

const getProfile = gql`
  query  GetUser($username:String!){
    getUser(username:$username ) {
      email
      profile
      username
      createdContent{
        description
        url
        owner {
          
          profile
          username
          
        }
      }
    }
  }
`;

const FetchData = () => {

  const { loading, error, data,refetch } = useQuery(getProfile);
 
  const fetchProfile = async(username) => {
    try{
      const res=await refetch({username:username});
      return res.data}
    catch(err){
      console.log(err);
    }
  };
  

  return (
    {fetchProfile}
  );
};

export default FetchData;
