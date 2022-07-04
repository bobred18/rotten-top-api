// const express = require("express");
// const cors = require("cors");
// const app = express();

// const PORT = 33330;

// const samples = 3;
// const people = {
//     "jakub-cislo": { firstName: "Jakub", lastName: "Cisło", age: "17", productions: 3 }
// }

// const easterEgg = {
//     title: "The MEME Serial #3",
//     director: [{ name: "Jakub Cisło", id: "jakub-cislo" }, { name: "Kuba Łoszewski", id: "jakub-loszewski" }],
//     writer: [{ name: "Jakub Cisło", id: "jakub-cislo" }, { name: "Kuba Łoszewski", id: "jakub-loszewski" }, { name: "Exizek", id: "arkadiusz-mazurek" }, { name: "Zayoo", id: "kacper-zawistowski" }],
//     rating: parseFloat(15 / samples).toFixed(2),
//     image: "dQw4w9WgXcQ",
//     youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
//     releaseDate: "2022-04-01"
// };

// const movies = {
//     "twerking-deadpool": {
//         title: "Twerking Deadpool",
//         rating: parseFloat(7 / samples).toFixed(2),
//         image: "x_mf8u9mgQU",
//         youtube: "https://www.youtube.com/watch?v=x_mf8u9mgQU",
//         releaseDate: "2017-06-14"
//     },
//     "simpson-ate-double-spice-sushi": {
//         title: "Simpson Ate Double Spice Sushi",
//         rating: parseFloat(10 / samples).toFixed(2),
//         image: "bPry9GS7MHU",
//         youtube: "https://www.youtube.com/watch?v=bPry9GS7MHU",
//         releaseDate: "2017-06-16"
//     },
//     "the-real-story": {
//         title: "The Real Story",
//         rating: parseFloat(12 / samples).toFixed(2),
//         image: "QO8KsIPYzUQ",
//         youtube: "https://www.youtube.com/watch?v=QO8KsIPYzUQ",
//         releaseDate: "2017-06-17"
//     },
//     "pewdiepie-drama-alert": {
//         title: "PewDiePie - Drama Alert!",
//         rating: parseFloat(6 / samples).toFixed(2),
//         image: "F_1Q3RqNCBk",
//         youtube: "https://www.youtube.com/watch?v=F_1Q3RqNCBk",
//         releaseDate: "2017-07-25"
//     },
//     "party-hard": {
//         title: "Party Hard",
//         rating: parseFloat(5 / samples).toFixed(2),
//         image: "nzijlEMMHPE",
//         youtube: "https://www.youtube.com/watch?v=nzijlEMMHPE",
//         releaseDate: "2017-08-04"
//     },
//     "the-great-musical": {
//         title: "The Great Musical",
//         rating: parseFloat(7 / samples).toFixed(2),
//         image: "RU4hO5iij64",
//         youtube: "https://www.youtube.com/watch?v=RU4hO5iij64",
//         releaseDate: "2017-08-15"
//     },
//     "the-meme-serial-1": {
//         title: "The MEME Serial #1",
//         director: [{ name: "Jakub Cisło", id: "jakub-cislo" }],
//         writer: [{ name: "Jakub Cisło", id: "jakub-cislo" }, { name: "Kuba Łoszewski", id: "jakub-loszewski" }, { name: "Szymon Wróblewski", id: "szymon-wroblewski" }],
//         rating: parseFloat(15 / samples).toFixed(2),
//         image: "3_BqPBPzuDo",
//         youtube: "https://www.youtube.com/watch?v=3_BqPBPzuDo",
//         releaseDate: "2017-09-22"
//     },
//     "the-meme-serial-2": {
//         title: "The MEME Serial #2",
//         director: [{ name: "Jakub Cisło", id: "jakub-cislo" }],
//         writer: [{ name: "Jakub Cisło", id: "jakub-cislo" }],
//         rating: parseFloat(10 / samples).toFixed(2),
//         image: "nMRGrDmc248",
//         youtube: "https://www.youtube.com/watch?v=nMRGrDmc248",
//         releaseDate: "2017-10-13"
//     },

