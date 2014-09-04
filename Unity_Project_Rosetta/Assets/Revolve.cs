using UnityEngine;
using System.Collections;

public class Revolve : MonoBehaviour {


	void Update () {
		transform.Rotate(Vector3.down * Time.deltaTime * 0.0083333f);
	}
}
