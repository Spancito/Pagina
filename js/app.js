const conversations = {
  pets: {
    title: 'Pets',
    start: {
      text: "Hi! Let's talk about pets. How many pets do you have?",
      audio: '',
      options: [
        { label: 'None', next: 'pets_none' },
        { label: '1', next: 'pets_one' },
        { label: '2', next: 'pets_two' },
        { label: '3 or more', next: 'pets_three' }
      ]
    },
    pets_none: {
      text: 'Oh, I see! Are you interested in having a pet someday?',
      audio: '',
      options: [
        { label: 'Yes, a cute dog!', next: 'pets_none_dog' },
        { label: 'Maybe a quiet cat.', next: 'pets_none_cat' },
        { label: 'Not right now.', next: 'pets_none_later' }
      ]
    },
    pets_none_dog: {
      text: 'Dogs bring so much happiness and energy to any home! They are wonderful workout companions.',
      audio: '',
      isEnd: true
    },
    pets_none_cat: {
      text: 'Cats are calm, independent, and very affectionate companions. Perfect for peaceful afternoons!',
      audio: '',
      isEnd: true
    },
    pets_none_later: {
      text: 'That is completely fair! Pets are a big responsibility, and taking your time is very wise.',
      audio: '',
      isEnd: true
    },
    pets_one: {
      text: "That's lovely! What kind of pet do you have?",
      audio: '',
      options: [
        { label: 'A playful dog.', next: 'pets_one_dog' },
        { label: 'A sleepy cat.', next: 'pets_one_cat' },
        { label: 'Another small pet.', next: 'pets_one_small' }
      ]
    },
    pets_one_dog: {
      text: 'A playful puppy makes every day feel lively and full of joy! Be sure to take them for a nice walk.',
      audio: '',
      isEnd: true
    },
    pets_one_cat: {
      text: 'A sleepy cat purring beside you is the best stress reliever ever. Give them a gentle pet for me!',
      audio: '',
      isEnd: true
    },
    pets_one_small: {
      text: 'Small pets have giant personalities! It is amazing how much joy a little friend can bring.',
      audio: '',
      isEnd: true
    },
    pets_two: {
      text: 'Double the fun! Do they get along well together?',
      audio: '',
      options: [
        { label: 'Yes, best friends!', next: 'pets_two_friends' },
        { label: 'Sometimes they fight.', next: 'pets_two_fight' },
        { label: 'They ignore each other.', next: 'pets_two_ignore' }
      ]
    },
    pets_two_friends: {
      text: 'Having animal best friends in the house is pure warmth! It makes everyday moments so cozy.',
      audio: '',
      isEnd: true
    },
    pets_two_fight: {
      text: 'Sibling rivalry happens even among furry pals! As long as there is love, a little drama is natural.',
      audio: '',
      isEnd: true
    },
    pets_two_ignore: {
      text: 'Peaceful coexistence is also great! Respecting personal space is very sophisticated.',
      audio: '',
      isEnd: true
    },
    pets_three: {
      text: 'Wow, a full house! Which one is the most mischievous?',
      audio: '',
      options: [
        { label: 'The youngest one!', next: 'pets_three_young' },
        { label: 'All of them!', next: 'pets_three_all' },
        { label: 'They are very calm.', next: 'pets_three_calm' }
      ]
    },
    pets_three_young: {
      text: 'Young ones always test boundaries, but their cheeky adventures keep everyone smiling!',
      audio: '',
      isEnd: true
    },
    pets_three_all: {
      text: 'A little team of troublemakers! Your home must be full of hilarious stories and endless love.',
      audio: '',
      isEnd: true
    },
    pets_three_calm: {
      text: 'That is truly impressive for three or more pets! You must have created such a serene environment.',
      audio: '',
      isEnd: true
    }
  },

  food: {
    title: 'Food',
    start: {
      text: "I'm getting hungry! What is your favorite meal of the day?",
      audio: '',
      options: [
        { label: 'Breakfast', next: 'food_breakfast' },
        { label: 'Lunch', next: 'food_lunch' },
        { label: 'Dinner', next: 'food_dinner' },
        { label: 'Sweet snacks', next: 'food_snacks' }
      ]
    },
    food_breakfast: {
      text: 'Breakfast is wonderful to start the day! Do you prefer something sweet or savory in the morning?',
      audio: '',
      options: [
        { label: 'Savory, like eggs and toast.', next: 'food_bf_savory' },
        { label: 'Sweet, like fruit or pancakes.', next: 'food_bf_sweet' },
        { label: 'Just a good cup of coffee.', next: 'food_bf_coffee' }
      ]
    },
    food_bf_savory: {
      text: 'Eggs and toast give you steady energy for the whole morning! A classic, nourishing choice.',
      audio: '',
      isEnd: true
    },
    food_bf_sweet: {
      text: 'Pancakes and fresh fruit make waking up a celebration! Such a delicious way to begin.',
      audio: '',
      isEnd: true
    },
    food_bf_coffee: {
      text: 'Coffee lovers unite! That rich aroma is truly unbeatable when greeting the new day.',
      audio: '',
      isEnd: true
    },
    food_lunch: {
      text: 'Lunch gives you energy for the rest of the day! What style of food do you usually pick?',
      audio: '',
      options: [
        { label: 'Fresh salad or a light sandwich.', next: 'food_lunch_light' },
        { label: 'A hearty homemade warm dish.', next: 'food_lunch_hearty' },
        { label: 'Tasty street food or tacos.', next: 'food_lunch_street' }
      ]
    },
    food_lunch_light: {
      text: 'Light lunches keep you feeling fresh and energized without any afternoon slumps!',
      audio: '',
      isEnd: true
    },
    food_lunch_hearty: {
      text: 'Homemade cooking warm from the stove is unmatched. It feels like a hug in a bowl!',
      audio: '',
      isEnd: true
    },
    food_lunch_street: {
      text: 'Street food has bold seasonings and amazing textures! Always an exciting flavor experience.',
      audio: '',
      isEnd: true
    },
    food_dinner: {
      text: 'Dinner is the best time to unwind. Who do you usually share dinner with?',
      audio: '',
      options: [
        { label: 'With family or close friends.', next: 'food_dinner_family' },
        { label: 'Enjoying peaceful solo time.', next: 'food_dinner_solo' },
        { label: 'While watching my favorite series.', next: 'food_dinner_tv' }
      ]
    },
    food_dinner_family: {
      text: 'Sharing dinner with people you love turns every meal into a warm, cherished memory.',
      audio: '',
      isEnd: true
    },
    food_dinner_solo: {
      text: 'Quiet dinners are pure mindfulness. Taking time for yourself is deeply rewarding.',
      audio: '',
      isEnd: true
    },
    food_dinner_tv: {
      text: 'Good food paired with a great show is the ultimate cozy evening routine!',
      audio: '',
      isEnd: true
    },
    food_snacks: {
      text: 'Snacks bring instant happiness! What is your absolute go-to treat?',
      audio: '',
      options: [
        { label: 'Rich chocolate or cookies.', next: 'food_snack_choco' },
        { label: 'Pastries or freshly baked cake.', next: 'food_snack_cake' },
        { label: 'Cold ice cream or frozen yogurt.', next: 'food_snack_ice' }
      ]
    },
    food_snack_choco: {
      text: 'Chocolate releases genuine joy chemicals in the brain! You can never go wrong with it.',
      audio: '',
      isEnd: true
    },
    food_snack_cake: {
      text: 'Bakery treats always taste extraordinary with a cup of warm tea or coffee.',
      audio: '',
      isEnd: true
    },
    food_snack_ice: {
      text: 'Ice cream is sweet perfection, no matter what season it is outside!',
      audio: '',
      isEnd: true
    }
  },

  trips: {
    title: 'Trips',
    start: {
      text: "Let's plan a getaway! Where would you love to travel next?",
      audio: '',
      options: [
        { label: 'To the beach', next: 'trips_beach' },
        { label: 'To the mountains', next: 'trips_mountains' },
        { label: 'A big city', next: 'trips_city' },
        { label: 'The countryside', next: 'trips_country' }
      ]
    },
    trips_beach: {
      text: 'The ocean breeze is so relaxing! What is your favorite thing to do by the sea?',
      audio: '',
      options: [
        { label: 'Swimming in the waves.', next: 'trips_beach_swim' },
        { label: 'Reading under an umbrella.', next: 'trips_beach_read' },
        { label: 'Watching the sunset.', next: 'trips_beach_sunset' }
      ]
    },
    trips_beach_swim: {
      text: 'Diving into crystal clear water washes away all stress. Pure freedom and renewal!',
      audio: '',
      isEnd: true
    },
    trips_beach_read: {
      text: 'The sound of crashing waves is the best background sound for reading a captivating book.',
      audio: '',
      isEnd: true
    },
    trips_beach_sunset: {
      text: 'Golden sunsets over the horizon are unforgettable vistas. Make sure to snap a picture!',
      audio: '',
      isEnd: true
    },
    trips_mountains: {
      text: 'Fresh mountain air does wonders for the soul! How do you like to explore high altitudes?',
      audio: '',
      options: [
        { label: 'Hiking scenic trails.', next: 'trips_mtn_hike' },
        { label: 'Cozying up in a wooden cabin.', next: 'trips_mtn_cabin' },
        { label: 'Stargazing at night.', next: 'trips_mtn_stars' }
      ]
    },
    trips_mtn_hike: {
      text: 'Hiking pushes your strength and rewards you with panoramic summit views. Spectacular!',
      audio: '',
      isEnd: true
    },
    trips_mtn_cabin: {
      text: 'A rustic fireplace, hot chocolate, and mist outside the window is the peak of coziness.',
      audio: '',
      isEnd: true
    },
    trips_mtn_stars: {
      text: 'Away from city lights, the mountain night sky looks like a blanket of glittering diamonds.',
      audio: '',
      isEnd: true
    },
    trips_city: {
      text: 'Metropolitan adventures are vibrant and dynamic! What attracts you most in big cities?',
      audio: '',
      options: [
        { label: 'World-class museums and art.', next: 'trips_city_museum' },
        { label: 'Trying famous local restaurants.', next: 'trips_city_food' },
        { label: 'Shopping and trendy streets.', next: 'trips_city_shop' }
      ]
    },
    trips_city_museum: {
      text: 'Exploring history, culture, and architecture expands our world view in profound ways.',
      audio: '',
      isEnd: true
    },
    trips_city_food: {
      text: 'Food tours through eclectic neighborhoods let you taste the genuine heart of the city!',
      audio: '',
      isEnd: true
    },
    trips_city_shop: {
      text: 'Discovering hidden boutiques and stylish vintage shops creates the most unique memories.',
      audio: '',
      isEnd: true
    },
    trips_country: {
      text: 'The countryside is so peaceful and slow-paced. How would you spend your time there?',
      audio: '',
      options: [
        { label: 'Taking long walks in nature.', next: 'trips_cntry_walks' },
        { label: 'Visiting local organic farms.', next: 'trips_cntry_farms' },
        { label: 'Simply unplugging from screens.', next: 'trips_cntry_unplug' }
      ]
    },
    trips_cntry_walks: {
      text: 'Walking through lush green pastures with birds singing around is genuine tranquility.',
      audio: '',
      isEnd: true
    },
    trips_cntry_farms: {
      text: 'Tasting fresh harvest food straight from the soil connects us directly with the earth.',
      audio: '',
      isEnd: true
    },
    trips_cntry_unplug: {
      text: 'Digital detoxing restores calm and deep sleep. You deserve that serene recharge!',
      audio: '',
      isEnd: true
    }
  },

  pharmacy: {
    title: 'Pharmacy',
    start: {
      text: 'Welcome to the pharmacy! How can I help you today?',
      audio: '',
      options: [
        { label: 'I have a headache.', next: 'pharm_headache' },
        { label: 'I have a sore throat.', next: 'pharm_throat' },
        { label: 'I need some vitamins.', next: 'pharm_vitamins' },
        { label: 'Looking for sunscreen.', next: 'pharm_sunscreen' }
      ]
    },
    pharm_headache: {
      text: 'I am sorry to hear that. Has the headache been going on for a long time or just today?',
      audio: '',
      options: [
        { label: 'Just started an hour ago.', next: 'pharm_head_hour' },
        { label: 'Since early this morning.', next: 'pharm_head_day' },
        { label: 'Mostly tension from looking at screens.', next: 'pharm_head_screen' }
      ]
    },
    pharm_head_hour: {
      text: 'A mild pain reliever with plenty of water and twenty minutes of dark rest will help immensely!',
      audio: '',
      isEnd: true
    },
    pharm_head_day: {
      text: 'Make sure to take an analgesic, stay hydrated, and visit a doctor if the pain continues.',
      audio: '',
      isEnd: true
    },
    pharm_head_screen: {
      text: 'Eye strain is very common! Rest your eyes, dim your monitor, and take a brief screen-free break.',
      audio: '',
      isEnd: true
    },
    pharm_throat: {
      text: 'A sore throat can be quite uncomfortable. Do you have a fever or is it just irritation?',
      audio: '',
      options: [
        { label: 'Just a scratchy irritation.', next: 'pharm_throat_scratch' },
        { label: 'Mild fever and dry cough.', next: 'pharm_throat_fever' },
        { label: 'It hurts when I swallow.', next: 'pharm_throat_swallow' }
      ]
    },
    pharm_throat_scratch: {
      text: 'Honey-lemon lozenges and warm chamomile tea will coat your throat smoothly and bring relief.',
      audio: '',
      isEnd: true
    },
    pharm_throat_fever: {
      text: 'Please drink plenty of warm fluids, rest in bed, and consult a physician if fever rises.',
      audio: '',
      isEnd: true
    },
    pharm_throat_swallow: {
      text: 'An antiseptic throat spray combined with warm salt-water gargles will soothe that discomfort.',
      audio: '',
      isEnd: true
    },
    pharm_vitamins: {
      text: 'Vitamins are great for vitality! What health goal are you focusing on currently?',
      audio: '',
      options: [
        { label: 'Boosting my immune system.', next: 'pharm_vit_immune' },
        { label: 'More energy throughout the day.', next: 'pharm_vit_energy' },
        { label: 'Healthier hair and skin.', next: 'pharm_vit_skin' }
      ]
    },
    pharm_vit_immune: {
      text: 'Vitamin C, Zinc, and Vitamin D3 form an effective daily combination to support your defenses.',
      audio: '',
      isEnd: true
    },
    pharm_vit_energy: {
      text: 'A good Vitamin B-complex works wonders for natural cellular metabolism and daily vitality.',
      audio: '',
      isEnd: true
    },
    pharm_vit_skin: {
      text: 'Biotin, collagen peptides, and Vitamin E keep skin hydrated and nourish hair from within.',
      audio: '',
      isEnd: true
    },
    pharm_sunscreen: {
      text: 'Sun protection is essential! What type of skin finish do you prefer?',
      audio: '',
      options: [
        { label: 'Matte and oil-free.', next: 'pharm_sun_matte' },
        { label: 'Hydrating with a radiant glow.', next: 'pharm_sun_glow' },
        { label: 'Gentle mineral formula for sensitive skin.', next: 'pharm_sun_mineral' }
      ]
    },
    pharm_sun_matte: {
      text: 'An SPF 50+ dry-touch gel absorbs quickly without feeling greasy. Remember to reapply every 3 hours!',
      audio: '',
      isEnd: true
    },
    pharm_sun_glow: {
      text: 'A broad-spectrum hydrating fluid will shield you from UV rays while leaving skin soft and luminous.',
      audio: '',
      isEnd: true
    },
    pharm_sun_mineral: {
      text: 'Zinc oxide mineral blockers are hypoallergenic and non-irritating, providing calm, safe protection.',
      audio: '',
      isEnd: true
    }
  }
};

