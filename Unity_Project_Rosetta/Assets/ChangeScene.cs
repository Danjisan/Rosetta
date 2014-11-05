using UnityEngine;
using System.Collections;

public class ChangeScene : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		if(Input.GetKeyDown("l") && GameObject.Find ("Nothing Here"))
		   Application.LoadLevel("LandingSiteScene");
		if(Input.GetKeyDown("o") && GameObject.Find ("Dummy?"))
		   Application.LoadLevel("Orbit Scene");
	}
}
