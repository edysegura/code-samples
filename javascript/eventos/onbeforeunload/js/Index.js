/**
 * 
 * Evento window.onBeforeUnload
 * @author: Edy Segura - edy@segura.pro.br
 * 
 */

window.onbeforeunload = function(e) {
	e = e || window.event;
	var message = "Todos os dados não salvos serão perdidos! Tem certeza que deseja continuar?";

  //for IE and Firefox
  if(e) {
    e.returnValue = message;
  }

  //for Safari
  return message;
};