//     "the-meme-serial-fan-fake": {
//         title: "The MEME Serial: FAN FAKE",
//         director: [{ name: "Exizek", id: "arkadiusz-mazurek" }, { name: "Zayoo", id: "kacper-zawistowski" }],
//         writer: [{ name: "Exizek", id: "arkadiusz-mazurek" }, { name: "Zayoo", id: "kacper-zawistowski" }],
//         rating: parseFloat(9 / samples).toFixed(2),
//         image: "wGofSFmwkEI",
//         youtube: "https://www.youtube.com/watch?v=wGofSFmwkEI",
//         releaseDate: "2021-09-18"
//     },

//     "kazio-endgame-remastered-1": {
//         title: "Kazio Endgame Remastered #1",
//         director: [{ name: "Zayoo", id: "kacper-zawistowski" }],
//         writer: [{ name: "Zayoo", id: "kacper-zawistowski" }],
//         remaster: [{ name: "Sally z Michigan", id: "jakub-cislo" }],
//         rating: parseFloat(10 / samples).toFixed(2),
//         image: "6e3DdidUddo",
//         youtube: "https://www.youtube.com/watch?v=6e3DdidUddo",
//         releaseDate: "2020-03-18"
//     },
//     "kazio-endgame-remastered-2": {
//         title: "Kazio Endgame Remastered #2",
//         director: [{ name: "Zayoo", id: "kacper-zawistowski" }],
//         writer: [{ name: "Zayoo", id: "kacper-zawistowski" }],
//         remaster: [{ name: "Kuba Łoszewski", id: "jakub-loszewski" }],
//         rating: parseFloat(10 / samples).toFixed(2),
//         image: "SsjWxWZTeyY",
//         youtube: "https://www.youtube.com/watch?v=SsjWxWZTeyY",
//         releaseDate: "2020-10-13"
//     },
//     "kazio-endgame-remastered-3": {
//         title: "Kazio Endgame Remastered #3",
//         director: [{ name: "Zayoo", id: "kacper-zawistowski" }],
//         writer: [{ name: "Zayoo", id: "kacper-zawistowski" }],
//         remaster: [{ name: "Kuba Łoszewski", id: "jakub-loszewski" }],
//         rating: parseFloat(10 / samples).toFixed(2),
//         image: "4F6mSiMVkdU",
//         youtube: "https://www.youtube.com/watch?v=4F6mSiMVkdU",
//         releaseDate: "2020-10-27"
//     },
//     "kitchen-goblin": {
//         title: "Kitchen Goblin",
//         director: [{ name: "Jakub Ł", id: "jakub-loszewski" }],
//         writer: [{ name: "Zayoo", id: "kacper-zawistowski" }],
//         actor: [{ name: "Zayoo (Goblin, son)", id: "kacper-zawistowski" }, { name: "Exizek (father)", id: "arkadiusz-mazurek" }],
//         rating: parseFloat(15 / samples).toFixed(2),
//         image: "zsflIiVbNcA",
//         youtube: "https://www.youtube.com/watch?v=zsflIiVbNcA",
//         releaseDate: "2022-04-01"
//     },

// }

// app.use(express.json());
// app.use(cors());

// app.listen(
//     PORT,
//     () => {
//         console.log(`Listening on port ${PORT}`);
//     });

// app.get("/movies", (req, res) => {
//     res.status(200).send(movies);
// })

// app.get("/people", (req, res) => {
//     res.status(200).send(people);
// })

// app.get("/movies/:id", (req, res) => {
//     const { id } = req.params;

//     if (id === "the-meme-serial-3") {
//         res.status(200).send(easterEgg);
//         return;
//     }

//     if (!movies[id]) {
//         res.status(404).send({ error: "No such movie in database." });
//         return;
//     }

//     res.status(200).send(movies[id]);
// });