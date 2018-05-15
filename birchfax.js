const {config} = require("./config")

const fax_number = process.argv[2]
const document   = process.argv[3]

if( typeof fax_number == 'undefined' || typeof document == 'undefined' ) return false

// todo: is document a valid path?

// todo: is fax_number valid?

const Phaxio = require('phaxio'),
      phaxio = new Phaxio(config.API_KEY, config.API_SECRET)

phaxio.sendFax({
  	to: fax_number,
    filenames: [document]
  }, (err,data) => console.log("error: ", err, data) )
