const conversations = {
  pets: {
    title: 'Pets',
    start: {
      id: 'pets_start',
      text: "Hi! Let's talk about pets. How many pets do you have?",
      audio: {
        us: '../audios/pets_start_us.mp3',
        uk: '../audios/pets_start_uk.mp3'
      },
      options: [
        { label: 'None', next: 'pets_none' },
        { label: '1', next: 'pets_one' },
        { label: '2', next: 'pets_two' },
        { label: '3 or more', next: 'pets_three' }
      ]
    },
    pets_none: {
      id: 'pets_none',
      text: 'Oh, I see! Are you interested in having a pet someday?',
      audio: {
        us: '../audios/pets_none_us.mp3',
        uk: '../audios/pets_none_uk.mp3'
      },
      options: [
        { label: 'Yes, a cute dog!', next: 'pets_none_dog' },
        { label: 'Maybe a quiet cat.', next: 'pets_none_cat' },
        { label: 'Not right now.', next: 'pets_none_later' }
      ]
    },
    pets_none_dog: {
      id: 'pets_none_dog',
      text: 'Dogs bring so much happiness and energy to any home! They are wonderful workout companions.',
      audio: {
        us: '../audios/pets_none_dog_us.mp3',
        uk: '../audios/pets_none_dog_uk.mp3'
      },
      isEnd: true
    },
    pets_none_cat: {
      id: 'pets_none_cat',
      text: 'Cats are calm, independent, and very affectionate companions. Perfect for peaceful afternoons!',
      audio: {
        us: '../audios/pets_none_cat_us.mp3',
        uk: '../audios/pets_none_cat_uk.mp3'
      },
      isEnd: true
    },
    pets_none_later: {
      id: 'pets_none_later',
      text: 'That is completely fair! Pets are a big responsibility, and taking your time is very wise.',
      audio: {
        us: '../audios/pets_none_later_us.mp3',
        uk: '../audios/pets_none_later_uk.mp3'
      },
      isEnd: true
    },
    pets_one: {
      id: 'pets_one',
      text: "That's lovely! What kind of pet do you have?",
      audio: {
        us: '../audios/pets_one_us.mp3',
        uk: '../audios/pets_one_uk.mp3'
      },
      options: [
        { label: 'A playful dog.', next: 'pets_one_dog' },
        { label: 'A sleepy cat.', next: 'pets_one_cat' },
        { label: 'Another small pet.', next: 'pets_one_small' }
      ]
    },
    pets_one_dog: {
      id: 'pets_one_dog',
      text: 'A playful puppy makes every day feel lively and full of joy! Be sure to take them for a nice walk.',
      audio: {
        us: '../audios/pets_one_dog_us.mp3',
        uk: '../audios/pets_one_dog_uk.mp3'
      },
      isEnd: true
    },
    pets_one_cat: {
      id: 'pets_one_cat',
      text: 'A sleepy cat purring beside you is the best stress reliever ever. Give them a gentle pet for me!',
      audio: {
        us: '../audios/pets_one_cat_us.mp3',
        uk: '../audios/pets_one_cat_uk.mp3'
      },
      isEnd: true
    },
    pets_one_small: {
      id: 'pets_one_small',
      text: 'Small pets have giant personalities! It is amazing how much joy a little friend can bring.',
      audio: {
        us: '../audios/pets_one_small_us.mp3',
        uk: '../audios/pets_one_small_uk.mp3'
      },
      isEnd: true
    },
    pets_two: {
      id: 'pets_two',
      text: 'Double the fun! Do they get along well together?',
      audio: {
        us: '../audios/pets_two_us.mp3',
        uk: '../audios/pets_two_uk.mp3'
      },
      options: [
        { label: 'Yes, best friends!', next: 'pets_two_friends' },
        { label: 'Sometimes they fight.', next: 'pets_two_fight' },
        { label: 'They ignore each other.', next: 'pets_two_ignore' }
      ]
    },
    pets_two_friends: {
      id: 'pets_two_friends',
      text: 'Having animal best friends in the house is pure warmth! It makes everyday moments so cozy.',
      audio: {
        us: '../audios/pets_two_friends_us.mp3',
        uk: '../audios/pets_two_friends_uk.mp3'
      },
      isEnd: true
    },
    pets_two_fight: {
      id: 'pets_two_fight',
      text: 'Sibling rivalry happens even among furry pals! As long as there is love, a little drama is natural.',
      audio: {
        us: '../audios/pets_two_fight_us.mp3',
        uk: '../audios/pets_two_fight_uk.mp3'
      },
      isEnd: true
    },
    pets_two_ignore: {
      id: 'pets_two_ignore',
      text: 'Peaceful coexistence is also great! Respecting personal space is very sophisticated.',
      audio: {
        us: '../audios/pets_two_ignore_us.mp3',
        uk: '../audios/pets_two_ignore_uk.mp3'
      },
      isEnd: true
    },
    pets_three: {
      id: 'pets_three',
      text: 'Wow, a full house! Which one is the most mischievous?',
      audio: {
        us: '../audios/pets_three_us.mp3',
        uk: '../audios/pets_three_uk.mp3'
      },
      options: [
        { label: 'The youngest one!', next: 'pets_three_young' },
        { label: 'All of them!', next: 'pets_three_all' },
        { label: 'They are very calm.', next: 'pets_three_calm' }
      ]
    },
    pets_three_young: {
      id: 'pets_three_young',
      text: 'Young ones always test boundaries, but their cheeky adventures keep everyone smiling!',
      audio: {
        us: '../audios/pets_three_young_us.mp3',
        uk: '../audios/pets_three_young_uk.mp3'
      },
      isEnd: true
    },
    pets_three_all: {
      id: 'pets_three_all',
      text: 'A little team of troublemakers! Your home must be full of hilarious stories and endless love.',
      audio: {
        us: '../audios/pets_three_all_us.mp3',
        uk: '../audios/pets_three_all_uk.mp3'
      },
      isEnd: true
    },
    pets_three_calm: {
      id: 'pets_three_calm',
      text: 'That is truly impressive for three or more pets! You must have created such a serene environment.',
      audio: {
        us: '../audios/pets_three_calm_us.mp3',
        uk: '../audios/pets_three_calm_uk.mp3'
      },
      isEnd: true
    }
  },

  food: {
    title: 'Food',
    start: {
      id: 'food_start',
      text: "I'm getting hungry! What is your favorite meal of the day?",
      audio: {
        us: '../audios/food_start_us.mp3',
        uk: '../audios/food_start_uk.mp3'
      },
      options: [
        { label: 'Breakfast', next: 'food_breakfast' },
        { label: 'Lunch', next: 'food_lunch' },
        { label: 'Dinner', next: 'food_dinner' },
        { label: 'Sweet snacks', next: 'food_snacks' }
      ]
    },
    food_breakfast: {
      id: 'food_breakfast',
      text: 'Breakfast is wonderful to start the day! Do you prefer something sweet or savory in the morning?',
      audio: {
        us: '../audios/food_breakfast_us.mp3',
        uk: '../audios/food_breakfast_uk.mp3'
      },
      options: [
        { label: 'Savory, like eggs and toast.', next: 'food_bf_savory' },
        { label: 'Sweet, like fruit or pancakes.', next: 'food_bf_sweet' },
        { label: 'Just a good cup of coffee.', next: 'food_bf_coffee' }
      ]
    },
    food_bf_savory: {
      id: 'food_bf_savory',
      text: 'Eggs and toast give you steady energy for the whole morning! A classic, nourishing choice.',
      audio: {
        us: '../audios/food_bf_savory_us.mp3',
        uk: '../audios/food_bf_savory_uk.mp3'
      },
      isEnd: true
    },
    food_bf_sweet: {
      id: 'food_bf_sweet',
      text: 'Pancakes and fresh fruit make waking up a celebration! Such a delicious way to begin.',
      audio: {
        us: '../audios/food_bf_sweet_us.mp3',
        uk: '../audios/food_bf_sweet_uk.mp3'
      },
      isEnd: true
    },
    food_bf_coffee: {
      id: 'food_bf_coffee',
      text: 'Coffee lovers unite! That rich aroma is truly unbeatable when greeting the new day.',
      audio: {
        us: '../audios/food_bf_coffee_us.mp3',
        uk: '../audios/food_bf_coffee_uk.mp3'
      },
      isEnd: true
    },
    food_lunch: {
      id: 'food_lunch',
      text: 'Lunch gives you energy for the rest of the day! What style of food do you usually pick?',
      audio: {
        us: '../audios/food_lunch_us.mp3',
        uk: '../audios/food_lunch_uk.mp3'
      },
      options: [
        { label: 'Fresh salad or a light sandwich.', next: 'food_lunch_light' },
        { label: 'A hearty homemade warm dish.', next: 'food_lunch_hearty' },
        { label: 'Tasty street food or tacos.', next: 'food_lunch_street' }
      ]
    },
    food_lunch_light: {
      id: 'food_lunch_light',
      text: 'Light lunches keep you feeling fresh and energized without any afternoon slumps!',
      audio: {
        us: '../audios/food_lunch_light_us.mp3',
        uk: '../audios/food_lunch_light_uk.mp3'
      },
      isEnd: true
    },
    food_lunch_hearty: {
      id: 'food_lunch_hearty',
      text: 'Homemade cooking warm from the stove is unmatched. It feels like a hug in a bowl!',
      audio: {
        us: '../audios/food_lunch_hearty_us.mp3',
        uk: '../audios/food_lunch_hearty_uk.mp3'
      },
      isEnd: true
    },
    food_lunch_street: {
      id: 'food_lunch_street',
      text: 'Street food has bold seasonings and amazing textures! Always an exciting flavor experience.',
      audio: {
        us: '../audios/food_lunch_street_us.mp3',
        uk: '../audios/food_lunch_street_uk.mp3'
      },
      isEnd: true
    },
    food_dinner: {
      id: 'food_dinner',
      text: 'Dinner is the best time to unwind. Who do you usually share dinner with?',
      audio: {
        us: '../audios/food_dinner_us.mp3',
        uk: '../audios/food_dinner_uk.mp3'
      },
      options: [
        { label: 'With family or close friends.', next: 'food_dinner_family' },
        { label: 'Enjoying peaceful solo time.', next: 'food_dinner_solo' },
        { label: 'While watching my favorite series.', next: 'food_dinner_tv' }
      ]
    },
    food_dinner_family: {
      id: 'food_dinner_family',
      text: 'Sharing dinner with people you love turns every meal into a warm, cherished memory.',
      audio: {
        us: '../audios/food_dinner_family_us.mp3',
        uk: '../audios/food_dinner_family_uk.mp3'
      },
      isEnd: true
    },
    food_dinner_solo: {
      id: 'food_dinner_solo',
      text: 'Quiet dinners are pure mindfulness. Taking time for yourself is deeply rewarding.',
      audio: {
        us: '../audios/food_dinner_solo_us.mp3',
        uk: '../audios/food_dinner_solo_uk.mp3'
      },
      isEnd: true
    },
    food_dinner_tv: {
      id: 'food_dinner_tv',
      text: 'Good food paired with a great show is the ultimate cozy evening routine!',
      audio: {
        us: '../audios/food_dinner_tv_us.mp3',
        uk: '../audios/food_dinner_tv_uk.mp3'
      },
      isEnd: true
    },
    food_snacks: {
      id: 'food_snacks',
      text: 'Snacks bring instant happiness! What is your absolute go-to treat?',
      audio: {
        us: '../audios/food_snacks_us.mp3',
        uk: '../audios/food_snacks_uk.mp3'
      },
      options: [
        { label: 'Rich chocolate or cookies.', next: 'food_snack_choco' },
        { label: 'Pastries or freshly baked cake.', next: 'food_snack_cake' },
        { label: 'Cold ice cream or frozen yogurt.', next: 'food_snack_ice' }
      ]
    },
    food_snack_choco: {
      id: 'food_snack_choco',
      text: 'Chocolate releases genuine joy chemicals in the brain! You can never go wrong with it.',
      audio: {
        us: '../audios/food_snack_choco_us.mp3',
        uk: '../audios/food_snack_choco_uk.mp3'
      },
      isEnd: true
    },
    food_snack_cake: {
      id: 'food_snack_cake',
      text: 'Bakery treats always taste extraordinary with a cup of warm tea or coffee.',
      audio: {
        us: '../audios/food_snack_cake_us.mp3',
        uk: '../audios/food_snack_cake_uk.mp3'
      },
      isEnd: true
    },
    food_snack_ice: {
      id: 'food_snack_ice',
      text: 'Ice cream is sweet perfection, no matter what season it is outside!',
      audio: {
        us: '../audios/food_snack_ice_us.mp3',
        uk: '../audios/food_snack_ice_uk.mp3'
      },
      isEnd: true
    }
  },

  trips: {
    title: 'Trips',
    start: {
      id: 'trips_start',
      text: "Let's plan a getaway! Where would you love to travel next?",
      audio: {
        us: '../audios/trips_start_us.mp3',
        uk: '../audios/trips_start_uk.mp3'
      },
      options: [
        { label: 'To the beach', next: 'trips_beach' },
        { label: 'To the mountains', next: 'trips_mountains' },
        { label: 'A big city', next: 'trips_city' },
        { label: 'The countryside', next: 'trips_country' }
      ]
    },
    trips_beach: {
      id: 'trips_beach',
      text: 'The ocean breeze is so relaxing! What is your favorite thing to do by the sea?',
      audio: {
        us: '../audios/trips_beach_us.mp3',
        uk: '../audios/trips_beach_uk.mp3'
      },
      options: [
        { label: 'Swimming in the waves.', next: 'trips_beach_swim' },
        { label: 'Reading under an umbrella.', next: 'trips_beach_read' },
        { label: 'Watching the sunset.', next: 'trips_beach_sunset' }
      ]
    },
    trips_beach_swim: {
      id: 'trips_beach_swim',
      text: 'Diving into crystal clear water washes away all stress. Pure freedom and renewal!',
      audio: {
        us: '../audios/trips_beach_swim_us.mp3',
        uk: '../audios/trips_beach_swim_uk.mp3'
      },
      isEnd: true
    },
    trips_beach_read: {
      id: 'trips_beach_read',
      text: 'The sound of crashing waves is the best background sound for reading a captivating book.',
      audio: {
        us: '../audios/trips_beach_read_us.mp3',
        uk: '../audios/trips_beach_read_uk.mp3'
      },
      isEnd: true
    },
    trips_beach_sunset: {
      id: 'trips_beach_sunset',
      text: 'Golden sunsets over the horizon are unforgettable vistas. Make sure to snap a picture!',
      audio: {
        us: '../audios/trips_beach_sunset_us.mp3',
        uk: '../audios/trips_beach_sunset_uk.mp3'
      },
      isEnd: true
    },
    trips_mountains: {
      id: 'trips_mountains',
      text: 'Fresh mountain air does wonders for the soul! How do you like to explore high altitudes?',
      audio: {
        us: '../audios/trips_mountains_us.mp3',
        uk: '../audios/trips_mountains_uk.mp3'
      },
      options: [
        { label: 'Hiking scenic trails.', next: 'trips_mtn_hike' },
        { label: 'Cozying up in a wooden cabin.', next: 'trips_mtn_cabin' },
        { label: 'Stargazing at night.', next: 'trips_mtn_stars' }
      ]
    },
    trips_mtn_hike: {
      id: 'trips_mtn_hike',
      text: 'Hiking pushes your strength and rewards you with panoramic summit views. Spectacular!',
      audio: {
        us: '../audios/trips_mtn_hike_us.mp3',
        uk: '../audios/trips_mtn_hike_uk.mp3'
      },
      isEnd: true
    },
    trips_mtn_cabin: {
      id: 'trips_mtn_cabin',
      text: 'A rustic fireplace, hot chocolate, and mist outside the window is the peak of coziness.',
      audio: {
        us: '../audios/trips_mtn_cabin_us.mp3',
        uk: '../audios/trips_mtn_cabin_uk.mp3'
      },
      isEnd: true
    },
    trips_mtn_stars: {
      id: 'trips_mtn_stars',
      text: 'Away from city lights, the mountain night sky looks like a blanket of glittering diamonds.',
      audio: {
        us: '../audios/trips_mtn_stars_us.mp3',
        uk: '../audios/trips_mtn_stars_uk.mp3'
      },
      isEnd: true
    },
    trips_city: {
      id: 'trips_city',
      text: 'Metropolitan adventures are vibrant and dynamic! What attracts you most in big cities?',
      audio: {
        us: '../audios/trips_city_us.mp3',
        uk: '../audios/trips_city_uk.mp3'
      },
      options: [
        { label: 'World-class museums and art.', next: 'trips_city_museum' },
        { label: 'Trying famous local restaurants.', next: 'trips_city_food' },
        { label: 'Shopping and trendy streets.', next: 'trips_city_shop' }
      ]
    },
    trips_city_museum: {
      id: 'trips_city_museum',
      text: 'Exploring history, culture, and architecture expands our world view in profound ways.',
      audio: {
        us: '../audios/trips_city_museum_us.mp3',
        uk: '../audios/trips_city_museum_uk.mp3'
      },
      isEnd: true
    },
    trips_city_food: {
      id: 'trips_city_food',
      text: 'Food tours through eclectic neighborhoods let you taste the genuine heart of the city!',
      audio: {
        us: '../audios/trips_city_food_us.mp3',
        uk: '../audios/trips_city_food_uk.mp3'
      },
      isEnd: true
    },
    trips_city_shop: {
      id: 'trips_city_shop',
      text: 'Discovering hidden boutiques and stylish vintage shops creates the most unique memories.',
      audio: {
        us: '../audios/trips_city_shop_us.mp3',
        uk: '../audios/trips_city_shop_uk.mp3'
      },
      isEnd: true
    },
    trips_country: {
      id: 'trips_country',
      text: 'The countryside is so peaceful and slow-paced. How would you spend your time there?',
      audio: {
        us: '../audios/trips_country_us.mp3',
        uk: '../audios/trips_country_uk.mp3'
      },
      options: [
        { label: 'Taking long walks in nature.', next: 'trips_cntry_walks' },
        { label: 'Visiting local organic farms.', next: 'trips_cntry_farms' },
        { label: 'Simply unplugging from screens.', next: 'trips_cntry_unplug' }
      ]
    },
    trips_cntry_walks: {
      id: 'trips_cntry_walks',
      text: 'Walking through lush green pastures with birds singing around is genuine tranquility.',
      audio: {
        us: '../audios/trips_cntry_walks_us.mp3',
        uk: '../audios/trips_cntry_walks_uk.mp3'
      },
      isEnd: true
    },
    trips_cntry_farms: {
      id: 'trips_cntry_farms',
      text: 'Tasting fresh harvest food straight from the soil connects us directly with the earth.',
      audio: {
        us: '../audios/trips_cntry_farms_us.mp3',
        uk: '../audios/trips_cntry_farms_uk.mp3'
      },
      isEnd: true
    },
    trips_cntry_unplug: {
      id: 'trips_cntry_unplug',
      text: 'Digital detoxing restores calm and deep sleep. You deserve that serene recharge!',
      audio: {
        us: '../audios/trips_cntry_unplug_us.mp3',
        uk: '../audios/trips_cntry_unplug_uk.mp3'
      },
      isEnd: true
    }
  },

  pharmacy: {
    title: 'Pharmacy',
    start: {
      id: 'pharm_start',
      text: 'Welcome to the pharmacy! How can I help you today?',
      audio: {
        us: '../audios/pharm_start_us.mp3',
        uk: '../audios/pharm_start_uk.mp3'
      },
      options: [
        { label: 'I have a headache.', next: 'pharm_headache' },
        { label: 'I have a sore throat.', next: 'pharm_throat' },
        { label: 'I need some vitamins.', next: 'pharm_vitamins' },
        { label: 'Looking for sunscreen.', next: 'pharm_sunscreen' }
      ]
    },
    pharm_headache: {
      id: 'pharm_headache',
      text: 'I am sorry to hear that. Has the headache been going on for a long time or just today?',
      audio: {
        us: '../audios/pharm_headache_us.mp3',
        uk: '../audios/pharm_headache_uk.mp3'
      },
      options: [
        { label: 'Just started an hour ago.', next: 'pharm_head_hour' },
        { label: 'Since early this morning.', next: 'pharm_head_day' },
        { label: 'Mostly tension from looking at screens.', next: 'pharm_head_screen' }
      ]
    },
    pharm_head_hour: {
      id: 'pharm_head_hour',
      text: 'A mild pain reliever with plenty of water and twenty minutes of dark rest will help immensely!',
      audio: {
        us: '../audios/pharm_head_hour_us.mp3',
        uk: '../audios/pharm_head_hour_uk.mp3'
      },
      isEnd: true
    },
    pharm_head_day: {
      id: 'pharm_head_day',
      text: 'Make sure to take an analgesic, stay hydrated, and visit a doctor if the pain continues.',
      audio: {
        us: '../audios/pharm_head_day_us.mp3',
        uk: '../audios/pharm_head_day_uk.mp3'
      },
      isEnd: true
    },
    pharm_head_screen: {
      id: 'pharm_head_screen',
      text: 'Eye strain is very common! Rest your eyes, dim your monitor, and take a brief screen-free break.',
      audio: {
        us: '../audios/pharm_head_screen_us.mp3',
        uk: '../audios/pharm_head_screen_uk.mp3'
      },
      isEnd: true
    },
    pharm_throat: {
      id: 'pharm_throat',
      text: 'A sore throat can be quite uncomfortable. Do you have a fever or is it just irritation?',
      audio: {
        us: '../audios/pharm_throat_us.mp3',
        uk: '../audios/pharm_throat_uk.mp3'
      },
      options: [
        { label: 'Just a scratchy irritation.', next: 'pharm_throat_scratch' },
        { label: 'Mild fever and dry cough.', next: 'pharm_throat_fever' },
        { label: 'It hurts when I swallow.', next: 'pharm_throat_swallow' }
      ]
    },
    pharm_throat_scratch: {
      id: 'pharm_throat_scratch',
      text: 'Honey-lemon lozenges and warm chamomile tea will coat your throat smoothly and bring relief.',
      audio: {
        us: '../audios/pharm_throat_scratch_us.mp3',
        uk: '../audios/pharm_throat_scratch_uk.mp3'
      },
      isEnd: true
    },
    pharm_throat_fever: {
      id: 'pharm_throat_fever',
      text: 'Please drink plenty of warm fluids, rest in bed, and consult a physician if fever rises.',
      audio: {
        us: '../audios/pharm_throat_fever_us.mp3',
        uk: '../audios/pharm_throat_fever_uk.mp3'
      },
      isEnd: true
    },
    pharm_throat_swallow: {
      id: 'pharm_throat_swallow',
      text: 'An antiseptic throat spray combined with warm salt-water gargles will soothe that discomfort.',
      audio: {
        us: '../audios/pharm_throat_swallow_us.mp3',
        uk: '../audios/pharm_throat_swallow_uk.mp3'
      },
      isEnd: true
    },
    pharm_vitamins: {
      id: 'pharm_vitamins',
      text: 'Vitamins are great for vitality! What health goal are you focusing on currently?',
      audio: {
        us: '../audios/pharm_vitamins_us.mp3',
        uk: '../audios/pharm_vitamins_uk.mp3'
      },
      options: [
        { label: 'Boosting my immune system.', next: 'pharm_vit_immune' },
        { label: 'More energy throughout the day.', next: 'pharm_vit_energy' },
        { label: 'Healthier hair and skin.', next: 'pharm_vit_skin' }
      ]
    },
    pharm_vit_immune: {
      id: 'pharm_vit_immune',
      text: 'Vitamin C, Zinc, and Vitamin D3 form an effective daily combination to support your defenses.',
      audio: {
        us: '../audios/pharm_vit_immune_us.mp3',
        uk: '../audios/pharm_vit_immune_uk.mp3'
      },
      isEnd: true
    },
    pharm_vit_energy: {
      id: 'pharm_vit_energy',
      text: 'A good Vitamin B-complex works wonders for natural cellular metabolism and daily vitality.',
      audio: {
        us: '../audios/pharm_vit_energy_us.mp3',
        uk: '../audios/pharm_vit_energy_uk.mp3'
      },
      isEnd: true
    },
    pharm_vit_skin: {
      id: 'pharm_vit_skin',
      text: 'Biotin, collagen peptides, and Vitamin E keep skin hydrated and nourish hair from within.',
      audio: {
        us: '../audios/pharm_vit_skin_us.mp3',
        uk: '../audios/pharm_vit_skin_uk.mp3'
      },
      isEnd: true
    },
    pharm_sunscreen: {
      id: 'pharm_sunscreen',
      text: 'Sun protection is essential! What type of skin finish do you prefer?',
      audio: {
        us: '../audios/pharm_sunscreen_us.mp3',
        uk: '../audios/pharm_sunscreen_uk.mp3'
      },
      options: [
        { label: 'Matte and oil-free.', next: 'pharm_sun_matte' },
        { label: 'Hydrating with a radiant glow.', next: 'pharm_sun_glow' },
        { label: 'Gentle mineral formula for sensitive skin.', next: 'pharm_sun_mineral' }
      ]
    },
    pharm_sun_matte: {
      id: 'pharm_sun_matte',
      text: 'An SPF 50+ dry-touch gel absorbs quickly without feeling greasy. Remember to reapply every 3 hours!',
      audio: {
        us: '../audios/pharm_sun_matte_us.mp3',
        uk: '../audios/pharm_sun_matte_uk.mp3'
      },
      isEnd: true
    },
    pharm_sun_glow: {
      id: 'pharm_sun_glow',
      text: 'A broad-spectrum hydrating fluid will shield you from UV rays while leaving skin soft and luminous.',
      audio: {
        us: '../audios/pharm_sun_glow_us.mp3',
        uk: '../audios/pharm_sun_glow_uk.mp3'
      },
      isEnd: true
    },
    pharm_sun_mineral: {
      id: 'pharm_sun_mineral',
      text: 'Zinc oxide mineral blockers are hypoallergenic and non-irritating, providing calm, safe protection.',
      audio: {
        us: '../audios/pharm_sun_mineral_us.mp3',
        uk: '../audios/pharm_sun_mineral_uk.mp3'
      },
      isEnd: true
    }
  }
};

