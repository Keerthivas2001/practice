/* <label for="first name">firstname</label><br>
    <input type="text" name="firstname" id="firstname"> <br>
    <label for="middle name">middlename</label><br>
    <input type="text" name="middlename" id="middlename"> <br>
    <label for="last name">lastname</label><br>
    <input type="text" name="lastname" id="lastname"> <br></br> */

// function createlabel(tagname,attname,attvalue,content){
//     var ele=document.createElement(tagname);
//     ele.setAttribute(attname,attvalue);
//     ele.innerHTML=content;
//     return ele;

// }
// var l=createlabel("label","for","firstname","firstname");


// function createinput(tagname,attname,attvalue,atname,atvalue){
//     var ele=document.createElement(tagname);
//     ele.setAttribute(attname,attvalue,atname,atvalue);
//     return ele;

// }
// var i=createinput("input","text","firstname","id","firstname");



// function createlabel1(tagname,attname,attvalue,content){
//     var ele=document.createElement(tagname);
//     ele.setAttribute(attname,attvalue);
//     ele.innerHTML=content;
//     return ele;

// }
// var l1=createlabel1("label","for","middlename","middlename");

// function createinput1(tagname,attname,attvalue,atname,atvalue){
//     var ele=document.createElement(tagname);
//     ele.setAttribute(attname,attvalue,atname,atvalue);
//     return ele;

// }
// var i1=createinput1("input","text","middlename","id","middlename");


// function createlabel2(tagname,attname,attvalue,content){
//     var ele=document.createElement(tagname);
//     ele.setAttribute(attname,attvalue);
//     ele.innerHTML=content;
//     return ele;

// }
// var l2=createlabel2("label","for","lastname","lastname");


// function createinput2(tagname,attname,attvalue,atname,atvalue){
//     var ele=document.createElement(tagname);
//     ele.setAttribute(attname,attvalue,atname,atvalue);
//     return ele;

// }
// var i=createinput2("input","text","lastname","id","lastname");



function foo(){
    var a=document.getElementById("firstname").value;
    var b=document.getElementById("middlename").value;
    var c=document.getElementById("lastname").value;
    var d=document.getElementById("email").value;
    var e=document.getElementById("password").value;

    console.log(a,b,c,d,e);
}










