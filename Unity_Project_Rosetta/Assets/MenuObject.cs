using UnityEngine;
using System.Collections;

public class MenuObject : MonoBehaviour {


	public bool Quit = false;
	public bool Options = false;

	void OnMouseEnter(){

		renderer.material.color = Color.red;
	
	}

	void OnMouseExit(){

		renderer.material.color = Color.white;
	
	}

	void OnMouseDown(){

		if(Quit)
			Application.Quit ();

		else
			if(Options)
				Application.LoadLevel ("Options Scene");
			
			else
				Application.LoadLevel ("Orbit Scene");
	
	}

}
