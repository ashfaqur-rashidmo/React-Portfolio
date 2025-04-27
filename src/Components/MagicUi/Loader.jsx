import { Slugs } from "../Projects/CardInfo.jsx";
import IconCloud from "./Icon-Cloud.jsx";
import { IconPentagon } from "@tabler/icons-react";


export function Loader() {
  return (
    <div className="relative flex h-full w-full animate-[ping_1.5s_ease-in-out_1_5s] items-center justify-center px-20 pb-20 pt-8">
      <IconCloud iconSlugs={Slugs} />
      <IconPentagon className="absolute animate-[spin_3s_linear_infinite]" size={130} color='#64FFDA' stroke={1.20} />
      <div className='absolute font-mono font-bold text-primaryColor text-6xl'>AR</div>
    </div>
  );
}
