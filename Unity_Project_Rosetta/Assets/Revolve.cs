using UnityEngine;
using System.Collections;

public class Revolve : MonoBehaviour {

	void Start() {
		//Time.timeScale = 40;??
	}

	void Update () {
		transform.Rotate(Vector3.down * Time.deltaTime * 0.0083333f);
	}
}
