import { firestickFaqs, freeTrialFaqs, homeFaqs } from '../data/faqs';
import { guideHref, guides } from '../data/guides';
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
  const url = `${SITE_URL}${guideHref(guide.slug)}`;

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

export function getFirestickPageSchema() {
  const url = `${SITE_URL}/iptv-firestick-subscription-uk`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'IPTV Firestick Subscription UK',
        serviceType: 'IPTV subscription for Amazon Fire TV',
        description:
          'IPTV subscription for Amazon Fire TV Stick in the UK, with live UK channels, premium sport, films and box sets streamed over broadband.',
        url,
        provider: PUBLISHER,
        areaServed: {
          '@type': 'Country',
          name: 'United Kingdom'
        },
        offers: plans.map((plan) => ({
          '@type': 'Offer',
          name: plan.name,
          price: plan.price,
          priceCurrency: 'GBP',
          url: `${SITE_URL}/pricing`,
          availability: 'https://schema.org/InStock'
        }))
      },
      {
        '@type': 'FAQPage',
        mainEntity: firestickFaqs.map((faq) => ({
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
          { '@type': 'ListItem', position: 2, name: 'IPTV Firestick Subscription UK', item: url }
        ]
      }
    ]
  };
}

export function getFreeTrialPageSchema() {
  const url = `${SITE_URL}/iptv-uk-free-trial`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Offer',
        name: 'IPTV UK Free Trial',
        description:
          'A free 24-hour IPTV UK trial with full access to live channels, sport, films and the programme guide. No card details required and no automatic renewal.',
        url,
        price: '0',
        priceCurrency: 'GBP',
        availability: 'https://schema.org/InStock',
        offeredBy: PUBLISHER,
        eligibleRegion: {
          '@type': 'Country',
          name: 'United Kingdom'
        }
      },
      {
        '@type': 'FAQPage',
        mainEntity: freeTrialFaqs.map((faq) => ({
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
          { '@type': 'ListItem', position: 2, name: 'IPTV UK Free Trial', item: url }
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
        url: `${SITE_URL}${guideHref(guide.slug)}`
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
