
// getSize function
 
function getSize (size) {
    if (size === 0) {
        return "Pizza Pie"
   }else if (size === 1) {
        return "Small"
    }else if (size === 2) {
        return "Medium"
    }else if (size === 3) {
     return "Large"
   }
 };

 //  Order function

$(document).ready(function(){
    $('#submit').click(function(event){
        event.preventDefault();
        var type = $('#type').val();
        var size = parseInt($("input[name='size']:checked").val());
        var crust = parseInt($("input[name='crust']:checked").val());
        var amount = parseInt($("#number").val());
        var price=[600, 800, 1000, 1200];
        var sumToppings = 0;
        $("input[name='topping']:checked").each(function(){
        sumToppings+= parseInt($(this).val());
    })
});
