const {Pokemon} = require('../models');


module.exports.viewAll = async function(req, res) {
    const pokemon= await Pokemon.findAll();
    res.render('index', {pokemon});
};

module.exports.renderEditForm = async function(req, res) {
    const pokemon = await Pokemon.findByPk(
        req.params.id
    );
    res.render('edit', {pokemon})
};

module.exports.updateCard = async function(req, res) {
    await Card.update(
        {
            pokemonName: req.body.pokemonName, //text
            pokemonHealth: req.body.pokemonHealth, //text
            pokemonType: req.body.pokemonType, //image
            pokemonImage: req.body.pokemonImage, //image
            MoveOneImage: req.body.MoveOneImage, //image
            MoveOne: req.body.MoveOne, //text
            MoveOneAmount: req.body.MoveOneAmount, //number
            MoveOneDamage: req.body.MoveOneDamage, //image
            MoveTwoImage: req.body.MoveTwoImage, //image
            MoveTwo: req.body.MoveTwo, //text
            MoveTwoAmount: req.body.MoveTwoAmount, //number
            MoveTwoDamage: req.body.MoveTwoDamage, //number
            weaknessImage: req.body.weaknessImage, //image
            resistanceImage: req.body.resistanceImage, //image
            retreatCostAmount: req.body.retreatCostAmount, //number
            retreatCostImage: req.body.retreatCostImage //image
        },
        {
            where:
                {
                    id: req.params.id
                }
        });
    res.redirect('/');
};

module.exports.renderAddForm = function(req, res) {
    const card = {
        pokemonName: "", //text
        pokemonHealth: "", //text
        pokemonType: "", //image
        pokemonImage: "", //image
        MoveOneImage: "", //image
        MoveOne: "", //text
        MoveOneAmount: 1, //number
        MoveOneDamage: 10, //number
        MoveTwoImage: "", //image
        MoveTwo: "", //text
        MoveTwoAmount: 1, //number
        MoveTwoDamage: 10, //number
        weaknessImage: "", //image
        resistanceImage: "", //image
        retreatCostAmount: 1, //number
        retreatCostImage: "" //image
    };
    res.render('add', {card});
};

module.exports.addCard = async function(req, res) {
    await Card.create(
        {
            pokemonName: req.body.pokemonName, //text
            pokemonHealth: req.body.pokemonHealth, //text
            pokemonType: req.body.pokemonType, //image
            pokemonImage: req.body.pokemonImage, //image
            MoveOneImage: req.body.MoveOneImage, //image
            MoveOne: req.body.MoveOne, //text
            MoveOneAmount: req.body.MoveOneAmount, //number
            MoveOneDamage: req.body.MoveOneDamage, //number
            MoveTwoImage: req.body.MoveTwoImage, //image
            MoveTwo: req.body.MoveTwo, //text
            MoveTwoAmount: req.body.MoveTwoAmount, //number
            MoveTwoDamage: req.body.MoveTwoDamage, //number
            weaknessImage: req.body.weaknessImage, //image
            resistanceImage: req.body.resistanceImage, //image
            retreatCostAmount: req.body.retreatCostAmount, //number
            retreatCostImage: req.body.retreatCostImage //image
        });
    res.redirect('/');
};