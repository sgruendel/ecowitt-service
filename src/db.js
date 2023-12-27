'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/ecowitt-service');

var exports = module.exports = {};

exports.disconnect = mongoose.disconnect;

/*
 PASSKEY: '4885BE701185AF2C83886E1E37F74F2D',
  stationtype: 'WS1900A_V1.1.9',
  dateutc: '2022-03-12 20:58:58',
  runtime: '267891',
  tempinf: '57.4',
  humidityin: '53',
  baromrelin: '29.338',
  baromabsin: '29.338',
  tempf: '30.9',
  humidity: '62',
  winddir: '309',
  windspeedmph: '0.00',
  windgustmph: '0.00',
  maxdailygust: '5.82',
  rainratein: '0.000',
  eventrainin: '0.000',
  hourlyrainin: '0.000',
  dailyrainin: '0.000',
  weeklyrainin: '0.000',
  monthlyrainin: '0.000',
  yearlyrainin: '0.000',
  totalrainin: '0.000',
  ws1900batt: '2.87',
  wh65batt: '0',
  freq: '868M',
  model: 'WS1900'
*/
const report = new mongoose.Schema(
    {
        stationtype: {
            type: String,
            required: true,
        },
        dateutc: {
            type: Date,
            required: true,
        },
        runtime: {
            type: Number,
            required: true,
        },
        tempinf: {
            type: Number,
            required: true,
        },
        humidityin: {
            type: Number,
            required: true,
        },
        baromrelin: {
            type: Number,
            required: true,
        },
        baromabsin: {
            type: Number,
            required: true,
        },
        tempf: {
            type: Number,
            required: true,
        },
        humidity: {
            type: Number,
            required: true,
        },
        winddir: {
            type: Number,
            required: true,
        },
        windspeedmph: {
            type: Number,
            required: true,
        },
        windgustmph: {
            type: Number,
            required: true,
        },
        maxdailygust: {
            type: Number,
            required: true,
        },
        rainratein: {
            type: Number,
            required: true,
        },
        eventrainin: {
            type: Number,
            required: true,
        },
        hourlyrainin: {
            type: Number,
            required: true,
        },
        dailyrainin: {
            type: Number,
            required: true,
        },
        weeklyrainin: {
            type: Number,
            required: true,
        },
        monthlyrainin: {
            type: Number,
            required: true,
        },
        yearlyrainin: {
            type: Number,
            required: true,
        },
        totalrainin: {
            type: Number,
            required: true,
        },
        ws1900batt: {
            type: Number,
            required: true,
        },
        wh65batt: {
            type: Number,
            required: true,
        },
        freq: {
            type: String,
            required: true,
        },
        model: {
            type: String,
            required: true,
        },
    },
    {
        autoCreate: true,
        timestamps: true,
    },
);
report.index({ dateutc: -1});
exports.Report = mongoose.model('Report', report);
