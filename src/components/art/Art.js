// import React, { useEffect, useState } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import "./art.css";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// function MyRotatingSphere() {
//   const myMesh = React.useRef();

//   //   useFrame(({ clock }) => {
//   //     const a = clock.getElapsedTime();
//   //     myMesh.current.rotation.y = a;
//   //   });

//   return (
//     <mesh ref={myMesh}>
//       <sphereGeometry args={[2, 32, 32]} />
//       <meshBasicMaterial color={0xff0000} />
//       {/* <directionalLight
//         color="red"
//         position={[-2.4, -1.8, -1.5]}
//         intensity={[3]}
//       /> */}
//       <pointLight color="yellow" position={[3.1, 2.1, 12]} intensity={[15]} />
//     </mesh>
//   );
// }

// function RotatingRing() {
//   const ringMesh = React.useRef();

//   useFrame(({ clock }) => {
//     const a = clock.getElapsedTime();
//     ringMesh.current.rotation.y = a / 5;
//     ringMesh.current.rotation.z = a / 5;
//   });

//   return (
//     <mesh ref={ringMesh}>
//       <ringGeometry args={[2.5, 2.556, 30, 1, 6, Math.PI * 2]} />
//       <meshStandardMaterial
//         metalness={[1]}
//         wireframe={false}
//         color={0xf23fff}
//       />
//     </mesh>
//   );
// }

// const Planet = () => {
//   const [model, setModel] = useState();

//   useEffect(() => {
//     new GLTFLoader().load("/scene.gltf", (gltf) => {
//       const obj = gltf.scene.children[0];
//       console.log(obj);
//     });
//   }, []);
//   return null;
// };

// export default function Art() {
//   return (
//     <div id="canvas-container">
//       <Canvas>
//         <Planet />
//       </Canvas>
//     </div>
//   );
// }

import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import "./art.css";

const Box = () => {
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  return (
    <mesh
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setActive(!active)}
      scale={active ? [2, 2, 2] : [1, 1, 1]}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshBasicMaterial attach="material" color={hovered ? "red" : "gray"} />
    </mesh>
  );
};

export default function Art() {
  return (
    <Canvas>
      <Box />
    </Canvas>
  );
}
