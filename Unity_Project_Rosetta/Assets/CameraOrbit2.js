var target : Transform;
var distance = 10.0;
var sensitivitydistance = 50;
var maxdistance : float = 1000;
var mindistance : float = 15;

var xSpeed = 250.0;
var ySpeed = 120.0;

var yMinLimit = -20;
var yMaxLimit = 80;

var xMinLimit = -20;
var xMaxLimit = 80;

private var x = 0.0;
private var y = 0.0;
private var reset : boolean = false;
private var save : boolean = true;
private var pposition : Vector3;
private var protation : Quaternion;
private var position : Vector3;
private var rotation : Quaternion;

@script AddComponentMenu("Camera-Control/Mouse Orbit")

function Start () {
    var angles = transform.eulerAngles;
    x = angles.y;
    y = angles.x;

	// Make the rigid body not change rotation
   	if (rigidbody)
		rigidbody.freezeRotation = true;
}

function LateUpdate () {
    	//Save position and reload on collision
    	/*if(save)
    	{	protation = rotation;
    		pposition = position;
    	}
    	
    	
    	if(reset)
    	{	transform.rotation = protation;
    		transform.position = pposition;
    		distance +=Input.GetAxis("Mouse ScrollWheel") * sensitivitydistance;
    		reset=false;
    		save=  true;
    	}
    	
    	else{*/
    	
    		if (target) {
    			if (Input.GetMouseButton (0)){
    	
        			x += Input.GetAxis("Mouse X") * xSpeed * 0.02;
       				y -= Input.GetAxis("Mouse Y") * ySpeed * 0.02; 			
 				}
 			
 				y = ClampAngle(y, yMinLimit, yMaxLimit);
 				x = ClampAngle (x, xMinLimit, xMaxLimit);
       
     	  		rotation = Quaternion.Euler(y, x, 0);
     	  		position = rotation * Vector3(0.0, 0.0, -distance) + target.position;
        
      	 		transform.rotation = rotation;
      	  		transform.position = position;
    
   			 }
   		//}
  
    	//set distance value according to the scroll wheel input
   		 distance -=Input.GetAxis("Mouse ScrollWheel") * sensitivitydistance;
    
    	//reset camera to max,min distances in order to remain postitioned corectly
    	if(distance<mindistance)
    		distance=mindistance;
    
    	if(distance>maxdistance)
    		distance=maxdistance;
    		
    }


/*function OnCollisionStay(){
	reset=true;
	save=false;
}*/

static function ClampAngle (angle : float, min : float, max : float) {
	if (angle < -360)
		angle += 360;
	if (angle > 360)
		angle -= 360;
	return Mathf.Clamp (angle, min, max);
}