using UnityEngine;
using System.Collections;

public class MenuObject : MonoBehaviour {


	public bool Quit = false;
	public bool Options = false;
	public bool Start = false;
	public bool Back = false;

	void OnMouseEnter(){

		renderer.material.color = Color.red;
		
	}

	void OnMouseExit(){

		renderer.material.color = Color.white;
	
	}

	void OnMouseDown(){

		if(Quit)
			Application.Quit ();

		if(Options)
			Application.LoadLevel ("Options Scene");
			
		if(Start)
			Application.LoadLevel ("Orbit Scene");

		if(Back)
			Application.LoadLevel ("Main Menu Scene");
	
	}

}
