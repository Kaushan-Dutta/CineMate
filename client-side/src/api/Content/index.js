import React,{useState,useCallback, useEffect} from 'react'
import { Categories } from '../../router.config';
import { useQuery, gql,useMutation } from '@apollo/client';
import { userData } from '../../context/UserProvider';
import storage from '../Configure/appwrite.config';
import {v4 as uuidv4} from 'uuid';

const upload_content = gql`
      mutation CreateContent($type:String!,$description:String!,$url:String!,$owner:String!){
        createContent(type:$type,description:$description,url:$url,owner:$owner){
          type,
          description
      }
    }
`;

const get_contents = gql`
  query {
    getContents {
      _id
      type
      url
      description
      owner {
        profile
        username
      }
    }
  }
`;

const CreateContent = () => {
  const [content,setContent]=useState('');
  const [type,setType]=useState('');
  const [description,setDescription]=useState('');
  const [loading,setLoading]=useState(false);

  const [createContent] = useMutation(upload_content);
  const { data,refetch } = useQuery(get_contents);

  const {profile,setProfile}=userData();

  const [gallery,setGallery]=useState([]);

  const createList=[

    {
        label:'Type',
        type:'option',
        id:'category',
        subOption:Categories,
        value:type,
        onChange:(e)=>{
            setType(e.target.value)
        }
    },
    {
        label:'Description',
        type:'text',
        value:description,
        placeholder:'Enter the description',
        onChange:(e)=>{
            setDescription(e.target.value)
        }
    },
  ]
  useEffect(()=>{
    getContents();
  },[])

  const uploadContent=async(e)=>{
        e.preventDefault();
        try{
          setLoading(true);
          const uploadImage= await storage.createFile(import.meta.env.VITE_APP_APPWRITE_BUCKET, uuidv4(), content);
          const getFileView = await storage.getFileView(import.meta.env.VITE_APP_APPWRITE_BUCKET,uploadImage.$id);
          const link=getFileView.href;
          console.log(type,description,profile._id);
          const { data } = await createContent({
            variables: {
              type:type,description:description,url:link,owner :profile._id   
            },
          });

          setLoading(false);
          window.location.reload();
        }
        catch(err){
          console.log(err);
        }
  }
  const getContents=useCallback(async()=>{
    try{
      setGallery(await refetch());
    }
    catch(err){
      console.log(err);
    }
  },[uploadContent])

  return (
    {createList,content,setContent,loading,setLoading,uploadContent,gallery}
  )
}

export default CreateContent
