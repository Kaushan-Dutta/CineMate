import React,{useState,useCallback} from 'react'
import { Categories } from '../../router.config';
import { useQuery, gql,useMutation } from '@apollo/client';

const upload_content = gql`
      mutation CreateContent($type:String!,$description:String!,$url:String!,$owner:String!){
        createContent(type:$type,description:$description,url:$url,owner:$owner){
          type,
          description
      }
    }
`;

const CreateContent = () => {
  const [content,setContent]=useState('');
  const [type,setType]=useState('');
  const [description,setDescription]=useState('');
  const [video,setVideo]=useState('');
  const [loading,setLoading]=useState(false);

  const [createContent] = useMutation(upload_content);


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
  const uploadContent=async(e)=>{
        e.preventDefault();
        try{
          const { data } = await createContent({
            variables: {
              type:type,description:description,url:content,owner :'6x4894289'    
            },
          });
        }
        catch(err){
          console.log(err);
        }
  }
  
  return (
    {createList,content,setContent,loading,setLoading,uploadContent}
  )
}

export default CreateContent
