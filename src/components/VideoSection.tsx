// components/PhotographySection.tsx
import { Card, CardContent } from "@/components/ui/card";
import Container from "./Container";

const  VideoSection = () => {
  return (
    <section className="py-12">
      <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Video Section */}
        <Card className="shadow-xl rounded-2xl overflow-hidden">
          <CardContent className="p-0">
            <div className="w-full h-0 pb-[56.25%] relative">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-2xl"
               src="https://www.youtube.com/embed/Ur4Sc9OHaQQ?si=qTjk8rHQ_6sLmh3P"
                title="Photography Portfolio"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </CardContent>
        </Card>

        {/* Text Section */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Capture the Moment</h2>
          <p className="text-muted-foreground">
            Dive into a world of timeless visuals. Our photography tells stories through emotion, light, and composition.
          </p>
          <p>
            Whether it’s weddings, portraits, or nature — we bring your vision to life through every frame.
          </p>
        </div>
      </div>
      </Container>
    </section>
  );
}


export default VideoSection;