using UnityEngine;
using System.Collections;

public class MenuObject : MonoBehaviour {

	public bool Quit = false;
	public bool Options = false;
	public bool Start = false;
	public bool Back = false;
	public bool Yes = false;
	bool c = true;


	void Update(){
		//if(GameObject.Find ("Nothing Here").collider.isTrigger && Input.GetKeyDown(KeyCode.Escape))
		//	Application.LoadLevel ("Main Menu Scene");
		//if(GameObject.Find ("Yes").collider.isTrigger && Input.GetKeyDown(KeyCode.Escape))
		//	Application.LoadLevel ("Main Menu Scene");
		if(c)
		{	renderer.material.color = Color.blue;
		}
		c=false;
	}	

	void OnMouseEnter(){

		renderer.material.color = Color.red;
	}

	void OnMouseExit(){

		renderer.material.color = Color.blue;
	
	}

	void OnMouseDown(){

		if(Quit)
			Application.LoadLevel ("Confirmation Scene");

		if(Start)
			Application.LoadLevel ("Orbit Scene");

		if(Back)
			Application.LoadLevel ("Main Menu Scene");

		if (Yes)
			Application.Quit ();
	
	}

}
