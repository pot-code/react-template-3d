uniform float uTime;

in vec3 vPosition;

void main() {
  // float speed = 2.0;
  // float r = sin(uTime * speed + vPosition.x) * 0.3 + 0.7;
  // float g = cos(uTime * speed + vPosition.y) * 0.3 + 0.7;
  // float b = sin(uTime * speed + vPosition.z) * 0.3 + 0.7;
  float gray = step(0.3, sin(length(50.0 * vPosition.xy)));

  gl_FragColor = vec4(vec3(gray), 1.);
}
