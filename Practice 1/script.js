const width = window.innerWidth, height = window.innerHeight;

// init

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 70, width / height);
camera.position.z = 3;

const geometry = new THREE.SphereGeometry( 1, 30, 30 );
const material = new THREE.MeshNormalMaterial(
	// transparent: 10,
	// {color: }
);

const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

const renderer = new THREE.WebGLRenderer( { 
	antialias: true,
} );
renderer.setSize( width, height );
renderer.setAnimationLoop( animation );
document.body.appendChild( renderer.domElement );

// animation
function animation( time ) {
	mesh.rotation.x = time / 5000;
	mesh.rotation.y = time / 6000;
	renderer.render( scene, camera );
}