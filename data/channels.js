// The channel line-up shown on /channels.
//
// This is the sample published on the site, not the full playlist — it exists so
// the page ranks for channel-name searches ("IPTV Sky Sports UK", "TNT Sports
// IPTV") and so a visitor can confirm their team's coverage before they buy.
//
// TOTAL_CHANNELS and TOTAL_VOD are what the page advertises as the size of the
// full line-up. Set them to figures you can actually stand behind: they are a
// commercial claim, and an inflated one is what a competitor reports to the ASA.
// Leave them null and the page simply describes the sample instead of quoting a
// total, which is the safe default.
export const TOTAL_CHANNELS = null;
export const TOTAL_VOD = null;

export const channelCategories = [
  { id: 'all', label: 'All Channels' },
  { id: 'sports', label: 'Sports' },
  { id: 'entertainment', label: 'Entertainment' },
  { id: 'movies', label: 'Movies' },
  { id: 'documentaries', label: 'Documentaries' },
  { id: 'kids', label: 'Kids' },
  { id: 'news', label: 'News' },
  { id: 'international', label: 'International' }
];

const c = (name, category, quality = 'HD', country = 'UK') => ({
  name,
  category,
  quality,
  country,
  status: 'Online'
});

export const channels = [
  // ---- Sky Sports ----
  c('Sky Sports Main Event', 'sports', '4K'),
  c('Sky Sports Premier League', 'sports', '4K'),
  c('Sky Sports Football', 'sports'),
  c('Sky Sports Cricket', 'sports'),
  c('Sky Sports F1', 'sports', '4K'),
  c('Sky Sports Golf', 'sports'),
  c('Sky Sports Arena', 'sports'),
  c('Sky Sports Action', 'sports'),
  c('Sky Sports Tennis', 'sports'),
  c('Sky Sports News', 'sports'),
  c('Sky Sports Mix', 'sports'),
  c('Sky Sports Racing', 'sports'),
  c('Sky Sports+', 'sports'),
  c('Sky Sports Box Office', 'sports'),

  // ---- TNT & other sport ----
  c('TNT Sports 1', 'sports', '4K'),
  c('TNT Sports 2', 'sports', '4K'),
  c('TNT Sports 3', 'sports'),
  c('TNT Sports 4', 'sports'),
  c('TNT Sports Ultimate', 'sports', '4K'),
  c('Premier Sports 1', 'sports'),
  c('Premier Sports 2', 'sports'),
  c('LaLiga TV', 'sports'),
  c('Eurosport 1', 'sports'),
  c('Eurosport 2', 'sports'),
  c('Racing TV', 'sports'),
  c('Sky Racing', 'sports'),
  c('MUTV', 'sports'),
  c('LFC TV', 'sports'),
  c('DAZN 1', 'sports'),
  c('DAZN 2', 'sports'),
  c('Viaplay Sports 1', 'sports'),
  c('Viaplay Sports 2', 'sports'),

  // ---- UK terrestrial ----
  c('BBC One', 'entertainment', '4K'),
  c('BBC Two', 'entertainment'),
  c('BBC Three', 'entertainment'),
  c('BBC Four', 'entertainment'),
  c('BBC Scotland', 'entertainment'),
  c('ITV1', 'entertainment', '4K'),
  c('ITV2', 'entertainment'),
  c('ITV3', 'entertainment'),
  c('ITV4', 'entertainment'),
  c('ITVBe', 'entertainment'),
  c('Channel 4', 'entertainment', '4K'),
  c('E4', 'entertainment'),
  c('More4', 'entertainment'),
  c('4seven', 'entertainment'),
  c('Channel 5', 'entertainment'),
  c('5STAR', 'entertainment'),
  c('5USA', 'entertainment'),
  c('5ACTION', 'entertainment'),
  c('5SELECT', 'entertainment'),

  // ---- Sky entertainment ----
  c('Sky Atlantic', 'entertainment', '4K'),
  c('Sky Max', 'entertainment'),
  c('Sky Showcase', 'entertainment'),
  c('Sky Comedy', 'entertainment'),
  c('Sky Witness', 'entertainment'),
  c('Sky Crime', 'entertainment'),
  c('Sky Sci-Fi', 'entertainment'),
  c('Sky Arts', 'entertainment'),
  c('Sky Replay', 'entertainment'),
  c('Sky Mix', 'entertainment'),

  // ---- UKTV & other entertainment ----
  c('Gold', 'entertainment'),
  c('Dave', 'entertainment'),
  c('Alibi', 'entertainment'),
  c('W', 'entertainment'),
  c('Drama', 'entertainment'),
  c('Yesterday', 'entertainment'),
  c('Really', 'entertainment'),
  c('Eden', 'entertainment'),
  c('Comedy Central', 'entertainment'),
  c('Comedy Central Extra', 'entertainment'),
  c('MTV', 'entertainment'),
  c('MTV Music', 'entertainment'),
  c('E!', 'entertainment'),
  c('Syfy', 'entertainment'),
  c('Great! TV', 'entertainment'),
  c('That’s TV', 'entertainment'),
  c('Together TV', 'entertainment'),

  // ---- Movies ----
  c('Sky Cinema Premiere', 'movies', '4K'),
  c('Sky Cinema Select', 'movies'),
  c('Sky Cinema Hits', 'movies'),
  c('Sky Cinema Greats', 'movies'),
  c('Sky Cinema Action', 'movies', '4K'),
  c('Sky Cinema Comedy', 'movies'),
  c('Sky Cinema Drama', 'movies'),
  c('Sky Cinema Thriller', 'movies'),
  c('Sky Cinema Sci-Fi & Horror', 'movies'),
  c('Sky Cinema Family', 'movies'),
  c('Sky Cinema Animation', 'movies'),
  c('Film4', 'movies'),
  c('Film4+1', 'movies'),
  c('Great! Movies', 'movies'),
  c('Great! Action', 'movies'),
  c('Great! Romance', 'movies'),
  c('Talking Pictures TV', 'movies'),
  c('Legend', 'movies'),

  // ---- Documentaries & factual ----
  c('Discovery Channel', 'documentaries'),
  c('Discovery Science', 'documentaries'),
  c('Discovery Turbo', 'documentaries'),
  c('Discovery History', 'documentaries'),
  c('Investigation Discovery', 'documentaries'),
  c('Animal Planet', 'documentaries'),
  c('National Geographic', 'documentaries', '4K'),
  c('Nat Geo Wild', 'documentaries'),
  c('Sky History', 'documentaries'),
  c('Sky History 2', 'documentaries'),
  c('Sky Documentaries', 'documentaries'),
  c('Sky Nature', 'documentaries'),
  c('Smithsonian Channel', 'documentaries'),
  c('Crime & Investigation', 'documentaries'),
  c('PBS America', 'documentaries'),
  c('Blaze', 'documentaries'),
  c('Quest', 'documentaries'),
  c('Quest Red', 'documentaries'),

  // ---- Kids ----
  c('CBeebies', 'kids'),
  c('CBBC', 'kids'),
  c('Cartoon Network', 'kids'),
  c('Cartoonito', 'kids'),
  c('Boomerang', 'kids'),
  c('Nickelodeon', 'kids'),
  c('Nick Jr.', 'kids'),
  c('Nicktoons', 'kids'),
  c('Sky Kids', 'kids'),
  c('Pop', 'kids'),
  c('Tiny Pop', 'kids'),
  c('Baby TV', 'kids'),

  // ---- News ----
  c('BBC News', 'news'),
  c('Sky News', 'news', '4K'),
  c('GB News', 'news'),
  c('TalkTV', 'news'),
  c('BBC Parliament', 'news'),
  c('CNN International', 'news', 'HD', 'US'),
  c('CNBC', 'news', 'HD', 'US'),
  c('Bloomberg TV', 'news', 'HD', 'US'),
  c('Al Jazeera English', 'news', 'HD', 'INT'),
  c('Euronews', 'news', 'HD', 'EU'),
  c('France 24 English', 'news', 'HD', 'FR'),
  c('Sky News Arabia', 'news', 'HD', 'INT'),

  // ---- Ireland, nations & international ----
  c('RTÉ One', 'international', 'HD', 'IE'),
  c('RTÉ2', 'international', 'HD', 'IE'),
  c('Virgin Media One', 'international', 'HD', 'IE'),
  c('Virgin Media Two', 'international', 'HD', 'IE'),
  c('TG4', 'international', 'HD', 'IE'),
  c('S4C', 'international', 'HD', 'UK'),
  c('BBC Alba', 'international', 'HD', 'UK'),
  c('BBC One Scotland', 'international', 'HD', 'UK'),
  c('BBC One Wales', 'international', 'HD', 'UK'),
  c('BBC One Northern Ireland', 'international', 'HD', 'UK'),
  c('STV', 'international', 'HD', 'UK'),
  c('UTV', 'international', 'HD', 'UK'),
  c('Sky Sports Main Event (IE)', 'international', 'HD', 'IE'),
  c('beIN Sports 1', 'international', 'HD', 'INT'),
  c('beIN Sports 2', 'international', 'HD', 'INT'),
  c('Sky Sport Bundesliga', 'international', 'HD', 'DE'),
  c('Canal+ Sport', 'international', 'HD', 'FR'),
  c('Movistar LaLiga', 'international', 'HD', 'ES'),
  c('Rai 1', 'international', 'HD', 'IT'),
  c('TVE Internacional', 'international', 'HD', 'ES'),
  c('TRT 1', 'international', 'HD', 'TR'),
  c('PTV Sports', 'international', 'HD', 'PK'),
  c('Star Sports 1', 'international', 'HD', 'IN'),
  c('Sony TEN 1', 'international', 'HD', 'IN'),
  c('Zee TV', 'international', 'HD', 'IN'),
  c('Colors TV', 'international', 'HD', 'IN'),
  c('ARY Digital', 'international', 'HD', 'PK'),
  c('Geo News', 'international', 'HD', 'PK'),
  c('MBC 1', 'international', 'HD', 'INT'),
  c('ESPN', 'international', 'HD', 'US'),
  c('HBO', 'international', 'HD', 'US'),
  c('AMC', 'international', 'HD', 'US'),
  c('TNT USA', 'international', 'HD', 'US'),
  c('NBC', 'international', 'HD', 'US'),
  c('CBS', 'international', 'HD', 'US'),
  c('Fox', 'international', 'HD', 'US')
];

