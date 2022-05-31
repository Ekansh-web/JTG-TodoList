/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function myMove(){
    var name = document.getElementById('contt').value; 
    var fnt = document.getElementById('num').value;
    var colorr = document.getElementById('colo').value;
    if(name == ''){
        alert("Please enter the value");
    }
    else if(fnt == ''){
        alert('Please Enter Font Size');
    }
    else{
        var box = document.getElementById('box');
        
        var li =document.createElement('li')
        li.style.fontSize = fnt+'px';
        li.style.color = colorr;
        li.textContent = name;
        
        var a = document.createElement('a');
        a.textContent = "x";
        a.href = "script:void(0)";
        a.className = 'remove';
        
        
        li.appendChild(a);
        box.appendChild(li);
    }
}

var btn = document.querySelector('ul');
/*
var p = {1:{
    nam : ;
    fnt : ;}, 2:{}    
}
*/

btn.addEventListener('click',function(e){
     var box = document.getElementById('box');
     var list = e.target.parentNode;
     box.removeChild(list);
});