let currentTopic = 'pets';
let currentNode = 'start';
let isTyping = false;
let typeInterval = null;

const messagesContainer = document.getElementById('chat-messages');
const optionsContainer = document.getElementById('chat-options');
const topicButtons = document.querySelectorAll('.topic-card');
const currentTopicBadge = document.getElementById('chat-topic-badge');
const restartBtn = document.getElementById('chat-restart-btn');

function setTopic(topicKey) {
  if (isTyping && typeInterval) clearInterval(typeInterval);
  isTyping = false;
  currentTopic = topicKey;
  currentNode = 'start';

  topicButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.topic === topicKey);
  });

  if (currentTopicBadge) {
    currentTopicBadge.textContent = conversations[topicKey].title;
  }

  messagesContainer.innerHTML = '';
  optionsContainer.innerHTML = '';

  renderDollTurn();
}

function renderDollTurn() {
  const topicData = conversations[currentTopic];
  const nodeData = topicData[currentNode];
  if (!nodeData) return;

  optionsContainer.innerHTML = '';

  setTimeout(() => {
    appendDollMessage(nodeData.text, () => {
      if (nodeData.isEnd) {
        showCompletionControls();
      } else if (nodeData.options && nodeData.options.length > 0) {
        renderOptions(nodeData.options);
      }
    });
  }, 350);
}

