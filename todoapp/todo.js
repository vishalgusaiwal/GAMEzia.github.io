$("ul").on("click","li",function()
{
	$(this).toggleClass("completed");
});
$("ul").on("click","span",function(event)
{
$(this).parent().fadeOut(750,function()
	{
		$(this).remove();
	});
event.stopPropagation();
});
var form = document.querySelector('.to-do-form');
var itm = document.querySelector('.todoitem');
var input = document.querySelector('.input');
var todos = [];
form.addEventListener('submit',function(event){
	event.preventDefault();
	addToDo(input.value);
});
function addToDo(string){
	if(string!=""){
		const todo = {
			id:Date.now(),
			name:string,
			completed:false
		};
		todos.push(todo);
		addToLocalStorage(todos);
		input.value = "";
	}
}
function renderTodos(item){
	itm.innerHTML = "";
	item.forEach(element => {
		const checked = element.completed?'checked':null;
		const li = document.createElement('li');
		li.setAttribute('data-key',element.id);
		if(element.completed===true){
			li.classList.add('completed');
		}
		li.innerHTML = `<span><i id = "icon" class="fa fa-trash"></i></span> ${element.name} `;
		itm.append(li);

	});
}
function addToLocalStorage(todos){
	localStorage.setItem('todos',JSON.stringify(todos));
	renderTodos(todos);
}
function getFromStorage(){
	const reference = localStorage.getItem('todos');
	if(reference){
		todos = JSON.parse(reference);
		renderTodos(todos);
	}
}
var delete1 = document.getElementById('icon');
delete1.addEventListener('click',function(event){
		deleteTodo(event.target.parentElement.getAttribute('data-key'));
});
function deleteTodo(id){
	todos = todos.filter(function(item){
		return item.id!=id;
	});
	addToLocalStorage(todos);
}
getFromStorage();
$(".fa-plus").click(function()
{
$("input[type='text']").fadeToggle(500);
});
$("button").on("click",function()
{
	$("li").fadeToggle(350);


});
function openNav() {
document.getElementById("mySidebar").style.width = "250px";
document.getElementById("main").style.marginLeft = "250px";
}
function closeNav() {
document.getElementById("mySidebar").style.width = "0px";
document.getElementById("main").style.marginLeft = "0px";
}