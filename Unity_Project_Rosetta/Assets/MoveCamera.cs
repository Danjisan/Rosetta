using UnityEngine;
using System.Collections;

public class MoveCamera : MonoBehaviour {

	public float Speed = 5;
	public GameObject otherObject;

	Vector3 closestSurfacePoint1;
	Vector3 closestSurfacePoint2;

	void OnCollisionEnter(){

		Debug.Log ("1");
	}

	void Start () {
		// the surface point of this collider that is closer to the position of the other collider
		closestSurfacePoint1 = collider.ClosestPointOnBounds(otherObject.transform.position);
		
		// the surface point of the other collider that is closer to the position of this collider
		closestSurfacePoint2 = otherObject.collider.ClosestPointOnBounds(transform.position);
		
		// the distance between the surfaces of the 2 colliders
		float surfaceDistance = Vector3.Distance(closestSurfacePoint1, closestSurfacePoint2);
		Debug.Log(surfaceDistance);
	}


	void Update () {

		if (Input.GetKey("w"))
		    transform.Translate(Vector3.forward * Time.deltaTime * Speed, Space.Self);
		    
		if(Input.GetKey("s"))
			transform.Translate(Vector3.back * Time.deltaTime * Speed, Space.Self);




	}

}

