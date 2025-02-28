import { bottomVector, topVector } from "@/public/image";
import Image from "next/image";

export default function BottomBorder() {
  return (
    <div className="section no-padding-x no-padding-y">
      <Image
        style={{
          width: "100vw ",
          marginTop: "-2px",
        }}
        src={bottomVector}
        alt=""
        width={1400}
        height={300}
      />
    </div>
  );
}
