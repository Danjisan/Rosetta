using UnityEngine;
using System.Collections;

public class PauseMenuObject : MonoBehaviour {

	public bool Resume = false;
	public bool Options = false;
	public bool Desktop = false;
	public bool MainMenu = false;
	public bool Back = false;

	
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
			GameObject.Find("Options").collider.isTrigger = true;
		
		if(Resume)
			GameObject.Find("Resume").collider.isTrigger = true;
		
		if(MainMenu)
			Application.LoadLevel ("Main Menu Scene");

		if (Back)
			GameObject.Find("Options").collider.isTrigger = false;
		
	}
	
}
