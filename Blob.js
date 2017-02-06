/*Author: Johan Cabarcas
  Date  :  06-12-2016
*/




/**************Function to create a blob in each clock face*********/



function createBlob(blobname,clockFace){
//         blob in the middle object creation

var blobradius=0.1;
var geometry = new THREE.CylinderGeometry( blobradius, 0.1, 1/8, 36);
//var material = new THREE.MeshBasicMaterial( {color: 0xFF0000} );
var material = new THREE.MeshPhongMaterial( {color: "white",wireframe:false} );
var blobname = new THREE.Mesh( geometry, material );

blobname.position.y=clockFace;

return blobname;
}