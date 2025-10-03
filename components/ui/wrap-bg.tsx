import { MusicPlayer } from "./borderbeam";
import { WarpBackground } from "./warp-background";

export default function WrapBg() {
  return (
    <div>
      <WarpBackground>
        <div className="w-12">
          <div className="ml-[520px]">
            <MusicPlayer />
          </div>
        </div>
      </WarpBackground>
      ;
    </div>
  );
}
