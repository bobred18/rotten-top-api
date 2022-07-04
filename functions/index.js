const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const app = express();

exports.app = functions.https.onRequest(app);

const PORT = 33331;

const samples = 3;
const people = {
    "sally-z-michigan": { fname: "Sally", lname: "z Michigan", id: 'sally-z-michigan', age: "18" },
    "lakub": { fname: "Lakub", id: "lakub", age: "18" },
    "exizek": { fname: "Exizek", id: "exizek", age: "17" },
    "zayoo": { fname: "Zayoo", id: "zayoo", age: "18" },
    "syzme-boi": { fname: "Syzme", lname: "Boi", id: "syzme-boi", age: "17" },
    "fikou": { fname: "Fikou", id: "fikou", age: "17" },
    "mr-top": { fname: "Mr. TOP", id: "mr-top", age: "99" },
}

const easterEgg = {
    title: "The MEME Serial #3",
    director: [{ name: "Sally Z Michigan", id: "sally-z-michigan" }, { name: "Lakub", id: "lakub" }],
    writer: [{ name: "Sally Z Michigan", id: "sally-z-michigan" }, { name: "Lakub", id: "lakub" }, { name: "Exizek", id: "exizek" }, { name: "Zayoo", id: "zayoo" }],
    actor: [{ name: "Fikou", id: "fikou" }, { name: "Sally Z Michigan", id: "sally-z-michigan" }],
    rating: parseFloat(15 / samples).toFixed(2),
    image: "dQw4w9WgXcQ",
    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    releaseDate: "2022-04-01"
};

