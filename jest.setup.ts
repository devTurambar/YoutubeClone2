const { TextEncoder, TextDecoder } = require("util");

Object.assign(global, { TextDecoder, TextEncoder });

// import { TextEncoder, TextDecoder } from 'util';

// // global.TextDecoder = TextDecoder;
// global.TextEncoder = TextEncoder;