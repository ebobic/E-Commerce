import { Reviews } from "@/lib/interfaces/products";

interface ReviewCardProps {
  review: Reviews;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-3">
      {/* Reviewer name and stars */}
      <div className="flex items-center gap-2 mb-2">
        <span className="font-semibold text-neutral-800">
          {review.reviewerName}
        </span>
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className={
                i < review.rating
                  ? "text-blue-900"
                  : "text-gray-300"
              }
            >
              ★
            </span>
          ))}
        </div>
      </div>
      
      {/* Review comment */}
      <p className="text-neutral-800 text-sm">
        {review.comment}
      </p>
    </div>
  );
}
