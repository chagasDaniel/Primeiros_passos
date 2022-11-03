var comp = app.project.items.addComp("Comp 1", 1920, 1080, 1, 60, 30); //cria a comp
var txtOne = comp.layers.addText("Texto 1"); //cria as layers de texto
var txtTwo = comp.layers.addText("Texto 2");
var controller = comp.layers.addNull(comp.duration); //cria o nulo
txtOne.parent = controller; //parentea as layers de texto no nulo
txtTwo.parent = controller;
txtOne.position.setValue([-270,0]); //seta a posição das layers
txtTwo.position.setValue([95,0]);
comp.openInViewer(); //abre a comp pra visualização