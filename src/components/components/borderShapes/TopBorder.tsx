import { topVector } from "@/public/image";
import Image from "next/image";

export default function TopBorder() {
  return (
    <div className="section no-padding-x no-padding-y">
      <Image
        style={{
          width: "100%",
          marginBottom: "-2px",
          marginTop: "100px",
          position: "relative",
          zIndex: "-1",
        }}
        src={topVector}
        alt=""
        width={1400}
        height={300}
      />
    </div>
  );
}
