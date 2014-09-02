using UnityEngine;
using System.Collections;

public class PauseMenuObject : MonoBehaviour {

	public bool Resume = false;
	public bool Options = false;
	public bool Desktop = false;
	public bool MainMenu = false;

	
	void OnMouseEnter(){

		guiText.material.color = Color.red;

	}
	
	void OnMouseExit(){

		guiText.material.color = Color.white;
		
	}
	
	void OnMouseDown(){
		
		if(Desktop)
			Application.Quit ();
		
		if(Options)
			Application.LoadLevel ("Options Scene");
		
		if(Resume)
			collider.isTrigger = true;
		
		if(MainMenu)
			Application.LoadLevel ("Main Menu Scene");
		
	}
	
}
