export const words: string[] = [
  'äpple', 'strand', 'moln', 'dröm', 'jord', 'eld', 'trädgård', 'hjärta',
  'ö', 'djungel', 'rike', 'lampa', 'berg', 'natt', 'hav', 'planet',
  'drottning', 'älv', 'stjärna', 'träd', 'paraply', 'dal', 'vinter',
  'björn', 'katt', 'hund', 'örnen', 'fisk', 'giraff', 'häst', 'lejon',
  'apa', 'uggla', 'pingvin', 'kanin', 'orm', 'tiger', 'val', 'zebra',
  'banan', 'bröd', 'ost', 'munk', 'ägg', 'pommes', 'druvor', 'hamburgare',
  'pizza', 'ris', 'sallad', 'tomat', 'våffla', 'regn', 'sol', 'vind',
  'snö', 'regnbåge', 'skog', 'öken', 'vulkan', 'vattenfall', 'flaska',
  'stol', 'dörr', 'gaffel', 'nyckel', 'spegel', 'penna', 'ring', 'klocka',
  'bok', 'bil', 'båt', 'fågel', 'blomma', 'frukt', 'mjölk', 'kaffe',
  'mjöl', 'socker', 'salt', 'peppar', 'smör', 'ris', 'soppa', 'kött',
  'fågel', 'gris', 'ko', 'får', 'get', 'anka', 'gås', 'hare', 'igelkott',
  'myra', 'bi', 'fjäril', 'spindel', 'skalbagge', 'gräshoppa', 'mygga', 'fluga',
  'tacka', 'ekorre', 'räv', 'varg', 'älg', 'rådjurs', 'säl', 'utter',
]

export function getRandomWord(): string {
  return words[Math.floor(Math.random() * words.length)]
}
