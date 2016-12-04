let renderer;
let camera;
let controls;
let scene;
const container = document.getElementsByClassName('background_container')[0];
let w = container.offsetWidth;
let h = container.offsetHeight;
let ground = {};
let uniforms = {
  resolution: {
    value: new THREE.Vector2(w, h)
  },
  uvScale: {
    value: new THREE.Vector2(1.0, 1.0)
  }
};
function init() {
  renderer = new THREE.WebGLRenderer({antialias: true});
  renderer.setSize(w, h);
  renderer.setClearColor(0xEFEFEF);
  renderer.setPixelRatio(window.devicePixelRatio)
  container.appendChild(renderer.domElement);

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(45, w / h, 1, 1000);
  camera.position.set(100, 0, 0);
  camera.lookAt(scene.position);
  // controls = new THREE.OrbitControls( camera, renderer.domElement );
  // //controls.addEventListener( 'change', render ); // add this only if there is no animation loop (requestAnimationFrame)
  // controls.enableDamping = true;
  // controls.dampingFactor = 0.2;
  // controls.rotateSpeed = 0.3;
  const hemilight = new THREE.HemisphereLight(0xFFFFFF, 0x444444, 1);
  scene.add(hemilight);
  scene.add(camera);
  scene.add(background());
  buildGround().then(render);
  // render();
  console.log(ground);
}

function background(scene) {
  const geo = new THREE.PlaneBufferGeometry(1000, 1000);
  const material = new THREE.ShaderMaterial({
    uniforms,
    fragmentShader: backgroundShader()
  });
  const mesh = new THREE.Mesh(geo, material);
  // const mesh = new THREE.Mesh(geo, new THREE.MeshNormalMaterial());
  mesh.position.set(-100, 0, 0);
  mesh.rotation.set(0, Math.PI / 2, 0);
  mesh.scale.set(1, 1, -1);
  return mesh;
}

function buildGround() {
  return new Promise((resolve, reject) => {
    const geo = new THREE.IcosahedronGeometry(40, 3);
    //const normalMat = new THREE.MeshPhongMaterial({color: 0xFF00FF, shading: THREE.FlatShading});
    const normalMat = new THREE.MeshPhongMaterial({color: 0xc1994a, shading: THREE.FlatShading});
    ground = new THREE.Mesh(geo, normalMat);
    geo.verticesNeedUpdate = true;
    geo.vertices.forEach(vert => {
      let randomTranslate = Math.floor(Math.random() * 7.5) + 1;
      let plusMinus = Math.floor(Math.random() * 2) == 1 ? 1 : -1;
      randomTranslate *= plusMinus;
      vert.y += randomTranslate
    });
    geo.verticesNeedUpdate = true;
    ground.position.set(0, -65, 0);
    ground.scale.set(1, 1, 4);
    scene.add(ground);
    resolve();
  })
}


// function backgroundShader() {
// 	return `
// 		uniform vec2 resolution;

// 		float plot(vec2 st, float pct) {
// 			return smoothstep( pct - 0.02, pct, st.y ) - smoothstep( pct, pct + 0.02, st.y );
// 		}
// 		void main() {
// 			vec2 st = gl_FragCoord.xy/resolution;

// 			float y = smoothstep(0.1, 0.9, st.x);

// 			vec3 color = vec3(y);

// 			float pct = plot(st, y);
// 			color = (1.0 - pct) * color + pct * vec3(0.0, 1.0, 0.0);

// 			gl_FragColor = vec4(color, 1.0);
// 			// gl_FragColor = vec4(1.0, 0, 1.0, 1.0);
// 		}
// 	`
// }
function backgroundShader() {
  return `
		// #ifdef GL_ES
		// precision mediump float;
		// #endif
		uniform vec2 resolution;

		float square(float s) { return s * s; }

		vec3 desertGradient(float t) {
			float s = sqrt(clamp(1.0 - (t - 0.4) / 0.6, 0.0, 1.0));
			// vec3 sky = sqrt(mix(vec3(1, 1, 1), vec3(0, 0.8, 1.0), smoothstep(0.4, 0.9, t)) * vec3(s, s, 1.0));
			vec3 sky = sqrt(mix(vec3(1, 1, 1), vec3(0, 0.8, 1.0), smoothstep(0.4, 0.9, t)) * vec3(s, s, 1.0));
			vec3 land = mix(vec3(0.7, 0.3, 0.0), vec3(0.85, 0.75 + max(0.8 - t * 20.0, 0.0), 0.5), square(t / 0.4));
			return clamp((t > 0.4) ? sky : land, 0.0, 1.0) * clamp(1.5 * (1.0 - abs(t - 0.4)), 0.0, 1.0);
		}

		void main() {
			vec2 st = gl_FragCoord.xy / resolution.xy;
			// float t = gl_FragCoord.y / resolution.x;
			
			// gl_FragColor = vec4(st.y, st.y, st.y, 1.0);
			gl_FragColor = vec4(0.4, 0.4, st.y, 1.0);
			// gl_FragColor = vec4(desertGradient(t), 1.0);
		}
	`
}

function render() {
  window.requestAnimationFrame(render);
  renderer.render(scene, camera);
  // controls.update();
  ground.rotation.z -= 0.001;

}

init();

window.addEventListener('resize', function () {
  w = container.offsetWidth;
  h = container.offsetHeight;

  uniforms.resolution.value.x = w;
  uniforms.resolution.value.y = h;

  renderer.setSize(w, h);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}, false);