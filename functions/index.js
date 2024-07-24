/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
/*
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");*/

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


const functions = require('firebase-functions');
const { exec } = require('child_process');
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.post('/dashboard/prediction', (req, res) => {
  const input = JSON.stringify(req.body);
  const scriptPath = path.join(__dirname, 'app.py');

  exec(`python ${scriptPath}`, { env: { ...process.env, INPUT: input } }, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return res.status(500).send(stderr);
    }
    res.status(200).send(stdout);
  });
});

exports.api = functions.https.onRequest(app);

