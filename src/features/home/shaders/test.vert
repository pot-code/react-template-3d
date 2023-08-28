out vec3 vPosition;
out vec2 vUV;

void main() {
  vPosition = position;
  vUV = uv;
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
}
