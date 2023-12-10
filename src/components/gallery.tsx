"use client";

import { Button } from "@/components/ui/button";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import {
  gifImages,
  mediaKitImages,
  memeImages,
  tgSubmissionImages,
} from "@/data/images";
import { For } from "million/react";
import Image from "next/image";
import { useState } from "react";

export function Gallery() {
  const [view, setView] = useState<
    "Media Kit" | "GIFs" | "Memes of the week" | "tg-submissions"
  >("tg-submissions");

  return (
    <div className="p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">Monad Gallery</h1>
        <div className="flex gap-4">
          <Button variant="outline" onClick={() => setView("Media Kit")}>
            Media Kit
          </Button>
          <Button variant="outline" onClick={() => setView("GIFs")}>
            GIFs
          </Button>
          <Button
            variant="outline"
            onClick={() => setView("Memes of the week")}
          >
            Memes of the week
          </Button>
          <Button variant="outline" onClick={() => setView("tg-submissions")}>
            tg-submissions
          </Button>
        </div>
      </header>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {view === "Media Kit" && (
          <For each={mediaKitImages}>
            {(item) => (
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
            )}
          </For>
        )}
        {view === "GIFs" && (
          <For each={gifImages}>
            {(item) => (
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
            )}
          </For>
        )}
        {view === "Memes of the week" && (
          <For each={memeImages}>
            {(item) => (
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
            )}
          </For>
        )}
        {view === "tg-submissions" && (
          <For each={tgSubmissionImages}>
            {(item) => (
              <Card key={item.alt}>
                <CardHeader>
                  <div className="flex justify-between">
                    <h2 className="text-xl font-bold">{item.alt}</h2>
                    <p>{item.author}</p>
                  </div>
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
            )}
          </For>
        )}
      </div>
    </div>
  );
}
