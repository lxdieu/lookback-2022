"use strict";
import {listCustomer} from "src/constants";
import CryptoJS from "crypto-js";
import axios from 'axios'
// const axios = require("axios");

const https = require("https");

const instance = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

function sendNotiEmail(template: string, data: any) {
  instance
    .post(process.env.API_SEND_NOTI_EMAIL, {
      language: "vi",
      channel: "fms",
      template,
      payload: data,
    })
    .catch(function (error) {
      return error;
    });
}

export default async function handler(req, res) {
  const { method, body } = req;
  switch (method) {
    case "POST":
      try {
        const data = listCustomer[0];
        const words = CryptoJS.enc.Utf8.parse(JSON.stringify(data)); // WordArray object
        const base64 = CryptoJS.enc.Base64.stringify(words); // string: 'SGVsbG8gd29ybGQ='
        const url = `${process.env.ROOT_URL}/2022/?d=${base64}`;
        console.log(url);
        // sendNotiEmail("fms-notification", [
        //   {
        //     to: process.env.GROUP_EMAIL,
        //     subject: {
        //       // reportDate: moment().format("DD/MM/YYYY"),
        //     },
        //     data: {
        //       url,
        //     },
        //   },
        // ]);
        res.status(200);
      } catch (e) {
        if (e.response) {
          return res.status(e.response.status).json(e.response.data);
        }
        res.status(400).json(e.message || "serverInternalError");
      }

      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
  //
}
