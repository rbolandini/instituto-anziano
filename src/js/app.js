/*
     |--------------------------------------------------------------------------
     | jquery
     |--------------------------------------------------------------------------
     */
try {
    window.$ = window.jQuery = require("jquery");
} catch (e) {}

import Background from "./plugins/Background";
import Height from "./plugins/Height";
import Width from "./plugins/Width";
import Carousel from "./plugins/Carousel";
import Modal from "./plugins/Modal";
import Nav from "./plugins/Nav";

new Height();
new Width();
new Background();
new Modal();
new Nav();
window.Carousel = new Carousel();

$(document).ready(function() {
    // Envio do formulário de contato
    $("form[name='form-contato']").submit(function(event) {
        $('form[name="form-contato"] .loading').fadeIn();
        $.ajax({
            url: "https://simposiodeoncologiahvc.com.br/enviar.php",
            // url: '/oncologia/enviar.php',
            data: $('form[name="form-contato"]').serialize(),
            type: "POST",
            success: function(res) {
                $(".form-responses").fadeIn();
                $('form[name="form-contato"]').css("display", "none");
                // $('.form-responses .loading').fadeOut();
                $(".form-responses .msg_resposta").removeClass("error");
                $(".form-responses .msg_resposta").addClass("success");
                // $('.form-responses .msg_resposta').html('<p>' + res.message + '</p>');
                $(".form-responses .msg_resposta").fadeIn();

                // console.log(res);
                setTimeout(function() {
                    $(".form-responses").fadeOut();
                    $('form[name="form-contato"]').css("display", "block");
                    $('form[name="form-contato"]').trigger("reset");
                }, 2000);

                // Registra evento para chamar trigger no GTM
                dataLayer.push({
                    event: "formEnviado",
                    response: "sucesso"
                });
            },
            error: function(res) {
                $('form[name="form-contato"] .loading').fadeOut();
                $('form[name="form-contato"] .msg_resposta').addClass("error");
                $('form[name="form-contato"] .msg_resposta').html(
                    "<p>Ocorreu um erro ao enviar sua mensagem.<br />Entre em contato com o administrador do sistema.</p>"
                );
                $('form[name="form-contato"] .msg_resposta').fadeIn();
                console.log(res);
            }
        });

        event.preventDefault();
    });

    var banner = $("[data-inscrevase]");
    var bodyHeight = $("body").height();
    $(window).scroll(function() {
        if ($(window).width() < 750) {
            if ($(window).height() < $(window).scrollTop() - 10) {
                banner.fadeIn();
            } else {
                banner.hide();
            }
        }
    });

    /*
        |--------------------------------------------------------------------------
        | Menu
        |--------------------------------------------------------------------------
        */
    $(".hamburger").click(function() {
        if ($(".navopen").hasClass("navactivemb")) {
            $(".navopen").removeClass("navactivemb");
        } else {
            $(".navopen").addClass("navactivemb");
        }

        $(".navopen ul li a").on("click", function() {
            $(".navopen").removeClass("navactivemb");
            $(".hamburger").removeClass("is-active");
        });
    });

    $("[data-item]").on("click", function() {
        var name = $(this).attr("data-item");
        $("[data-item] span").removeClass("active-item");
        $(".all").css("display", "none");
        $('[id="' + name + '"]').css("display", "block");
        $(this)
            .find("span")
            .addClass("active-item");
    });

    /*
        |--------------------------------------------------------------------------
        | Toggle
        |--------------------------------------------------------------------------
        */

    $(".toggle button").click(function(e) {
        var tClass = $(this).attr("id"),
            content = $("div.content." + tClass),
            link = $(this);

        $("div.content:not('." + tClass + "')").fadeOut("fast");
        $(".toggle button")
            .find(".fa-plus")
            .css("display", "block");
        $(".toggle button")
            .find(".fa-times")
            .css("display", "none");
        $(".toggle button")
            .find(".btn-toggle")
            .removeClass("btn-toggle-active");

        content.fadeToggle("fast", function() {
            if (content.is(":visible")) {
                $(link)
                    .find(".fa-plus")
                    .css("display", "none");
                $(link)
                    .find(".fa-times")
                    .css("display", "block");
                $(link)
                    .find(".btn-toggle")
                    .addClass("btn-toggle-active");
            } else {
                $(link)
                    .find(".fa-plus")
                    .css("display", "block");
                $(link)
                    .find(".fa-times")
                    .css("display", "none");
                $(link)
                    .find(".btn-toggle")
                    .removeClass("btn-toggle-active");
            }
        });

        e.preventDefault();
    });

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        //>=, not <=
        if (scroll >= 200) {
            //clearHeader, not clearheader - caps H
            $("header").addClass("header-up");
            $('[id="nav"]').addClass("header-up");
            $(".svgtop").css("display", "block");
        } else {
            $("header").removeClass("header-up");
            $('[id="nav"]').removeClass("header-up");
            $(".svgtop").css("display", "none");
        }
    }); //missing );
});



$(document).on('click', 'a[href^=#]', function(e){
    e.preventDefault();
    var id = $(this).attr('href');
    $('html,body').animate({scrollTop: $(id).offset().top}, 500);
});