function appendDollMessage(fullText, onComplete) {
  isTyping = true;
  const msgRow = document.createElement('div');
  msgRow.className = 'chat-row doll-row';

  const avatar = document.createElement('img');
  avatar.src = '../images/LinguaDollAvatar.jpg';
  avatar.alt = 'Lingua-Doll';
  avatar.className = 'chat-doll-avatar';

  const bubble = document.createElement('div');
  bubble.className = 'chat-bubble doll-bubble';

  msgRow.appendChild(avatar);
  msgRow.appendChild(bubble);
  messagesContainer.appendChild(msgRow);
  scrollToBottom();

  let index = 0;
  typeInterval = setInterval(() => {
    bubble.textContent += fullText.charAt(index);
    index++;
    scrollToBottom();

    if (index >= fullText.length) {
      clearInterval(typeInterval);
      isTyping = false;
      if (onComplete) onComplete();
    }
  }, 20);
}

function renderOptions(options) {
  optionsContainer.innerHTML = '';
  const optionsList = document.createElement('div');
  optionsList.className = 'options-list';

  options.forEach(opt => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'option-pill-btn';

    const labelSpan = document.createElement('span');
    labelSpan.className = 'option-text';
    labelSpan.textContent = opt.label;

    const checkboxSpan = document.createElement('span');
    checkboxSpan.className = 'option-check-box';

    btn.appendChild(labelSpan);
    btn.appendChild(checkboxSpan);

    btn.addEventListener('click', () => {
      if (isTyping) return;
      handleUserChoice(opt);
    });

    optionsList.appendChild(btn);
  });

  optionsContainer.appendChild(optionsList);
  scrollToBottom();
}

