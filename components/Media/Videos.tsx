import { z } from "zod";

type Props = {
  videos: z.infer<typeof schema>;
};

export const schema = z.array(
  z.object({
    url: z.string().url().startsWith("https://www.youtube.com/watch?v="),
    name: z.string(),
  })
);

const Videos = ({ videos }: Props) => (
  <div className="grid grid-cols-1 items-end gap-4 md:grid-cols-2 lg:grid-cols-3">
    {videos.map((video) => (
      <div key={video.name}>
        <h2 className="mb-1 font-bold">{video.name}</h2>
        <div className="overflow-hidden rounded-md shadow-md shadow-slate-500">
          <iframe
            className="aspect-video w-full"
            title={video.name}
            src={video.url.replace(
              "https://www.youtube.com/watch?v=",
              "https://www.youtube.com/embed/"
            )}
          />
        </div>
      </div>
    ))}
  </div>
);

export default Videos;
