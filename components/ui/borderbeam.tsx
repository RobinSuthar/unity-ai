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
import { signIn } from "next-auth/react";
import { div } from "motion/react-client";

export function MusicPlayer() {
  return (
    <div className="">
      <Card className="relative w-[350px]  text-2xl text-center  overflow-hidden">
        <CardHeader>
          {" "}
          <button
            onClick={async () =>
              signIn(undefined, { callbackUrl: "/auth/signin" })
            }
            className="cursor-pointer"
          >
            Get Started
          </button>{" "}
        </CardHeader>

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
    </div>
  );
}
