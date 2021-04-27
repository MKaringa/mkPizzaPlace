
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
    var Total = ((price[size]) + crust + sumToppings)* amount;

    if (size =='undefined'|| (price[size]) == 'undefined' || crust == 'NaN' || sumToppings == '' || Total == 'NaN'){         
        $("#total").html('Kindly select at least one size, one crust and a topping')
    } else{
        $("#total").html("<strong>Your Pick:</strong>" + "<br/>"+"Type:" + type + "<br/>"+ " Size: " + getSize(size)+ "<br/>"+" No. of Pizzas ordered " + amount+ "<br/>"+ " Price: Kshs " + price[size] + "<br/>" + " crust: Kshs. " + crust + "<br/>"+ " Toppings: Kshs "+ sumToppings + "<br/>"+" <strong> Total: Kshs </strong>" + subTotal);
        $(".deliver").show();
    }
    });

    $("#checkout").click(function(){
        swal("Thank you for shopping with us", "Kindly pick up your order at the counter near by.", "success");
    });
});
