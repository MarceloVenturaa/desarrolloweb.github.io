$(function() {

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
        },
        submitSuccess: function($form, event) {
            event.preventDefault();
            var name = $("input#name").val();
            var email = $("input#email").val();
            var message = $("textarea#message").val();
            var firstName = name;
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                cache: false,
                success: function() {
                    // Mensaje de Exito
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Suscripción realizada correctamente. </strong>");
                        Swal.fire(
                            'Suscripto!',
                            'Suscripcion realizada!',
                            'success'
                          )
                    $('#success > .alert-success')
                        .append('</div>');

                    //borrar
                    $('#contactForm').trigger("reset");
                },
                error: function() {
                    // Mensaje de error
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Algo no salio bien!',
                            footer: '<a href="">Why do I have this issue?</a>'
                          })    
                    $('#success > .alert-danger').append("<strong>Perdón " + firstName + ", algo no salió bien, estamos trabajando en ello!");
                    $('#success > .alert-danger').append('</div>');
                    //borrar
                    $('#contactForm').trigger("reset");
                },
            })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*ocultar fail/success */
$('#name').focus(function() {
    $('#success').html('');
});
