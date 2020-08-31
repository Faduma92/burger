
// When the user submits a new burger
$('.newBurgerInfo').on('submit', function (event) {
    event.preventDefault();

    let burger = $('.burgerInput').val().trim();

    let newBurger = {
        burger_name: burger
    }

    // Post the new burger to the db 
    $.ajax('/burger', {
        type: 'POST',
        data: newBurger
    }).then(function (data) {
        location.reload();
    });
});

// When the user clicks on a burger name
$('.devourBtn').click(function () {
    let id = $(this).data('id');

    let devourState = {
        devoured: true
    }

    $.ajax(`/burgers/${id}`, {
        method: 'PUT',
        data: devourState
    }).then(function (data) {
        location.reload();
    })
})

// When the user clicks on the trash icon next to a burger
$('.deleteBtn').click(function () {
    let id = $(this).data('id');

    $.ajax(`/burgers/${id}`, {
        type: 'DELETE',
    }).then(function (data) {
        location.reload();
    });
});
