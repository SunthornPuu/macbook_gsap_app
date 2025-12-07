import useMacbookStore from "../store";
import clsx from "clsx";
import { Canvas } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";

export default function ProductViewer() {
    const { color, scale, setColor, setScale } = useMacbookStore();
    return (
        <section className="viewerSection">
            <h2 className="text-white text-4xl font-bold">Take a closer look.</h2>
            <Canvas>
                <Box scale={10 * scale} material-color={color}></Box>
                <OrbitControls enableZoom={false} />
            </Canvas>
            <p className="text-center">Macbook Pro {scale} in {color}</p>

            <div className="flex justify-center gap-5 md:gap-10">
                <div className="butSet">
                    <div className={clsx(
                        "bg-neutral-300",
                        color === "#adb5bd" && "border-white border-4")} onClick={() => setColor("#adb5bd")}>
                    </div>
                    <div className={clsx(
                        "bg-neutral-900",
                        color === "#2e2c2e" && "border-white border-4")} onClick={() => setColor("#2e2c2e")}>
                    </div>
                </div>
                <div className="butSet">
                    <div className={clsx(
                        "bg-white",
                        scale === 0.06 && "!bg-black text-white")}
                        onClick={() => setScale(0.06)}>14"
                    </div>
                    <div className={clsx(
                        "bg-white",
                        scale === 0.08 && "!bg-black text-white")}
                        onClick={() => setScale(0.08)}>16"
                    </div>
                </div>
            </div>
        </section >
    );
}