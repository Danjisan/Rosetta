#pragma strict


private var pauseGame : boolean = false;
private var showGUI1 : boolean = false;
private var showGUI2 : boolean = false;
private var showOptions : boolean = false;

/*GameObject.Find("GAME PAUSED").guiText.enabled = false;
GameObject.Find("Resume").guiText.enabled = false;
GameObject.Find("Options").guiText.enabled = false;
GameObject.Find("Quit to Main Menu").guiText.enabled = false;
GameObject.Find("Quit to Desktop").guiText.enabled = false;*/
guiText.enabled = false;
/*GameObject.Find("Back").guiText.enabled = false;
GameObject.Find("NothingHere").guiText.enabled = false;*/



function pause (){
	pauseGame= !pauseGame;
	if(GameObject.Find("Resume").collider.isTrigger)
		collider.isTrigger = false;
}

function Start () {

}

function Update () {
	if (Input.GetKeyDown(KeyCode.Escape) || GameObject.Find("Resume").collider.isTrigger)
		pause();
	
	if(pauseGame)
	{	Time.timeScale = 0;
		showGUI1 = true;
		GameObject.Find("Main Camera").GetComponent(CameraOrbit1).enabled = false;
		
	}
	
	if(!pauseGame)
	{	Time.timeScale = 1;
		showGUI1 = false;
		GameObject.Find("Main Camera").GetComponent(CameraOrbit1).enabled = true;
	}
	
	if(showGUI1 && showGUI2)
	{	GameObject.Find("GAME PAUSED").guiText.enabled = true;
		GameObject.Find("Resume").guiText.enabled = true;
		GameObject.Find("Options").guiText.enabled = true;
		GameObject.Find("Quit to Main Menu").guiText.enabled = true;
		GameObject.Find("Quit to Desktop").guiText.enabled = true;
	}
		
	else
	{	GameObject.Find("GAME PAUSED").guiText.enabled = false;
		GameObject.Find("Resume").guiText.enabled = false;
		GameObject.Find("Options").guiText.enabled = false;
		GameObject.Find("Quit to Main Menu").guiText.enabled = false;
		GameObject.Find("Quit to Desktop").guiText.enabled = false;
	}
	
	if(showOptions)
	{	GameObject.Find("Options Menu").guiText.enabled = true;
		GameObject.Find("Back").guiText.enabled = true;
		GameObject.Find("Nothing Here").guiText.enabled = true;
	}
	else
	{	GameObject.Find("Options Menu").guiText.enabled = false;
		GameObject.Find("Back").guiText.enabled = false;
		GameObject.Find("Nothing Here").guiText.enabled = false;
	}
	
	if(GameObject.Find("Options").collider.isTrigger)
	{	showGUI2 = false;
		showOptions = true;
	}
	else
	{	showGUI2 = true;
		showOptions = false;
	}

}