import { Safari } from "@/src/components/magicui/safari";

export function SafariDemo() {
  return (
    <div className="relative">
      <Safari
        url="magicui.design"
        className="size-full  mt-18"
        videoSrc="https://videos.pexels.com/video-files/27180348/12091515_2560_1440_50fps.mp4"
      />
    </div>
  );
}
