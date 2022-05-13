menu_list_array = ["Veg Margherita Pizza","Pepporoni Pizza","Veg Supreme Pizza","Double Veggie Pizza","Chipotle Pizza","Panner Tikka Pizza"];

function getmenu(){
var pizza;
    pizza="<ol class='menu_list'>";
    menu_list_array.sort();
for (var i=0; i<menu_list_array.length;i++) {
    pizza=pizza+ '<li>' + menu_list_array[i] + '</li>'
}
    pizza=pizza + '</ol>'
    document.getElementById("display_menu").innerHTML = pizza;
}

function add_item(){
var pizza;
pizza="The list of Pizza's is:  "; 
menu_list_array.sort();
for (var i=0; i<menu_list_array.length;i++) {
    pizza=pizza + '<div class="card">' + '<img src="images/pizzaImg.png"/>' + menu_list_array[i] + '</div>'
}
pizza=pizza + '</section>'
document.getElementById("display_addedmenu").innerHTML = pizza;
}


function add_top(){
 var item = document.getElementById("add_item").value;
 menu_list_array.push(item);
 add_item();
}