
function save_data(id_amount, id_price, id_div, name_activity) {
  var input = document.getElementById(id_amount);
  localStorage.setItem("people", input.value);
  var storedValue1 = localStorage.getItem("people");
  addElement(storedValue1, id_price, id_div, name_activity);
}

$("#btnSailing").click(function () {
  save_data("peopleSa", "priceSa", "1", "Sailing");
});
$("#btnSnorkeling").click(function () {
  save_data("peopleSn", "priceSn", "2", "Snorkeling");
});
$("#btnSurfing").click(function () {
  save_data("peopleSu", "priceSu", "3", "Surfing")
});



function sub_total() {
  var array_total = [];
  for (let i = 1; i < 4; i++) {
    if (document.getElementById("div" + i)) {
      let sub_total = document.getElementById("total" + i).value;
      var sub_total_int = parseInt(sub_total);
      array_total.push(sub_total_int);
      console.log(array_total);
    }
  }
  var subTotal = array_total.reduce(function (a, b) { return a + b }, 0);
  
  if (document.getElementById('divTotal')) {
    let divTotalDel=document.getElementById('divTotal');
    divTotalDel.parentNode.removeChild(divTotalDel);
  }
  if (subTotal === 0) { return; }
  var parentTotal = document.getElementById("test");
  var totalInput = document.createElement("div");
  totalInput.setAttribute('id', 'divTotal');
  totalInput.innerHTML = "<h1>Your Total Price</h1><br><label for='subTotal'>Your Total is: </label><input type='number' id='subTotal' disabled>";
  parentTotal.appendChild(totalInput);
  document.getElementById("subTotal").value = subTotal;




}

$("#Cart").click(function () {
  sub_total();
  $("#cartModal").modal("show");
});


function addElement(addElem, id_price, id_div, name_activity) {

  if ((addElem === "") || (addElem === "0")) {
    if (document.getElementById("div" + id_div)) {
      let div_del = document.getElementById("div" + id_div);
      div_del.parentNode.removeChild(div_del);
    }
    
    return 0;
  }
  if (document.getElementById("div" + id_div)) {
    let div_del = document.getElementById("div" + id_div);
    div_del.parentNode.removeChild(div_del);
  }
  var div = document.createElement("div");
  div.setAttribute("id", "div" + id_div);
  div.innerHTML = "<h2 id='header" + id_div + "'></h2><label for='price" + id_div + "'>Price $</label><input type='text' disabled id='price" + id_div + "'><br><label for='amountOf" + id_div + "'>Amount of people</label><input type='text' disabled id='amountOf" + id_div + "'><br><label for='total" + id_div + "'>Total</label><input type='text' disabled id='total" + id_div + "'>";
  var parent = document.getElementById("test");
  parent.appendChild(div);
  var set_amount = document.getElementById("amountOf" + id_div);
  set_amount.value = addElem;
  var act_price = document.getElementById(id_price);
  var act_price_modal = document.getElementById("price" + id_div);
  act_price_modal.value = act_price.value;
  var headerName = document.getElementById("header" + id_div);
  headerName.innerHTML = name_activity;

  var price_string = act_price.value;
  var totalPrice = total(addElem, price_string);
  document.getElementById("total" + id_div).value = totalPrice;

}


function total(x, y) {
  var a = parseInt(x);
  var b = parseInt(y);
  let total = a * b;
  return total;

}



// var copy_div=document.getElementById("div");
// var the_clone=copy_div.cloneNode(true);
// the_clone.setAttribute('class', 'd-block');
// var parent=document.getElementById("cartForm");
// parent.appendChild(the_clone);
// document.getElementById("")





// $(document).ready(function () {
//   autoPlayYouTubeModal();
// });

// function autoPlayYouTubeModal() {
//   var trigger = $("body").find('[data-toggle="modal"]');
//   trigger.click(function () {
//     var theModal = $(this).data("target"),
//       videoSRC = $(this).attr("data-theVideo"),
//       videoSRCauto = videoSRC + "?autoplay=1";
//     $(theModal + ' iframe').attr('src', videoSRCauto);
//     $(theModal + ' button.close').click(function () {
//       $(theModal + ' iframe').attr('src', videoSRC);
//     });
//   });
// }
// function addElement(){
//   var newElement=document.createElement("input");
//   newElement.setAttribute('type', 'text');
//   var storedValue1 = localStorage.getItem("peopleS");
//   newElement.setAttribute('value',storedValue1);
//   var parent=document.getElementById("test").appendChild(newElement);

// }



// function addElement(storedValue) {
//   if ((storedValue === "") || (storedValue === "0")) {
//     return;
//   }
// if (document.getElementById("storedValue")) {
//   var delInput=document.getElementById("storedValue");
//   delInput.parentNode.removeChild(delInput);
//   var delLabel=document.getElementById("")
// }

//   var newElement = document.createElement("input");
//   newElement.setAttribute('type', 'text');
//   newElement.setAttribute('value', storedValue);
//   newElement.setAttribute('id', 'storedValue')
//   var newLabel = document.createElement("label");
//   newLabel.setAttribute('for', 'storedValue');
//   newLabel.innerHTML = "Amount of people";
//   var parent = document.getElementById("test");
//   parent.appendChild(newLabel);
//   parent.appendChild(newElement);
//   var newPrice = document.getElementById("priceS");
//   var the_clone = newPrice.cloneNode(true);
//   the_clone.setAttribute('id', 'price2');
//   var newLabel2 = document.createElement("label");
//   newLabel2.setAttribute('for', 'price2');
//   newLabel2.innerHTML = "Price";
//   parent.appendChild(newLabel2);
//   parent.appendChild(the_clone);


// }