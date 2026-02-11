import React from "react";

const Awards = () => {
  return (
    <section className="my-24">
      <div className="grid grid-cols-12 gap-10 items-end mb-10">
        <div className="col-span-4 lg:col-span-12">
          <p className="text-xs uppercase tracking-[0.35em] text-dark/60 dark:text-light/60">
            Recognition
          </p>
          <h2 className="font-bold text-5xl mt-4 md:text-4xl">Awards</h2>
        </div>
        <div className="col-span-8 lg:col-span-12">
          <p className="text-base text-dark/70 dark:text-light/70">
            Highlights from recent work acknowledged for UX quality and impact.
          </p>
        </div>
      </div>
      <div className="w-full max-w-4xl mx-auto grid gap-6">
        <div className="rounded-2xl border border-dark/10 dark:border-light/10 bg-light/80 dark:bg-dark/60 p-8 shadow-soft">
          <p className="text-xs uppercase tracking-[0.3em] text-dark/60 dark:text-light/60">
            2023
          </p>
          <h3 className="text-2xl font-bold mt-3">Learner First Award</h3>
          <p className="mt-3 text-dark/75 dark:text-light/75">
            Recognized for UX quality, accessibility improvements, and product
            impact at Shikho Technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Awards;
