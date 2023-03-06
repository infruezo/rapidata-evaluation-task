import React from "react";
import { PricingCard } from "./PricingCard";

export const Pricings = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-2xl py-8 px-4 lg:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-md text-center lg:mb-12">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Designed for business teams like yours
          </h2>
          <p className="mb-5 font-light text-gray-500 dark:text-gray-400 sm:text-xl">
            Here at Rapidata.ai we focus on markets where technology,
            innovation, and capital can unlock long-term value and drive
            economic growth.
          </p>
        </div>

        <div className="space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:space-y-0 xl:gap-10">
          <PricingCard
            title="Free"
            price={0}
            description="Get started easily with a free trial, you are few steps away from your best AI experience."
            size={1}
            support={1}
            updates={1}
          />
          <PricingCard
            title="Pro"
            price={99}
            description="Ideal for startups and small businesses, customizable and accessible anywhere."
            size={10}
            support={12}
            updates={24}
          />
          <PricingCard
            title="Premium"
            price={599}
            description="Perfect for large businesses and established companies. Get the best AI labeling tool now!"
            size={50}
            support={24}
            updates={48}
          />
        </div>
      </div>
    </section>
  );
};
