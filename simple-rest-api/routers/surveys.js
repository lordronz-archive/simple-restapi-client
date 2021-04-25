const surveyRouter = require('express').Router();
const Survey = require('../models/surveySchema');
const { ObjectId } = require('mongoose').Types;

surveyRouter.get('/', async (req, res) => {
    const surveys = await Survey.find();
    res.json(surveys);
});

surveyRouter.get('/:name', async (req, res) => {
    const survey = await Survey.find({ name: req.params.name });
    res.json(survey);
});

surveyRouter.post('/', async (req, res) => {
    const newSurvey = new Survey(req.body);
    const savedSurvey = await newSurvey.save();
    res.json(savedSurvey);
});

surveyRouter.put('/:id', async (req, res) => {
    const updatedSurvey = await Survey.findOneAndUpdate(
        { _id: ObjectId(req.params.id) },
        req.body,
        { new: true },
    );
    res.json(updatedSurvey);
})

surveyRouter.delete('/:id', async (req, res) => {
    const deleted = await Survey.deleteOne({ _id: ObjectId(req.params.id) });
    res.json(deleted);
});

module.exports = surveyRouter;
