/*Author: Johan Cabarcas
  Date  :  06-12-2016
*/




		// Initialize webGL
var canvas = document.getElementById("mycanvas");
var renderer = new THREE.WebGLRenderer({canvas:canvas});
renderer.setClearColor('black');    // set background color

// Create a new Three.js scene with camera and light
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, canvas.width / canvas.height, 0.1, 1000 );
camera.position.set(0,0,5);
camera.lookAt(scene.position);   // camera looks at origin
var ambientLight = new THREE.AmbientLight("white");
scene.add(ambientLight);
/*
var axisHelper = new THREE.AxisHelper( 5 );
scene.add( axisHelper );
*/

//*****************Create Clock********************************


var clocksize=2;// radious of cylinder
var clockthickness=1; // height of cylinder
var clockFrame=createClockFrame(clocksize,clockthickness);
scene.add( clockFrame );


//**************Create blob for A and B face************

var blobPosFaceA=clockthickness/2;//position of the blob on the clock face A and face B it is the height of cylinder/2
var blobPosFaceB=-clockthickness/2;

var blobFaceA_name="blobFaceA"
var blobFaceB_name="blobFaceB";

var blobFaceA=createBlob(blobFaceA_name,blobPosFaceA);// invoke method for creating the blob
var blobFaceB=createBlob(blobFaceB_name,blobPosFaceB);

clockFrame.add(blobFaceA);// attach blob of both faces to the clock coordinate system
clockFrame.add(blobFaceB);

//--------------------Settings for thickhands movements

var time=new Date();
var ticksphereradius= clocksize/2.2;// size for the seconds handtick
var ticksphereradiusMin= clocksize/3;// size for the minutes handtick
var ticksphereradiusHr= clocksize/4;;// size for the hours handtick
var deltaPI=Math.PI/30;// this variable means the small proportion in radians of each Min/sec indicator of the clock, if we start from PI/2 (12hr) clockwise
var deltaPIHr=Math.PI/6;// proportion of hr indicator for circunference in radians


//*******************Create Tick Hours Face A and B 
var tickHourA=createTickHour();
var tickHourB=createTickHour();

blobFaceA.add(tickHourA);
blobFaceB.add(tickHourB);

//***********Create Tick minutes face A and B*************

var tickMinA=createTickMin();
var tickMinB=createTickMin();

blobFaceA.add(tickMinA);//attach Ticks to blob coordinate system for face A and B
blobFaceB.add(tickMinB);

HrIndObjects=[];//array which holds the hour indicators 


//*****************************Create Seconds tick************

var tickSecA=createTickSeconds();
var tickSecB=createTickSeconds();

blobFaceA.add(tickSecA);//attach Ticks to blob coordinate system for face A and B
blobFaceB.add(tickSecB);

//*********Creation of Hour indicators on both faces of the clock

var i;
for (i=0;i<AryHrIndicator.length;i++){

var IndHourA=createHrIndicator(AryHrName[i],AryHrIndicator[i]);
var IndHourb=createHrIndicator(AryHrName[i],AryHrIndicator[i]);

blobFaceA.add(IndHourA);
blobFaceB.add(IndHourb);

}

//*****************************Create Minutes Indicator*************

createMinIndicators(blobFaceA);
createMinIndicators(blobFaceB);

//---------------------------------------------------------------------

var controls = new THREE.TrackballControls( camera, canvas );
/*var Orbitcontrols = new THREE.OrbitControls(camera);
Orbitcontrols.autoRotate=true;*/
var clock = new THREE.Clock();

function render() {

requestAnimationFrame(render);
	/*Movement "rotations" of Hour, minutes and seconds thicks*/
	MoveSecA();
	MoveSecB();
	
	MoveMinA();
	MoveMinB();
	
	MoveHrA();
	MoveHrB();
	
    controls.update();
	
    renderer.render(scene, camera);
}
render();