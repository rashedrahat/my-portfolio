import React from "react";

const Awards = () => {
  return (
    <section className="my-32">
      <h2 className="font-bold text-6xl mb-10 w-full text-center md:text-4xl">
        Awards
      </h2>
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
