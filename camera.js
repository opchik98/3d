var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
controls = new THREE.OrbitControls(camera, renderer.domElement);

controls.enableDamping = true;
controls.dampingFactor = 0.05;

controls.screenSpacePanning = false;

controls.minDistance = 5;
controls.maxDistance = 10;

controls.maxPolarAngle = Math.PI / 2;
camera.position.set( 0, 0, 10);