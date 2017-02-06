/*Author: Johan Cabarcas
  Date  :  06-12-2016
*/




//*****Creation of tick hands Tick Hour, tick Min and tick Sec


//             Tick hands for Hours

function createTickHour (){

var geo = new THREE.SphereGeometry( ticksphereradiusHr, 16,16);
var mat = new THREE.MeshPhongMaterial({color: "yellow",
                                       wireframe:true} );
var tickHour = new THREE.Mesh(geo, mat); 

/**Scale spheres accordintgly for the ticks and min */
var squezedTopwons=ticksphereradiusHr;
var squezedfrontback=ticksphereradiusHr;


//  Squeeze  hour thick 

tickHour.scale.z=squezedTopwons/15;//this squeeze the the ball presiing from up to down 
tickHour.scale.y=squezedfrontback/20;//this squeeze ball from back to front

return tickHour;
}

function createTickMin (){

var geo = new THREE.SphereGeometry( ticksphereradiusMin, 16,16);
var mat = new THREE.MeshPhongMaterial({color: "yellow",
                                       wireframe:true} );
var tickMin = new THREE.Mesh(geo, mat); 

/**Scale spheres accordintgly for the ticks and min */
var squezedTopwons=ticksphereradiusMin;
var squezedfrontback=ticksphereradiusMin;


//  Squeeze  Minutes thick 
tickMin.scale.z=squezedTopwons/18;//this squeeze the the ball presiing from up to down 
tickMin.scale.y=squezedfrontback/20;//this squeeze ball from back to front
	
	return tickMin;
}

function createTickSeconds(){
	
var geo = new THREE.SphereGeometry( ticksphereradius, 16,16);
var mat = new THREE.MeshPhongMaterial({color: 0x4169E1,
                                       wireframe:true} );
var tickSec = new THREE.Mesh(geo, mat); 

var squezedTopwons=ticksphereradius;
var squezedfrontback=ticksphereradius;

//  Squeeze  sec thick 
tickSec.scale.z=squezedTopwons/100;//this squeezeze the the ball presiing from up to down 
tickSec.scale.y=squezedfrontback/100;//this squeeze ball from back to front
	
	return tickSec;
}