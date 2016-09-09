var modules;
var data;

function loadModules() {


$.getJSON('modules.json')
.done(function (data) {
console.log(data);
modules = data;
loadImages();

});
}

function loadData (){



$.getJSON('data.json').done (function(x){
data = x;
});
}

function clearAll () {
	document.getElementById('tpl').value='';
	document.getElementById('output').value='';
	document.getElementById('preview').innerHTML = '';
}

function render (){
	
	var tpl = document.getElementById('tpl').value;
	var cmnds = tpl;
var t = new Template(tpl);
document.getElementById('preview').innerHTML = t.render(data);

document.getElementById('output').value = t.render(data);	

document.getElementById('tpl').value=cmnds;

}



var createClickHandler = function(arg) {
  return function() { document.getElementById('tpl').value += "{%"+arg+"%}"; };
}

	
function loadImages  (){


for (var i = 0; i < modules.length;i++){
	
	

	console.log(i)
	var img = document.createElement("img");
	img.src = modules[i].img;
	img.id = modules[i].name;
	img.style = "margin-right:5px";
	document.getElementById("images").appendChild(img);
	document.getElementById(img.id).onclick = createClickHandler(img.id);



	
}
}
