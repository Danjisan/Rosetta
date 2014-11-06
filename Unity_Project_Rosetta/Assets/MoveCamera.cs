using UnityEngine;
using System.Collections;

public class MoveCamera : MonoBehaviour {

	public float Speed = 5;
	private Vector3 position;
	private bool reset = false;
	private bool save = true;
	public bool move = false;

	void functionmove(){
			move = !move;
		}


	void LateUpdate () {
		if (Input.GetKeyDown (KeyCode.LeftShift))
						functionmove ();
				if (save)
						position = transform.position;

				if (move) 
				{	if (reset) {
						transform.position = position;
						for (int i=0; i<2; i++)
							reset = false;
						save = true;
					} 
					else {
						if (Input.GetKey ("w"))
							transform.Translate (Vector3.forward * Time.deltaTime * Speed, Space.Self);
		    
						if (Input.GetKey ("s"))
							transform.Translate (Vector3.back * Time.deltaTime * Speed, Space.Self);

						if (Input.GetKey ("a"))
							transform.Translate (Vector3.left * Time.deltaTime * Speed);
				
						if (Input.GetKey ("d"))
							transform.Translate (Vector3.right * Time.deltaTime * Speed);
						
						/*if (Input.GetKey ("q"))
							transform.Rotate (Vector3.forward * Time.deltaTime * Speed);
				
						if (Input.GetKey ("e"))
							transform.Rotate (Vector3.back * Time.deltaTime * Speed);*/

					}
				}
		}

	void OnCollisionStay(){
		reset = true;
		save=false;
		//Debug.Log("s");
	}
}

