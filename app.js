const jaldi5container = document.getElementById("jaldi5container");
const navbutton = document.getElementsByClassName("navbuttons")[0]
const embed1 =document.getElementById("embed1")
navbutton.addEventListener("click",toggleInsta)
let defaultembed1=false
function toggleInsta(){
    defaultembed1 = !defaultembed1;
if(defaultembed1){
    embed1.classList.remove("hidden");
    embed2.classList.add("visible")}
else{
    embed1.classList.add("hidden")
    embed2.classList.remove("visible")
}
}
let data ={}
async function  fetcher(){
    var data = await fetch("https://i.instagram.com/api/v1/users/web_profile_info/?username=jeevanpriya_reddy")
    var result =await data.json()
return result;
}
fetcher()
.then(function(finalres){
    data.userobj = finalres.user;
    data.username = finalres.user.edge-follow.full_name
    data.media = finalres.user.profile_pic_url_hd;
    console.log(data);
});