const movies = {
    "twerking-deadpool": {
        title: "Twerking Deadpool",
        rating: parseFloat(7 / samples).toFixed(2),
        director: [{ name: "Mr. TOP", id: "mr-top" }],
        writer: [{ name: "Mr. TOP", id: "mr-top" }],
        image: "x_mf8u9mgQU",
        youtube: "https://www.youtube.com/watch?v=x_mf8u9mgQU",
        releaseDate: "2017-06-14"
    },
    "simpson-ate-double-spice-sushi": {
        title: "Simpson Ate Double Spice Sushi",
        director: [{ name: "Mr. TOP", id: "mr-top" }],
        writer: [{ name: "Mr. TOP", id: "mr-top" }],
        rating: parseFloat(10 / samples).toFixed(2),
        image: "bPry9GS7MHU",
        youtube: "https://www.youtube.com/watch?v=bPry9GS7MHU",
        releaseDate: "2017-06-16"
    },
    "the-real-story": {
        title: "The Real Story",
        director: [{ name: "Mr. TOP", id: "mr-top" }],
        writer: [{ name: "Mr. TOP", id: "mr-top" }],
        rating: parseFloat(12 / samples).toFixed(2),
        image: "QO8KsIPYzUQ",
        youtube: "https://www.youtube.com/watch?v=QO8KsIPYzUQ",
        releaseDate: "2017-06-17"
    },
    "pewdiepie-drama-alert": {
        title: "PewDiePie - Drama Alert!",
        director: [{ name: "Mr. TOP", id: "mr-top" }],
        writer: [{ name: "Mr. TOP", id: "mr-top" }],
        rating: parseFloat(6 / samples).toFixed(2),
        image: "F_1Q3RqNCBk",
        youtube: "https://www.youtube.com/watch?v=F_1Q3RqNCBk",
        releaseDate: "2017-07-25"
    },
    "party-hard": {
        title: "Party Hard",
        director: [{ name: "Mr. TOP", id: "mr-top" }],
        writer: [{ name: "Mr. TOP", id: "mr-top" }],
        rating: parseFloat(5 / samples).toFixed(2),
        image: "nzijlEMMHPE",
        youtube: "https://www.youtube.com/watch?v=nzijlEMMHPE",
        releaseDate: "2017-08-04"
    },
    "the-great-musical": {
        title: "The Great Musical",
        director: [{ name: "Mr. TOP", id: "mr-top" }],
        writer: [{ name: "Mr. TOP", id: "mr-top" }],
        rating: parseFloat(7 / samples).toFixed(2),
        image: "RU4hO5iij64",
        youtube: "https://www.youtube.com/watch?v=RU4hO5iij64",
        releaseDate: "2017-08-15"
    },
    "the-meme-serial-1": {
        title: "The MEME Serial #1",
        director: [{ name: "Sally Z Michigan", id: "sally-z-michigan" }],
        writer: [{ name: "Sally Z Michigan", id: "sally-z-michigan" }, { name: "Lakub", id: "lakub" }, { name: "Syzme Boi", id: "syzme-boi" }],
        rating: parseFloat(15 / samples).toFixed(2),
        image: "3_BqPBPzuDo",
        actor: [{ name: "Fikou", id: "fikou" }, { name: "Lakub", id: "lakub" }, { name: "Sally Z Michigan", id: "sally-z-michigan" }],
        youtube: "https://www.youtube.com/watch?v=3_BqPBPzuDo",
        releaseDate: "2017-09-22",
    },
    "the-meme-serial-2": {
        title: "The MEME Serial #2",
        director: [{ name: "Sally Z Michigan", id: "sally-z-michigan" }],
        writer: [{ name: "Sally Z Michigan", id: "sally-z-michigan" }],
        actor: [{ name: "Fikou", id: "fikou" }, { name: "Lakub", id: "lakub" }, { name: "Sally Z Michigan", id: "sally-z-michigan" }],
        rating: parseFloat(10 / samples).toFixed(2),
        image: "nMRGrDmc248",
        youtube: "https://www.youtube.com/watch?v=nMRGrDmc248",
        releaseDate: "2017-10-13"
    },

    "the-meme-serial-fan-fake": {
        title: "The MEME Serial: FAN FAKE",
        director: [{ name: "Exizek", id: "exizek" }, { name: "Zayoo", id: "zayoo" }],
        writer: [{ name: "Exizek", id: "exizek" }, { name: "Zayoo", id: "zayoo" }],
        rating: parseFloat(9 / samples).toFixed(2),
        image: "wGofSFmwkEI",
        youtube: "https://www.youtube.com/watch?v=wGofSFmwkEI",
        releaseDate: "2021-09-18"
    },

    "kazio-endgame-remastered-1": {
        title: "Kazio Endgame Remastered #1",
        director: [{ name: "Zayoo", id: "zayoo" }],
        writer: [{ name: "Zayoo", id: "zayoo" }],
        remaster: [{ name: "Sally z Michigan", id: "sally-z-michigan" }],
        rating: parseFloat(10 / samples).toFixed(2),
        image: "6e3DdidUddo",
        youtube: "https://www.youtube.com/watch?v=6e3DdidUddo",
        releaseDate: "2020-03-18"
    },
    "kazio-endgame-remastered-2": {
        title: "Kazio Endgame Remastered #2",
        director: [{ name: "Zayoo", id: "zayoo" }],
        writer: [{ name: "Zayoo", id: "zayoo" }],
        remaster: [{ name: "Lakub", id: "lakub" }],
        rating: parseFloat(10 / samples).toFixed(2),
        image: "SsjWxWZTeyY",
        youtube: "https://www.youtube.com/watch?v=SsjWxWZTeyY",
        releaseDate: "2020-10-13"
    },
    "kazio-endgame-remastered-3": {
        title: "Kazio Endgame Remastered #3",
        director: [{ name: "Zayoo", id: "zayoo" }],
        writer: [{ name: "Zayoo", id: "zayoo" }],
        remaster: [{ name: "Lakub", id: "lakub" }],
        rating: parseFloat(10 / samples).toFixed(2),
        image: "4F6mSiMVkdU",
        youtube: "https://www.youtube.com/watch?v=4F6mSiMVkdU",
        releaseDate: "2020-10-27"
    },
    "kitchen-goblin": {
        title: "Kitchen Goblin",
        director: [{ name: "Lakub", id: "lakub" }],
        writer: [{ name: "Zayoo", id: "zayoo" }],
        actor: [{ name: "Zayoo (Goblin, son)", id: "zayoo" }, { name: "Exizek (father)", id: "exizek" }],
        rating: parseFloat(15 / samples).toFixed(2),
        image: "zsflIiVbNcA",
        youtube: "https://www.youtube.com/watch?v=zsflIiVbNcA",
        releaseDate: "2022-04-01"
    },

}

app.use(express.json());
app.use(cors());

app.listen(
    PORT,
    () => {
        console.log(`Listening on port ${PORT}`);
    });

app.get("/movies", (req, res) => {
    res.status(200).send(movies);
})

app.get("/people", (req, res) => {
    res.status(200).send(people);
})

app.get("/movies/:id", (req, res) => {
    const { id } = req.params;

    if (id === "the-meme-serial-3") {
        res.status(200).send(easterEgg);
        return;
    }

    if (!movies[id]) {
        res.status(404).send({ error: "No such movie in database." });
        return;
    }

    res.status(200).send(movies[id]);
});

app.get('/people/:id', (req, res) => {
    const { id } = req.params;

    if (people[id]) {
        res.status(200).send(people[id]);
    } else {
        res.status(404).send({ error: 'No such person in the database.' })
    }
})