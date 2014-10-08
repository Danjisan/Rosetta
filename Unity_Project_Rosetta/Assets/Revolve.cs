using UnityEngine;
using System.Collections;

public class Revolve : MonoBehaviour {


	void Update () {
		transform.Rotate(Vector3.back * Time.deltaTime * 0.0083333f);
	}
}
//0.0083333f