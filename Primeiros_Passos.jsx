var comp = app.project.items.addComp("Comp 1", 1920, 1080, 1, 60, 30); //cria a comp
var txtOne = comp.layers.addText("Texto 1"); //cria as layers de texto
var txtTwo = comp.layers.addText("Texto 2");
var controller = comp.layers.addNull(comp.duration); //cria o nulo
txtOne.parent = controller; //parentea as layers de texto no nulo
txtTwo.parent = controller;
txtOne.position.setValue([-270,0]); //seta a posição das layers
txtTwo.position.setValue([300,0]);

app.beginUndoGroup("Animar texto");
var control = app.project.item(1).layer(1);
var p1 = control.position.setValueAtTime(1,[-1000,540]);
var p2 = control.position.setValueAtTime(2,[960,540]);
var easeIn = new KeyframeEase(0,85)
var easeOut = new KeyframeEase(0,33.333);
var posProp = control.position;

for(var x = 1; x<=posProp.numKeys; x ++) {
    posProp.setTemporalEaseAtKey(x,[easeIn],[easeOut])
    };

comp.openInViewer(); //abre a comp pra visualização