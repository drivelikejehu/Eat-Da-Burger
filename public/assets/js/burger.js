// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#newburger").val().trim(),
        devoured: 0
        };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("Order up!");
          location.reload();
        });
    });
  
    $(".devour-burger").on("click", function(event) {
      var id = $(this).data("id");
      var ifDevoured = {
        devoured: 1
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: ifDevoured
      }).then(
        function() {
          console.log("Burger consumed");
          location.reload();
        });
    });

    $(".killburger").on("click", function(event) {
        event.preventDefault();
    
        var id = $(this).data("id");

        $.ajax({
          type: "DELETE",
          url: "/api/burgers/" + id
        }).then(location.reload());
      });
    });