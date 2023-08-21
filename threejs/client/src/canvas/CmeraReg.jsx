/* eslint-disable react/prop-types */
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import state from "../store";
import { useRef } from "react";
const CmeraReg = ({ children }) => {
  const group = useRef();

  const snap = useSnapshot(state);

  useFrame((state, delta) => {
    const isBreackPoint = window.innerWidth <= 1260;
    const isMobaile = window.innerWidth <= 500;

    let targetPosition = [-0.4, 0, 2];
    if (snap.intro) {
      if (isBreackPoint) targetPosition = [0, 0, 2];
      if (isMobaile) targetPosition = [0, 2.0, 5];
    } else {
      if (isMobaile) targetPosition = [0, 0, 2];
      else targetPosition = [0, 0, 2];
    }

    easing.damp3(state.camera.position, targetPosition, 0.25, delta);
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5, 0],
      0.25,
      delta
    );
  });

  return <group ref={group}>{children}</group>;
};

export default CmeraReg;
