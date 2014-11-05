using UnityEngine;
using System.Collections;

public class PauseMenuObject : MonoBehaviour {

	public bool Resume = false;
	public bool Options = false;
	public bool Desktop = false;
	public bool MainMenu = false;
	public bool Back = false;
	public bool YesD = false;
	public bool NoD = false;
	public bool NoM = false;
	public bool YesM = false;


	void Start(){
		guiText.material.color = Color.blue;
	}
	void OnMouseEnter(){

		guiText.material.color = Color.red;

	}
	
	void OnMouseExit(){

		guiText.material.color = Color.blue;
		
	}
	
	void OnMouseDown(){
		
		if(Desktop)
			GameObject.Find("Quit to Desktop").collider.isTrigger = true;

		if(Options)
			GameObject.Find("Options").collider.isTrigger = true;
		
		if(Resume)
			GameObject.Find("Resume").collider.isTrigger = true;

		
		if(MainMenu)
			GameObject.Find("Quit to Main Menu").collider.isTrigger = true;

		if (Back)
			GameObject.Find("Options").collider.isTrigger = false;

		if(YesD)
			Application.Quit ();

		if (NoD)
			GameObject.Find("Quit to Desktop").collider.isTrigger = false;

		if(NoM)
			GameObject.Find("Quit to Main Menu").collider.isTrigger = false;

		if(YesM)
			Application.LoadLevel ("Main Menu Scene");
	}
	
}
