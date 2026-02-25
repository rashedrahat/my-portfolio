import React from "react";

const Awards = () => {
  return (
    <section className="my-24">
      <div className="grid grid-cols-12 gap-10 items-end mb-10">
        <div className="col-span-4 lg:col-span-12">
          <p className="text-xs uppercase tracking-[0.35em] text-electric/60">
            Recognition
          </p>
          <h2 className="font-bold text-5xl mt-4 text-light md:text-4xl">Awards</h2>
        </div>
        <div className="col-span-8 lg:col-span-12">
          <p className="text-base text-light/45 leading-relaxed">
            Highlights from recent work acknowledged for UX quality and impact.
          </p>
        </div>
      </div>
      <div className="w-full max-w-4xl mx-auto grid gap-6">
        <div className="rounded-2xl glass-dark p-8 ring-1 ring-primary/10">
          <p className="text-xs uppercase tracking-[0.3em] text-primary/60">
            2023
          </p>
          <h3 className="text-2xl font-bold mt-3 text-light">Learner First Award</h3>
          <p className="mt-3 text-light/50 leading-relaxed">
            Recognized for UX quality, accessibility improvements, and product
            impact at Shikho Technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Awards;
