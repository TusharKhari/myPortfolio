const canvas =
  document.getElementById("bg-canvas");

if (canvas && typeof THREE !== "undefined") {

  const scene = new THREE.Scene();

  const camera =
    new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

  const renderer =
    new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true
    });

  renderer.setSize(
    window.innerWidth,
    window.innerHeight
  );

  renderer.setPixelRatio(
    Math.min(window.devicePixelRatio, 1.5)
  );


  const particleCount =
    window.innerWidth < 768 ? 180 : 300;

  const positions =
    new Float32Array(particleCount * 3);


  for (let i = 0; i < positions.length; i++) {

    positions[i] =
      (Math.random() - 0.5) * 14;

  }


  const geometry =
    new THREE.BufferGeometry();

  geometry.setAttribute(
    "position",
    new THREE.BufferAttribute(
      positions,
      3
    )
  );


  const material =
    new THREE.PointsMaterial({

      size: 0.025,

      color: 0x38bdf8,

      transparent: true,

      opacity: 0.45

    });


  const particles =
    new THREE.Points(
      geometry,
      material
    );

  scene.add(particles);

  camera.position.z = 4;


  let mouseX = 0;
  let mouseY = 0;


  window.addEventListener(
    "mousemove",
    event => {

      mouseX =
        (event.clientX /
          window.innerWidth -
          0.5) * 0.25;

      mouseY =
        (event.clientY /
          window.innerHeight -
          0.5) * 0.25;

    },
    { passive: true }
  );


  const clock =
    new THREE.Clock();


  function animate() {

    const time =
      clock.getElapsedTime();

    particles.rotation.y =
      time * 0.025;

    particles.rotation.x =
      time * 0.012;


    camera.position.x +=
      (mouseX -
        camera.position.x) * 0.025;

    camera.position.y +=
      (-mouseY -
        camera.position.y) * 0.025;


    renderer.render(
      scene,
      camera
    );

    requestAnimationFrame(animate);

  }


  animate();


  window.addEventListener(
    "resize",
    () => {

      camera.aspect =
        window.innerWidth /
        window.innerHeight;

      camera.updateProjectionMatrix();

      renderer.setSize(
        window.innerWidth,
        window.innerHeight
      );

    }
  );

}