#pragma strict


private var pauseGame : boolean = false;
private var showGUI : boolean = false;

gameObject.Find("GAME PAUSED").guiText.enabled = false;
gameObject.Find("Resume").guiText.enabled = false;
gameObject.Find("Options").guiText.enabled = false;
gameObject.Find("Quit to Main Menu").guiText.enabled = false;
gameObject.Find("Quit to Desktop").guiText.enabled = false;

function pause (){
	pauseGame= !pauseGame;
	if(collider.isTrigger)
		collider.isTrigger = false;
}

function Start () {

}

function Update () {
	if (Input.GetKeyDown(KeyCode.Escape) || collider.isTrigger)
		pause();
	
	if(pauseGame)
	{	Time.timeScale = 0;
		showGUI = true;
		GameObject.Find("Main Camera").GetComponent(CameraOrbit1).enabled = false;
		
	}
	
	if(!pauseGame)
	{	Time.timeScale = 1;
		showGUI = false;
		GameObject.Find("Main Camera").GetComponent(CameraOrbit1).enabled = true;
	}
	
	if(showGUI)
	{	gameObject.Find("GAME PAUSED").guiText.enabled = true;
		gameObject.Find("Resume").guiText.enabled = true;
		gameObject.Find("Options").guiText.enabled = true;
		gameObject.Find("Quit to Main Menu").guiText.enabled = true;
		gameObject.Find("Quit to Desktop").guiText.enabled = true;
	}
		
	else
	{	gameObject.Find("GAME PAUSED").guiText.enabled = false;
		gameObject.Find("Resume").guiText.enabled = false;
		gameObject.Find("Options").guiText.enabled = false;
		gameObject.Find("Quit to Main Menu").guiText.enabled = false;
		gameObject.Find("Quit to Desktop").guiText.enabled = false;
	}

}