"use client";

import { Reviews } from "@/lib/interfaces/products";
import ReviewCard from "./review-card";
import { useState } from "react";

interface ReviewsSectionProps {
  reviews: Reviews[];
  productTitle: string;
}

export default function ReviewsSection({ reviews }: ReviewsSectionProps) {
  const totalReviews = reviews.length;
  const [showReviews, setShowReviews] = useState(false);

  return (
    <article className="w-full bg-white rounded-lg">
      {/* Main content container */}
      <div className="pt-0 pb-2 px-2 md:pb-4 md:px-4">
        
        {/* Dropdown trigger */}
        <div 
          onClick={() => setShowReviews(!showReviews)}
          className="w-full md:w-1/2 mx-auto text-base md:text-lg lg:text-xl font-bold text-neutral-800 mb-4 text-center cursor-pointer flex items-center justify-center gap-2 bg-white border border-gray-200 rounded-lg p-4"
        >
          Read all reviews
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            height="20px" 
            viewBox="0 -960 960 960" 
            width="20px" 
            fill="#000000"
            className={`transition-transform duration-200 ${showReviews ? 'rotate-180' : ''}`}
          >
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
          </svg>
        </div>
        
        {/* Reviews list */}
        {showReviews && (
          <div className="w-full md:w-1/2 mx-auto">
            {totalReviews === 0 ? (
              <p className="text-gray-500">No reviews yet.</p>
            ) : (
              /* Individual review cards */
              <div>
                {reviews.map((review, index) => (
                  <ReviewCard key={index} review={review} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
