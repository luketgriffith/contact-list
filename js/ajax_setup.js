import $ from 'jquery';

const APP_ID = '7ZixAilpuHiEPpbJQn2Hx9G8hGdFOTEnTeP14LLT';
const API_KEY = 'Y2f2Cya2GX2kxnVmoe0O9SeE8kxgjKPKvEyFDCv3';

$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': APP_ID,
    'X-Parse-REST-API-Key': API_KEY,
  }
});