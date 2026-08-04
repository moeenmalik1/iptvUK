import { homeFaqs } from '../data/faqs';
import { guides } from '../data/guides';
import { plans } from '../data/plans';

const SITE_URL = 'https://www.iptvuk.buzz';

const PUBLISHER = {
  '@type': 'Organization',
  name: 'IPTV UK',
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/icon.svg`
  }
};

export function getGuideSchema(guide) {
  const url = `${SITE_URL}/guides/${guide.slug}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: guide.heading ?? guide.title,
        description: guide.metaDescription,
        image: `${SITE_URL}${guide.image}`,
        dateModified: guide.updatedIso,
        mainEntityOfPage: url,
        url,
        author: PUBLISHER,
        publisher: PUBLISHER
      },
      {
        '@type': 'FAQPage',
        mainEntity: guide.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
          }
        }))
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Guides', item: `${SITE_URL}/guides` },
          { '@type': 'ListItem', position: 3, name: guide.title, item: url }
        ]
      }
    ]
  };
}

export function getGuidesIndexSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'IPTV UK Guides',
    url: `${SITE_URL}/guides`,
    publisher: PUBLISHER,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: guides.map((guide, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: guide.title,
        url: `${SITE_URL}/guides/${guide.slug}`
      }))
    }
  };
}

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
