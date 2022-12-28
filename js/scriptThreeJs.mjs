window.onload = function() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const canvas = document.getElementById('canvas');

  canvas.setAttribute('width', width);
  canvas.setAttribute('height', height);

  const renderer = new THREE.WebGLRenderer({canvas: canvas});
  renderer.setClearColor(0x000012);

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(15, width/height, 0.7, 7000);
  camera.position.set(0, 0, 1700);

  const light = new THREE.AmbientLight(0x6c76a0);
  scene.add(light);

  const geometry = new THREE.SphereGeometry(200, 36, 24);

  const material = new THREE.MeshBasicMaterial({color: 0x027bce, wireframe: true});

  const mesh = new THREE.Mesh(geometry, material);

  scene.add(mesh)

  let sphereMovingParams = {
    positionX: 0,
    positionY: 0,
    positionZ: 0,
    rotationX: Math.PI / -888,
    rotationY: 0.01,
    rotationZ: Math.PI / 990
  }

  let gui = new dat.gui.GUI();
  gui.add(sphereMovingParams, 'positionX').min(-9).max(9).step(0.1);
  gui.add(sphereMovingParams, 'positionY').min(-9).max(9).step(0.1);
  gui.add(sphereMovingParams, 'positionZ').min(-9).max(9).step(0.1);
  gui.add(sphereMovingParams, 'rotationX').min(-0.05).max(0.05).step(0.001);
  gui.add(sphereMovingParams, 'rotationY').min(-0.05).max(0.05).step(0.001);
  gui.add(sphereMovingParams, 'rotationZ').min(-0.05).max(0.05).step(0.001);

  function loop() {
    mesh.position.x += sphereMovingParams.positionX;
    mesh.position.y += sphereMovingParams.positionY;
    mesh.position.z += sphereMovingParams.positionZ;
    mesh.rotation.x += sphereMovingParams.rotationX;
    mesh.rotation.y += sphereMovingParams.rotationY;
    mesh.rotation.z += sphereMovingParams.rotationZ;
    renderer.render(scene, camera);
    requestAnimationFrame(function() {loop();});
  }
  loop();
}
