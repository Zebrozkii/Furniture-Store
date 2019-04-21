
$(document).ready(function() {
  $('form#furnitureForm').submit(function(event) {
    event.preventDefault();
    var searchInput = $('#searchInput').val();
    getFurniture(searchInput);

});

function getFurniture(searchInput) {
   var url = `https://it771mq5n2.execute-api.us-west-2.amazonaws.com/production/furniture?type=${searchInput}`;
   fetch(url)
   .then(function(response){
     return response.json();
   })
   .then(function(myJson){
     console.log(myJson.body.data);
     var inventory = myJson.body.data;
     inventory.forEach(function(i){
       var div = `<ul><li>${i.name}</li>
       <img src=${i.imageUrl}>
       <li>${i.description}</li>
       <li>${i.cost}$</li>
       </ul>`;
       $('#returnFurniture').append(div);

     });
   });
 }
});
