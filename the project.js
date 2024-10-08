let scene, camera, renderer, controls;
let flagMesh, clock;
let textureLoader, texture;

init();
animate();

function init() {
    // Escena
    scene = new THREE.Scene();

    // Cámara
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Renderizador
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Controles
    controls = new THREE.OrbitControls(camera, renderer.domElement);

    // Cargar textura
    textureLoader = new THREE.TextureLoader();
    texture = textureLoader.load('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATUAAACjCAMAAADciXncAAACqVBMVEUAkz/xJzf//////v8Akz4AiC//9/naVln6IjHzJjjyJzb///2UzKP9//////v///n//+3///P///b//+z///H3//8AfoOkQxifRR3Dxa6sUyOfRRf//PiURyGCNxO9aDaorn2aRiCWPhn/swDLglCNQyGjVSh5MRBZHwD//+Te0sr/9Mn//df//+AAg4ns///+sFDWtKfBiXmueGzSpZXqxrz/7Ob78N3z28PRooWLOADFdEfFcEajWCeMPBCGLwugZFbdvp6xf0vIi02sWyHZn2j33tStbyzbmlrHgzygOAK+lGi3bx/Kdy6oUBmyZ0Do4du6eF/XhDxIJxRwOSGdXTSARCS/n4inbD+rdl7Daxw1IRIgFhZcKRPX18HavqLAjWGNY1O4to8lAACUlJI1JxaCTy45CQDIdTqutHi3YUw4FwlsKACRLAXc37jLqyvMgiX97XL/6h79zx7uqRe+xpPi3nz82QDfnkxHFQO/uV/8+GP0wVb64KChoW+IiFCakyXpzCnntCKeVUaun0SBfS+ofASkl2WOk0tWNSnKnDXptQDm0V7t4LbbvmFiW1jEv2dZDQDHxYW4oC9kOSB8GQDRwjX59JO8qah1KiO8iIKUZluMT0pucjvj3jZWXQz35Jw7OAdKPDv6nwB5aGBobxr0wMaPdR3r0NyxmJ+nu8OAqqnTyld0aUecnJmXn3imfJRnvsFWoZxFRS5iPAz21UqslqTppaWHbjqRtLVNhYm8lka01NZgyMgAAAC9ujTqxIIlT1N+p1CQUgCAx9Katzsee2FhjGcAIBxSakh/r1RzdYH/+KnC2YWRudLa43gBmrsVtt2n4eoAxd4AkMWevterz5X5pU5dlawjeIcAOQDQUkfA3r/6cXO6XWF/moyCq5qMAAAYTzjeM2p6AAARZElEQVR4nO3c/38T530A8PauI+uudyfJkk6603ek01db2BiLRlgyxLgJXyoRLAVIdCEXSlBrlIAxxhmcZojHUYyTEIppGMFNY0qhwZU2ymzESros6TbXcQhZIOlIt79kn+fEGAsh44e1P+ieJ35hv4zQ66V3Ps/z+Xyee+6+9rU/wfjGN/7sWwQF/xEk8ccdCx76869/8y++/scefwo0rIbVsBpWw2pYDath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'); // Asegúrate de que la ruta es correcta

    // Geometría de la bandera
    const width = 10, height = 5;
    const geometry = new THREE.PlaneGeometry(width, height, 32, 32);

    // Shader de la bandera
    const flagMaterial = new THREE.ShaderMaterial({
        vertexShader: `
            varying vec2 vUv;
            void main() {
                vUv = uv;
                vec4 modelPosition = modelViewMatrix * vec4(position, 1.0);
                gl_Position = projectionMatrix * modelPosition;
            }
        `,
        fragmentShader: `
            uniform float time;
            uniform sampler2D texture;
            varying vec2 vUv;
            void main() {
                vec2 uv = vUv;
                uv.y += sin(uv.x * 10.0 + time) * 0.1;
                gl_FragColor = texture2D(texture, uv);
            }
        `,
        uniforms: {
            time: { value: 0.0 },
            texture: { value: texture }
        },
        side: THREE.DoubleSide
    });

    // Crear el mesh de la bandera
    flagMesh = new THREE.Mesh(geometry, flagMaterial);
    scene.add(flagMesh);

    // Reloj
    clock = new THREE.Clock();

    // Manejar el cambio de tamaño de la ventana
    window.addEventListener('resize', onWindowResize, false);
}

function animate() {
    requestAnimationFrame(animate);

    // Actualizar los uniformes del shader
    flagMesh.material.uniforms.time.value += clock.getDelta();

    // Renderizar la escena
    renderer.render(scene, camera);

    // Actualizar los controles
    controls.update();
}

function onWindowResize() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
}
