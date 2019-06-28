const config = require('./protractor.conf.global.js').config;


config.params = {
   baseUrl:'https://slp-test.azurewebsites.net',

   dvca: {
       username: 'z9999062',
       password: 'UnswAzure1'
   },

   tuitionFeeEditUser: {
       username: 'z9999062',
       password: 'UnswAzure1'
   },

    slpEditUser : {
        username: 'z9999055',
        password: 'UnswAzure1'
    }
};

exports.config = config;