const {userModel,downloadModel,favouriteModel} = require("../Models/UserModel");
const {contentModel} = require("../Models/ContentModel");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
} = require("graphql");

const UserType = new GraphQLObjectType({
  name:"User",
  fields:()=>({
    _id: { type: GraphQLID },
    email: { type: GraphQLString },
    profile: { type: GraphQLString },
    username: { type: GraphQLString },
    license: { type: GraphQLString },

    createdContent: {
      type: new GraphQLList(ContentType),
      resolve(parent, args) {
        return contentModel.find({ owner: parent._id });
      },
    },})
});

const ContentType = new GraphQLObjectType({
  name:"Content",
  fields:()=>({
    _id: { type: GraphQLString },
    type: { type: GraphQLString },
    description: { type: GraphQLString },
    owner: {
      type: UserType,
      resolve(parent, args) {
        return userModel.findById({_id:parent.owner});
      },
    },})
});

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getUser: {
      type: UserType,
      args: { username: { type: GraphQLString } },
      resolve(parent, args) {
        return userModel.findOne({ username: args.username });
      },
    },
    getDownloads: {
      type: new GraphQLList(ContentType),
      args: { email: { type:GraphQLString } },
      resolve(parent, args) {
        let contents=[];
        const downloads= downloadModel.find({ userEmail: args.email });
        for(let i=0;i<downloads.length;i++){
            contents.push(contentModel.findById(downloads[i].contentId))
        }
        return contents;
      },
    },
    getFavourites: {
        type: new GraphQLList(ContentType),
        args: { email: { type:GraphQLString } },
        resolve(parent, args) {
          let contents=[];
          const favourites= favouriteModel.find({ userEmail: args.email });
          for(let i=0;i<favourites.length;i++){
              contents.push(contentModel.findById(favourites[i].contentId))
          }
          return contents;
       },
    },
    getContents:{
        type:new GraphQLList(ContentType),
        resolve(parent, args) {
            return contentModel.find({});
        }
    },

  },
});
const RootMutation=new GraphQLObjectType({
    name:'RootMutation',
    fields:{
      updateLicense:{
         type:GraphQLString,
         args:{email:{type:GraphQLString},license:{type:GraphQLString}},
         resolve(parent,args){
            return userModel.updateOne({email:args.email},{$set:{license:args.license}})
         }
      },
      addDownloads:{
         type:ContentType,
         args:{userEmail:{type:GraphQLString},contentId:{type:GraphQLID}},
         resolve(parent,args){
            const download= new downloadModel({contentId:args.contentId,userEmail:args.userEmail})
            return download.save();
          }
      },
      addFavourites:{
        type:ContentType,
        args:{userEmail:{type:GraphQLString},contentId:{type:GraphQLID}},
        resolve(parent,args){
           const favourite= new favouriteModel({contentId:args.contentId,userEmail:args.userEmail})
           return favourite.save();
          }
     },
     createContent:{
        type:ContentType,
        args:{type:{type:GraphQLString},description:{type:GraphQLString}
    ,url:{type:GraphQLString},owner:{type:GraphQLID}},
        resolve(parent,args){
          const create= new contentModel({type:args.type,description:args.description,url:args.url,owner:args.owner})
          return create.save();
        }
     },
    }
})
module.exports=new GraphQLSchema({
  query:RootQuery,
  mutation:RootMutation})

/*
query{
    getUser(username:"referip836"){
    email,
    profile
	}
} 
mutation{
 createContent(type:"Events",description:"Events important",url:"http://event1",owner:"652c01a4ed5519e44a465a62"){
  type,
  description
} 
}
*/

