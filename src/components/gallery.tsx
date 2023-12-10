import { Button } from "@/components/ui/button";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { mediaKitImages } from "@/data/images";
import Image from "next/image";

export function Gallery() {
  return (
    <div className="p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">Monad Gallery</h1>
        <div className="flex gap-4">
          <Button variant="outline">Media Kit</Button>
          <Button variant="outline">Stickers</Button>
          <Button variant="outline">GIFs</Button>
          <Button variant="outline">Memes</Button>
        </div>
      </header>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {mediaKitImages.map((item) => (
          <Card key={item.alt}>
            <CardHeader>
              <h2 className="text-xl font-bold">{item.alt}</h2>
            </CardHeader>
            <CardContent>
              <Image
                alt={item.alt}
                className="w-full h-full object-cover rounded-lg overflow-hidden"
                height="500"
                src={item.src}
                width="500"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
