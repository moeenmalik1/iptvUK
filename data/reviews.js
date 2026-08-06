// Genuine customer reviews for the IPTV UK subscription.
//
// These power two things at once, and they must stay in step:
//   1. The visible review list rendered by components/sections/ReviewsSection.jsx
//   2. The `review` and `aggregateRating` fields on the Product structured data
//      in lib/schema.js
//
// Google only allows review markup that reflects real feedback from real
// customers, and the reviews it sees in the markup have to be visible on the
// same page. Inventing entries here to satisfy Search Console is a structured
// data policy violation and can earn the whole domain a manual action, which is
// far worse than the non-critical warning it would silence.
//
// To add a review, append an object in this shape:
//
//   {
//     author: 'Danielle R.',            // the name the customer gave us
//     rating: 5,                        // whole or half star, 1 to 5
//     datePublished: '2026-03-14',      // ISO date the review was left
//     body: 'Sky Sports comes through clean on the Firestick and setup took
//            about five minutes.'
//   }
//
// While this list is empty the reviews section does not render and the Product
// schema omits `review` and `aggregateRating` entirely, which is the correct
// output for a site with no reviews yet.

export const reviews = [];

export const REVIEW_BEST_RATING = 5;
export const REVIEW_WORST_RATING = 1;

export function hasReviews() {
  return reviews.length > 0;
}

// Mean rating rounded to one decimal, matching what the visible summary shows.
export function getAverageRating() {
  if (!hasReviews()) {
    return null;
  }

  const total = reviews.reduce((sum, review) => sum + review.rating, 0);
  return Math.round((total / reviews.length) * 10) / 10;
}
