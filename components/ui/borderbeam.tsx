import { Play, SkipBack, SkipForward } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BorderBeam } from "./border-beam";

export function MusicPlayer() {
  return (
    <Card className="relative w-[350px] text-2xl text-center  overflow-hidden">
      <CardHeader> Get Started</CardHeader>

      <BorderBeam
        duration={6}
        size={400}
        className="from-transparent via-red-500 to-transparent"
      />
      <BorderBeam
        duration={6}
        delay={3}
        size={400}
        borderWidth={2}
        className="from-transparent via-blue-500 to-transparent"
      />
    </Card>
  );
}