function handleUserChoice(selectedOption) {
  optionsContainer.innerHTML = '';

  const msgRow = document.createElement('div');
  msgRow.className = 'chat-row user-row';

  const bubble = document.createElement('div');
  bubble.className = 'chat-bubble user-bubble';
  bubble.textContent = selectedOption.label;

  msgRow.appendChild(bubble);
  messagesContainer.appendChild(msgRow);
  scrollToBottom();

  currentNode = selectedOption.next;
  renderDollTurn();
}

function showCompletionControls() {
  optionsContainer.innerHTML = '';
  const endBox = document.createElement('div');
  endBox.className = 'completion-box';

  const note = document.createElement('p');
  note.className = 'completion-note';
  note.textContent = '¡Excelente práctica completada!';

  const restartActionBtn = document.createElement('button');
  restartActionBtn.type = 'button';
  restartActionBtn.className = 'btn-chat-action';
  restartActionBtn.textContent = 'Practicar de nuevo';
  restartActionBtn.addEventListener('click', () => {
    setTopic(currentTopic);
  });

  const changeTopicBtn = document.createElement('button');
  changeTopicBtn.type = 'button';
  changeTopicBtn.className = 'btn-chat-action secondary';
  changeTopicBtn.textContent = 'Elegir otro tema';
  changeTopicBtn.addEventListener('click', () => {
    const topics = Object.keys(conversations);
    const nextIdx = (topics.indexOf(currentTopic) + 1) % topics.length;
    setTopic(topics[nextIdx]);
  });

  endBox.appendChild(note);
  endBox.appendChild(restartActionBtn);
  endBox.appendChild(changeTopicBtn);
  optionsContainer.appendChild(endBox);
  scrollToBottom();
}

function scrollToBottom() {
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

topicButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const topic = btn.dataset.topic;
    if (topic && topic !== currentTopic) {
      setTopic(topic);
    }
  });
});

if (restartBtn) {
  restartBtn.addEventListener('click', () => {
    setTopic(currentTopic);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setTopic('pets');
});
