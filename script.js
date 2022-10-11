var ele=document.createElement("div");
ele.setAttribute("class","container");

var sp =document.createElement("div");
sp.setAttribute("class","row");



var s=document.createElement("div");
s.setAttribute("class","col");
s.innerHTML="this is col";
sp.append(s);
ele.append(sp);


document.body.append(ele);

/* <div class="container">
    <div class="row">
        <div class="col">this is col</div>
    </div>
</div> */