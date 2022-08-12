'use strict';

module.exports = {

  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'movies',
      [
        {
          "title": "Avengers: Endgame",
          "body": "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
          "image": "https://image.tmdb.org/t/p/original/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "Avengers: Infinity War",
          "body": "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
          "image": "https://image.tmdb.org/t/p/original/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "The Avengers",
          "body": "When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!",
          "image": "https://image.tmdb.org/t/p/original/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "Avengers: Age of Ultron",
          "body": "When Tony Stark tries to jumpstart a dormant peacekeeping program, things go awry and Earth’s Mightiest Heroes are put to the ultimate test as the fate of the planet hangs in the balance. As the villainous Ultron emerges, it is up to The Avengers to stop him from enacting his terrible plans, and soon uneasy alliances and unexpected action pave the way for an epic and unique global adventure.",
          "image": "https://image.tmdb.org/t/p/original/4ssDuvEDkSArWEdyBl2X5EHvYKU.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "Avengers: Secret Wars",
          "body": "An upcoming Phase 6 Marvel Cinematic Universe film that will conclude the Multiverse Saga.",
          "image": "https://image.tmdb.org/t/p/original/8chwENebfUEJzZ7sMUA0nOgiCKk.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "Avengers: The Kang Dynasty",
          "body": "An upcoming Phase 6 Marvel Cinematic Universe film and part of The Multiverse Saga.",
          "image": "https://image.tmdb.org/t/p/original/utZTb3VBrH0zR77BcISU67pHuAx.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "Avengers Grimm",
          "body": "When Rumpelstiltskin destroys the Magic Mirror and escapes to the modern world, the four princesses of \"Once Upon a Time\"-Cinderella, Sleeping Beauty, Snow White, and Rapunzel-are sucked through the portal too. Well-trained and endowed with magical powers, the four women must fight Rumpelstiltskin and his army of thralls before he enslaves everyone on Earth.",
          "image": "https://image.tmdb.org/t/p/original/1SbBKCbnULACOqWKN7eLfTu1gVm.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "Avengers Grimm: Time Wars",
          "body": "When Rumpelstiltskin tries to take over Earth once and for all, The Avengers Grimm must track him down through time in order to defeat him.",
          "image": "https://image.tmdb.org/t/p/original/xfAcu74DRQXeM9XqFcE5MrSRzYP.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "Next Avengers: Heroes of Tomorrow",
          "body": "The children of the Avengers hone their powers and go head to head with the very enemy responsible for their parents' demise.",
          "image": "https://image.tmdb.org/t/p/original/nbwvR5cfvxMtvWowIiwazVaaTVz.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "The Avengers",
          "body": "British Ministry agent John Steed, under direction from \"Mother\", investigates a diabolical plot by arch-villain Sir August de Wynter to rule the world with his weather control machine. Steed investigates the beautiful Doctor Mrs. Emma Peel, the only suspect, but simultaneously falls for her and joins forces with her to combat Sir August.",
          "image": "https://image.tmdb.org/t/p/original/1p5thyQ4pCy876HpdvFARqJ62N9.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "Ultimate Avengers: The Movie",
          "body": "When a nuclear missile was fired at Washington in 1945, Captain America managed to detonate it in the upper atmosphere. But then he fell miles into the icy depths of the North Atlantic, where he remained lost for over sixty years. But now, with the world facing the very same evil, Captain America must rise again as our last hope for survival.",
          "image": "https://image.tmdb.org/t/p/original/fKQqZEDmvKMCXEQztvMJHGou9dO.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "Bikini Avengers",
          "body": "When the Jade Empress steals the world's largest diamonds, super heroes Bikini Avenger and Thong Girl must stop her before she uses the gems to build a dangerous sci-fi weapon.",
          "image": "https://image.tmdb.org/t/p/original/ehTYWuPKwl8sXPX0I6LnvJUDaVl.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('movies', null, {});
  }
};
