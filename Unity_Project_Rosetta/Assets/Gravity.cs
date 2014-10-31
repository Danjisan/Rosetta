using UnityEngine;
using System.Collections;

public class Gravity : MonoBehaviour {

	//public float pullRadius = 2;
	public float pullForce = 1;
	public GameObject character;
	
	public void FixedUpdate() {
		// calculate direction from target to me
		Vector3 direction = transform.position - character.transform.position;
			
		// apply force on target towards me
		character.rigidbody.AddForce(direction.normalized * pullForce * Time.fixedDeltaTime);
	}

//	void OnCollisionEnter(){
	//	Debug.Log ("1");}
}

