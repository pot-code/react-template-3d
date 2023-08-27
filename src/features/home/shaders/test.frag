in vec3 vPosition;
in vec3 vNormal;
in vec2 vUV;

void main() {
  gl_FragColor = vec4(vec3(step(0.5, vUV.x)), 1.);
}
