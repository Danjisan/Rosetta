using UnityEngine;
using System.Collections;

public class MoveCamera : MonoBehaviour {

	public float Speed = 5;
	private Vector3 position;
	private bool reset = false;
	private bool save = true;


	void LateUpdate () {
		if(save)
			position = transform.position;

		if (reset){
			transform.position = position;
			for(int i=0; i<3 ;i++)
				reset = false;
			save = true;
		}

		else{
			if (Input.GetKey("w"))
		   	 transform.Translate(Vector3.forward * Time.deltaTime * Speed, Space.Self);
		    
			if(Input.GetKey("s"))
				transform.Translate(Vector3.back * Time.deltaTime * Speed, Space.Self);
		}
	}

	void OnCollisionStay(){
		reset = true;
		save=false;
	}
}