const b1VocabularyBank = [
  { word: "Available", slug: "available", definition: "Ready for use or easy to get and reach." },
  { word: "Call off", slug: "call_off", definition: "To cancel an event, meeting, or planned activity." },
  { word: "Carry on", slug: "carry_on", definition: "To continue doing something without stopping." },
  { word: "Get along", slug: "get_along", definition: "To have a friendly and peaceful relationship with someone." },
  { word: "Appointment", slug: "appointment", definition: "An arranged formal meeting at a specific time and place." },
  { word: "Definitely", slug: "definitely", definition: "Without any doubt; completely certain and clear." },
  { word: "Unbelievable", slug: "unbelievable", definition: "Extremely surprising, impressive, or hard to believe." },
  { word: "Responsible", slug: "responsible", definition: "Having the duty to take care of something or someone." },
  { word: "Look forward to", slug: "look_forward_to", definition: "To feel excited and pleased about something that will happen." },
  { word: "Give up", slug: "give_up", definition: "To stop trying or surrender before finishing a task." },
  { word: "Figure out", slug: "figure_out", definition: "To understand or solve a problem after thinking about it." },
  { word: "Turn down", slug: "turn_down", definition: "To reject or refuse an offer, request, or invitation." },
  { word: "Run out of", slug: "run_out_of", definition: "To finish a supply of something so that none is left." },
  { word: "Put off", slug: "put_off", definition: "To delay doing something until a later time or date." },
  { word: "Look after", slug: "look_after", definition: "To take care of or be responsible for someone or something." },
  { word: "Find out", slug: "find_out", definition: "To discover or learn a fact, piece of news, or information." },
  { word: "Pick up", slug: "pick_up", definition: "To collect someone in a vehicle or lift something with hands." },
  { word: "Set up", slug: "set_up", definition: "To establish, arrange, or organize a business or system." },
  { word: "Take off", slug: "take_off", definition: "To leave the ground and begin to fly (for an aircraft)." },
  { word: "Work out", slug: "work_out", definition: "To do physical exercise or find a successful solution." },
  { word: "Reliable", slug: "reliable", definition: "Consistently good in quality, performance, and trustworthy." },
  { word: "Affordable", slug: "affordable", definition: "Reasonably priced and not too expensive to buy." },
  { word: "Crowded", slug: "crowded", definition: "Full of people or things, leaving very little open space." },
  { word: "Exhausted", slug: "exhausted", definition: "Extremely tired and completely drained of energy." },
  { word: "Grateful", slug: "grateful", definition: "Feeling or showing sincere thanks and appreciation." },
  { word: "Willing", slug: "willing", definition: "Ready, eager, and prepared to do something cheerfully." },
  { word: "Avoid", slug: "avoid", definition: "To stay away from a person, place, or unpleasant situation." },
  { word: "Complain", slug: "complain", definition: "To express dissatisfaction, grief, or annoyance about something." },
  { word: "Improve", slug: "improve", definition: "To make or become significantly better in quality." },
  { word: "Persuade", slug: "persuade", definition: "To convince someone to do or believe something through reasoning." },
  { word: "Recommend", slug: "recommend", definition: "To suggest something as good, suitable, or advisable." },
  { word: "Succeed", slug: "succeed", definition: "To achieve the desired aim, victory, or positive result." },
  { word: "Accommodation", slug: "accommodation", definition: "A room or building where someone can stay or live." },
  { word: "Opportunity", slug: "opportunity", definition: "A set of favorable circumstances that makes it possible to do something." },
  { word: "Environment", slug: "environment", definition: "The natural world or surroundings in which people, animals, or plants live." },
  { word: "Belongings", slug: "belongings", definition: "The personal items and things that an individual owns." },
  { word: "Delay", slug: "delay", definition: "A period of waiting or a situation where something happens late." },
  { word: "Neighborhood", slug: "neighborhood", definition: "A district or community within a town or city where people live." },
  { word: "Meanwhile", slug: "meanwhile", definition: "At the same time as something else is happening." },
  { word: "Throughout", slug: "throughout", definition: "In every part of a place, or during the entire period of time." }
];

