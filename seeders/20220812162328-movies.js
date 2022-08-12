'use strict';

module.exports = {

  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'movies',
      [
        {
          "title": "The Princess",
          "body": "A beautiful, strong-willed young royal refuses to wed the cruel sociopath to whom she is betrothed and is kidnapped and locked in a remote tower of her father’s castle. With her scorned, vindictive suitor intent on taking her father’s throne, the princess must protect her family and save the kingdom.",
          "image": "https://image.tmdb.org/t/p/original/9pCoqX24a6rE981fY1O3PmhiwrB.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "The Black Phone",
          "body": "Finney Shaw, a shy but clever 13-year-old boy, is abducted by a sadistic killer and trapped in a soundproof basement where screaming is of little use. When a disconnected phone on the wall begins to ring, Finney discovers that he can hear the voices of the killer’s previous victims. And they are dead set on making sure that what happened to them doesn’t happen to Finney.",
          "image": "https://image.tmdb.org/t/p/original/p9ZUzCyy9wRTDuuQexkQ78R2BgF.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "The Ledge",
          "body": "A rock climbing adventure between two friends turns into a terrifying nightmare. After Kelly captures the murder of her best friend on camera, she becomes the next target of a tight-knit group of friends who will stop at nothing to destroy the evidence and anyone in their way. Desperate for her safety, she begins a treacherous climb up a mountain cliff and her survival instincts are put to the test when she becomes trapped with the killers just 20 feet away.",
          "image": "https://image.tmdb.org/t/p/original/dHKfsdNcEPw7YIWFPIhqiuWrSAb.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "The Gray Man",
          "body": "When a shadowy CIA agent uncovers damning agency secrets, he's hunted across the globe by a sociopathic rogue operative who's put a bounty on his head.",
          "image": "https://image.tmdb.org/t/p/original/8cXbitsS6dWQ5gfMTZdorpAAzEH.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "Minions: The Rise of Gru",
          "body": "A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions.",
          "image": "https://image.tmdb.org/t/p/original/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "The Northman",
          "body": "Prince Amleth is on the verge of becoming a man when his father is brutally murdered by his uncle, who kidnaps the boy's mother. Two decades later, Amleth is now a Viking who's on a mission to save his mother, kill his uncle and avenge his father.",
          "image": "https://image.tmdb.org/t/p/original/zhLKlUaF1SEpO58ppHIAyENkwgw.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "The Last: Naruto the Movie",
          "body": "Two years after the events of the Fourth Great Ninja War, the moon that Hagoromo Otsutsuki created long ago to seal away the Gedo Statue begins to descend towards the world, threatening to become a meteor that would destroy everything on impact. Amidst this crisis, a direct descendant of Kaguya Otsutsuki named Toneri Otsutsuki attempts to kidnap Hinata Hyuga but ends up abducting her younger sister Hanabi. Naruto and his allies now mount a rescue mission before finding themselves embroiled in a final battle to decide the fate of everything.",
          "image": "https://image.tmdb.org/t/p/original/bAQ8O5Uw6FedtlCbJTutenzPVKd.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "The Jack in the Box: Awakening",
          "body": "When a vintage Jack-in-the-box is opened by a dying woman, she enters into a deal with the demon within that would see her illness cured in return for helping it claim six innocent victims.",
          "image": "https://image.tmdb.org/t/p/original/3Ib8vlWTrAKRrTWUrTrZPOMW4jp.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "The Batman",
          "body": "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
          "image": "https://image.tmdb.org/t/p/original/74xTEgt7R36Fpooo50r9T25onhq.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "The Lost City",
          "body": "Reclusive author Loretta Sage writes about exotic places in her popular adventure novels that feature a handsome cover model named Alan. While on tour promoting her new book with Alan, Loretta gets kidnapped by an eccentric billionaire who hopes she can lead him to the ancient city's lost treasure that featured in her latest story. Alan, determined to prove he can be a hero in real life and not just on the pages of her books, sets off to rescue her.",
          "image": "https://image.tmdb.org/t/p/original/neMZH82Stu91d3iqvLdNQfqPPyl.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "The Predator",
          "body": "When a young boy accidentally triggers the universe's most lethal hunters' return to Earth, only a ragtag crew of ex-soldiers and a disgruntled scientist can prevent the end of the human race.",
          "image": "https://image.tmdb.org/t/p/original/wMq9kQXTeQCHUZOG4fAe5cAxyUA.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "The Contractor",
          "body": "After being involuntarily discharged from the U.S. Special Forces, James Harper decides to support his family by joining a private contracting organization alongside his best friend and under the command of a fellow veteran. Overseas on a covert mission, Harper must evade those trying to kill him while making his way back home.",
          "image": "https://image.tmdb.org/t/p/original/rJPGPZ5soaG27MK90oKpioSiJE2.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "The Outfit",
          "body": "Leonard is an English tailor who used to craft suits on London’s world-famous Savile Row. After a personal tragedy, he’s ended up in Chicago, operating a small tailor shop in a rough part of town where he makes beautiful clothes for the only people around who can afford them: a family of vicious gangsters.",
          "image": "https://image.tmdb.org/t/p/original/lZa5EB6PVJBT5mxhgZS5ftqdAm6.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "The Sea Beast",
          "body": "The life of a legendary sea monster hunter is turned upside down when a young girl stows away on his ship.",
          "image": "https://image.tmdb.org/t/p/original/9Zfv4Ap1e8eKOYnZPtYaWhLkk0d.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "Sonic the Hedgehog 2",
          "body": "After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero. His test comes when Dr. Robotnik returns, this time with a new partner, Knuckles, in search for an emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands.",
          "image": "https://image.tmdb.org/t/p/original/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "The Requin",
          "body": "A couple on a romantic getaway find themselves stranded at sea when a tropical storm sweeps away their villa. In order to survive, they are forced to fight the elements, while sharks circle below.",
          "image": "https://image.tmdb.org/t/p/original/i0z8g2VRZP3dhVvvSMilbOZMKqR.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "The King's Man",
          "body": "As a collection of history's worst tyrants and criminal masterminds gather to plot a war to wipe out millions, one man must race against time to stop them.",
          "image": "https://image.tmdb.org/t/p/original/nj5HmHRZsrYQEYYXyAusFv35erP.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "The Exorcism of God",
          "body": "An American priest working in Mexico is considered a saint by many local parishioners. However, due to a botched exorcism, he carries a secret that’s eating him alive until he gets an opportunity to face his demon one final time.",
          "image": "https://image.tmdb.org/t/p/original/hangTmbxpSV4gpHG7MgSlCWSSFa.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "Constantine: The House of Mystery",
          "body": "John Constantine wakes up in the eerie House of Mystery with no recollection of how he got there. Fortunately, Zatanna and his friends are all there. Unfortunately, they have a bad habit of turning into demons and ripping him to shreds, over and over again!",
          "image": "https://image.tmdb.org/t/p/original/kqYDoEb9PxLXM2ccoHInMMJalti.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "The Simpsons: The Good, the Bart, and the Loki",
          "body": "Loki is banished from Asgard once again and must face his toughest opponents yet: the Simpsons and Springfield’s mightiest heroes. The God of Mischief teams up with Bart Simpson in the ultimate crossover event paying tribute to the Marvel Cinematic Universe of superheroes and villains.",
          "image": "https://image.tmdb.org/t/p/original/rtMdtzywcAGOrF6t8fbxJBqpdcq.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "Minions: The Rise of Gru",
          "body": "A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions.",
          "image": "https://image.tmdb.org/t/p/original/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "The Exorcism of God",
          "body": "An American priest working in Mexico is considered a saint by many local parishioners. However, due to a botched exorcism, he carries a secret that’s eating him alive until he gets an opportunity to face his demon one final time.",
          "image": "https://image.tmdb.org/t/p/original/hangTmbxpSV4gpHG7MgSlCWSSFa.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "Constantine: The House of Mystery",
          "body": "John Constantine wakes up in the eerie House of Mystery with no recollection of how he got there. Fortunately, Zatanna and his friends are all there. Unfortunately, they have a bad habit of turning into demons and ripping him to shreds, over and over again!",
          "image": "https://image.tmdb.org/t/p/original/kqYDoEb9PxLXM2ccoHInMMJalti.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "DC League of Super-Pets",
          "body": "When Superman and the rest of the Justice League are kidnapped, Krypto the Super-Dog must convince a rag-tag shelter pack - Ace the hound, PB the potbellied pig, Merton the turtle and Chip the squirrel - to master their own newfound powers and help him rescue the superheroes.",
          "image": "https://image.tmdb.org/t/p/original/r7XifzvtezNt31ypvsmb6Oqxw49.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "Fantastic Beasts: The Secrets of Dumbledore",
          "body": "Professor Albus Dumbledore knows the powerful, dark wizard Gellert Grindelwald is moving to seize control of the wizarding world. Unable to stop him alone, he entrusts magizoologist Newt Scamander to lead an intrepid team of wizards and witches. They soon encounter an array of old and new beasts as they clash with Grindelwald's growing legion of followers.",
          "image": "https://image.tmdb.org/t/p/original/3c5GNLB4yRSLBby0trHoA1DSQxQ.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "Doctor Strange in the Multiverse of Madness",
          "body": "Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.",
          "image": "https://image.tmdb.org/t/p/original/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
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
          "title": "Paws of Fury: The Legend of Hank",
          "body": "A hard-on-his-luck hound finds himself in a town full of cats in need of a hero to defend them from a ruthless villain's wicked plot to wipe their village off the map. With help from a reluctant mentor, our underdog must assume the role of town samurai and team up with the villagers to save the day.",
          "image": "https://image.tmdb.org/t/p/original/vccE9bBa9mgghFpkWzU1fQqmOKB.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "Wrath of Man",
          "body": "A cold and mysterious new security guard for a Los Angeles cash truck company surprises his co-workers when he unleashes precision skills during a heist. The crew is left wondering who he is and where he came from. Soon, the marksman's ultimate motive becomes clear as he takes dramatic and irrevocable steps to settle a score.",
          "image": "https://image.tmdb.org/t/p/original/M7SUK85sKjaStg4TKhlAVyGlz3.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "Fistful of Vengeance",
          "body": "A revenge mission becomes a fight to save the world from an ancient threat when superpowered assassin Kai tracks a killer to Bangkok.",
          "image": "https://image.tmdb.org/t/p/original/3cccEF9QZgV9bLWyupJO41HSrOV.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "Queen of Spades",
          "body": "According to legend, an ominous entity known as the Queen of Spades can be summoned by performing an ancient ritual. Four teenagers summon the Queen of Spades, but they could never imagine the horrors that await them.",
          "image": "https://image.tmdb.org/t/p/original/4IKBzVBPLXu9p5cfEfdJjHdlafV.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "Army of Thieves",
          "body": "A mysterious woman recruits bank teller Ludwig Dieter to lead a group of aspiring thieves on a top-secret heist during the early stages of the zombie apocalypse.",
          "image": "https://image.tmdb.org/t/p/original/iPTZGFmPs7HsXHYxiuxGolihjOH.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "War of the Worlds: Annihilation",
          "body": "A mother and son find themselves faced with a brutal alien invasion where survival will depend on discovering the unthinkable truth about the enemy.",
          "image": "https://image.tmdb.org/t/p/original/9eiUNsUAw2iwVyMeXNNiNQQad4E.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "Transformers: Age of Extinction",
          "body": "As humanity picks up the pieces, following the conclusion of \"Transformers: Dark of the Moon,\" Autobots and Decepticons have all but vanished from the face of the planet. However, a group of powerful, ingenious businessman and scientists attempt to learn from past Transformer incursions and push the boundaries of technology beyond what they can control - all while an ancient, powerful Transformer menace sets Earth in his cross-hairs.",
          "image": "https://image.tmdb.org/t/p/original/jyzrfx2WaeY60kYZpPYepSjGz4S.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "Dawn of the Planet of the Apes",
          "body": "A group of scientists in San Francisco struggle to stay alive in the aftermath of a plague that is wiping out humanity, while Caesar tries to maintain dominance over his community of intelligent apes.",
          "image": "https://image.tmdb.org/t/p/original/kScdQEwS9jPEdnO23XjGAtaoRcT.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "Man of Steel",
          "body": "A young boy learns that he has extraordinary powers and is not of this earth. As a young man, he journeys to discover where he came from and what he was sent here to do. But the hero in him must emerge if he is to save the world from annihilation and become the symbol of hope for all mankind.",
          "image": "https://image.tmdb.org/t/p/original/7rIPjn5TUK04O25ZkMyHrGNPgLx.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "Prince of Persia: The Sands of Time",
          "body": "A rogue prince reluctantly joins forces with a mysterious princess and together, they race against dark forces to safeguard an ancient dagger capable of releasing the Sands of Time – gift from the gods that can reverse time and allow its possessor to rule the world.",
          "image": "https://image.tmdb.org/t/p/original/lkp1GFmWyf7k2WKvKIQuuGyichI.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "Pirates of the Caribbean: The Curse of the Black Pearl",
          "body": "Jack Sparrow, a freewheeling 18th-century pirate, quarrels with a rival pirate bent on pillaging Port Royal. When the governor's daughter is kidnapped, Sparrow decides to help the girl's love save her.",
          "image": "https://image.tmdb.org/t/p/original/z8onk7LV9Mmw6zKz4hT6pzzvmvl.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "Fifty Shades of Grey",
          "body": "When college senior Anastasia Steele steps in for her sick roommate to interview prominent businessman Christian Grey for their campus paper, little does she realize the path her life will take. Christian, as enigmatic as he is rich and powerful, finds himself strangely drawn to Ana, and she to him. Though sexually inexperienced, Ana plunges headlong into an affair -- and learns that Christian's true sexual proclivities push the boundaries of pain and pleasure.",
          "image": "https://image.tmdb.org/t/p/original/63kGofUkt1Mx0SIL4XI4Z5AoSgt.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "Penguins of Madagascar",
          "body": "Skipper, Kowalski, Rico and Private join forces with undercover organization The North Wind to stop the villainous Dr. Octavius Brine from destroying the world as we know it.",
          "image": "https://image.tmdb.org/t/p/original/dXbpNrPDZDMEbujFoOxmMNQVMHa.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "Zero Fucks Given",
          "body": "Cassandre, 26, is a flight attendant for a low-cost airline. Based in Lanzarote, she’s always willing to take on extra hours and carries out her duties with robotic efficiency. On the side, she just goes with the flow and floats between Tinder, parties and lazy days. When she suddenly gets dismissed, she is forced to return home.",
          "image": "https://image.tmdb.org/t/p/original/wLZ5jijVpOxHuBLmsICKLXwlldu.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "Full Time",
          "body": "Julie finally gets an interview for a job where she can raise her children better only to run into a national transit strike.",
          "image": "https://image.tmdb.org/t/p/original/4n7DdwcPQQTC9V62WeAJkYTB8Va.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "A Bug's Life",
          "body": "On behalf of \"oppressed bugs everywhere,\" an inventive ant named Flik hires a troupe of warrior bugs to defend his bustling colony from a horde of freeloading grasshoppers led by the evil-minded Hopper.",
          "image": "https://image.tmdb.org/t/p/original/hFamOus53922agTlKxhcL7ngJ9h.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "A Day to Die",
          "body": "A disgraced parole officer is indebted to a local gang leader and forced to pull off a series of dangerous drug heists within twelve hours in order to pay the $2 million dollars he owes, rescue his kidnapped pregnant wife, and settle a score with the city's corrupt police chief, who is working with the gang leader and double-crossed him years ago.",
          "image": "https://image.tmdb.org/t/p/original/8Kce1utfytAG5m1PbtVoDzmDZJH.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "The Croods: A New Age",
          "body": "Searching for a safer habitat, the prehistoric Crood family discovers an idyllic, walled-in paradise that meets all of its needs. Unfortunately, they must also learn to live with the Bettermans -- a family that's a couple of steps above the Croods on the evolutionary ladder. As tensions between the new neighbors start to rise, a new threat soon propels both clans on an epic adventure that forces them to embrace their differences, draw strength from one another, and survive together.",
          "image": "https://image.tmdb.org/t/p/original/tbVZ3Sq88dZaCANlUcewQuHQOaE.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "Space Jam: A New Legacy",
          "body": "When LeBron and his young son Dom are trapped in a digital space by a rogue A.I., LeBron must get them home safe by leading Bugs, Lola Bunny and the whole gang of notoriously undisciplined Looney Tunes to victory over the A.I.'s digitized champions on the court. It's Tunes versus Goons in the highest-stakes challenge of his life.",
          "image": "https://image.tmdb.org/t/p/original/5bFK5d3mVTAvBCXi5NPWH0tYjKl.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "A Perfect Pairing",
          "body": "To land a major client, an LA wine exec travels to an Australian sheep station, where she signs on as a ranch hand and hits it off with a rugged local.",
          "image": "https://image.tmdb.org/t/p/original/h65lLhYEfRGOWVZzwX9n7vYOixf.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "Legend - A Dragon Ball Tale",
          "body": "Given diplomatic orders by the Grand Council, Vegeta, now king of the Saiyans, sets out on an interstellar assassination mission.  TARGET LOCATION: PLANET EARTH  OBJECTIVE NO.1: ERADICATION  OBJECTIVE NO.2: PACKAGE RETRIEVAL  For his life, all his training has led to this. Now, Son Goku will learn the true meaning of the title, \"LEGEND.\"",
          "image": "https://image.tmdb.org/t/p/original/58T9B4jiOTyJa6fhsdNoUWKCfpz.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "Through My Window",
          "body": "Raquel's longtime crush on her next-door neighbor turns into something more when he starts developing feelings for her, despite his family's objections.",
          "image": "https://image.tmdb.org/t/p/original/6gg7fvKc1ZxP9yCczweSxIGYp4S.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "Gatlopp: Hell of a Game",
          "body": "Four friends get together for a nostalgic evening of fun and games after a decade of absence, which takes a dark turn.",
          "image": "https://image.tmdb.org/t/p/original/tc5Y4HDyb0I0z3MvKkLuPb1rVmj.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "A Nun's Curse",
          "body": "A group of travelers are forced to seek shelter inside an abandoned jail where a notorious nun named Sister Monday had once been assigned and was suspected of murdering prisoners.",
          "image": "https://image.tmdb.org/t/p/original/eutNRwSguV0NCx7BNAXOibWzjP6.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "A Dog's Journey",
          "body": "A dog finds the meaning of his own existence through the lives of the humans he meets.",
          "image": "https://image.tmdb.org/t/p/original/wquJChp0NpoqthYdE3YjXNNxvVC.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "A Quiet Place Part II",
          "body": "Following the events at home, the Abbott family now face the terrors of the outside world. Forced to venture into the unknown, they realize that the creatures that hunt by sound are not the only threats that lurk beyond the sand path.",
          "image": "https://image.tmdb.org/t/p/original/4q2hz2m8hubgvijz8Ez0T2Os2Yv.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "A Quiet Place",
          "body": "A family is forced to live in silence while hiding from creatures that hunt by sound.",
          "image": "https://image.tmdb.org/t/p/original/nAU74GmpUk7t5iklEp3bufwDq4n.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "To Kill the Mother",
          "body": "In Madrid, Spain, during a rainy day, Dorita, an elegant and magnetic mature woman, meets Noa, an attractive young man.",
          "image": "https://image.tmdb.org/t/p/original/y2PdNP7pC8JdXw49f9QfCYo5SIE.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "Plan A",
          "body": "Germany 1945, Max, a Jewish Holocaust survivor, meets a radical group of Jewish resistance fighters, who, like him, lost all hope for their future after they were robbed of their existence and their entire families were killed by the Nazis. They dream of retaliation on an epic scale for the Jewish people. An eye for an eye, a tooth for a tooth. Max starts identifying with the group's monstrous plans...",
          "image": "https://image.tmdb.org/t/p/original/hPk01ALAAuQoXC8XL2dSqqbsQ4d.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "A Dog's Purpose",
          "body": "A dog goes on quest to discover his purpose in life over the course of several lifetimes with multiple owners.",
          "image": "https://image.tmdb.org/t/p/original/3jcNvhtVQe5Neoffdic39fRactM.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "Once Upon a Snowman",
          "body": "The previously untold origins of Olaf, the innocent and insightful, summer-loving snowman are revealed as we follow Olaf’s first steps as he comes to life and searches for his identity in the snowy mountains outside Arendelle.",
          "image": "https://image.tmdb.org/t/p/original/hddzYJtfYYeMDOQVcH58n8m1W3A.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "Diary of a Wimpy Kid",
          "body": "Greg Heffley is a scrawny but ambitious kid with an active imagination and big plans to be rich and famous – he just has to survive middle school first.",
          "image": "https://image.tmdb.org/t/p/original/obg6lWuNaZkoSlwrVG4VVk4SmT.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "A Haunted House",
          "body": "Malcolm and Kisha move into their dream home, but soon learn a demon also resides there. When Kisha becomes possessed, Malcolm - determined to keep his sex life on track - turns to a priest, a psychic, and a team of ghost-busters for help in this spoof of all the \"found-footage/documentary style\" films released in recent years.",
          "image": "https://image.tmdb.org/t/p/original/skQt53YE2iyOftXj5afJkHmYxLW.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "Time Is Up",
          "body": "Vivien, an accomplished student with a passion for physics, and Roy, a troubled young man, are involved in an accident that forces them to reclaim their lives one minute at the time.",
          "image": "https://image.tmdb.org/t/p/original/dxWHyMY4HoXH8LiEhYlga2OtK5B.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "The Sky Is Everywhere",
          "body": "Lennie is a teen musical prodigy grieving the death of her sister when she finds herself caught between a new guy at school and her sister's devastated boyfriend. Through her vivid imagination and conflicted heart, Lennie navigates first love and first loss.",
          "image": "https://image.tmdb.org/t/p/original/qMVUlq6rdqFo1xZ5ozQcKFCDbgj.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "Megan Is Missing",
          "body": "Fourteen-year–old Megan and her best friend Amy spend a lot of time on the internet, posting videos of themselves and chatting with guys online. One night Megan chats with a guy named Josh who convinces her to meet him for a date. The next day, Megan is missing—forever. Based on actual cases of child abduction.",
          "image": "https://image.tmdb.org/t/p/original/a7ndLikcqvX7dF7gsYx5iDe7qq1.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "This Is the End",
          "body": "While attending a party at James Franco's house, Seth Rogen, Jay Baruchel and many other celebrities are faced with the apocalypse.",
          "image": "https://image.tmdb.org/t/p/original/7Wdc3etyBJA4432TYtz6n9GQd1c.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "A Star Is Born",
          "body": "Seasoned musician Jackson Maine discovers — and falls in love with — struggling artist Ally. She has just about given up on her dream to make it big as a singer — until Jack coaxes her into the spotlight. But even as Ally's career takes off, the personal side of their relationship is breaking down, as Jack fights an ongoing battle with his own internal demons.",
          "image": "https://image.tmdb.org/t/p/original/wrFpXMNBRj2PBiN4Z5kix51XaIZ.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "Ooops! Noah Is Gone...",
          "body": "It's the end of the world. A flood is coming. Luckily for Dave and his son Finny, a couple of clumsy Nestrians, an Ark has been built to save all animals. But as it turns out, Nestrians aren't allowed. Sneaking on board with the involuntary help of Hazel and her daughter Leah, two Grymps, they think they're safe. Until the curious kids fall off the Ark. Now Finny and Leah struggle to survive the flood and hungry predators and attempt to reach the top of a mountain, while Dave and Hazel must put aside their differences, turn the Ark around and save their kids. It's definitely not going to be smooth sailing.",
          "image": "https://image.tmdb.org/t/p/original/gEJXHgpiKh89Vwjc4XUY5CIgUdB.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "Heaven Is for Real",
          "body": "The true story of the 4-year old son of a small-town pastor who, during emergency surgery, slips from consciousness and enters heaven. When he awakes, he recounts his experiences on the other side.",
          "image": "https://image.tmdb.org/t/p/original/w4k7KCwLPDixM13J2JYcqt9kHZ7.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "Father Christmas Is Back",
          "body": "Four sisters – Caroline, Joanna, Paulina, and Vicky – reunite for the Christmas Holiday in a Yorkshire mansion. However, their estranged father, James, joins in for the first time since he left the family behind decades prior. The group attempts to get through the holiday despite comedic misunderstandings, while also uncovering the long-buried secret that tore their family apart, so many years ago.",
          "image": "https://image.tmdb.org/t/p/original/mI6mFCO3lrJ4ovzwfmoLs58uhlK.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "My Name Is Khan",
          "body": "Rizwan Khan, a Muslim from the Borivali section of Mumbai, has Asperger's syndrome. He marries a Hindu single mother, Mandira, in San Francisco. After 9/11, Rizwan is detained by authorities at LAX who treat him as a terrorist because of his condition and his race.",
          "image": "https://image.tmdb.org/t/p/original/5Y36lCiNyyV71mjq6LavgiggbhT.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "This Is 40",
          "body": "Pete and Debbie are both about to turn 40, their kids hate each other, both of their businesses are failing, they're on the verge of losing their house, and their relationship is threatening to fall apart.",
          "image": "https://image.tmdb.org/t/p/original/mzUuOIFoVkRTHACRb58vm6mkbBN.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "Now Is Good",
          "body": "A girl dying of leukemia compiles a list of things she'd like to do before passing away. Topping the list is her desire to lose her virginity.",
          "image": "https://image.tmdb.org/t/p/original/oOBHF6qWtMkzwpnrLDTKJPAb3zH.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "14 Peaks: Nothing Is Impossible",
          "body": "In 2019, Nepalese mountain climber Nirmal “Nims” Purja set out to do the unthinkable by climbing the world’s fourteen highest summits in less than seven months. (The previous record was eight years). He called the effort “Project Possible 14/7” and saw it as a way to inspire others to strive for greater heights in any pursuit. The film follows his team as they seek to defy naysayers and push the limits of human endurance.",
          "image": "https://image.tmdb.org/t/p/original/saGMNCD6ayFqmOb9mX2MkkMmW7w.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "This Is Spinal Tap",
          "body": "\"This Is Spinal Tap\" shines a light on the self-contained universe of a metal band struggling to get back on the charts, including everything from its complicated history of ups and downs, gold albums, name changes and undersold concert dates, along with the full host of requisite groupies, promoters, hangers-on and historians, sessions, release events and those special behind-the-scenes moments that keep it all real.",
          "image": "https://image.tmdb.org/t/p/original/z2LA8eBTSuuPC4NBhIZRNIwpimH.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "This Is It",
          "body": "A compilation of interviews, rehearsals and backstage footage of Michael Jackson as he prepared for his series of sold-out shows in London.",
          "image": "https://image.tmdb.org/t/p/original/rnZ5uZHjdC5qGCgEaH6YSbWftnI.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "One Direction: This Is Us",
          "body": "\"One Direction: This Is Us\" is a captivating and intimate all-access look at life on the road for the global music phenomenon. Weaved with stunning live concert footage, this inspiring feature film tells the remarkable story of Niall, Zayn, Liam, Harry and Louis's really like to be One Direction.",
          "image": "https://image.tmdb.org/t/p/original/g4UUR4K3e1gfifF8dNorAUoqU5Y.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "All Is Lost",
          "body": "During a solo voyage in the Indian Ocean, a veteran mariner awakes to find his vessel taking on water after a collision with a stray shipping container. With his radio and navigation equipment disabled, he sails unknowingly into a violent storm and barely escapes with his life. With any luck, the ocean currents may carry him into a shipping lane -- but, with supplies dwindling and the sharks circling, the sailor is forced to face his own mortality.",
          "image": "https://image.tmdb.org/t/p/original/9cVA4oX2xHgiglv6hemxwAaofsq.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "LEGO Monkie Kid: A Hero Is Born",
          "body": "Monkey King comes to life as a young boy named MK, obsessed with the legends of old, discovers Monkey King's magical staff. After witnessing Red Son and Princess Iron Fan release the Demon Bull King from his prison under the mountain, MK accidentally grabs Monkey King’s magical staff and escapes, sending him on a journey to return the staff to Monkey King in order for him to save the day.",
          "image": "https://image.tmdb.org/t/p/original/3LDHJRNu7er4QH1EJsFLuUmhOWB.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "I Spit on Your Grave III: Vengeance is Mine",
          "body": "Jennifer Hills is still tormented by the brutal sexual assault she endured years ago. She’s changed identities and cities, reluctantly joining a support group where she begins to piece together a new life. But when her new friend’s murderer goes free and the tales of serial rapists haunt her, Jennifer will hunt down the men responsible and do what the system won’t – make them pay for their crimes in the most horrific ways imaginable. Only this time, no jury may be able to save her.",
          "image": "https://image.tmdb.org/t/p/original/jG5GDIcqiqHXkvINZSjyzBUO2vH.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "Where the Heart Is",
          "body": "Novalee Nation is a 17-year-old Tennessee transient who has to grow up in a hurry when she's left pregnant and abandoned by her boyfriend on a roadside, and takes refuge in the friendly aisles of Wal-Mart. Eventually, some eccentric but kindly strangers 'adopt' Novalee and her infant daughter, helping them buck the odds and build a new life.",
          "image": "https://image.tmdb.org/t/p/original/qLlvMmC3RCmjgvfZooc5UUz4cLP.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "title": "Ben Is Back",
          "body": "19-year-old Ben Burns unexpectedly returns home to his family's suburban home on Christmas Eve morning. Ben's mother, Holly, is relieved and welcoming but wary of her son staying clean. Over a turbulent 24 hours, new truths are revealed, and a mother's undying love for her son is tested as she does everything in her power to keep him safe.",
          "image": "https://image.tmdb.org/t/p/original/eSPiprXuWqwMGi6t8BkdiTz9Ou3.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('movies', null, {});
  }
};
