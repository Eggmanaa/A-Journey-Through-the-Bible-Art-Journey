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
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Michelangelo_-Creation_of_Adam%28Sistine_Chapel_ceiling%29.jpg/1280px-Michelangelo_-Creation_of_Adam%28Sistine_Chapel_ceiling%29.jpg',
      downloadUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Michelangelo_-Creation_of_Adam%28Sistine_Chapel_ceiling%29.jpg/1280px-Michelangelo_-Creation_of_Adam%28Sistine_Chapel_ceiling%29.jpg'
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
    title: 'The Fall of Man',
    testament: 'old',
    book: 'Genesis',
    chapter: '3',
    sequence: 2,
    summary: 'Adam and Eve disobey God and are expelled from the Garden of Eden.',
    narrative: `In the beautiful Garden of Eden, God gave Adam and Eve only one rule: they could eat from any tree except the Tree of the Knowledge of Good and Evil. But a cunning serpent tempted Eve, who ate the forbidden fruit and gave some to Adam. In that moment of disobedience, sin and shame entered the world. When God came to walk with them in the garden, they hid. As a consequence of their choice, God banished them from Eden, and they had to face a new life of hardship, pain, and eventual death. Yet, even in this sad moment, God gave them a promise of future redemption.`,
    artwork: {
      title: 'The Expulsion from the Garden of Eden',
      artist: 'Masaccio',
      date: 'c. 1426–1427',
      medium: 'Fresco',
      location: 'Brancacci Chapel, Florence',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Masaccio-Expulsion_of_Adam_and_Eve-_Brancacci_Chapel2.jpg/800px-Masaccio-Expulsion_of_Adam_and_Eve-_Brancacci_Chapel2.jpg'
    },
    curatorInsights: {
      aboutArt: 'Masaccio\'s fresco brings unprecedented emotional realism to biblical narrative, showing raw human anguish and shame.',
      aboutArtist: 'Masaccio was a trailblazer of Early Renaissance, breaking from decorative Gothic style to show psychological depth.',
      historicalContext: 'This work influenced generations of artists with its realistic portrayal of human emotion and dignity.',
      techniques: ['Early Renaissance realism', 'Emotional expression', 'Foreshortening of the angel', 'Natural lighting'],
      symbolism: ['Adam covers his face in mental shame', 'Eve covers her body in physical shame', 'Angel\'s sword shows God\'s final judgment']
    },
    activities: {
      lookCloser: [
        'Compare how Adam and Eve show their shame differently',
        'Find the angel\'s sword - what does it represent?',
        'Look at their body language as they stumble forward'
      ],
      creativeActivity: 'Use your face and body to show different emotions without words, like Adam and Eve. Try "sad," "ashamed," "scared," and then "hopeful."',
      discussionQuestions: [
        'Talk about a time you made a wrong choice and felt sad. What helped you feel better?',
        'How does this story show that God still has a plan even when we make mistakes?',
        'What does it mean to feel ashamed, and how is that different from feeling sorry?'
      ],
      digitalFeatures: [
        'Before/after slider showing the painting with 17th-century fig leaves vs. restored original',
        'Hotspots explaining the different ways Adam and Eve express shame',
        'Animation showing their movement away from paradise'
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
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Rembrandt_-Moses_with_the_Ten_Commandments-_Google_Art_Project.jpg/800px-Rembrandt_-Moses_with_the_Ten_Commandments-_Google_Art_Project.jpg'
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
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/David_with_the_Head_of_Goliath_by_Caravaggio.jpg/800px-David_with_the_Head_of_Goliath_by_Caravaggio.jpg'
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