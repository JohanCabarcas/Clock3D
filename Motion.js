/*Author: Johan Cabarcas
  Date  :  06-12-2016
*/



//--------------------------Hours Movement A------------------------


function MoveHrA(){
	
	

var utc=Date.now() / 3600000;// utc time in hours 
var hours= (utc %24)+1; // Time difference with UTC for central europe

/* Math.PI/2 is the starting point "Twelve hours" then its radian angle gradually decrease by deltaPIHr
 which is angle between each hour*/ 
var radians= (Math.PI/2)-(deltaPIHr*hours);

//Calculations according to trigonometric form to Cartesian coordinates
tickHourA.rotation.y= radians; // Points the hour corresponding to the 
tickHourA.position.z=-(ticksphereradiusHr)*Math.sin(radians);
tickHourA.position.x=(ticksphereradiusHr)*Math.cos(radians);

}

//-----------------------Move Hr B-----------------

function MoveHrB(){

/* Math.PI/2 is the starting point "Twelve hours" then its radian angle gradually increase by deltaPIHr
 which is angle between each hour*/ 
 
var utc=Date.now() / 3600000;// utc time in hours 
var hours= (utc %24)-5; // Time difference with UTC for South America
var radians= (Math.PI/2)+(deltaPIHr*hours);

//Calculations according to trigonometric form to Cartesian coordinates
tickHourB.rotation.y= radians;
tickHourB.position.z=-(ticksphereradiusHr)*Math.sin(radians);//to bring the tickhand from the center to the corner position
tickHourB.position.x=(ticksphereradiusHr)*Math.cos(radians);

}

//*****************************Minutes movement A-----------------------------------------
function MoveMinA(){

/*Same procedure as for Hours the difference is its deltaPI which is smaller but runs faster*/
var min = Math.floor(Date.now() / 60000);// 1 min
var radians= (Math.PI/2)-(deltaPI*min);

tickMinA.rotation.y= radians;
tickMinA.position.z=-(ticksphereradiusMin)*Math.sin(radians);//to bring the tickhand from the center to the corner position
tickMinA.position.x=(ticksphereradiusMin)*Math.cos(radians);

}


//-----------------MOve Secs A--------------
function MoveSecA(){


var secs = Math.floor(Date.now() / 1000);//1 sec

/*Same procedure as for Hours the difference is its deltaPI which is smaller but runs faster*/
var radians= (Math.PI/2)-(deltaPI*secs);
tickSecA.rotation.y= radians;
tickSecA.position.z=-(ticksphereradius)*Math.sin(radians);//to bring the tickhand from the center to the corner position
tickSecA.position.x=(ticksphereradius)*Math.cos(radians);

}

//----------------------------MOve Min B -----------------

function MoveMinB(){
	
var min = Math.floor(Date.now() / 60000);// 1 min
var radians= (Math.PI/2)+(deltaPI*min);

tickMinB.rotation.y= radians;
tickMinB.position.z=-(ticksphereradiusMin)*Math.sin(radians);//to bring the tickhand from the center to the corner position
tickMinB.position.x=(ticksphereradiusMin)*Math.cos(radians);


	
}
//-----------------------------MOve sec B----------------
function MoveSecB(){

var secs = Math.floor(Date.now() / 1000);//1 sec
var radians= (Math.PI/2)+(deltaPI*secs);

tickSecB.rotation.y= radians;
tickSecB.position.z=-(ticksphereradius)*Math.sin(radians);//to bring the tickhand from the center to the corner position
tickSecB.position.x=(ticksphereradius)*Math.cos(radians);

}
