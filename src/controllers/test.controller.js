/* eslint-disable */

const catchAsync = require('../utils/catchAsync')

const data = {
    title: 'This is the title of thetest route',
    body: 'This is the contentof test route to be displayed once ran',
}

const test = catchAsync(async (req, res) => {
    res.send({ data });
});

module.exports = {
    test
}