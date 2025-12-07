import useMacbookStore from "../store";
import clsx from "clsx";
import { Canvas } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";

export default function ProductViewer() {
    const { color, scale, setColor, setScale } = useMacbookStore();
    return (
        <section className="m-6 md:m-20 h-screen flex flex-col gap-5">
            <h2 className="text-white text-4xl font-bold">Take a closer look.</h2>
            <Canvas>
                <Box scale={10 * scale} material-color={color}></Box>
                <OrbitControls enableZoom={false} />
            </Canvas>
            <p className="text-center">Macbook Pro {scale} in {color}</p>

            <div className="flex justify-center gap-5">
                <div className="flex justify-center gap-5">
                    <div className="bg-neutral-700 rounded-3xl w-25 h-12 flex items-center justify-center gap-2">
                        <div className={clsx("bg-neutral-300 rounded-3xl w-7 h-7 hover:cursor-pointer", color === "#adb5bd" && "border-white border-4")} onClick={() => setColor("#adb5bd")}></div>
                        <div className={clsx("bg-neutral-900 rounded-3xl w-7 h-7 hover:cursor-pointer", color === "#2e2c2e" && "border-white border-4")} onClick={() => setColor("#2e2c2e")}></div>
                    </div>
                </div>
                <div className="flex justify-center gap-5">
                    <div className="bg-neutral-700 rounded-3xl w-25 h-12 flex items-center justify-center gap-2">
                        <div className={clsx("bg-white rounded-3xl w-7 h-7 flex justify-center items-center text-sm hover:cursor-pointer", scale === 0.06 && "!bg-black text-white")} onClick={() => setScale(0.06)}>14"</div>
                        <div className={clsx("bg-white rounded-3xl w-7 h-7 flex justify-center items-center text-sm hover:cursor-pointer", scale === 0.08 && "!bg-black text-white")} onClick={() => setScale(0.08)}>16"</div>
                    </div>
                </div>
            </div>
        </section>
    );
}