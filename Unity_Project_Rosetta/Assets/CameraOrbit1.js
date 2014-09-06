var target : Transform;
var distance = 10.0;
var sensitivitydistance = 50;
var maxdistance=1000;
var mindistance=15;

var xSpeed = 250.0;
var ySpeed = 120.0;

var yMinLimit = -20;
var yMaxLimit = 80;

private var x = 0.0;
private var y = 0.0;
private var RotateorMove : boolean = false;

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
    if(Input.GetKeyDown (KeyCode.LeftShift))
    	RotateorMove=!RotateorMove;
    	
    if (RotateorMove){
    	if (Input.GetMouseButton (0)){
    	
        	x += Input.GetAxis("Mouse X") * xSpeed * 0.02;
       		y -= Input.GetAxis("Mouse Y") * ySpeed * 0.02; 		
 		}
       
     	  var rotation = Quaternion.Euler(y, x, 0);
     	  
     	  transform.rotation = rotation;
     	     	  
     }
    
    else{
    
    	if (target) {
    		if (Input.GetMouseButton (0)){
    	
        		x += Input.GetAxis("Mouse X") * xSpeed * 0.02;
       			y -= Input.GetAxis("Mouse Y") * ySpeed * 0.02; 			
 			}
 			
 			y = ClampAngle(y, yMinLimit, yMaxLimit);
       
     	  	rotation = Quaternion.Euler(y, x, 0);
     	  	var position = rotation * Vector3(0.0, 0.0, -distance) + target.position;
        
      	 	transform.rotation = rotation;
      	  	transform.position = position;
    
   		 }
  
    	//set distance value according to the scroll wheel input
   		 distance -=Input.GetAxis("Mouse ScrollWheel") * sensitivitydistance;
    
    	//reset camera to max,min distances in order to remain postitioned corectly
    	if(distance<mindistance)
    		distance=mindistance;
    
    	if(distance>maxdistance)
    		distance=maxdistance;
    }
}

static function ClampAngle (angle : float, min : float, max : float) {
	if (angle < -360)
		angle += 360;
	if (angle > 360)
		angle -= 360;
	return Mathf.Clamp (angle, min, max);
}