using UnityEngine;
using System.Collections;

public class MenuObject : MonoBehaviour {

	public bool Quit = false;
	public bool Options = false;
	public bool Start = false;
	public bool Back = false;
	public bool Yes = false;


	void Update(){
		if(GameObject.Find ("Nothing Here").collider.isTrigger && Input.GetKeyDown(KeyCode.Escape))
			Application.LoadLevel ("Main Menu Scene");
		if(GameObject.Find ("Yes").collider.isTrigger && Input.GetKeyDown(KeyCode.Escape))
			Application.LoadLevel ("Main Menu Scene");
	}	

	void OnMouseEnter(){

		renderer.material.color = Color.red;
		
	}

	void OnMouseExit(){

		renderer.material.color = Color.white;
	
	}

	void OnMouseDown(){

		if(Quit)
			Application.LoadLevel ("Confirmation Scene");

		if(Options)
			Application.LoadLevel ("Options Scene");

		if(Start)
			Application.LoadLevel ("Orbit Scene");

		if(Back)
			Application.LoadLevel ("Main Menu Scene");

		if (Yes)
			Application.Quit ();
	
	}

}
