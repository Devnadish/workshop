import Image from "next/image";
import React from "react";

function LocationPage() {
  return (
    <div className="flex items-center justify-center ">
      <Image src={"/assets/location.jpg"} fill alt="khalid nadish" />
      {/* <Image src={"/assets/location.jpg"} fill  width={250} height={600} /> */}
    </div>
  );
}

export default LocationPage;