let currentAccent = 'us';
let currentTopic = 'pets';
let currentNode = 'start';
let isTyping = false;
let typeInterval = null;

const globalAudio = new Audio();
let currentPlayingButton = null;

const messagesContainer = document.getElementById('chat-messages');
const optionsContainer = document.getElementById('chat-options');
const topicButtons = document.querySelectorAll('.topic-card');
const currentTopicBadge = document.getElementById('chat-topic-badge');
const restartBtn = document.getElementById('chat-restart-btn');
const chatSection = document.getElementById('chat-section');
const vocabularySection = document.getElementById('vocabulary-section');
const accentSection = document.getElementById('accent-section');
const cardConversation = document.getElementById('card-conversation');
const cardVocabulary = document.getElementById('card-vocabulary');
const cardAccents = document.getElementById('card-accents');
const navAccentsLink = document.getElementById('nav-accents-link');
const vocabListElement = document.getElementById('vocab-words-list');
const refreshVocabBtn = document.getElementById('refresh-vocab-btn');

const accentCardUs = document.getElementById('accent-card-us');
const accentCardUk = document.getElementById('accent-card-uk');
const btnSampleListen = document.getElementById('btn-sample-listen');
const chatPillUs = document.getElementById('chat-pill-us');
const chatPillUk = document.getElementById('chat-pill-uk');

