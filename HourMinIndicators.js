/*Author: Johan Cabarcas
  Date  :  06-12-2016
*/


/******************************Positions of the clock********************/
var TwelveInd=Math.PI/2;
var OneInd=Math.PI/3;//define constants for hour and minutes values
console.log(OneInd);
var TwoInd=Math.PI/6;
var ThreeInd=2*Math.PI;
var FourInd=11*Math.PI/6;
var FiveInd=5*Math.PI/3;
var SixInd=3*Math.PI/2;
var SevenInd=4*Math.PI/3;
var EightInd=7*Math.PI/6;
var NineInd=Math.PI;
var TenInd=5*Math.PI/6;
var ElevenInd=2*Math.PI/3;

var AryHrIndicator=[TwelveInd,OneInd,TwoInd,ThreeInd,FourInd,FiveInd,SixInd,SevenInd,EightInd,NineInd,TenInd,ElevenInd];

/*******************Names of indicaotr object******************************/

var atTwelveName="atTwelveName";
var atOneName="atOneName";
var atTwoName="atTwoName";
var atThreeName="atTwoName";
var atFourName="atTwoName";
var atFiveName="atTwoName";
var atSixName="atTwoName";
var atSevenName="atTwoName";
var atEightName="atTwoName";
var atNine="atNine";
var atTenName="atTenName";
var atElevenName="atElevenName";


var AryHrName=["atTwelveName","atOneName","atTwoName","atThreeName","atFourName","atFiveName","atSixName","atSevenName","atEightName","atNine","atTenName","atElevenName"];



//------------------- Function which Constructs hours indicators total =12 and add it to blob coordinates system------------------

function createHrIndicator(hour_name,RadianPosition){

var hoursIndrad= clocksize/8;// size of the indicator


var indicatorHr = new THREE.SphereGeometry( hoursIndrad, 16,16);

//Mark the twelve indicator
if(hour_name=="atTwelveName"){
		var mat = new THREE.MeshPhongMaterial({color: "yellow",
												wireframe:true} );}
else{	var mat = new THREE.MeshPhongMaterial({color: "white",
												wireframe:true} );}									
var hour_name = new THREE.Mesh(indicatorHr, mat); 

//copy into objects ary
HrIndObjects.push(hour_name);

var squezedTopwons=hoursIndrad/2;
var squezedfrontback=hoursIndrad/2;

hour_name.scale.z=squezedTopwons;//this squeeze the the sphere presiing from up to down 
hour_name.scale.y=squezedfrontback;//this squeeze sphere from back to front

/*Here I rotate the hour indicator according to the hour name and locate the tick on the clock's frame accordingly*/
hour_name.rotation.y= RadianPosition;
hour_name.position.z=-(clocksize-hoursIndrad)*Math.sin(RadianPosition);
hour_name.position.x=(clocksize-hoursIndrad)*Math.cos(RadianPosition);

return hour_name;

}


//------------------- Function which Constructs minutes indicators total 60 and add it to blob coordinates system------------------

function createMinIndicators(minInd_name){
	
	var deltaPI=Math.PI/30;
	var currentRadPos=TwelveInd;
	var nrMinIndicator=12*5;// total number of minutes indicator
	var i;
	var k=0;//interation though hour ary
	
	for (i=0;i<nrMinIndicator;i++){
		
			console.log(AryHrIndicator[k])
			//Condition asserts when the constans hours values are met in order not to overlap indicators 
		if (currentRadPos!==AryHrIndicator[k]){
		
			var MinIndicatorSize=clocksize/15;
			var sphere = new THREE.SphereGeometry( MinIndicatorSize, 16,16);
	
			var mat = new THREE.MeshPhongMaterial({color: "white",
												wireframe:true} );
						
			var smalIndicator = new THREE.Mesh(sphere, mat); 
		
			var squezedTopwons=MinIndicatorSize/2;
			var squezedfrontback=MinIndicatorSize/2;

			smalIndicator.scale.z=squezedTopwons;//this squezeed the the ball presiing from up to down 
			smalIndicator.scale.y=squezedfrontback;//this squeez ball from back to front

			
			smalIndicator.rotation.y= currentRadPos;
			smalIndicator.position.z=-(clocksize-MinIndicatorSize)*Math.sin(currentRadPos);
			smalIndicator.position.x=(clocksize-MinIndicatorSize)*Math.cos(currentRadPos);
			minInd_name.add(smalIndicator);	
		
		}
		
		currentRadPos-=deltaPI;
		if(i%4==0){k+=1};// update the iterator that loops 4 times slower
		
	}
}
