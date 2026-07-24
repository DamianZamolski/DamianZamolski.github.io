const titles: Record<string, string> = {
  home: 'Damian Zamolski',
  'board-game-tools': 'Board Game Tools',
  'arkham-horror-proxy-generator':
    'Arkham Horror: The Card Game — Proxy Generator',
  'star-wars-unlimited-proxy-generator':
    'Star Wars: Unlimited — Proxy Generator',
  'war-of-the-ring-roll-calculator': 'War of the Ring — Roll Calculator',
  'unfathomable-crew-randomizer': 'Unfathomable — Crew Randomizer',
  'card-sleeves-counter': 'Card Sleeves Counter',
  'teams-randomizer': 'Teams Randomizer',
  '3d-print-price-calculator': '3D Print Price Calculator',
  'twilight-imperium-iv-galactic-event-picker':
    'Twilight Imperium IV | Galactic Event Picker',
  drawn: 'Drawn Events',
};

function humanize(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function getTitle(slug: string): string {
  return titles[slug] ?? humanize(slug);
}
