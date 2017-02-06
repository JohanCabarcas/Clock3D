/*Author: Johan Cabarcas
  Date  :  06-12-2016
*/



//*****************************Clock frame ******************************

//           Cylinder Clock frame Object

function createClockFrame(cylinrad,cylinderHigh){

var geometry = new THREE.CylinderGeometry( cylinrad, cylinrad, cylinderHigh, 36);
//var material = new THREE.MeshBasicMaterial( {color: 0xFAEBD7} );
var material = new THREE.MeshPhongMaterial({color: 0x0000,wireframe:false} );
var cylinder = new THREE.Mesh( geometry, material );

//Rotate clock to visualize faces
cylinder.rotation.x= Math.PI/2;

return cylinder;
}