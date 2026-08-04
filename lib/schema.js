import {
  firestickFaqs,
  freeTrialFaqs,
  homeFaqs,
  installationFaqs,
  pricingFaqs
} from '../data/faqs';
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

export function getDevicePageSchema(device) {
  const url = `${SITE_URL}/${device.slug}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: device.metaTitle,
        serviceType: device.title,
        description: device.metaDescription,
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
        mainEntity: device.faqs.map((faq) => ({
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
          { '@type': 'ListItem', position: 2, name: device.title, item: url }
        ]
      }
    ]
  };
}


export const SITE_NAME = 'IPTV UK';

function breadcrumb(trail) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      ...trail.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.name,
        item: `${SITE_URL}${item.path}`
      }))
    ]
  };
}

function faqPage(faqs) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer }
    }))
  };
}

// Generic page schema used by the pages that do not need a richer type.
export function getSimplePageSchema({ name, path, description, type = 'WebPage' }) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': type,
        name,
        description,
        url: `${SITE_URL}${path}`,
        isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_URL },
        publisher: PUBLISHER
      },
      breadcrumb([{ name, path }])
    ]
  };
}

export function getChannelsPageSchema(categories) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        name: 'IPTV UK Channel List',
        description:
          'The live TV, sports, movie and entertainment channels included with an IPTV UK subscription.',
        url: `${SITE_URL}/channels`,
        isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_URL },
        publisher: PUBLISHER,
        mainEntity: {
          '@type': 'ItemList',
          name: 'IPTV UK channel categories',
          itemListElement: categories.map((category, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: category
          }))
        }
      },
      breadcrumb([{ name: 'Channels', path: '/channels' }])
    ]
  };
}

export function getPricingPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Product',
        name: 'IPTV UK Subscription',
        description:
          'IPTV subscription for UK viewers with live TV channels, sports, movies, series and 4K streaming across Firestick, Smart TV, Android, iPhone and PC.',
        image: `${SITE_URL}/images/hero-image.png`,
        brand: { '@type': 'Brand', name: SITE_NAME },
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'GBP',
          lowPrice: Math.min(...plans.map((plan) => Number(plan.price))).toFixed(2),
          highPrice: Math.max(...plans.map((plan) => Number(plan.price))).toFixed(2),
          offerCount: plans.length,
          url: `${SITE_URL}/pricing`,
          availability: 'https://schema.org/InStock'
        }
      },
      faqPage(pricingFaqs),
      breadcrumb([{ name: 'Pricing', path: '/pricing' }])
    ]
  };
}

export function getInstallationPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'HowTo',
        name: 'How to set up IPTV UK on any device',
        description:
          'Step-by-step IPTV setup for Firestick, Android TV, Smart TVs, iPhone, iPad, Windows and MAG boxes.',
        url: `${SITE_URL}/installation-guide`,
        totalTime: 'PT10M',
        supply: [
          { '@type': 'HowToSupply', name: 'An active IPTV UK subscription' },
          { '@type': 'HowToSupply', name: 'A stable internet connection' },
          { '@type': 'HowToSupply', name: 'Your IPTV login credentials' }
        ],
        tool: [{ '@type': 'HowToTool', name: 'A compatible IPTV player app' }],
        step: [
          {
            '@type': 'HowToStep',
            name: 'Install a compatible player',
            text: 'Install a supported IPTV player on your device from its app store, or via the Downloader app on Fire TV.'
          },
          {
            '@type': 'HowToStep',
            name: 'Enter your account details',
            text: 'Add the M3U playlist link or Xtream Codes server, username and password from your activation message.'
          },
          {
            '@type': 'HowToStep',
            name: 'Let the channel list load',
            text: 'Leave the player open while channels, categories and the programme guide import for the first time.'
          },
          {
            '@type': 'HowToStep',
            name: 'Test live TV and on demand',
            text: 'Play one live channel and one film or episode to confirm both work before settling in.'
          }
        ]
      },
      faqPage(installationFaqs),
      breadcrumb([{ name: 'Installation Guide', path: '/installation-guide' }])
    ]
  };
}

export function getGuidesIndexSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        name: 'IPTV UK Guides',
        description:
          'Practical IPTV guides for UK viewers: hardware comparisons, device setup, pay TV costs and streaming alternatives.',
        url: `${SITE_URL}/guides`,
        isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_URL },
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
      },
      breadcrumb([{ name: 'Guides', path: '/guides' }])
    ]
  };
}

export function getHomePageSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        name: SITE_NAME,
        url: SITE_URL,
        publisher: PUBLISHER,
        inLanguage: 'en-GB'
      },
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
