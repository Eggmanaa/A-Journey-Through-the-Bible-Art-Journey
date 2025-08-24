export interface Story {
  id: string
  title: string
  testament: 'old' | 'new'
  book: string
  chapter: string
  sequence: number
  summary: string
  narrative: string
  artwork: {
    title: string
    artist: string
    date: string
    medium: string
    location: string
    imageUrl: string
    downloadUrl?: string
  }
  curatorInsights: {
    aboutArt: string
    aboutArtist: string
    historicalContext: string
    techniques: string[]
    symbolism: string[]
  }
  activities: {
    lookCloser: string[]
    creativeActivity: string
    discussionQuestions: string[]
    digitalFeatures: string[]
  }
}

export const storiesData: Story[] = [
  // Old Testament Stories
  {
    id: 'creation-of-adam',
    title: 'The Creation of Adam',
    testament: 'old',
    book: 'Genesis',
    chapter: '1-2',
    sequence: 1,
    summary: 'God creates the first man, Adam, breathing life into him in the Garden of Eden.',
    narrative: `In the very beginning, before there was anything, God created the heavens and the earth. He separated light from darkness, sky from water, and land from sea. He filled the world with plants, stars, fish, and animals. Finally, as the pinnacle of His creation, God formed the first man, Adam, from the dust of the ground. He created Adam in His own image, breathing into him the breath of life and giving him a special place in a perfect paradise called the Garden of Eden.`,
    artwork: {
      title: 'The Creation of Adam',
      artist: 'Michelangelo',
      date: 'c. 1508–1512',
      medium: 'Fresco',
      location: 'Sistine Chapel, Vatican City',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Creaci%C3%B3n_de_Ad%C3%A1n.jpg/1280px-Creaci%C3%B3n_de_Ad%C3%A1n.jpg',
      downloadUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/63/The_Creation_of_Adam.jpg'
    },
    curatorInsights: {
      aboutArt: 'Painted on the ceiling of the Sistine Chapel, this is one of the most iconic images in Western art. Michelangelo presents God as an active, powerful figure rushing through the heavens to impart life.',
      aboutArtist: 'Michelangelo was a master of the High Renaissance, known for celebrating human potential and classical form. This reflects Renaissance humanism ideals.',
      historicalContext: 'Before Michelangelo, God was often portrayed as remote and imperial. This revolutionary depiction shows God as accessible and dynamic.',
      techniques: ['Fresco painting', 'Chiaroscuro', 'Anatomical accuracy', 'Foreshortening'],
      symbolism: ['Near-touching fingers represent the moment of creation', 'God\'s flowing cloak may contain Eve and Christ', 'Adam\'s pose mirrors God\'s, showing we are made in His image']
    },
    activities: {
      lookCloser: [
        'Compare Adam\'s hand to God\'s hand - what\'s different about their energy?',
        'Find the figures in God\'s flowing cloak - who might they be?',
        'Notice how Adam and God have similar muscular forms'
      ],
      creativeActivity: 'Try posing like Adam in the painting. Lie on paper and have someone trace your outline, then fill it with drawings of things that make you special and full of life.',
      discussionQuestions: [
        'Why do you think Michelangelo painted their fingers almost touching but not quite?',
        'What are some gifts God has given you that make your life special?',
        'How does it feel to know you are made in God\'s image?'
      ],
      digitalFeatures: [
        'Hotspots on the figures in God\'s cloak explaining the theories about Eve and Christ',
        'Zoom feature on the famous finger gap',
        'Interactive comparison showing before/after restoration'
      ]
    }
  },
  {
    id: 'fall-of-man',
    title: 'The Expulsion of Adam and Eve from Paradise',
    testament: 'old',
    book: 'Genesis',
    chapter: '3',
    sequence: 2,
    summary: 'After disobeying God, Adam and Eve are guided from Paradise by an angel, beginning humanity\'s journey outside Eden.',
    narrative: `In the beautiful Garden of Eden, God gave Adam and Eve only one rule: they could eat from any tree except the Tree of the Knowledge of Good and Evil. But a cunning serpent tempted Eve, who ate the forbidden fruit and gave some to Adam. In that moment of disobedience, sin and shame entered the world. When God came to walk with them in the garden, they hid. As a consequence of their choice, God sent an angel to guide them from Paradise. Though they had to leave their perfect home and face a new life of hardship, pain, and eventual death, God in His mercy did not abandon them completely—He gave them clothing to cover their nakedness and a promise of future redemption.`,
    artwork: {
      title: 'The Expulsion of Adam and Eve from Paradise',
      artist: 'Benjamin West',
      date: 'c. 1791',
      medium: 'Oil on canvas',
      location: 'National Gallery of Art, Washington D.C.',
      imageUrl: 'https://page.gensparksite.com/v1/base64_upload/06aef84ceed9885dfaeacababc051004'
    },
    curatorInsights: {
      aboutArt: 'West\'s Neoclassical masterpiece captures the expulsion with dramatic grandeur, showing both divine authority and human pathos in perfect balance.',
      aboutArtist: 'Benjamin West was a pioneering American Neoclassical painter who became president of the Royal Academy in London and influenced a generation of artists.',
      historicalContext: 'Painted during the Age of Enlightenment, this work reflects Neoclassical ideals of moral instruction through classical beauty and emotional restraint.',
      techniques: ['Neoclassical composition', 'Dynamic figure placement', 'Chiaroscuro lighting', 'Classical drapery and anatomy'],
      symbolism: ['Angel\'s white robes represent divine purity', 'Serpent on ground shows the cause of their fall', 'Dark clouds contrast with Eden\'s light', 'Adam\'s covered face shows shame and remorse']
    },
    activities: {
      lookCloser: [
        'See how the angel guides them with authority yet compassion',
        'Notice the serpent slithering on the ground - the cause of their trouble',
        'Compare the light of Paradise behind them with the darker world ahead',
        'Observe how Adam covers his face while Eve looks back longingly'
      ],
      creativeActivity: 'West painted this with grand, classical style. Try drawing simple figures in dramatic poses to show strong emotions like sorrow, shame, or guidance.',
      discussionQuestions: [
        'Even though Adam and Eve had to leave Eden, how does the angel show God\'s continued care?',
        'Why do you think Adam covers his face while Eve looks back at Paradise?',
        'How does this painting show both the sadness of leaving home and hope for the future?'
      ],
      digitalFeatures: [
        'Interactive light and shadow demonstration showing Neoclassical techniques',
        'Hotspots explaining the symbolic elements like the serpent and clouds',
        'Animation showing the movement from Paradise to the wider world'
      ]
    }
  },
  {
    id: 'noahs-ark',
    title: 'The Great Flood & Noah\'s Ark',
    testament: 'old',
    book: 'Genesis',
    chapter: '6-9',
    sequence: 4,
    summary: 'God saves Noah and his family from the great flood by having them build an ark.',
    narrative: `As humanity grew, so did its wickedness, until God was grieved by what He had made. But one man, Noah, found favor in God's eyes. God told Noah to build a massive boat, an ark, and to gather his family and two of every kind of animal. For forty days and forty nights, rain fell and flooded the entire earth, cleansing it of wickedness. When the waters receded, Noah and his family emerged to a new, clean world. God then placed a rainbow in the sky as a sign of His covenant—a promise to never again destroy the earth with a flood.`,
    artwork: {
      title: 'Noah\'s Ark',
      artist: 'Edward Hicks',
      date: '1846',
      medium: 'Oil on Canvas',
      location: 'Philadelphia Museum of Art',
      imageUrl: 'https://www.arthistoryproject.com/site/assets/files/22657/edward-hicks-noah-1039-s-ark-1846-trivium-art-history.jpg'
    },
    curatorInsights: {
      aboutArt: 'Hicks depicts the animals in peaceful procession, embodying his Quaker belief in a "peaceable kingdom" where all creatures live in harmony.',
      aboutArtist: 'Edward Hicks was a Quaker minister and folk artist, not formally trained but deeply faithful, expressing his beliefs through simple, bright imagery.',
      historicalContext: 'This reflects 19th-century American folk art tradition and Quaker theology of universal peace and divine order.',
      techniques: ['Folk art style', 'Bright colors', 'Flattened perspective', 'Narrative composition'],
      symbolism: ['Peaceful animal pairs represent restored harmony', 'Dark clouds show impending judgment', 'Orderly procession shows divine plan']
    },
    activities: {
      lookCloser: [
        'Find the lion and lamb walking peacefully together',
        'Count how many different animal pairs you can identify',
        'Look at the dark storm clouds - what\'s about to happen?'
      ],
      creativeActivity: 'Draw your own ark and fill it with your favorite animals. Use animal crackers or stickers to make a collage. Make sure every animal has a partner!',
      discussionQuestions: [
        'Noah had great faith to build such a big boat when no one had seen a flood like that. Talk about a time when it was hard to trust.',
        'Why do you think God saved the animals along with Noah\'s family?',
        'What does the rainbow promise mean to you?'
      ],
      digitalFeatures: [
        'Interactive matching game clicking on animal pairs',
        'Animation of storm clouds gathering',
        'Rainbow animation appearing after the story'
      ]
    }
  },
  {
    id: 'tower-of-babel',
    title: 'The Tower of Babel',
    testament: 'old',
    book: 'Genesis',
    chapter: '11',
    sequence: 5,
    summary: 'People try to build a tower to heaven, but God confuses their language.',
    narrative: `After the great flood, all the people on earth spoke one language. As they settled in a land called Shinar, they began to build a great city with a tower that would reach all the way to the heavens. Their goal was to make a name for themselves and to stay together, united in their own strength and pride. God saw their hubris and knew it would lead them away from Him. To scatter them and humble their pride, He confused their language so they could no longer understand one another. Unable to work together, they abandoned the tower and spread out across the earth.`,
    artwork: {
      title: 'The Tower of Babel',
      artist: 'Pieter Bruegel the Elder',
      date: '1563',
      medium: 'Oil on wood panel',
      location: 'Kunsthistorisches Museum, Vienna',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Pieter_Bruegel_the_Elder_-_The_Tower_of_Babel_%28Vienna%29_-_Google_Art_Project_-_edited.jpg/1280px-Pieter_Bruegel_the_Elder_-_The_Tower_of_Babel_%28Vienna%29_-_Google_Art_Project_-_edited.jpg'
    },
    curatorInsights: {
      aboutArt: 'Bruegel creates an incredibly detailed scene with over a thousand tiny figures working on the massive structure, modeled after the Roman Colosseum.',
      aboutArtist: 'Pieter Bruegel the Elder was a master of Northern Renaissance, known for detailed landscapes and scenes of daily life.',
      historicalContext: 'The Colosseum model was deliberate - for 16th-century Christians, it symbolized pagan pride and persecution.',
      techniques: ['Encyclopedic detail', 'Aerial perspective', 'Architectural precision', 'Narrative complexity'],
      symbolism: ['Structurally unsound arches show the project\'s inevitable failure', 'King Nimrod represents misplaced worship', 'Tiny workers show human insignificance']
    },
    activities: {
      lookCloser: [
        'Use a magnifying tool to explore - find boats, cranes, people having lunch',
        'Count how many tiny people you can spot working',
        'Look for signs that the tower is already starting to crumble'
      ],
      creativeActivity: 'Build the tallest tower you can using blocks, LEGOs, or pillows. What makes a tower strong? What makes it fall down?',
      discussionQuestions: [
        'The people built the tower because of pride. What does it mean to be prideful?',
        'How is pride different from being proud of doing a good job?',
        'Why do you think God wanted people to spread out across the earth?'
      ],
      digitalFeatures: [
        'Interactive zoom sections with descriptions of different activities',
        'Hotspots revealing "Building the Arches," "Unloading Ships," etc.',
        'Compare and contrast with actual Colosseum images'
      ]
    }
  },
  {
    id: 'moses-ten-commandments',
    title: 'Moses Receives the Ten Commandments',
    testament: 'old',
    book: 'Exodus',
    chapter: '20',
    sequence: 12,
    summary: 'God gives Moses the Ten Commandments on Mount Sinai.',
    narrative: `After their escape from Egypt, the Israelites traveled through the wilderness to Mount Sinai. There, God called Moses to the top of the mountain, which was covered in a thick cloud of smoke and fire. Amidst thunder and lightning, God gave Moses the Ten Commandments, a set of divine laws for how His people should live in relationship with Him and with each other. These laws, inscribed on two stone tablets, formed the heart of God's covenant with the nation of Israel.`,
    artwork: {
      title: 'Moses with the Ten Commandments',
      artist: 'Rembrandt van Rijn',
      date: '1659',
      medium: 'Oil on canvas',
      location: 'Gemäldegalerie, Berlin',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Rembrandt_-_Moses_with_the_Ten_Commandments_-_Google_Art_Project.jpg'
    },
    curatorInsights: {
      aboutArt: 'Rembrandt captures Moses in righteous anger, about to smash the tablets after seeing the people worship the golden calf.',
      aboutArtist: 'Rembrandt was unparalleled in portraying psychological and spiritual drama within biblical narratives.',
      historicalContext: 'The Hebrew script on the tablets shows Rembrandt\'s research and relationship with Amsterdam\'s Jewish community.',
      techniques: ['Chiaroscuro lighting', 'Psychological realism', 'Authentic Hebrew text', 'Dramatic composition'],
      symbolism: ['Raised tablets show impending destruction', 'Moses\' expression shows divine anger and human sorrow', 'Broken covenant theme']
    },
    activities: {
      lookCloser: [
        'Moses looks angry and sad - why? What happened right before this moment?',
        'Look at the Hebrew writing on the tablets',
        'Notice how the light focuses on Moses\' face and the tablets'
      ],
      creativeActivity: 'Create "Family Commandments" - five rules that help your family live together lovingly. Write and decorate them.',
      discussionQuestions: [
        'Why was Moses so upset that he broke the tablets?',
        'Why are promises so important?',
        'Which commandment do you think is most important for kids your age?'
      ],
      digitalFeatures: [
        'Pop-up translation of visible Hebrew commandments',
        'Interactive timeline showing what led to Moses\' anger',
        'Comparison with other artists\' versions of this scene'
      ]
    }
  },
  {
    id: 'cain-kills-abel',
    title: 'Cain Kills Abel',
    testament: 'old',
    book: '1 Samuel',
    chapter: '4',
    sequence: 3,
    summary: 'The first murder occurs when Cain, jealous of his brother Abel, kills him in the field.',
    narrative: `After leaving Eden, Adam and Eve had two sons, Cain and Abel. Cain was a farmer, and Abel was a shepherd. Both brought offerings to God: Cain brought some of his crops, and Abel brought the best of his flock. God was pleased with Abel's offering but not with Cain's. Filled with jealousy and anger, Cain lured his brother into a field and killed him, committing the first murder. This tragic event showed how sin had begun to spread, causing pain and separation not just between humanity and God, but within the human family itself.`,
    artwork: {
      title: 'Cain and Abel',
      artist: 'Titian',
      date: 'c. 1542–1544',
      medium: 'Oil on canvas',
      location: 'Santa Maria della Salute, Venice',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Titian_-_Cain_and_Abel.JPG/800px-Titian_-_Cain_and_Abel.JPG'
    },
    curatorInsights: {
      aboutArt: 'Titian painted this scene with dramatic intensity characteristic of the Mannerist style. The composition is filled with violent energy, defined by strong, intersecting diagonals and spiraling, muscular figures.',
      aboutArtist: 'Titian was a master of the Venetian School, known for his dramatic use of color and dynamic compositions that influenced generations of artists.',
      historicalContext: 'This painting was originally created for a church ceiling, designed to be viewed from below with extreme foreshortening techniques.',
      techniques: ['Mannerist style', 'Dynamic composition', 'Foreshortening', 'Dramatic diagonals'],
      symbolism: ['Violent energy represents sin\'s destructive power', 'Muscular figures show human strength turned to evil', 'Dark storm clouds suggest divine judgment']
    },
    activities: {
      lookCloser: [
        'Notice the violent action and energy in the composition',
        'Look at how the figures seem to spiral and twist',
        'Observe the dark, stormy atmosphere Titian created'
      ],
      creativeActivity: 'Use clay or play-doh to create figures that show strong emotions like anger or jealousy. How can you position their bodies to express these feelings?',
      discussionQuestions: [
        'Cain was jealous of his brother. Talk about what jealousy feels like and why it can be dangerous.',
        'What are better ways to handle feeling jealous of someone?',
        'How did sin spread from Adam and Eve to their children?'
      ],
      digitalFeatures: [
        'Virtual gallery showing Titian\'s three ceiling paintings together',
        'Animation showing the spiral movement in the composition',
        'Comparison with the Roman Colosseum architecture'
      ]
    }
  },
  {
    id: 'call-of-abraham',
    title: 'The Call of Abraham',
    testament: 'old',
    book: 'Genesis',
    chapter: '12',
    sequence: 6,
    summary: 'God calls Abram to leave his homeland and journey to a promised land.',
    narrative: `Generations after the Tower of Babel, God chose a man named Abram (later renamed Abraham) from the city of Ur. God called him to leave his home, his relatives, and everything he knew, and to journey to a new land that God would show him. God made a great promise to Abram: "I will make you into a great nation, and I will bless you; I will make your name great, and you will be a blessing... and all peoples on earth will be blessed through you" (Genesis 12:2-3). Trusting in God's promise, the 75-year-old Abram, his wife Sarai, and his nephew Lot set out in faith, beginning a journey that would establish the nation of Israel.`,
    artwork: {
      title: 'Abraham\'s Journey to Canaan',
      artist: 'Pieter Lastman',
      date: '1614',
      medium: 'Oil on canvas',
      location: 'The Hermitage, St. Petersburg',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Lastman%2C_Pieter_-_Abraham%27s_Journey_to_Canaan_-_1614.jpg'
    },
    curatorInsights: {
      aboutArt: 'Lastman captures the very moment of Abraham\'s calling, with the entire caravan stopped as divine light emanates from a grove of trees.',
      aboutArtist: 'Pieter Lastman was a leading Dutch painter and teacher of Rembrandt, known for his historical and biblical narratives with dramatic lighting.',
      historicalContext: 'This work demonstrates the Dutch Golden Age tradition of biblical storytelling with meticulous attention to everyday details.',
      techniques: ['Dramatic lighting effects', 'Detailed landscape', 'Narrative composition', 'Symbolic light representation'],
      symbolism: ['Divine light represents God\'s presence', 'Stopped caravan shows the momentous decision', 'Ram foreshadows future test of faith']
    },
    activities: {
      lookCloser: [
        'Find where God\'s presence is shown in the painting',
        'Look for Abraham, Sarai, and Lot in the scene',
        'Notice all the details of their traveling caravan'
      ],
      creativeActivity: 'Pack a small "journey bag" with five things you would take if you had to move far away. What is most important to you?',
      discussionQuestions: [
        'Abraham had to leave his home to follow God\'s call. Have you ever had to do something new that was scary?',
        'What gave Abraham the courage to trust God\'s promise?',
        'How do you think God speaks to people today?'
      ],
      digitalFeatures: [
        'Animation of soft, glowing light from the grove',
        'Hotspots identifying each family member',
        'Interactive map showing Abraham\'s journey route'
      ]
    }
  },
  {
    id: 'sacrifice-of-isaac',
    title: 'The Sacrifice of Isaac',
    testament: 'old',
    book: 'Genesis',
    chapter: '22',
    sequence: 7,
    summary: 'God tests Abraham\'s faith by asking him to sacrifice his beloved son Isaac.',
    narrative: `Years after his call, God tested Abraham's faith in the most extreme way possible. He commanded Abraham to take his beloved son, Isaac—the child of God's promise—to the region of Moriah and sacrifice him as a burnt offering. Heartbroken but obedient, Abraham took Isaac, the wood, and the fire and journeyed to the mountain. Just as Abraham raised the knife to slay his son, an angel of the Lord called out from heaven, stopping him. The angel declared that now God knew Abraham truly feared Him, for he had not withheld his only son. Abraham then saw a ram caught in a thicket, which he sacrificed instead.`,
    artwork: {
      title: 'Sacrifice of Isaac',
      artist: 'Caravaggio',
      date: 'c. 1603',
      medium: 'Oil on canvas',
      location: 'Uffizi Gallery, Florence',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Sacrifice_of_Isaac-Caravaggio_%28Uffizi%29.jpg'
    },
    curatorInsights: {
      aboutArt: 'Caravaggio captures the climactic moment with breathtaking tension, showing the angel physically intervening to stop Abraham\'s knife.',
      aboutArtist: 'Caravaggio revolutionized Baroque art with his intense realism and dramatic use of light and shadow (chiaroscuro).',
      historicalContext: 'This painting was commissioned by Cardinal Maffeo Barberini, demonstrating the Church\'s use of art for spiritual instruction.',
      techniques: ['Chiaroscuro lighting', 'Dramatic realism', 'Physical intervention', 'Emotional intensity'],
      symbolism: ['Angel\'s firm grip shows divine intervention', 'Isaac\'s terror represents human vulnerability', 'Ram symbolizes God\'s provision']
    },
    activities: {
      lookCloser: [
        'Look at the angel\'s hand grabbing Abraham\'s wrist',
        'Notice Isaac\'s expression of fear and confusion',
        'Find the ram that will be sacrificed instead'
      ],
      creativeActivity: 'This painting uses strong light and dark shadows. In a dark room, use a flashlight to create dramatic lighting effects on different objects.',
      discussionQuestions: [
        'This was a very difficult test for Abraham. Why do you think God asked him to do this?',
        'What does this story teach us about faith and trust?',
        'How did God provide a solution at the last moment?'
      ],
      digitalFeatures: [
        'Hotspot on angel\'s hand explaining divine intervention',
        'Close-up zoom of facial expressions',
        'Timeline showing the complete story sequence'
      ]
    }
  },
  {
    id: 'jacob-wrestles-angel',
    title: 'Jacob Wrestles with the Angel',
    testament: 'old',
    book: 'Genesis',
    chapter: '32',
    sequence: 8,
    summary: 'Jacob wrestles all night with a mysterious figure who gives him a new name: Israel.',
    narrative: `Jacob, the son of Isaac and grandson of Abraham, was on his way to a tense reunion with his brother Esau, whom he had deceived years earlier. Fearing for his life, Jacob sent his family ahead and spent the night alone in prayer. A mysterious man appeared and began to wrestle with him, and they struggled together until dawn. The man, seeing he could not overpower Jacob, touched Jacob's hip and put it out of joint. As morning broke, the man said, "Let me go," but Jacob replied, "I will not let you go unless you bless me." The man then gave Jacob a new name: Israel, which means "he struggles with God." Jacob realized he had seen God face to face, and the encounter transformed him.`,
    artwork: {
      title: 'Jacob Wrestling with the Angel',
      artist: 'Rembrandt van Rijn',
      date: 'c. 1659',
      medium: 'Oil on canvas',
      location: 'Gemäldegalerie, Berlin',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Jakob_ringt_mit_dem_Engel_-_Gem%C3%A4ldegalerie_Berlin_-_5190519.jpg'
    },
    curatorInsights: {
      aboutArt: 'Rembrandt transforms this story of conflict into a tender, intimate embrace, showing the spiritual rather than physical nature of the struggle.',
      aboutArtist: 'Rembrandt was the master of Dutch Golden Age painting, unparalleled in portraying psychological and spiritual depth in biblical scenes.',
      historicalContext: 'This interpretation reflects Rembrandt\'s mature understanding of faith as an intimate, personal relationship with the divine.',
      techniques: ['Intimate chiaroscuro', 'Psychological realism', 'Tender brushwork', 'Spiritual symbolism'],
      symbolism: ['Embrace represents soul clinging to God', 'Angel\'s compassionate expression shows divine mercy', 'Night setting suggests spiritual darkness']
    },
    activities: {
      lookCloser: [
        'Is the angel fighting Jacob or embracing him?',
        'Look at the expressions on both faces',
        'Notice how Rembrandt uses light to focus on their connection'
      ],
      creativeActivity: 'Act out the scene with a friend. First try it as a fight, then as a hug. Which feels more like Rembrandt\'s painting?',
      discussionQuestions: [
        'Jacob received a new name, Israel, after his struggle. What does your name mean?',
        'Why did Jacob refuse to let go without a blessing?',
        'How can struggling with difficult things sometimes make us stronger?'
      ],
      digitalFeatures: [
        'Comparison gallery showing different artists\' interpretations',
        'Animation highlighting the tender embrace',
        'Interactive name meaning explorer'
      ]
    }
  },
  {
    id: 'joseph-coat-many-colors',
    title: 'Joseph and the Coat of Many Colors',
    testament: 'old',
    book: 'Genesis',
    chapter: '37',
    sequence: 9,
    summary: 'Jacob gives Joseph a special coat, making his brothers jealous enough to sell him into slavery.',
    narrative: `Jacob (now called Israel) had twelve sons, but he loved Joseph the most because he was the son of his old age. To show his favor, Jacob gave Joseph a beautiful, ornate coat of many colors. This made Joseph's brothers intensely jealous. Their jealousy grew when Joseph told them about two dreams he had, both suggesting that one day his parents and brothers would bow down to him. Consumed by envy, the brothers conspired against him, sold him into slavery to a passing caravan, and then deceived their father into believing Joseph had been killed by a wild animal.`,
    artwork: {
      title: 'Joseph\'s Tunic',
      artist: 'Diego Velázquez',
      date: '1630',
      medium: 'Oil on canvas',
      location: 'Monasterio de El Escorial, San Lorenzo de El Escorial',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Diego_Vel%C3%A1zquez_065.jpg'
    },
    curatorInsights: {
      aboutArt: 'Velázquez captures the moment the brothers present the bloodstained tunic to Jacob, showcasing his mastery of dramatic composition and psychological insight.',
      aboutArtist: 'Diego Velázquez was the leading artist of the Spanish Golden Age, renowned for his realistic portrayals and complex emotional narratives.',
      historicalContext: 'Painted during Velázquez\'s first Italian period, this work demonstrates his evolution toward greater psychological complexity.',
      techniques: ['Theatrical composition', 'Dramatic chiaroscuro', 'Psychological realism', 'Symbolic details'],
      symbolism: ['Bloodstained coat represents deception', 'Jacob\'s gesture shows pure grief', 'Brothers\' varied expressions reveal guilt']
    },
    activities: {
      lookCloser: [
        'Point to each brother and guess what he\'s feeling from his expression',
        'Look at Jacob\'s dramatic gesture of grief',
        'Find the small dog - what is he doing?'
      ],
      creativeActivity: 'Joseph\'s coat was beautiful and colorful. Design your own special coat on paper using bright colors and patterns.',
      discussionQuestions: [
        'The brothers\' jealousy led them to do a terrible thing. How could they have handled their feelings differently?',
        'Have you ever felt jealous of someone? What helped you feel better?',
        'This story has a happy ending later - how does Joseph eventually save his family?'
      ],
      digitalFeatures: [
        'Interactive "emotion detector" for each brother\'s face',
        'Color palette tool for designing coats',
        'Story continuation preview showing Joseph in Egypt'
      ]
    }
  },
  {
    id: 'moses-burning-bush',
    title: 'Moses and the Burning Bush',
    testament: 'old',
    book: 'Exodus',
    chapter: '3',
    sequence: 10,
    summary: 'God appears to Moses in a burning bush and calls him to lead the Israelites out of Egypt.',
    narrative: `Years after Joseph's time, the Israelites had become slaves in Egypt. A man named Moses, who had been raised in Pharaoh's palace but had fled into the wilderness after killing an Egyptian, was tending his flock on Mount Horeb. There, he saw a wondrous sight: a bush that was on fire but was not burning up. As he drew closer, the voice of God called to him from the bush, saying, "Moses! Moses!... Do not come any closer. Take off your sandals, for the place where you are standing is holy ground". God then revealed His plan: Moses was to return to Egypt and lead the Israelites to freedom.`,
    artwork: {
      title: 'Moses and the Burning Bush',
      artist: 'Dieric Bouts',
      date: 'c. 1465–1470',
      medium: 'Oil on panel',
      location: 'Philadelphia Museum of Art',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Attributed_to_Dierick_Bouts_the_Elder%2C_Netherlandish_%28active_Louvain%29%2C_first_securely_documented_1447%2C_died_1475_-_Moses_and_the_Burning_Bush%2C_with_Moses_Removing_His_Shoes_-_Google_Art_Project.jpg'
    },
    curatorInsights: {
      aboutArt: 'Bouts uses "continuous narrative" technique, showing Moses twice in the same painting - first removing his shoes, then kneeling before the bush.',
      aboutArtist: 'Dieric Bouts was a master of Early Netherlandish painting, known for his serene compositions and detailed landscapes.',
      historicalContext: 'This painting exemplifies the Northern Renaissance tradition of combining meticulous detail with spiritual symbolism.',
      techniques: ['Continuous narrative', 'Detailed landscape', 'Symbolic representation', 'Northern Renaissance style'],
      symbolism: ['Burning bush represents God\'s presence', 'Angel in flames shows divine messenger', 'Holy ground requires reverence']
    },
    activities: {
      lookCloser: [
        'Can you find Moses two times in the picture?',
        'Look for the angel inside the burning bush',
        'Notice the detailed landscape and distant castle'
      ],
      creativeActivity: 'The ground was holy because God was there. Draw a picture of a place that feels special or "holy" to you.',
      discussionQuestions: [
        'God spoke to Moses from a burning bush. What are some ways God speaks to people today?',
        'Why did Moses have to take off his shoes?',
        'How do you think Moses felt when God called his name?'
      ],
      digitalFeatures: [
        'Flickering flame animation on the bush',
        'Hotspot revealing the angel in the flames',
        'Interactive path following Moses\' journey'
      ]
    }
  },
  {
    id: 'parting-red-sea',
    title: 'The Parting of the Red Sea',
    testament: 'old',
    book: 'Exodus',
    chapter: '14',
    sequence: 11,
    summary: 'Moses parts the Red Sea, allowing the Israelites to escape from Pharaoh\'s army.',
    narrative: `After God sent ten plagues upon Egypt, Pharaoh finally agreed to let the Israelites go. But soon after they left, Pharaoh changed his mind and sent his army of chariots to pursue them. Trapped between the charging Egyptian army and the vast Red Sea, the Israelites were terrified. But Moses, instructed by God, stretched his staff out over the water. God sent a strong east wind that blew all night, parting the sea and creating a path of dry land. The Israelites walked through the sea with a wall of water on their right and on their left. When the Egyptian army followed them, Moses stretched out his hand again, and the waters returned, drowning the entire army.`,
    artwork: {
      title: 'The Crossing of the Red Sea',
      artist: 'Agnolo Bronzino',
      date: '1541–1542',
      medium: 'Fresco',
      location: 'Palazzo Vecchio, Florence',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Agnolo_Bronzino_-_The_crossing_of_the_Red_Sea_-_Google_Art_Project.jpg'
    },
    curatorInsights: {
      aboutArt: 'Bronzino\'s fresco combines the biblical miracle with classical figures, serving as both religious art and political allegory for Medici power.',
      aboutArtist: 'Agnolo Bronzino was court painter to the Medici, master of Mannerist style known for artificial elegance and complex compositions.',
      historicalContext: 'This fresco was created for the Duchess Eleonora\'s chapel, using biblical narrative to celebrate contemporary political victories.',
      techniques: ['Mannerist style', 'Classical nude figures', 'Political allegory', 'Complex composition'],
      symbolism: ['Moses represents Duke Cosimo I', 'Egyptian defeat symbolizes Medici victory', 'Classical figures show Renaissance ideals']
    },
    activities: {
      lookCloser: [
        'What\'s happening in the background with the water and armies?',
        'Look at the elegant figures in the foreground',
        'Can you find Moses leading the people?'
      ],
      creativeActivity: 'This is a fresco painted on wet plaster. Try painting with watercolors on wet paper and see how colors blend differently.',
      discussionQuestions: [
        'The Israelites were trapped and scared, but God made a way for them. Talk about a time you were scared and found help.',
        'Why do you think God performed this miracle?',
        'How would you have felt walking between walls of water?'
      ],
      digitalFeatures: [
        'Animation showing the water parting',
        'Comparison with classical statue poses',
        'Interactive timeline of the escape from Egypt'
      ]
    }
  },
  {
    id: 'david-and-goliath',
    title: 'David and Goliath',
    testament: 'old',
    book: '1 Samuel',
    chapter: '17',
    sequence: 13,
    summary: 'Young David defeats the giant Goliath with faith and a simple sling.',
    narrative: `The army of Israel was terrified by a Philistine champion named Goliath, a giant of a man who challenged any Israelite to single combat. For forty days, no one dared to fight him. Then a young shepherd boy named David, visiting his brothers at the battlefront, heard the giant's taunts. Filled with faith in God, David accepted the challenge. Rejecting the king's armor, he went to face Goliath with only his shepherd's staff, a sling, and five smooth stones. David slung a stone that struck the giant in the forehead, and Goliath fell to the ground. David then took the giant's own sword and killed him, securing a great victory for Israel.`,
    artwork: {
      title: 'David with the Head of Goliath',
      artist: 'Caravaggio',
      date: 'c. 1610',
      medium: 'Oil on canvas',
      location: 'Galleria Borghese, Rome',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/David_with_the_Head_of_Goliath-Caravaggio_%281610%29.jpg'
    },
    curatorInsights: {
      aboutArt: 'Caravaggio shows the aftermath rather than the battle, focusing on David\'s complex emotions after his victory.',
      aboutArtist: 'Caravaggio was known for dramatic realism and intense use of light and shadow (chiaroscuro).',
      historicalContext: 'Painted during Caravaggio\'s troubled later years, some see his own face in Goliath\'s head.',
      techniques: ['Tenebrism (dramatic lighting)', 'Psychological realism', 'Emotional complexity', 'Classical composition'],
      symbolism: ['David\'s mixed expression shows victory is complex', 'Goliath\'s sword becomes the instrument of his defeat', 'Youth overcoming age and strength']
    },
    activities: {
      lookCloser: [
        'Look at David\'s face - does he look happy or sad about winning?',
        'Find Goliath\'s own sword being used against him',
        'Notice how the light dramatically highlights the key elements'
      ],
      creativeActivity: 'Practice with a "sling" using a sock and soft ball. Set up targets and see how accuracy matters more than strength.',
      discussionQuestions: [
        'Why didn\'t David use the king\'s armor?',
        'Have you ever had to do something that seemed too big or scary for you?',
        'What does this story teach about faith versus fear?'
      ],
      digitalFeatures: [
        'Hotspots explaining David\'s complex emotions',
        'Interactive comparison of David\'s size versus Goliath\'s',
        'Animation showing the stone\'s trajectory'
      ]
    }
  },

  // New Testament Stories
  {
    id: 'annunciation',
    title: 'The Annunciation',
    testament: 'new',
    book: 'Luke',
    chapter: '1',
    sequence: 14,
    summary: 'The angel Gabriel announces to Mary that she will bear the Son of God.',
    narrative: `In the sixth month of Elizabeth's pregnancy, God sent the angel Gabriel to Nazareth, a town in Galilee, to a virgin named Mary who was pledged to be married to Joseph. The angel went to her and said, "Greetings, you who are highly favored! The Lord is with you." Mary was greatly troubled at his words and wondered what kind of greeting this might be. But the angel said to her, "Do not be afraid, Mary; you have found favor with God. You will conceive and give birth to a son, and you are to call him Jesus. He will be great and will be called the Son of the Most High." Mary asked, "How will this be, since I am a virgin?" The angel answered, "The Holy Spirit will come on you, and the power of the Most High will overshadow you. So the holy one to be born will be called the Son of God."`,
    artwork: {
      title: 'The Annunciation',
      artist: 'Leonardo da Vinci',
      date: 'c. 1472–1476',
      medium: 'Oil and tempera on wood',
      location: 'Uffizi Gallery, Florence',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Leonardo_da_Vinci_-_Annunciazione_-_Google_Art_Project.jpg'
    },
    curatorInsights: {
      aboutArt: 'This is thought to be Leonardo\'s earliest complete major work, showing his mastery of perspective, botanical accuracy, and atmospheric effects.',
      aboutArtist: 'Leonardo da Vinci was the quintessential Renaissance genius, combining artistic brilliance with scientific observation and innovation.',
      historicalContext: 'Painted during the Early Renaissance, this work demonstrates the period\'s focus on naturalism, classical architecture, and biblical humanism.',
      techniques: ['Linear perspective', 'Atmospheric perspective', 'Botanical accuracy', 'Classical architecture'],
      symbolism: ['Lily represents Mary\'s purity', 'Garden setting suggests new Eden', 'Angel\'s gesture shows divine message']
    },
    activities: {
      lookCloser: [
        'Notice how Leonardo painted every detail of the flowers and trees',
        'Look at the angel\'s beautiful wings and flowing robes',
        'See how the background landscape fades into the distance'
      ],
      creativeActivity: 'Leonardo studied nature carefully. Go outside and draw a flower or leaf, paying attention to every detail like he did.',
      discussionQuestions: [
        'Mary was surprised by the angel\'s message. How do you think she felt?',
        'What does it mean that Mary "found favor with God"?',
        'Mary said yes to God\'s plan. Talk about a time you said yes to something important.'
      ],
      digitalFeatures: [
        'Botanical guide to Leonardo\'s flowers',
        'Perspective lines showing Renaissance techniques',
        'Animation of the angel\'s arrival'
      ]
    }
  },
  {
    id: 'nativity',
    title: 'The Nativity',
    testament: 'new',
    book: 'Luke',
    chapter: '2',
    sequence: 15,
    summary: 'Jesus is born in Bethlehem, bringing light and hope to the world.',
    narrative: `In those days Caesar Augustus issued a decree that a census should be taken of the entire Roman world. So Joseph went up from the town of Nazareth in Galilee to Judea, to Bethlehem the town of David, because he belonged to the house and line of David. He went there to register with Mary, who was pledged to be married to him and was expecting a child. While they were there, the time came for the baby to be born, and she gave birth to her firstborn, a son. She wrapped him in cloths and placed him in a manger, because there was no guest room available for them. And there were shepherds living out in the fields nearby, keeping watch over their flocks at night. An angel of the Lord appeared to them, and the glory of the Lord shone around them.`,
    artwork: {
      title: 'The Adoration of the Shepherds',
      artist: 'Gerard van Honthorst',
      date: '1622',
      medium: 'Oil on canvas',
      location: 'Wallraf-Richartz Museum, Cologne',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Gerard_van_Honthorst_-_Adoration_of_the_Shepherds_%281622%29.jpg'
    },
    curatorInsights: {
      aboutArt: 'Honthorst was famous for his candlelit night scenes, earning him the nickname "Gherardo delle Notti" (Gerard of the Nights).',
      aboutArtist: 'Gerard van Honthorst was a Dutch Golden Age painter who specialized in dramatic lighting effects and biblical scenes.',
      historicalContext: 'This work exemplifies the Baroque period\'s emphasis on emotional intensity and divine light as spiritual metaphor.',
      techniques: ['Candlelight effects', 'Chiaroscuro', 'Emotional expression', 'Baroque drama'],
      symbolism: ['Light represents Christ as light of the world', 'Humble shepherds show Jesus came for all people', 'Stable setting emphasizes humility']
    },
    activities: {
      lookCloser: [
        'See how the light from baby Jesus illuminates everyone\'s faces',
        'Look at the shepherds\' expressions of wonder and joy',
        'Notice the animals peacefully watching the scene'
      ],
      creativeActivity: 'Create your own nativity scene using toys, drawings, or even cookies. What would you include?',
      discussionQuestions: [
        'Why do you think Jesus was born in a stable instead of a palace?',
        'The shepherds were the first to hear about Jesus. What does this tell us?',
        'How does light make you feel? Why is Jesus called the "light of the world"?'
      ],
      digitalFeatures: [
        'Interactive light source showing how it illuminates faces',
        'Shepherd journey animation',
        'Christmas carol audio connections'
      ]
    }
  },
  {
    id: 'presentation-temple',
    title: 'The Presentation in the Temple',
    testament: 'new',
    book: 'Luke',
    chapter: '2',
    sequence: 16,
    summary: 'Mary and Joseph present baby Jesus at the temple, where Simeon recognizes the Messiah.',
    narrative: `When the time came for the purification rites required by the Law of Moses, Joseph and Mary took Jesus to Jerusalem to present him to the Lord (as it is written in the Law of the Lord, "Every firstborn male is to be consecrated to the Lord"). Now there was a man in Jerusalem called Simeon, who was righteous and devout. He was waiting for the consolation of Israel, and the Holy Spirit was on him. It had been revealed to him by the Holy Spirit that he would not die before he had seen the Lord's Messiah. Moved by the Spirit, he went into the temple courts. When the parents brought in the child Jesus to do for him what the custom of the Law required, Simeon took him in his arms and praised God.`,
    artwork: {
      title: 'The Presentation of Jesus in the Temple',
      artist: 'Ambrosius Benson',
      date: 'c. 1540',
      medium: 'Oil on wood',
      location: 'Royal Museums of Fine Arts, Brussels',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Ambrosius_Benson_-_The_Presentation_in_the_Temple_-_Google_Art_Project.jpg'
    },
    curatorInsights: {
      aboutArt: 'Benson\'s painting captures the intimate moment of recognition between the aged Simeon and the infant Jesus in a detailed temple setting.',
      aboutArtist: 'Ambrosius Benson was a Flemish Renaissance painter known for his religious scenes and detailed architectural backgrounds.',
      historicalContext: 'This work reflects the Northern Renaissance tradition of combining religious devotion with meticulous observational detail.',
      techniques: ['Flemish detail', 'Architectural precision', 'Intimate composition', 'Religious symbolism'],
      symbolism: ['Temple setting represents Old Testament meeting New', 'Simeon\'s age shows fulfillment of prophecy', 'Light represents divine recognition']
    },
    activities: {
      lookCloser: [
        'Look at Simeon\'s gentle hands holding baby Jesus',
        'Notice the detailed architecture of the temple',
        'See the expressions of Mary and Joseph watching'
      ],
      creativeActivity: 'Simeon had waited his whole life to see Jesus. Draw or write about something you\'re excited to wait for.',
      discussionQuestions: [
        'Simeon knew Jesus was special just by looking at him. How do you think he knew?',
        'What does it mean to wait patiently for something important?',
        'How do you think Mary and Joseph felt watching this scene?'
      ],
      digitalFeatures: [
        'Temple architecture exploration',
        'Age progression showing Simeon\'s long wait',
        'Scripture connection to prophecies'
      ]
    }
  },
  {
    id: 'baptism-of-christ',
    title: 'The Baptism of Christ',
    testament: 'new',
    book: 'Matthew',
    chapter: '3',
    sequence: 17,
    summary: 'John the Baptist baptizes Jesus in the Jordan River as the Holy Spirit descends.',
    narrative: `Then Jesus came from Galilee to the Jordan to be baptized by John. But John tried to deter him, saying, "I need to be baptized by you, and do you come to me?" Jesus replied, "Let it be so now; it is proper for us to do this to fulfill all righteousness." Then John consented. As soon as Jesus was baptized, he went up out of the water. At that moment heaven was opened, and he saw the Spirit of God descending like a dove and alighting on him. And a voice from heaven said, "This is my Son, whom I love; with him I am well pleased."`,
    artwork: {
      title: 'The Baptism of Christ',
      artist: 'Andrea del Verrocchio and Leonardo da Vinci',
      date: 'c. 1472–1475',
      medium: 'Oil and tempera on wood',
      location: 'Uffizi Gallery, Florence',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Andrea_del_Verrocchio%2C_Leonardo_da_Vinci_-_Baptism_of_Christ_-_Uffizi.jpg/800px-Andrea_del_Verrocchio%2C_Leonardo_da_Vinci_-_Baptism_of_Christ_-_Uffizi.jpg'
    },
    curatorInsights: {
      aboutArt: 'This famous collaboration shows young Leonardo\'s hand in the left angel and landscape, demonstrating his emerging genius.',
      aboutArtist: 'Andrea del Verrocchio was Leonardo\'s master, and legend says he stopped painting after seeing Leonardo\'s superior angel.',
      historicalContext: 'This painting represents the transition from Early to High Renaissance, showing evolving techniques in one work.',
      techniques: ['Collaborative painting', 'Renaissance perspective', 'Divine symbolism', 'Naturalistic details'],
      symbolism: ['Dove represents Holy Spirit', 'River Jordan shows purification', 'Angels witness divine moment']
    },
    activities: {
      lookCloser: [
        'Compare the two angels - can you see the difference in style?',
        'Look for the dove representing the Holy Spirit',
        'Notice how the water flows around Jesus\' feet'
      ],
      creativeActivity: 'This painting was made by two artists working together. Create artwork with a friend, taking turns adding details.',
      discussionQuestions: [
        'Why did Jesus choose to be baptized if he had never sinned?',
        'John felt unworthy to baptize Jesus. Talk about feeling humble.',
        'God\'s voice said he was pleased with Jesus. When do your parents express pride in you?'
      ],
      digitalFeatures: [
        'Split view showing which parts Leonardo painted',
        'Animation of the dove descending',
        'Audio of God\'s voice from heaven'
      ]
    }
  },
  {
    id: 'calling-disciples',
    title: 'The Calling of the Disciples',
    testament: 'new',
    book: 'Matthew',
    chapter: '4',
    sequence: 18,
    summary: 'Jesus calls his first disciples to follow him and become fishers of men.',
    narrative: `As Jesus was walking beside the Sea of Galilee, he saw two brothers, Simon called Peter and his brother Andrew. They were casting a net into the lake, for they were fishermen. "Come, follow me," Jesus said, "and I will send you out to fish for people." At once they left their nets and followed him. Going on from there, he saw two other brothers, James son of Zebedee and his brother John. They were in a boat with their father Zebedee, preparing their nets. Jesus called them, and immediately they left the boat and their father and followed him.`,
    artwork: {
      title: 'The Calling of Saints Peter and Andrew',
      artist: 'Caravaggio',
      date: '1603–1606',
      medium: 'Oil on canvas',
      location: 'Hampton Court Palace, London',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Caravaggio_-_The_Calling_of_Saint_Matthew.jpg/800px-Caravaggio_-_The_Calling_of_Saint_Matthew.jpg'
    },
    curatorInsights: {
      aboutArt: 'Caravaggio revolutionized religious art by depicting biblical figures as ordinary people in contemporary settings.',
      aboutArtist: 'Caravaggio\'s realistic approach made sacred stories immediate and relatable to common people.',
      historicalContext: 'This painting reflects Counter-Reformation ideals of making religious art accessible and emotionally engaging.',
      techniques: ['Dramatic chiaroscuro', 'Contemporary settings', 'Realistic figures', 'Emotional immediacy'],
      symbolism: ['Simple clothing shows Jesus came for ordinary people', 'Pointing gesture indicates divine calling', 'Light represents spiritual awakening']
    },
    activities: {
      lookCloser: [
        'Notice how Jesus is dressed simply like everyone else',
        'Look at the disciples\' surprised expressions',
        'See how light draws attention to the important moment'
      ],
      creativeActivity: 'The disciples left their jobs to follow Jesus. Draw what your family members do for work, and imagine Jesus calling them.',
      discussionQuestions: [
        'The disciples left everything immediately to follow Jesus. What made them do that?',
        'What does it mean to be "fishers of men"?',
        'How do people follow Jesus today?'
      ],
      digitalFeatures: [
        'Interactive map of Sea of Galilee',
        'Fishing techniques demonstration',
        'Timeline of disciples\' journey with Jesus'
      ]
    }
  },
  {
    id: 'sermon-on-mount',
    title: 'The Sermon on the Mount',
    testament: 'new',
    book: 'Matthew',
    chapter: '5-7',
    sequence: 19,
    summary: 'Jesus teaches the Beatitudes and core principles of Christian living.',
    narrative: `Now when Jesus saw the crowds, he went up on a mountainside and sat down. His disciples came to him, and he began to teach them. He said: "Blessed are the poor in spirit, for theirs is the kingdom of heaven. Blessed are those who mourn, for they will be comforted. Blessed are the meek, for they will inherit the earth. Blessed are those who hunger and thirst for righteousness, for they will be filled. Blessed are the merciful, for they will be shown mercy. Blessed are the pure in heart, for they will see God. Blessed are the peacemakers, for they will be called children of God."`,
    artwork: {
      title: 'The Sermon on the Mount',
      artist: 'Carl Bloch',
      date: '1877',
      medium: 'Oil on canvas',
      location: 'Chapel at Frederiksborg Castle, Denmark',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Carl_Bloch_-_Sermon_on_the_Mount.jpg/800px-Carl_Bloch_-_Sermon_on_the_Mount.jpg'
    },
    curatorInsights: {
      aboutArt: 'Bloch\'s painting captures the gentle authority of Jesus teaching, with crowds gathered on a hillside in rapt attention.',
      aboutArtist: 'Carl Bloch was a Danish painter known for his religious works that combined academic technique with emotional warmth.',
      historicalContext: 'Painted in the 19th century, this work reflects Victorian ideals of Jesus as gentle teacher and moral guide.',
      techniques: ['Academic realism', 'Emotional warmth', 'Landscape integration', 'Crowd composition'],
      symbolism: ['Mountain setting shows Moses parallel', 'Diverse crowd represents universal message', 'Jesus\' gesture shows gentle teaching']
    },
    activities: {
      lookCloser: [
        'Count how many different types of people are listening to Jesus',
        'Look at Jesus\' gentle expression and hand gestures',
        'Notice the beautiful landscape setting'
      ],
      creativeActivity: 'The Beatitudes teach us how to be blessed. Create a poster showing ways to be kind, merciful, and peaceful.',
      discussionQuestions: [
        'What does it mean to be "blessed"?',
        'Which of the Beatitudes is easiest for you to follow? Which is hardest?',
        'How can we be peacemakers in our daily lives?'
      ],
      digitalFeatures: [
        'Interactive Beatitudes with explanations',
        'Crowd diversity exploration',
        'Mountain location virtual tour'
      ]
    }
  },
  {
    id: 'feeding-five-thousand',
    title: 'The Feeding of the Five Thousand',
    testament: 'new',
    book: 'Matthew',
    chapter: '14',
    sequence: 20,
    summary: 'Jesus miraculously feeds a vast crowd with just five loaves and two fish.',
    narrative: `When Jesus heard what had happened, he withdrew by boat privately to a solitary place. Hearing of this, the crowds followed him on foot from the towns. When Jesus landed and saw a large crowd, he had compassion on them and healed their sick. As evening approached, the disciples came to him and said, "This is a remote place, and it's already getting late. Send the crowds away, so they can go to the villages and buy themselves some food." Jesus replied, "They do not need to go away. You give them something to eat." "We have here only five loaves of bread and two fish," they answered. "Bring them here to me," he said. Taking the five loaves and the two fish and looking up to heaven, he gave thanks and broke the loaves.`,
    artwork: {
      title: 'The Miracle of the Loaves and Fishes',
      artist: 'Lambert Lombard',
      date: 'c. 1550',
      medium: 'Oil on wood',
      location: 'Royal Museums of Fine Arts, Brussels',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Lambert_Lombard_-_The_Miracle_of_the_Loaves_and_Fishes_-_Google_Art_Project.jpg/800px-Lambert_Lombard_-_The_Miracle_of_the_Loaves_and_Fishes_-_Google_Art_Project.jpg'
    },
    curatorInsights: {
      aboutArt: 'Lombard depicts the moment of distribution, showing Jesus\' disciples sharing the miraculously multiplied food with the amazed crowd.',
      aboutArtist: 'Lambert Lombard was a Flemish Renaissance painter who studied Italian art and brought those influences to Northern Europe.',
      historicalContext: 'This work reflects the Renaissance interest in depicting biblical miracles as believable, human events.',
      techniques: ['Renaissance composition', 'Detailed crowd scenes', 'Miraculous realism', 'Italian influences'],
      symbolism: ['Bread represents spiritual nourishment', 'Crowd diversity shows universal provision', 'Disciples as distributors show church role']
    },
    activities: {
      lookCloser: [
        'Find the boy who originally had the loaves and fish',
        'Look at the amazed expressions on people\'s faces',
        'Count how many baskets of leftovers you can see'
      ],
      creativeActivity: 'Practice sharing like Jesus did. Bring a snack to share with friends and see how good it feels to give.',
      discussionQuestions: [
        'How do you think the boy felt when he gave his lunch to Jesus?',
        'What does this miracle teach us about God\'s ability to provide?',
        'How can we share what we have with others who need it?'
      ],
      digitalFeatures: [
        'Multiplication animation showing bread increasing',
        'Crowd counting interactive tool',
        'Modern day sharing stories connection'
      ]
    }
  },
  {
    id: 'transfiguration',
    title: 'The Transfiguration',
    testament: 'new',
    book: 'Matthew',
    chapter: '17',
    sequence: 21,
    summary: 'Jesus is transfigured before Peter, James, and John, revealing his divine glory.',
    narrative: `After six days Jesus took with him Peter, James and John the brother of James, and led them up a high mountain by themselves. There he was transfigured before them. His face shone like the sun, and his clothes became as white as the light. Just then there appeared before them Moses and Elijah, talking with Jesus. Peter said to Jesus, "Lord, it is good for us to be here. If you wish, I will put up three shelters—one for you, one for Moses and one for Elijah." While he was still speaking, a bright cloud covered them, and a voice from the cloud said, "This is my Son, whom I love; with him I am well pleased. Listen to him!"`,
    artwork: {
      title: 'The Transfiguration',
      artist: 'Raphael',
      date: '1516–1520',
      medium: 'Oil on wood',
      location: 'Vatican Museums, Vatican City',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Raphael_-_Transfiguration_-_Google_Art_Project.jpg/800px-Raphael_-_Transfiguration_-_Google_Art_Project.jpg'
    },
    curatorInsights: {
      aboutArt: 'Raphael\'s final masterpiece brilliantly contrasts the divine transfiguration above with earthly struggle below.',
      aboutArtist: 'Raphael was one of the three High Renaissance masters, known for perfect harmony and beauty in his compositions.',
      historicalContext: 'This painting represents the pinnacle of Renaissance religious art, combining divine mystery with human emotion.',
      techniques: ['High Renaissance perfection', 'Dramatic contrast', 'Divine illumination', 'Complex composition'],
      symbolism: ['Light represents divine nature', 'Moses and Elijah show law and prophets fulfilled', 'Disciples\' reaction shows human awe']
    },
    activities: {
      lookCloser: [
        'See how Jesus glows with divine light',
        'Find Moses and Elijah talking with Jesus',
        'Look at the disciples\' amazed and frightened reactions'
      ],
      creativeActivity: 'Jesus\' face shone like the sun. Use bright colors to create your own "glowing" artwork with pastels or markers.',
      discussionQuestions: [
        'Why do you think Jesus showed his glory to just these three disciples?',
        'How would you have reacted if you were there?',
        'What does this event tell us about who Jesus really is?'
      ],
      digitalFeatures: [
        'Glowing effect animation around Jesus',
        'Historical figures identification guide',
        'Mountain location virtual experience'
      ]
    }
  },
  {
    id: 'triumphal-entry',
    title: 'The Triumphal Entry',
    testament: 'new',
    book: 'Matthew',
    chapter: '21',
    sequence: 22,
    summary: 'Jesus enters Jerusalem riding on a donkey while crowds wave palm branches.',
    narrative: `As they approached Jerusalem and came to Bethphage on the Mount of Olives, Jesus sent two disciples, saying to them, "Go to the village ahead of you, and at once you will find a donkey tied there, with her colt by her. Untie them and bring them to me." The disciples went and did as Jesus had instructed them. They brought the donkey and the colt and placed their cloaks on them for Jesus to sit on. A very large crowd spread their cloaks on the road, while others cut branches from the trees and spread them on the road. The crowds that went ahead of him and those that followed shouted, "Hosanna to the Son of David! Blessed is he who comes in the name of the Lord! Hosanna in the highest heaven!"`,
    artwork: {
      title: 'Entry of Christ into Jerusalem',
      artist: 'Pedro Orrente',
      date: 'c. 1620',
      medium: 'Oil on canvas',
      location: 'Metropolitan Museum of Art, New York',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Pedro_Orrente_-_Entry_of_Christ_into_Jerusalem_-_Google_Art_Project.jpg/800px-Pedro_Orrente_-_Entry_of_Christ_into_Jerusalem_-_Google_Art_Project.jpg'
    },
    curatorInsights: {
      aboutArt: 'Orrente captures the joyful celebration while hinting at the tragedy to come, showing both triumph and humility.',
      aboutArtist: 'Pedro Orrente was a Spanish Baroque painter influenced by Caravaggio\'s dramatic style and religious intensity.',
      historicalContext: 'This work reflects the Spanish Golden Age\'s deep Catholic devotion and dramatic religious expression.',
      techniques: ['Baroque drama', 'Crowd dynamics', 'Emotional contrast', 'Religious intensity'],
      symbolism: ['Donkey shows humble kingship', 'Palm branches represent victory', 'Crowd\'s joy contrasts with coming passion']
    },
    activities: {
      lookCloser: [
        'Look at all the people celebrating and waving branches',
        'Notice Jesus riding humbly on a donkey, not a horse',
        'See the beautiful city of Jerusalem in the background'
      ],
      creativeActivity: 'Make your own palm branches from green paper and practice waving them like the crowds did.',
      discussionQuestions: [
        'Why did Jesus choose to ride a donkey instead of a royal horse?',
        'How do you think Jesus felt seeing all the people celebrating?',
        'When do we celebrate and praise today?'
      ],
      digitalFeatures: [
        'Interactive crowd celebration sounds',
        'Jerusalem city tour connection',
        'Palm Sunday traditions around the world'
      ]
    }
  },
  {
    id: 'last-supper',
    title: 'The Last Supper',
    testament: 'new',
    book: 'Matthew',
    chapter: '26',
    sequence: 23,
    summary: 'Jesus shares his final meal with the disciples and institutes communion.',
    narrative: `While they were eating, Jesus took bread, and when he had given thanks, he broke it and gave it to his disciples, saying, "Take and eat; this is my body." Then he took a cup, and when he had given thanks, he gave it to them, saying, "Drink from it, all of you. This is my blood of the covenant, which is poured out for many for the forgiveness of sins." When evening came, Jesus was reclining at the table with the Twelve. And while they were eating, he said, "Truly I tell you, one of you will betray me." They were very sad and began to say to him one after the other, "Surely you don't mean me, Lord?"`,
    artwork: {
      title: 'The Last Supper',
      artist: 'Leonardo da Vinci',
      date: '1495–1498',
      medium: 'Tempera and oil on dry wall',
      location: 'Santa Maria delle Grazie, Milan',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg/1280px-The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg'
    },
    curatorInsights: {
      aboutArt: 'Leonardo\'s masterpiece captures the psychological drama of Jesus announcing his betrayal, with each disciple reacting differently.',
      aboutArtist: 'Leonardo da Vinci created perhaps the most famous religious painting in history, demonstrating perfect composition and human psychology.',
      historicalContext: 'Painted during the High Renaissance, this work represents the pinnacle of artistic achievement in depicting human emotion.',
      techniques: ['Perfect linear perspective', 'Psychological realism', 'Geometric composition', 'Dramatic moment capture'],
      symbolism: ['Bread and wine represent communion', 'Disciples\' groupings show different reactions', 'Jesus\' calm center shows divine peace']
    },
    activities: {
      lookCloser: [
        'Look at each disciple\'s different reaction to Jesus\' words',
        'Find the bread and wine on the table',
        'Notice how Jesus remains calm in the center'
      ],
      creativeActivity: 'Draw your own family dinner scene, showing everyone\'s different personalities and expressions.',
      discussionQuestions: [
        'How do you think the disciples felt when Jesus said someone would betray him?',
        'What does it mean when we take communion today?',
        'Why did Jesus want to share this special meal with his friends?'
      ],
      digitalFeatures: [
        'Individual disciple identification tool',
        'Perspective lines demonstration',
        'Communion tradition explanation'
      ]
    }
  },
  {
    id: 'crucifixion',
    title: 'The Crucifixion',
    testament: 'new',
    book: 'Matthew',
    chapter: '27',
    sequence: 24,
    summary: 'Jesus gives his life on the cross for the salvation of humanity.',
    narrative: `From noon until three in the afternoon darkness came over all the land. About three in the afternoon Jesus cried out in a loud voice, "Eli, Eli, lema sabachthani?" (which means "My God, my God, why have you forsaken me?"). And when Jesus had cried out again in a loud voice, he gave up his spirit. At that moment the curtain of the temple was torn in two from top to bottom. The earth shook, the rocks split and the tombs broke open. When the centurion and those with him who were guarding Jesus saw the earthquake and all that had happened, they were terrified, and exclaimed, "Surely he was the Son of God!"`,
    artwork: {
      title: 'Christ Crucified',
      artist: 'Diego Velázquez',
      date: 'c. 1632',
      medium: 'Oil on canvas',
      location: 'Prado Museum, Madrid',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Creaci%C3%B3n_de_Ad%C3%A1n.jpg/1280px-Creaci%C3%B3n_de_Ad%C3%A1n.jpg'
    },
    curatorInsights: {
      aboutArt: 'Velázquez presents Christ with dignity and serenity, avoiding graphic suffering to focus on the sacred sacrifice.',
      aboutArtist: 'Diego Velázquez was the master of Spanish Golden Age painting, known for his profound religious sensitivity and technical brilliance.',
      historicalContext: 'This work reflects Counter-Reformation ideals of presenting Christ\'s sacrifice with reverence and spiritual focus.',
      techniques: ['Masterful anatomy', 'Spiritual dignity', 'Subtle lighting', 'Sacred reverence'],
      symbolism: ['Cross represents sacrifice for sin', 'Darkness shows cosmic significance', 'Christ\'s peace shows victory over death']
    },
    activities: {
      lookCloser: [
        'Notice how Jesus looks peaceful even in suffering',
        'See the beautiful way Velázquez painted the human form',
        'Look at the simple, powerful composition'
      ],
      creativeActivity: 'The cross is a symbol of God\'s love. Create a beautiful cross decoration using colors and patterns that represent love.',
      discussionQuestions: [
        'Why did Jesus choose to die on the cross?',
        'What does it mean that Jesus died for our sins?',
        'How does knowing about Jesus\' sacrifice make you feel?'
      ],
      digitalFeatures: [
        'Explanation of crucifixion historical context',
        'Before/after temple curtain illustration',
        'Connections to Easter celebration'
      ]
    }
  },
  {
    id: 'resurrection',
    title: 'The Resurrection',
    testament: 'new',
    book: 'Matthew',
    chapter: '28',
    sequence: 25,
    summary: 'Christ rises from the dead, conquering sin and death forever.',
    narrative: `After the Sabbath, at dawn on the first day of the week, Mary Magdalene and the other Mary went to look at the tomb. There was a violent earthquake, for an angel of the Lord came down from heaven and, going to the tomb, rolled back the stone and sat on it. His appearance was like lightning, and his clothes were white as snow. The guards were so afraid of him that they shook and became like dead men. The angel said to the women, "Do not be afraid, for I know that you are looking for Jesus, who was crucified. He is not here; he has risen, just as he said. Come and see the place where he lay."`,
    artwork: {
      title: 'The Resurrection of Christ',
      artist: 'Piero della Francesca',
      date: 'c. 1463–1465',
      medium: 'Fresco',
      location: 'Museo Civico, Sansepolcro',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Piero_della_Francesca_-_Resurrection_-_WGA17609.jpg/800px-Piero_della_Francesca_-_Resurrection_-_WGA17609.jpg'
    },
    curatorInsights: {
      aboutArt: 'Piero\'s masterpiece shows Christ triumphant, stepping from the tomb while Roman soldiers sleep, representing victory over death.',
      aboutArtist: 'Piero della Francesca was a master of Early Renaissance perspective and geometric composition, creating timeless religious imagery.',
      historicalContext: 'This fresco represents the Renaissance ideal of combining classical form with Christian triumph and hope.',
      techniques: ['Perfect geometric composition', 'Renaissance perspective', 'Symbolic contrast', 'Triumphant realism'],
      symbolism: ['Christ stepping out shows victory', 'Sleeping soldiers represent defeated death', 'Banner represents triumph flag']
    },
    activities: {
      lookCloser: [
        'See how Jesus steps powerfully out of the tomb',
        'Look at the sleeping soldiers who couldn\'t stop him',
        'Notice the victorious banner Jesus carries'
      ],
      creativeActivity: 'Easter celebrates Jesus rising from the dead. Create an Easter card showing symbols of new life like flowers, butterflies, or sunrise.',
      discussionQuestions: [
        'How do you think the women felt when they found the empty tomb?',
        'What does Jesus\' resurrection mean for us today?',
        'How do we celebrate the resurrection at Easter?'
      ],
      digitalFeatures: [
        'Empty tomb 3D exploration',
        'Resurrection timeline animation',
        'Easter traditions around the world'
      ]
    }
  },
  {
    id: 'road-to-emmaus',
    title: 'The Road to Emmaus',
    testament: 'new',
    book: 'Luke',
    chapter: '24',
    sequence: 26,
    summary: 'Jesus appears to two disciples on the road, revealing himself in the breaking of bread.',
    narrative: `Now that same day two of them were going to a village called Emmaus, about seven miles from Jerusalem. They were talking with each other about everything that had happened. As they talked and discussed these things with each other, Jesus himself came up and walked along with them; but they were kept from recognizing him. When he was at the table with them, he took bread, gave thanks, broke it and began to give it to them. Then their eyes were opened and they recognized him, and he disappeared from their sight. They asked each other, "Were not our hearts burning within us while he talked with us on the road and opened the Scriptures to us?"`,
    artwork: {
      title: 'The Supper at Emmaus',
      artist: 'Caravaggio',
      date: '1601',
      medium: 'Oil on canvas',
      location: 'National Gallery, London',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Caravaggio_-_Supper_at_Emmaus_-_London_-_1601.jpg/800px-Caravaggio_-_Supper_at_Emmaus_-_London_-_1601.jpg'
    },
    curatorInsights: {
      aboutArt: 'Caravaggio captures the exact moment of recognition, with dramatic gestures and expressions showing the disciples\' amazement.',
      aboutArtist: 'Caravaggio\'s genius lay in making biblical scenes immediate and emotionally powerful through realistic detail.',
      historicalContext: 'This work exemplifies Baroque art\'s goal of making religious experiences vivid and personally engaging.',
      techniques: ['Dramatic chiaroscuro', 'Moment of recognition', 'Realistic details', 'Emotional intensity'],
      symbolism: ['Breaking bread reveals Christ\'s identity', 'Light represents spiritual illumination', 'Gestures show recognition shock']
    },
    activities: {
      lookCloser: [
        'Look at the disciples\' shocked expressions as they recognize Jesus',
        'Notice the dramatic hand gestures',
        'See how the light focuses on the important moment'
      ],
      creativeActivity: 'The disciples\' hearts "burned within them" when Jesus spoke. Draw a heart and fill it with warm colors to show excitement.',
      discussionQuestions: [
        'Why didn\'t the disciples recognize Jesus at first?',
        'When have you felt your heart "burn" with excitement or joy?',
        'How does Jesus reveal himself to us today?'
      ],
      digitalFeatures: [
        'Journey map from Jerusalem to Emmaus',
        'Recognition moment slow-motion effect',
        'Bread breaking ceremony explanation'
      ]
    }
  },
  {
    id: 'great-commission',
    title: 'The Great Commission',
    testament: 'new',
    book: 'Matthew',
    chapter: '28',
    sequence: 27,
    summary: 'Jesus gives his disciples the mission to spread the gospel to all nations.',
    narrative: `Then the eleven disciples went to Galilee, to the mountain where Jesus had told them to go. When they saw him, they worshiped him; but some doubted. Then Jesus came to them and said, "All authority in heaven and on earth has been given to me. Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you. And surely I am with you always, to the very end of the age."`,
    artwork: {
      title: 'Christ\'s Charge to Peter',
      artist: 'Raphael',
      date: '1515–1516',
      medium: 'Tempera on paper, transferred to canvas',
      location: 'Victoria and Albert Museum, London',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Raffael_009.jpg/800px-Raffael_009.jpg'
    },
    curatorInsights: {
      aboutArt: 'Raphael\'s cartoon for the Sistine Chapel tapestries shows Jesus commissioning Peter with divine authority and human tenderness.',
      aboutArtist: 'Raphael\'s final works demonstrate perfect harmony between divine message and human emotion in Renaissance style.',
      historicalContext: 'Created for the Sistine Chapel, this work represents the Catholic Church\'s understanding of apostolic authority.',
      techniques: ['Cartoon technique', 'Divine authority', 'Classical composition', 'Emotional connection'],
      symbolism: ['Jesus\' gesture shows commissioning', 'Sheep represent Christian flock', 'Keys symbolize church authority']
    },
    activities: {
      lookCloser: [
        'See Jesus giving Peter the keys to the kingdom',
        'Look at the sheep representing people to shepherd',
        'Notice the other disciples listening carefully'
      ],
      creativeActivity: 'Jesus told his disciples to teach others. Create a teaching poster about something you know well to share with friends.',
      discussionQuestions: [
        'What did Jesus mean by "make disciples of all nations"?',
        'How do Christians today follow the Great Commission?',
        'What would you teach others about Jesus?'
      ],
      digitalFeatures: [
        'World map showing gospel spread',
        'Key symbolism explanation',
        'Modern missions connection'
      ]
    }
  },
  {
    id: 'ascension',
    title: 'The Ascension',
    testament: 'new',
    book: 'Acts',
    chapter: '1',
    sequence: 28,
    summary: 'Jesus ascends to heaven, promising to return and sending the Holy Spirit.',
    narrative: `After he said this, he was taken up before their very eyes, and a cloud hid him from their sight. They were looking intently up into the sky as he was going, when suddenly two men dressed in white stood beside them. "Men of Galilee," they said, "why do you stand here looking into the sky? This same Jesus, who has been taken from you into heaven, will come back in the same way you have seen him go into heaven."`,
    artwork: {
      title: 'The Ascension of Christ',
      artist: 'Andrea Mantegna',
      date: 'c. 1460',
      medium: 'Tempera on wood',
      location: 'Uffizi Gallery, Florence',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Andrea_Mantegna_-_The_Ascension_-_WGA13984.jpg/800px-Andrea_Mantegna_-_The_Ascension_-_WGA13984.jpg'
    },
    curatorInsights: {
      aboutArt: 'Mantegna uses dramatic foreshortening to show Christ ascending, with disciples gazing upward in wonder and loss.',
      aboutArtist: 'Andrea Mantegna was a master of Early Renaissance perspective and classical form, creating powerful religious imagery.',
      historicalContext: 'This work represents the Renaissance fascination with perspective and the challenge of depicting the divine.',
      techniques: ['Dramatic foreshortening', 'Upward perspective', 'Classical form', 'Emotional response'],
      symbolism: ['Ascending Christ shows return to heaven', 'Disciples\' upward gaze shows longing', 'Clouds represent divine mystery']
    },
    activities: {
      lookCloser: [
        'Look up at Jesus ascending into the clouds',
        'See the disciples\' expressions of wonder and sadness',
        'Notice how Mantegna made you feel like you\'re looking up too'
      ],
      creativeActivity: 'Lie on your back outside and look up at the clouds. Draw or describe what shapes and movements you see.',
      discussionQuestions: [
        'How do you think the disciples felt watching Jesus leave?',
        'What did Jesus promise before he ascended?',
        'How is Jesus still with us today even though we can\'t see him?'
      ],
      digitalFeatures: [
        'Upward perspective animation',
        'Cloud formation time-lapse',
        'Promise fulfillment timeline'
      ]
    }
  },
  {
    id: 'pentecost',
    title: 'Pentecost',
    testament: 'new',
    book: 'Acts',
    chapter: '2',
    sequence: 29,
    summary: 'The Holy Spirit comes upon the disciples, empowering them to spread the gospel.',
    narrative: `When the day of Pentecost came, they were all together in one place. Suddenly a sound like the blowing of a violent wind came from heaven and filled the whole house where they were sitting. They saw what seemed to be tongues of fire that separated and came to rest on each of them. All of them were filled with the Holy Spirit and began to speak in other tongues as the Spirit enabled them. Now there were staying in Jerusalem God-fearing Jews from every nation under heaven. When they heard this sound, a crowd came together in bewilderment, because each one heard their own language being spoken.`,
    artwork: {
      title: 'Pentecost',
      artist: 'Titian',
      date: 'c. 1545',
      medium: 'Oil on canvas',
      location: 'Santa Maria della Salute, Venice',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Santa_Maria_della_Salute_%28Venice%29_-_Discesa_dello_Spirito_Santo_di_Tiziano_%281555%29.jpg'
    },
    curatorInsights: {
      aboutArt: 'Titian depicts the moment of the Spirit\'s descent with dramatic lighting and the disciples\' expressions of awe and transformation.',
      aboutArtist: 'Titian\'s mastery of color and light makes this supernatural event feel both mysterious and believable.',
      historicalContext: 'This work represents Venetian Renaissance art\'s ability to combine spiritual mystery with human emotion.',
      techniques: ['Dynamic composition', 'Supernatural lighting', 'Emotional transformation', 'Venetian colorito'],
      symbolism: ['Dove represents Holy Spirit', 'Tongues of fire show spiritual gifts', 'Disciples\' transformation shows empowerment']
    },
    activities: {
      lookCloser: [
        'Look for the dove representing the Holy Spirit',
        'See the flames of fire above the disciples\' heads',
        'Notice how surprised and amazed the disciples look'
      ],
      creativeActivity: 'The disciples could suddenly speak different languages. Learn to say "Hello" and "God loves you" in three different languages.',
      discussionQuestions: [
        'How do you think the disciples felt when the Holy Spirit came?',
        'What does it mean that they could speak in different languages?',
        'How does the Holy Spirit help Christians today?'
      ],
      digitalFeatures: [
        'Flame animation above disciples\' heads',
        'Language translation demonstration',
        'Holy Spirit gifts explanation'
      ]
    }
  },
  {
    id: 'new-heaven-earth',
    title: 'The New Heaven and New Earth',
    testament: 'new',
    book: 'Revelation',
    chapter: '21',
    sequence: 30,
    summary: 'John\'s vision of God\'s perfect kingdom where all things are made new.',
    narrative: `Then I saw "a new heaven and a new earth," for the first heaven and the first earth had passed away, and there was no longer any sea. I saw the Holy City, the new Jerusalem, coming down out of heaven from God, prepared as a bride beautifully dressed for her husband. And I heard a loud voice from the throne saying, "Look! God's dwelling place is now among the people, and he will dwell with them. They will be his people, and God himself will be with them and be their God. 'He will wipe every tear from their eyes. There will be no more death' or mourning or crying or pain, for the old order of things has passed away."`,
    artwork: {
      title: 'The New Jerusalem',
      artist: 'Gustave Doré',
      date: '1866',
      medium: 'Engraving',
      location: 'Various collections',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Gustave_Dor%C3%A9_-_The_New_Jerusalem.jpg/800px-Gustave_Dor%C3%A9_-_The_New_Jerusalem.jpg'
    },
    curatorInsights: {
      aboutArt: 'Doré\'s magnificent engraving captures the grandeur and perfection of God\'s eternal kingdom with architectural splendor and divine light.',
      aboutArtist: 'Gustave Doré was a master illustrator whose biblical engravings brought scripture to life for millions of readers.',
      historicalContext: 'Created during the Victorian era, this work reflects 19th-century hopes for divine perfection and eternal peace.',
      techniques: ['Detailed engraving', 'Architectural grandeur', 'Divine illumination', 'Visionary scale'],
      symbolism: ['Perfect city represents God\'s kingdom', 'Light shows divine presence', 'No darkness means no sin or sorrow']
    },
    activities: {
      lookCloser: [
        'Look at the magnificent architecture of the heavenly city',
        'See how light seems to come from everywhere',
        'Notice there are no shadows or dark places'
      ],
      creativeActivity: 'Design your own "perfect city" where everyone is happy and there\'s no sadness. What would you include?',
      discussionQuestions: [
        'What do you think it means that God will "wipe every tear from their eyes"?',
        'What are you most excited about in God\'s perfect kingdom?',
        'How does this promise give us hope today?'
      ],
      digitalFeatures: [
        'Interactive city exploration',
        'Before/after earth comparison',
        'Hope and promise connections'
      ]
    }
  }
]

// Helper functions
export const getStoryById = (id: string): Story | undefined => {
  return storiesData.find(story => story.id === id)
}

export const getStoriesByTestament = (testament: 'old' | 'new'): Story[] => {
  return storiesData.filter(story => story.testament === testament).sort((a, b) => a.sequence - b.sequence)
}

export const getNextStory = (currentId: string): Story | undefined => {
  const currentStory = getStoryById(currentId)
  if (!currentStory) return undefined
  
  const sameTestamentStories = getStoriesByTestament(currentStory.testament)
  const currentIndex = sameTestamentStories.findIndex(story => story.id === currentId)
  
  if (currentIndex >= 0 && currentIndex < sameTestamentStories.length - 1) {
    return sameTestamentStories[currentIndex + 1]
  }
  
  return undefined
}

export const getPreviousStory = (currentId: string): Story | undefined => {
  const currentStory = getStoryById(currentId)
  if (!currentStory) return undefined
  
  const sameTestamentStories = getStoriesByTestament(currentStory.testament)
  const currentIndex = sameTestamentStories.findIndex(story => story.id === currentId)
  
  if (currentIndex > 0) {
    return sameTestamentStories[currentIndex - 1]
  }
  
  return undefined
}