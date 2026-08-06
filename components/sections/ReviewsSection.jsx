import SectionHeading from '../ui/SectionHeading';
import { REVIEW_BEST_RATING, getAverageRating, hasReviews, reviews } from '../../data/reviews';

const dateFormatter = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
});

function Stars({ rating }) {
  const filled = Math.round(rating);

  return (
    <span className="text-base leading-none text-orange-500" aria-label={`${rating} out of ${REVIEW_BEST_RATING}`}>
      <span aria-hidden="true">
        {'★'.repeat(filled)}
        {'☆'.repeat(REVIEW_BEST_RATING - filled)}
      </span>
    </span>
  );
}

export default function ReviewsSection() {
  if (!hasReviews()) {
    return null;
  }

  const average = getAverageRating();

  return (
    <section id="reviews" className="scroll-mt-24 bg-slate-50 py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What IPTV UK Customers Say"
          subtitle="Feedback from subscribers watching on Firestick, Smart TVs, Android, iPhone and PC."
        />

        <div className="mt-8 flex flex-col items-center gap-2">
          <Stars rating={average} />
          <p className="text-sm text-slate-600">
            <span className="font-black text-slate-900">{average}</span> out of {REVIEW_BEST_RATING} from{' '}
            {reviews.length} {reviews.length === 1 ? 'review' : 'reviews'}
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={`${review.author}-${review.datePublished}`}
              className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <Stars rating={review.rating} />
              <p className="mt-4 flex-1 text-sm leading-6 text-slate-600">{review.body}</p>
              <div className="mt-5 border-t border-slate-100 pt-4">
                <p className="text-sm font-black text-slate-900">{review.author}</p>
                <time className="text-xs text-slate-500" dateTime={review.datePublished}>
                  {dateFormatter.format(new Date(review.datePublished))}
                </time>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
