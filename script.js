let Abtn=document.getElementById('Abtn');
let about=document.getElementsByClassName('about')[0];
let MyWorks=document.getElementsByClassName('MyWorks')[0];
let informations=document.getElementsByClassName('informations')[0];
let projects=document.getElementsByClassName('projects')[0];

console.log(Abtn);
console.log(about);
 function obenAbout(){
 about.style.height="85%";
 MyWorks.style.height="31px";
 projects.style.display= "none";
setTimeout(() => {
   informations.style.display= "flex";
}, 500);

}
function obenMyWorks(){
   MyWorks.style.height="85%";
   about.style.height="61px";
   informations.style.display= "none";
   setTimeout(() => {
      projects.style.display= "flex";
   }, 500);
   }
  
    function off(){
    about.style.height="61px";
    MyWorks.style.height="31px";
    informations.style.display= "none";
    projects.style.display= "none";

    }