import { homeFaqs } from '../data/faqs';
import { plans } from '../data/plans';

const SITE_URL = 'https://www.iptvuk.buzz';

export function getHomePageSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: 'IPTV UK',
        url: SITE_URL,
        logo: `${SITE_URL}/icon.svg`,
        email: 'contact@iptvuk.it.com',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+447490301370',
          contactType: 'customer support',
          email: 'contact@iptvuk.it.com'
        }
      },
      {
        '@type': 'FAQPage',
        mainEntity: homeFaqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
          }
        }))
      },
      ...plans.map((plan) => ({
        '@type': 'Product',
        name: plan.name,
        description: plan.note,
        image: `${SITE_URL}/images/hero-image.png`,
        brand: {
          '@type': 'Brand',
          name: 'IPTV UK'
        },
        offers: {
          '@type': 'Offer',
          price: plan.price,
          priceCurrency: 'GBP',
          url: `${SITE_URL}/pricing`,
          availability: 'https://schema.org/InStock',
          hasMerchantReturnPolicy: {
            '@type': 'MerchantReturnPolicy',
            applicableCountry: 'GB',
            returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
            merchantReturnDays: 7,
            returnFees: 'https://schema.org/FreeReturn'
          }
        }
      }))
    ]
  };
}
