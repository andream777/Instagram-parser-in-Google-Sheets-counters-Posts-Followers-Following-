var person = [];
function Instagram(id,action){
// var id="skatray";
 var resaut=null;
if(!/.*(instagram.com).*/.test(id))  {
    var url= "https://www.instagram.com/"+id;}
  else{
    var url=id;
  } 
var idarray = find(person,"Url","https://www.instagram.com/skatray");
  if(idarray==-1){
    try{
var html =UrlFetchApp.fetch(url).getContentText();
var Followers = /([,\d]+) Followers/gm.exec(html)[1];  
var Following = /([,\d]+) Following/gm.exec(html)[1];
var Posts = /([,\d]+) Posts/gm.exec(html)[1];
person[person.length] ={Url:url,Followers:Followers,Following:Following,Posts:Posts};
      idarray=person.length-1;
    }
    catch(e){
      return "Not Found";
      }
  }
 switch(action){
    case "Followers": 
      resaut = person[idarray][action];
      break;
    case "Following": resaut = person[idarray][action];
      break;
    case "Posts":resaut = person[idarray][action];
      break;
    default: resaut="Error action. Please use one is: Followers,Following,Posts";
      }   
   return resaut;
  }



function find(array, param, value) { 
 for (var i = 0; i < array.length; i++) {
    if (array[i][param] === value) return i;
  }

  return -1;
}