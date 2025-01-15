import Image from 'next/image';
import React from 'react';

export default function BestGear() {
  return (
    <section className="py-14">
      <div className="base-container">
        <div className="flex flex-col md:flex-col md:items-center md:gap-10 xl:flex-row-reverse xl:items-center">
          <picture className="mb-8 md:mb-0 xl:mb-0 xl:w-1/2">
            <source
              media="(min-width: 1280px)"
              srcSet="/image-best-gear-desktop.jpg"
            />
            <source
              media="(min-width: 768px)"
              srcSet="/image-best-gear-table.jpg"
            />
            <Image
              className="rounded-lg w-full"
              src="/image-best-gear.jpg"
              alt="Bringing you the best audio gear"
              height={327}
              width={327}
            />
          </picture>

          <div className="text-center md:text-center xl:text-left xl:w-1/2">
            <h2 className="mb-8 font-bold text-2xl text-black uppercase xl:text-4xl">
              Bringing you the <span className="text-orange">best</span> audio gear
            </h2>
            <p className="text-sm text-black opacity-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, magni. Blanditiis modi quaerat accusantium distinctio.
              Temporibus ipsa facere, labore eius sapiente distinctio eveniet
              eaque, voluptatum tempore odio dolores, commodi asperiores?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
