#pragma strict
var jugador : Transform;

function Start () {
	jugador = GameObject.FindGameObjectWithTag("Player").transform;
}

function Update () {
	transform.position.x = jugador.position.x;
	transform.position.y = jugador.position.y + 2;
	
}