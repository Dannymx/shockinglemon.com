import { RocketLaunchIcon } from "@heroicons/react/24/outline";
import videos from "data/media/videos.json";
import type { Metadata } from "next";
import Section from "components/Media/Section";
import Videos, { schema } from "components/Media/Videos";

export const metadata: Metadata = {
  title: "Media",
};

export default function Media() {
  return (
    <div className="flex flex-col gap-4">
      <Section name="Videos">
        <Videos videos={schema.parse(videos)} />
      </Section>
      <Section name="Images">
        <p>
          Coming soon! <RocketLaunchIcon className="inline-block h-6" />
        </p>
      </Section>
      <Section name="Posters">
        <p>
          Coming soon! <RocketLaunchIcon className="inline-block h-6" />
        </p>
      </Section>
    </div>
  );
}