export function countByCategory(id) {
  return id === 'all' ? channels.length : channels.filter((channel) => channel.category === id).length;
}

// Category blurbs double as the on-page copy under each filter. They carry the
// long-tail phrasing people actually search ("watch Premier League IPTV",
// "IPTV kids channels UK") rather than repeating the category name.
export const categoryCopy = [
  {
    id: 'sports',
    title: 'Sports channels',
    body:
      'The full Sky Sports and TNT Sports line-up, including Main Event, Premier League, Football, Cricket, F1 and the TNT channels that carry Champions League and Premiership rugby. Premier Sports, LaLiga TV, Eurosport and Racing TV cover the fixtures that sit outside the two big packages, and Sky Sports Box Office carries pay-per-view boxing and wrestling events at no extra charge on any plan.'
  },
  {
    id: 'entertainment',
    title: 'Entertainment channels',
    body:
      'Everything on Freeview plus the Sky entertainment package: BBC One through Four, the full ITV and Channel 4 families, Channel 5 and its spin-offs, then Sky Atlantic, Sky Max, Sky Witness, Sky Comedy and the UKTV channels — Gold, Dave, Alibi, W, Drama and Yesterday.'
  },
  {
    id: 'movies',
    title: 'Movie channels',
    body:
      'The complete Sky Cinema line-up, from Premiere for new releases through to the genre channels — Action, Comedy, Drama, Thriller, Sci-Fi & Horror, Family and Animation. Film4, Talking Pictures TV and the Great! Movies channels fill in the back catalogue, and the on-demand library adds films you can start whenever you like.'
  },
  {
    id: 'documentaries',
    title: 'Documentary channels',
    body:
      'Discovery, National Geographic, Sky History, Sky Documentaries, Sky Nature, Animal Planet, Smithsonian and Crime & Investigation, plus the free-to-air factual channels — Quest, Blaze and PBS America.'
  },
  {
    id: 'kids',
    title: 'Kids channels',
    body:
      'CBeebies and CBBC alongside Cartoon Network, Cartoonito, Boomerang, the Nickelodeon channels, Sky Kids and the Pop family. Most players let you build a kids-only favourites list so the children’s channels are the only ones on their guide.'
  },
  {
    id: 'news',
    title: 'News channels',
    body:
      'BBC News, Sky News and GB News for domestic coverage, with CNN International, Bloomberg, CNBC, Al Jazeera English, Euronews and France 24 for the rest.'
  },
  {
    id: 'international',
    title: 'International channels',
    body:
      'Irish channels including RTÉ and Virgin Media, the national variants — S4C, BBC Alba, STV and UTV — and international packages covering India, Pakistan, Turkey, Spain, Italy, Germany, France and the United States. If you are looking for a specific channel from home, message us before you buy and we will confirm whether it is carried.'
  }
];