function playAudio(src, buttonElement) {
  if (!globalAudio.paused) {
    globalAudio.pause();
    globalAudio.currentTime = 0;
    if (currentPlayingButton) {
      currentPlayingButton.classList.remove('is-playing');
    }
  }

  if (currentPlayingButton === buttonElement && globalAudio.src.endsWith(src.replace(/^\.\.\//, ''))) {
    currentPlayingButton = null;
    return;
  }

  currentPlayingButton = buttonElement;
  if (buttonElement) buttonElement.classList.add('is-playing');

  globalAudio.src = src;
  globalAudio.play().catch(() => {
    if (buttonElement) buttonElement.classList.remove('is-playing');
    currentPlayingButton = null;
  });

  globalAudio.onended = () => {
    if (buttonElement) buttonElement.classList.remove('is-playing');
    currentPlayingButton = null;
  };
}

function setAccent(accent) {
  currentAccent = accent;

  if (accentCardUs && accentCardUk) {
    accentCardUs.classList.toggle('active', accent === 'us');
    accentCardUk.classList.toggle('active', accent === 'uk');
  }

  if (chatPillUs && chatPillUk) {
    chatPillUs.classList.toggle('active', accent === 'us');
    chatPillUk.classList.toggle('active', accent === 'uk');
  }
}

function getRandomTenWords() {
  const shuffled = [...b1VocabularyBank].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 10);
}

function renderDailyVocabulary() {
  if (!vocabListElement) return;
  const words = getRandomTenWords();
  vocabListElement.innerHTML = '';

  words.forEach(item => {
    const li = document.createElement('li');
    li.className = 'vocab-item';

    const pillWrapper = document.createElement('div');
    pillWrapper.className = 'vocab-pill-wrapper';

    const checkCircle = document.createElement('span');
    checkCircle.className = 'vocab-check-circle';
    checkCircle.textContent = '✓';

    const wordSpan = document.createElement('span');
    wordSpan.className = 'vocab-word-text';
    wordSpan.textContent = item.word;

    const listenBtn = document.createElement('button');
    listenBtn.type = 'button';
    listenBtn.className = 'btn-vocab-listen';
    listenBtn.setAttribute('aria-label', `Pronounce ${item.word}`);
    listenBtn.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
      </svg>
    `;

    listenBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const audioSrc = `../audios/vocab_${item.slug}_${currentAccent}.mp3`;
      playAudio(audioSrc, listenBtn);
    });

    pillWrapper.appendChild(checkCircle);
    pillWrapper.appendChild(wordSpan);
    pillWrapper.appendChild(listenBtn);

    const defPanel = document.createElement('div');
    defPanel.className = 'vocab-definition-panel';

    const defText = document.createElement('p');
    defText.className = 'vocab-definition-text';
    defText.textContent = item.definition;
    defPanel.appendChild(defText);

    pillWrapper.addEventListener('click', () => {
      li.classList.toggle('is-expanded');
    });

    li.appendChild(pillWrapper);
    li.appendChild(defPanel);
    vocabListElement.appendChild(li);
  });
}

function openChatSection() {
  if (vocabularySection) vocabularySection.classList.remove('active');
  if (accentSection) accentSection.classList.remove('active');
  if (!chatSection) return;
  chatSection.classList.add('active');
  setTopic(currentTopic);
  chatSection.scrollIntoView({ behavior: 'smooth' });
}

function openVocabularySection() {
  if (chatSection) {
    chatSection.classList.remove('active');
    if (isTyping && typeInterval) clearInterval(typeInterval);
    isTyping = false;
  }
  if (accentSection) accentSection.classList.remove('active');
  if (!vocabularySection) return;
  vocabularySection.classList.add('active');
  renderDailyVocabulary();
  vocabularySection.scrollIntoView({ behavior: 'smooth' });
}

function openAccentSection() {
  if (chatSection) {
    chatSection.classList.remove('active');
    if (isTyping && typeInterval) clearInterval(typeInterval);
    isTyping = false;
  }
  if (vocabularySection) vocabularySection.classList.remove('active');
  if (!accentSection) return;
  accentSection.classList.add('active');
  accentSection.scrollIntoView({ behavior: 'smooth' });
}

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
    appendDollMessage(nodeData, () => {
      if (nodeData.isEnd) {
        showCompletionControls();
      } else if (nodeData.options && nodeData.options.length > 0) {
        renderOptions(nodeData.options);
      }
    });
  }, 350);
}

function appendDollMessage(nodeData, onComplete) {
  isTyping = true;
  const msgRow = document.createElement('div');
  msgRow.className = 'chat-row doll-row';

  const avatar = document.createElement('img');
  avatar.src = '../images/LinguaDollAvatar.jpg';
  avatar.alt = 'Lingua-Doll';
  avatar.className = 'chat-doll-avatar';

  const bubble = document.createElement('div');
  bubble.className = 'chat-bubble doll-bubble';

  const textSpan = document.createElement('span');
  textSpan.className = 'doll-bubble-text';
  bubble.appendChild(textSpan);

  msgRow.appendChild(avatar);
  msgRow.appendChild(bubble);
  messagesContainer.appendChild(msgRow);
  scrollToBottom();

  const fullText = nodeData.text;
  let index = 0;
  typeInterval = setInterval(() => {
    textSpan.textContent += fullText.charAt(index);
    index++;
    scrollToBottom();

    if (index >= fullText.length) {
      clearInterval(typeInterval);
      isTyping = false;

      const listenBtn = document.createElement('button');
      listenBtn.type = 'button';
      listenBtn.className = 'btn-bubble-listen';
      listenBtn.innerHTML = `
        <svg class="speaker-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
        </svg>
        <span>Listening</span>
      `;

      listenBtn.addEventListener('click', () => {
        const audioSrc = nodeData.audio[currentAccent];
        playAudio(audioSrc, listenBtn);
      });

      bubble.appendChild(listenBtn);
      scrollToBottom();

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
  note.textContent = 'Great practice session completed!';

  const restartActionBtn = document.createElement('button');
  restartActionBtn.type = 'button';
  restartActionBtn.className = 'btn-chat-action';
  restartActionBtn.textContent = 'Practice again';
  restartActionBtn.addEventListener('click', () => {
    setTopic(currentTopic);
  });

  const changeTopicBtn = document.createElement('button');
  changeTopicBtn.type = 'button';
  changeTopicBtn.className = 'btn-chat-action secondary';
  changeTopicBtn.textContent = 'Choose another topic';
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

if (cardConversation) {
  cardConversation.addEventListener('click', openChatSection);
  cardConversation.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openChatSection();
    }
  });
}

if (cardVocabulary) {
  cardVocabulary.addEventListener('click', openVocabularySection);
  cardVocabulary.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openVocabularySection();
    }
  });
}

if (cardAccents) {
  cardAccents.addEventListener('click', openAccentSection);
  cardAccents.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openAccentSection();
    }
  });
}

if (navAccentsLink) {
  navAccentsLink.addEventListener('click', (e) => {
    e.preventDefault();
    openAccentSection();
  });
}

if (accentCardUs) {
  accentCardUs.addEventListener('click', () => setAccent('us'));
}
if (accentCardUk) {
  accentCardUk.addEventListener('click', () => setAccent('uk'));
}

if (chatPillUs) {
  chatPillUs.addEventListener('click', () => setAccent('us'));
}
if (chatPillUk) {
  chatPillUk.addEventListener('click', () => setAccent('uk'));
}

if (btnSampleListen) {
  btnSampleListen.addEventListener('click', () => {
    const src = `../audios/sample_${currentAccent}.mp3`;
    playAudio(src, btnSampleListen);
  });
}

if (refreshVocabBtn) {
  refreshVocabBtn.addEventListener('click', renderDailyVocabulary);
}
