out vec3 vPosition;
out vec2 vUV;
out vec3 vNormal;

void main() {
  vPosition = position;
  vUV = uv;
  vNormal = normal;
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
}
