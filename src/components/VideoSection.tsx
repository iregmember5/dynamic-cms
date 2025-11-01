import React, { useState } from "react";
import type { LandingPageData, Video } from "../types/landing";

interface VideoSectionProps {
  data: LandingPageData;
}

const VideoSection: React.FC<VideoSectionProps> = ({ data }) => {
  const { video_section, color_theme } = data;
  const [isPlaying, setIsPlaying] = useState(false);

  if (!video_section || !video_section.featured_video)
    return "Too be Available Soon";

  const { heading, introduction, featured_video } = video_section;
  const primaryColor = color_theme?.primary_color || "#3B82F6";
  const textColor = color_theme?.text_color || "#1F2937";
  const neutralColor = color_theme?.neutral_color || "#6B7280";
  const bgColor = color_theme?.background_color || "#FFFFFF";

  const getVideoEmbedUrl = (video: Video) => {
    if (video.video_source === "youtube") {
      const videoId = video.video_url.includes("watch?v=")
        ? video.video_url.split("watch?v=")[1]?.split("&")[0]
        : video.video_url.split("/").pop();
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    } else if (video.video_source === "vimeo") {
      const videoId = video.video_url.split("/").pop();
      return `https://player.vimeo.com/video/${videoId}?autoplay=1`;
    }
    return video.video_url;
  };

  return (
    <section className="py-16 sm:py-24" style={{ backgroundColor: bgColor }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          {heading && (
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
              style={{ color: textColor }}
            >
              {heading}
            </h2>
          )}

          {introduction && (
            <p
              className="text-lg sm:text-xl leading-relaxed"
              style={{ color: neutralColor }}
            >
              {introduction}
            </p>
          )}
        </div>

        {/* Video Player */}
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
            {!isPlaying ? (
              // Thumbnail with Play Button
              <div className="relative">
                {featured_video.thumbnail && (
                  <img
                    src={featured_video.thumbnail.url}
                    alt={featured_video.title}
                    className="w-full h-auto"
                  />
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>

                {/* Play Button */}
                <button
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center"
                  aria-label="Play video"
                >
                  <div
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: primaryColor }}
                  >
                    <svg
                      className="w-10 h-10 sm:w-12 sm:h-12 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </button>

                {/* Duration Badge */}
                {featured_video.duration && (
                  <div
                    className="absolute bottom-4 right-4 px-3 py-1 rounded-lg text-white text-sm font-semibold"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
                  >
                    {featured_video.duration}
                  </div>
                )}
              </div>
            ) : (
              // Video Iframe
              <div className="aspect-video">
                {featured_video.video_source === "upload" ? (
                  <video
                    className="w-full h-full"
                    controls
                    autoPlay
                    src={featured_video.video_url}
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <iframe
                    className="w-full h-full"
                    src={getVideoEmbedUrl(featured_video)}
                    title={featured_video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            )}
          </div>

          {/* Video Info */}
          <div className="mt-8 text-center">
            <h3
              className="text-2xl font-bold mb-3"
              style={{ color: textColor }}
            >
              {featured_video.title}
            </h3>
            {featured_video.description && (
              <p
                className="text-lg leading-relaxed max-w-3xl mx-auto"
                style={{ color: neutralColor }}
              >
                {featured_video.description}
              </p>
            )}
          </div>

          {/* Transcript */}
          {featured_video.transcript && (
            <details className="mt-8 max-w-3xl mx-auto">
              <summary
                className="cursor-pointer font-semibold text-lg mb-4 hover:underline"
                style={{ color: primaryColor }}
              >
                View Transcript
              </summary>
              <div
                className="p-6 rounded-xl bg-gray-50"
                style={{ color: neutralColor }}
              >
                <p className="whitespace-pre-wrap leading-relaxed">
                  {featured_video.transcript}
                </p>
              </div>
            </details>
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
