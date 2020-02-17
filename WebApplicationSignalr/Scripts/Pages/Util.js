'use strict';

$(function () {



    var util = {

        notificar: function (mensagem) {


            toastr.success(mensagem, '', {

                "positionClass": "toast-bottom-right"
            });

          //  $.growlUI('', mensagem);
          //  $("#h2msg").text(mensagem)

          
            //$.blockUI({
            //    message: $('div.growlUI'),
            //    fadeIn: 800,
            //    fadeOut: 800,
            //    timeout: 2000,
            //    showOverlay: false,
            //    centerY: false,
            //    css: {
            //        width: '200px',
            //        bottom: '10px',
            //        top: '-100',
            //        left: '',
            //        right: '10px',
            //        border: 'non',
            //        padding: '5px',
            //        backgroundColor: '#000',
            //        '-webkit-border-radius': '10px',
            //        '-moz-border-radius': '10px',
            //        opacity: .6,
            //        color: '#fff',
            //    }
            //});

          //  setTimeout(util.desbloquearTela, 2000);
                     
        },
        bloquearTela: function () {

            $.blockUI({
                message: $("#loaddiv"),
                css: {
                    padding: 0,
                    margin: 0,
                    width: '30%',
                    top: '40%',
                    left: '35%',
                    textAlign: 'center',
                    color: '#000',
                    border: '3px solid #aaa',
                    backgroundColor: '#fff',
                    cursor: 'wait'
                },

            });

           
        },
        desbloquearTela: function () {
            $.unblockUI();
        }

    }


    var hub = $.connection.mensagemHub;

    hub.client.add = function (mensagem) {

        util.notificar(mensagem);

        console.log(mensagem);
    }

    $.connection.hub.start().done(function () {
       
        console.log("conectado")
       

    });


    $.ajaxSetup({
        beforeSend: function () {

            $("#loaddiv").show();
            util.bloquearTela();           
        },
        complete: function () {
            util.desbloquearTela();
            $("#loaddiv").hide();
        },
        error: function () {
            util.desbloquearTela();
            $("#loaddiv").hide();
        }
    })



});
