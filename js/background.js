/**
 * Interactive 3D Artificial Neural Network & Dynamic Chromatic Engine
 * Features:
 * - 3D Neural topology with organic drift and clustered synaptic hubs
 * - Dynamic synaptic line connections with distance-attenuated radiance
 * - Traveling action-potential impulses (neural signals firing along synapses)
 * - Interactive mouse stimulus: neurons attract, synapses brighten, and mouse generates neural impulses
 * - Non-vague, high-chroma dynamic color engine synchronizing 3D background with CSS tokens
 */

(function () {
  const canvas = document.getElementById("bg-canvas");
  if (!canvas || typeof THREE === "undefined") return;

  // ==========================================
  // 1. SETUP THREE.JS SCENE, CAMERA, RENDERER
  // ==========================================
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.set(0, 0, 18);

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    powerPreference: "high-performance"
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

  // ==========================================
  // 2. TEXTURE GENERATORS (LUMINOUS GLOWS)
  // ==========================================
  function createNeuronGlowTexture() {
    const size = 128;
    const texCanvas = document.createElement("canvas");
    texCanvas.width = size;
    texCanvas.height = size;
    const ctx = texCanvas.getContext("2d");

    const center = size / 2;
    const grad = ctx.createRadialGradient(center, center, 0, center, center, center);
    grad.addColorStop(0, "rgba(255, 255, 255, 1)");
    grad.addColorStop(0.18, "rgba(255, 255, 255, 0.9)");
    grad.addColorStop(0.38, "rgba(180, 230, 255, 0.65)");
    grad.addColorStop(0.65, "rgba(100, 180, 255, 0.2)");
    grad.addColorStop(1, "rgba(0, 50, 150, 0)");

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, size, size);

    const texture = new THREE.CanvasTexture(texCanvas);
    texture.needsUpdate = true;
    return texture;
  }

  function createSignalPulseTexture() {
    const size = 64;
    const texCanvas = document.createElement("canvas");
    texCanvas.width = size;
    texCanvas.height = size;
    const ctx = texCanvas.getContext("2d");

    const center = size / 2;
    const grad = ctx.createRadialGradient(center, center, 0, center, center, center);
    grad.addColorStop(0, "rgba(255, 255, 255, 1)");
    grad.addColorStop(0.25, "rgba(255, 255, 255, 0.95)");
    grad.addColorStop(0.55, "rgba(255, 235, 180, 0.5)");
    grad.addColorStop(1, "rgba(255, 200, 100, 0)");

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, size, size);

    const texture = new THREE.CanvasTexture(texCanvas);
    texture.needsUpdate = true;
    return texture;
  }

  const neuronTexture = createNeuronGlowTexture();
  const signalTexture = createSignalPulseTexture();

  // ==========================================
  // 3. NEURAL NETWORK TOPOLOGY & NODES
  // ==========================================
  const isMobile = window.innerWidth < 768;
  const nodeCount = isMobile ? 65 : 125;
  const maxSynapseDist = isMobile ? 4.4 : 5.0;
  const boundX = isMobile ? 12 : 22;
  const boundY = isMobile ? 18 : 14;
  const boundZ = 7;

  const nodes = [];
  const nodePositions = new Float32Array(nodeCount * 3);
  const nodeColors = new Float32Array(nodeCount * 3);

  // Clustered neural layout: Hubs with interconnected satellites
  const hubCount = 4;
  const hubs = [];
  for (let h = 0; h < hubCount; h++) {
    hubs.push({
      x: (Math.random() - 0.5) * boundX * 0.7,
      y: (Math.random() - 0.5) * boundY * 0.7,
      z: (Math.random() - 0.5) * boundZ * 0.7
    });
  }

  for (let i = 0; i < nodeCount; i++) {
    const hub = hubs[i % hubCount];
    const spread = 4.2;
    const x = Math.max(-boundX, Math.min(boundX, hub.x + (Math.random() - 0.5) * spread * 2));
    const y = Math.max(-boundY, Math.min(boundY, hub.y + (Math.random() - 0.5) * spread * 2));
    const z = Math.max(-boundZ, Math.min(boundZ, hub.z + (Math.random() - 0.5) * spread * 1.5));

    nodes.push({
      x, y, z,
      baseX: x,
      baseY: y,
      baseZ: z,
      vx: (Math.random() - 0.5) * 0.008,
      vy: (Math.random() - 0.5) * 0.008,
      vz: (Math.random() - 0.5) * 0.006,
      phase: Math.random() * Math.PI * 2,
      activity: Math.random() * 0.4, // Neural firing activation
      neighbors: []
    });

    nodePositions[i * 3] = x;
    nodePositions[i * 3 + 1] = y;
    nodePositions[i * 3 + 2] = z;

    nodeColors[i * 3] = 0.3;
    nodeColors[i * 3 + 1] = 0.8;
    nodeColors[i * 3 + 2] = 1.0;
  }

  // Neurons Points Object
  const neuronGeometry = new THREE.BufferGeometry();
  neuronGeometry.setAttribute("position", new THREE.BufferAttribute(nodePositions, 3));
  neuronGeometry.setAttribute("color", new THREE.BufferAttribute(nodeColors, 3));

  const neuronMaterial = new THREE.PointsMaterial({
    size: isMobile ? 0.75 : 0.9,
    map: neuronTexture,
    vertexColors: true,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  const neuronPoints = new THREE.Points(neuronGeometry, neuronMaterial);
  scene.add(neuronPoints);

  // ==========================================
  // 4. SYNAPSE CONNECTIONS (LINE SEGMENTS)
  // ==========================================
  const maxLines = nodeCount * 8;
  const linePositions = new Float32Array(maxLines * 2 * 3);
  const lineColors = new Float32Array(maxLines * 2 * 3);

  const lineGeometry = new THREE.BufferGeometry();
  lineGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
  lineGeometry.setAttribute("color", new THREE.BufferAttribute(lineColors, 3));

  const lineMaterial = new THREE.LineBasicMaterial({
    vertexColors: true,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    opacity: 0.85
  });

  const synapseLines = new THREE.LineSegments(lineGeometry, lineMaterial);
  scene.add(synapseLines);

  // ==========================================
  // 5. ACTION POTENTIALS (NEURAL IMPULSES)
  // ==========================================
  const maxSignals = isMobile ? 22 : 45;
  const signalPositions = new Float32Array(maxSignals * 3);
  const signalColors = new Float32Array(maxSignals * 3);
  const signals = [];

  for (let s = 0; s < maxSignals; s++) {
    signals.push({
      active: false,
      fromIdx: -1,
      toIdx: -1,
      progress: 0,
      speed: 0.02 + Math.random() * 0.025
    });
    // Start offscreen
    signalPositions[s * 3] = 9999;
    signalPositions[s * 3 + 1] = 9999;
    signalPositions[s * 3 + 2] = 9999;
  }

  const signalGeometry = new THREE.BufferGeometry();
  signalGeometry.setAttribute("position", new THREE.BufferAttribute(signalPositions, 3));
  signalGeometry.setAttribute("color", new THREE.BufferAttribute(signalColors, 3));

  const signalMaterial = new THREE.PointsMaterial({
    size: isMobile ? 0.65 : 0.85,
    map: signalTexture,
    vertexColors: true,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  const signalPoints = new THREE.Points(signalGeometry, signalMaterial);
  scene.add(signalPoints);

  function spawnSignal(fromIndex, toIndex = -1) {
    const node = nodes[fromIndex];
    if (!node || node.neighbors.length === 0) return;

    if (toIndex === -1) {
      toIndex = node.neighbors[Math.floor(Math.random() * node.neighbors.length)];
    }

    // Find free signal slot
    for (let s = 0; s < maxSignals; s++) {
      if (!signals[s].active) {
        signals[s].active = true;
        signals[s].fromIdx = fromIndex;
        signals[s].toIdx = toIndex;
        signals[s].progress = 0;
        signals[s].speed = 0.022 + Math.random() * 0.028;
        node.activity = 1.0; // Flash origin node
        break;
      }
    }
  }

  // ==========================================
  // 6. DYNAMIC CHROMATIC ENGINE
  // ==========================================
  // To ensure colors NEVER look vague:
  // - Saturation locked at 92-96%
  // - Lightness balanced strictly between 60% and 66% (punchy neon contrast)
  // - Continuous smooth progression through cyber/AI spectrum
  let baseHue = 195; // Starting at Electric Cyan
  const colorPrimary = new THREE.Color();
  const colorSecondary = new THREE.Color();
  const colorAccent = new THREE.Color();
  const colorWhite = new THREE.Color(1, 1, 1);

  let lastCssUpdateTime = 0;

  function updateChromaticPalette(timestamp) {
    // Smooth continuous progression (full cycle in ~50 seconds)
    baseHue = (195 + timestamp * 0.007) % 360;

    const hPrimary = baseHue;
    const hSecondary = (baseHue + 45) % 360;
    const hAccent = (baseHue + 95) % 360;

    // Three.js HSL colors (normalized 0.0 - 1.0)
    colorPrimary.setHSL(hPrimary / 360, 0.95, 0.62);
    colorSecondary.setHSL(hSecondary / 360, 0.92, 0.66);
    colorAccent.setHSL(hAccent / 360, 0.90, 0.68);

    // Synchronize CSS custom properties on documentElement (throttled to ~30fps for peak performance)
    if (timestamp - lastCssUpdateTime > 32) {
      lastCssUpdateTime = timestamp;
      const rootStyle = document.documentElement.style;

      rootStyle.setProperty("--hue-primary", hPrimary.toFixed(1));
      rootStyle.setProperty("--hue-secondary", hSecondary.toFixed(1));
      rootStyle.setProperty("--hue-accent", hAccent.toFixed(1));

      rootStyle.setProperty("--primary-dynamic", `hsl(${hPrimary.toFixed(1)}, 95%, 62%)`);
      rootStyle.setProperty("--primary-dynamic-bright", `hsl(${hPrimary.toFixed(1)}, 100%, 76%)`);
      rootStyle.setProperty("--secondary-dynamic", `hsl(${hSecondary.toFixed(1)}, 92%, 66%)`);
      rootStyle.setProperty("--accent-dynamic", `hsl(${hAccent.toFixed(1)}, 90%, 68%)`);

      rootStyle.setProperty("--glow-dynamic", `hsla(${hPrimary.toFixed(1)}, 95%, 60%, 0.32)`);
      rootStyle.setProperty("--glow-dynamic-subtle", `hsla(${hPrimary.toFixed(1)}, 95%, 60%, 0.14)`);
      rootStyle.setProperty("--border-dynamic", `hsla(${hPrimary.toFixed(1)}, 90%, 65%, 0.28)`);
      rootStyle.setProperty("--border-dynamic-hover", `hsla(${hPrimary.toFixed(1)}, 95%, 72%, 0.58)`);
      rootStyle.setProperty("--badge-bg-dynamic", `hsla(${hPrimary.toFixed(1)}, 90%, 35%, 0.16)`);
    }
  }

  // ==========================================
  // 7. MOUSE & SCROLL INTERACTION
  // ==========================================
  let mouseScreenX = 0;
  let mouseScreenY = 0;
  let mouseWorldX = 0;
  let mouseWorldY = 0;
  let mousePrevWorldX = 0;
  let mousePrevWorldY = 0;
  let scrollY = 0;
  let targetCamX = 0;
  let targetCamY = 0;

  window.addEventListener(
    "mousemove",
    (e) => {
      mouseScreenX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseScreenY = -(e.clientY / window.innerHeight) * 2 + 1;

      // Project into 3D world space at Z=0
      mouseWorldX = mouseScreenX * (boundX * 0.7);
      mouseWorldY = mouseScreenY * (boundY * 0.7);

      targetCamX = mouseScreenX * 1.8;
      targetCamY = mouseScreenY * 1.4;

      // Detect fast mouse movement & spark nearby synapses
      const mouseSpeed = Math.hypot(mouseWorldX - mousePrevWorldX, mouseWorldY - mousePrevWorldY);
      if (mouseSpeed > 0.4) {
        // Trigger impulses from nodes closest to mouse
        for (let i = 0; i < nodes.length; i++) {
          const n = nodes[i];
          const dist = Math.hypot(n.x - mouseWorldX, n.y - mouseWorldY);
          if (dist < 5.5) {
            n.activity = Math.min(1.0, n.activity + 0.6);
            if (Math.random() < 0.35) {
              spawnSignal(i);
            }
          }
        }
      }
      mousePrevWorldX = mouseWorldX;
      mousePrevWorldY = mouseWorldY;
    },
    { passive: true }
  );

  window.addEventListener(
    "scroll",
    () => {
      scrollY = window.scrollY;
    },
    { passive: true }
  );

  // Touch stimulus for mobile
  window.addEventListener(
    "touchmove",
    (e) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        mouseScreenX = (touch.clientX / window.innerWidth) * 2 - 1;
        mouseScreenY = -(touch.clientY / window.innerHeight) * 2 + 1;
        mouseWorldX = mouseScreenX * (boundX * 0.7);
        mouseWorldY = mouseScreenY * (boundY * 0.7);

        for (let i = 0; i < 4; i++) {
          const randIdx = Math.floor(Math.random() * nodes.length);
          spawnSignal(randIdx);
        }
      }
    },
    { passive: true }
  );

  // ==========================================
  // 8. ANIMATION & NEURAL FIRING LOOP
  // ==========================================
  const clock = new THREE.Clock();
  let spontaneousTimer = 0;

  function animate() {
    requestAnimationFrame(animate);

    const delta = clock.getDelta();
    const elapsedTime = clock.getElapsedTime() * 1000;

    // 1. Update Chromatic System
    updateChromaticPalette(elapsedTime);

    // 2. Camera smooth interpolation with parallax
    const targetScrollY = -(scrollY * 0.005);
    camera.position.x += (targetCamX - camera.position.x) * 0.035;
    camera.position.y += (targetCamY + targetScrollY - camera.position.y) * 0.035;
    camera.lookAt(0, targetScrollY * 0.5, 0);

    // 3. Update Neurons (Gentle organic drift & mouse stimulus)
    for (let i = 0; i < nodeCount; i++) {
      const n = nodes[i];

      // Subtle harmonic oscillation
      n.phase += 0.015;
      n.x += n.vx + Math.sin(n.phase) * 0.005;
      n.y += n.vy + Math.cos(n.phase * 0.9) * 0.005;
      n.z += n.vz;

      // Soft boundary bounce
      if (Math.abs(n.x) > boundX) n.vx *= -1;
      if (Math.abs(n.y) > boundY) n.vy *= -1;
      if (Math.abs(n.z) > boundZ) n.vz *= -1;

      // Mouse stimulus attraction & activation
      const dx = mouseWorldX - n.x;
      const dy = mouseWorldY - n.y;
      const distToMouse = Math.hypot(dx, dy);
      if (distToMouse < 6.0) {
        const factor = (1 - distToMouse / 6.0) * 0.02;
        n.x += dx * factor;
        n.y += dy * factor;
        n.activity = Math.min(1.0, n.activity + factor * 0.6);
      }

      // Decay neural activity smoothly
      n.activity = Math.max(0, n.activity - 0.015);

      // Write position
      nodePositions[i * 3] = n.x;
      nodePositions[i * 3 + 1] = n.y;
      nodePositions[i * 3 + 2] = n.z;

      // Node vertex color: blend between primary hue and white-hot flash on firing
      const act = n.activity;
      nodeColors[i * 3] = THREE.MathUtils.lerp(colorPrimary.r * 0.7, 1.0, act);
      nodeColors[i * 3 + 1] = THREE.MathUtils.lerp(colorPrimary.g * 0.8, 1.0, act);
      nodeColors[i * 3 + 2] = THREE.MathUtils.lerp(colorPrimary.b * 1.0, 1.0, act);

      n.neighbors = [];
    }

    neuronGeometry.attributes.position.needsUpdate = true;
    neuronGeometry.attributes.color.needsUpdate = true;

    // 4. Update Synapses (Connections between proximate neurons)
    let lineIdx = 0;
    const maxLineVerts = maxLines * 2;

    for (let i = 0; i < nodeCount; i++) {
      const na = nodes[i];
      for (let j = i + 1; j < nodeCount; j++) {
        const nb = nodes[j];
        const dist = Math.hypot(na.x - nb.x, na.y - nb.y, na.z - nb.z);

        if (dist < maxSynapseDist && lineIdx < maxLineVerts) {
          na.neighbors.push(j);
          nb.neighbors.push(i);

          const alpha = 1.0 - dist / maxSynapseDist;
          const synapseActivity = Math.max(na.activity, nb.activity);

          // Point A
          linePositions[lineIdx * 3] = na.x;
          linePositions[lineIdx * 3 + 1] = na.y;
          linePositions[lineIdx * 3 + 2] = na.z;

          // Point B
          linePositions[(lineIdx + 1) * 3] = nb.x;
          linePositions[(lineIdx + 1) * 3 + 1] = nb.y;
          linePositions[(lineIdx + 1) * 3 + 2] = nb.z;

          // Dynamic line color (intense when synapse fires)
          const rA = THREE.MathUtils.lerp(colorPrimary.r * alpha * 0.45, 1.0, na.activity * 0.8);
          const gA = THREE.MathUtils.lerp(colorPrimary.g * alpha * 0.65, 1.0, na.activity * 0.8);
          const bA = THREE.MathUtils.lerp(colorPrimary.b * alpha * 0.9, 1.0, na.activity * 0.8);

          const rB = THREE.MathUtils.lerp(colorSecondary.r * alpha * 0.45, 1.0, nb.activity * 0.8);
          const gB = THREE.MathUtils.lerp(colorSecondary.g * alpha * 0.65, 1.0, nb.activity * 0.8);
          const bB = THREE.MathUtils.lerp(colorSecondary.b * alpha * 0.9, 1.0, nb.activity * 0.8);

          lineColors[lineIdx * 3] = rA;
          lineColors[lineIdx * 3 + 1] = gA;
          lineColors[lineIdx * 3 + 2] = bA;

          lineColors[(lineIdx + 1) * 3] = rB;
          lineColors[(lineIdx + 1) * 3 + 1] = gB;
          lineColors[(lineIdx + 1) * 3 + 2] = bB;

          lineIdx += 2;
        }
      }
    }

    lineGeometry.setDrawRange(0, lineIdx);
    lineGeometry.attributes.position.needsUpdate = true;
    lineGeometry.attributes.color.needsUpdate = true;

    // 5. Spontaneous Neural Firing (Background Brain Activity)
    spontaneousTimer += delta;
    if (spontaneousTimer > 0.4) {
      spontaneousTimer = 0;
      const randNodeIdx = Math.floor(Math.random() * nodeCount);
      spawnSignal(randNodeIdx);
    }

    // 6. Update Action Potential Pulses
    for (let s = 0; s < maxSignals; s++) {
      const sig = signals[s];
      if (!sig.active) continue;

      sig.progress += sig.speed;

      if (sig.progress >= 1.0) {
        // Signal arrived at target node!
        const targetNode = nodes[sig.toIdx];
        if (targetNode) {
          targetNode.activity = 1.0;

          // Cascade forward propagation (simulate neural network activation pass)
          if (Math.random() < 0.65 && targetNode.neighbors.length > 0) {
            const nextIdx = targetNode.neighbors[Math.floor(Math.random() * targetNode.neighbors.length)];
            if (nextIdx !== sig.fromIdx) {
              spawnSignal(sig.toIdx, nextIdx);
            }
          }
        }

        // Deactivate this pulse
        sig.active = false;
        signalPositions[s * 3] = 9999;
        signalPositions[s * 3 + 1] = 9999;
        signalPositions[s * 3 + 2] = 9999;
        continue;
      }

      // Interpolate position along synapse vector
      const nFrom = nodes[sig.fromIdx];
      const nTo = nodes[sig.toIdx];
      if (nFrom && nTo) {
        const px = THREE.MathUtils.lerp(nFrom.x, nTo.x, sig.progress);
        const py = THREE.MathUtils.lerp(nFrom.y, nTo.y, sig.progress);
        const pz = THREE.MathUtils.lerp(nFrom.z, nTo.z, sig.progress);

        signalPositions[s * 3] = px;
        signalPositions[s * 3 + 1] = py;
        signalPositions[s * 3 + 2] = pz;

        // Radiant action-potential spark
        signalColors[s * 3] = 1.0;
        signalColors[s * 3 + 1] = 0.95;
        signalColors[s * 3 + 2] = THREE.MathUtils.lerp(0.6, 1.0, colorAccent.b);
      }
    }

    signalGeometry.attributes.position.needsUpdate = true;
    signalGeometry.attributes.color.needsUpdate = true;

    // 7. Render Frame
    renderer.render(scene, camera);
  }

  animate();

  // ==========================================
  // 9. RESIZE HANDLER
  // ==========================================
  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  });
})();