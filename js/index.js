document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
  
}

function validar(){
  let erro = false;
  if ($("#nome").val().length < 3) {
    $("#nome").addClass("invalid");
    erro = true;
  } else {
    $("#nome").removeClass("invalid");
    $("#nome").addClass("valid");
  }
  if ($("#telefone").val().length<9) {
    $("#telefone").addClass("invalid");
    erro = true;
  } else {
    $("#telefone").removeClass("invalid");
    $("#telefone").addClass("valid");
  }
  if(!$("#email").val().includes("@")){
    $("#email").addClass("invalid");
    erro = true;
  } else {
    $("#email").removeClass("invalid");
    $("#email").addClass("valid");
  }
  if (erro) {
    M.toast({html:"Dados inválidos! Verifique os campos em vermelho."});
    return false;
  };
  
  
  return true;
}

$(document).ready(function(){
  $('.sidenav').sidenav();
  $('.pagina').each(function(){
      $(this).hide();
  });

  $("#menulista").click(function(){
      $("#pagina-novo").hide();
      $("#pagina-lista").show();
  });
  $("#menunovo").click(function(){
      $("#pagina-lista").hide();
      $("#pagina-novo").show();
  });

  $(".collection-item").click(function(){
      $(".collection-item").each(function(){
         $(this).removeClass("active");   
      })
      $(this).addClass("active");
  });

  $("input[type=search]").change(function(){
        $("span.title").each(function(){
            var texto = $("input[type=search]").get(0).value.toUpperCase();
            if ( $(this).text().toUpperCase().includes(texto) ) {
                $(this).parent().show();
         } else {
           console.log("Esconder "+$(this).text().toUpperCase());
           $(this).parent().hide();
           
         }

        });
    });


    $("#btadd").click(function(){
          if (validar()) {

          //adicionar o contato na lista
          }



    });



});
      