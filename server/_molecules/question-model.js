'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var mongoosePaginate = require('mongoose-paginate');

const question = require('../_atoms/string-required')
const response = require('../_atoms/string')
const answered = require('../_atoms/boolean-default-false')
const created_at = require('../_atoms/date-default')
const updated_at = require('../_atoms/date-default')

const Question = new Schema({
	question,
  response,
  answered,
  created_at,
  updated_at
});

// Question.index({login: 1,status: 1,email: 1});

Question.plugin(mongoosePaginate);

const molecule = mongoose.model('Question', Question);

module.exports = molecule
