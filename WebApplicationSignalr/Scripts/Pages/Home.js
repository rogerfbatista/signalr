'use strict';

var home = {

    alerta: function () {
        alert("bom dia oi");
    },
    salvar: function () {

        $("#btnSalvar").attr("disabled", true);

        $.ajax({
            url: "/Home/Salvar",
            type: "Post",
        }).done(function (data) {

            $("#btnSalvar").attr("disabled", false);

        }).fail(function (data) {
            alert(data);
        })
    }
}