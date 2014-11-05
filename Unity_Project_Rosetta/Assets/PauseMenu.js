#pragma strict


private var pauseGame : boolean = false;
private var showGUI1 : boolean = false;
private var showGUI2 : boolean = false;
private var showGUI3 : boolean = false;
private var showGUI4 : boolean = false;
private var showOptions : boolean = false;
private var stillpause1 : boolean = false;
private var stillpause2 : boolean = false;
private var stillpause3 : boolean = false;
private var showDesktopGUI : boolean = false;
private var showMainGUI : boolean = false;

guiText.enabled = false;

function pause (){
	pauseGame= !pauseGame;
	if(GameObject.Find("Resume").collider.isTrigger)
		collider.isTrigger = false;
}


function Update () {
	if (Input.GetKeyDown(KeyCode.Escape) && !stillpause1 && !stillpause2 && !stillpause3)
		pause();
	if(GameObject.Find("Resume").guiText.material.color == Color.red && Input.GetMouseButtonDown(0))
		pause();
		
	if(GameObject.Find("Resume").collider.isTrigger)// && !stillpause1 && !stillpause2 && !stillpause3)
		pause();
		
	if(GameObject.Find("Options").collider.isTrigger && Input.GetKeyDown(KeyCode.Escape))
		GameObject.Find("Options").collider.isTrigger = false;
		
	if(GameObject.Find("Quit to Desktop").collider.isTrigger && Input.GetKeyDown(KeyCode.Escape))
		GameObject.Find("Quit to Desktop").collider.isTrigger = false;
	
	if(GameObject.Find("Quit to Main Menu").collider.isTrigger && Input.GetKeyDown(KeyCode.Escape))
		GameObject.Find("Quit to Main Menu").collider.isTrigger = false;
	
	if(pauseGame)
	{	Time.timeScale = 0;
		showGUI1 = true;
		GameObject.Find("Main Camera").GetComponent(CameraOrbit2).enabled = false;
		
	}
	
	if(!pauseGame)
	{	Time.timeScale = 1;
		showGUI1 = false;
		GameObject.Find("Main Camera").GetComponent(CameraOrbit2).enabled = true;
	}
	
	if(showGUI1 && showGUI2 && showGUI3 && showGUI4)
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
	
	if (showDesktopGUI)
	{	GameObject.Find("Quit To Desktop?").guiText.enabled = true;
		GameObject.Find("Yes Desktop").guiText.enabled = true;
		GameObject.Find("No Desktop").guiText.enabled = true;
	}
	
	else 
	{	GameObject.Find("Quit To Desktop?").guiText.enabled = false;
		GameObject.Find("Yes Desktop").guiText.enabled = false;
		GameObject.Find("No Desktop").guiText.enabled = false;
	}
	
	if (showMainGUI)
	{	GameObject.Find("Quit to Main Menu?").guiText.enabled = true;
		GameObject.Find("Yes Main Menu").guiText.enabled = true;
		GameObject.Find("No Main Menu").guiText.enabled = true;
	}
	
	else
	{	GameObject.Find("Quit to Main Menu?").guiText.enabled = false;
		GameObject.Find("Yes Main Menu").guiText.enabled = false;
		GameObject.Find("No Main Menu").guiText.enabled = false;
	}
	
	if(GameObject.Find("Options").collider.isTrigger)
	{	showGUI2 = false;
		showOptions = true;
		stillpause1 = true;
	}
	else
	{	showGUI2 = true;
		showOptions = false;
		stillpause1 = false;
	}
	
	if(GameObject.Find("Quit to Desktop").collider.isTrigger)
	{	showDesktopGUI = true;
		showGUI3 = false;
		stillpause2 = true;
	}
	else
	{	showDesktopGUI = false;
		showGUI3 = true;
		stillpause2 = false;
	}
	
	if(GameObject.Find("Quit to Main Menu").collider.isTrigger)
	{	showMainGUI = true;
		showGUI4 = false;
		stillpause3 = true;
	}
	
	else
	{	showMainGUI = false;
		showGUI4 = true;
		stillpause3 = false;
	}

}