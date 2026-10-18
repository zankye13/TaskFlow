//Gelen http isteklerini (metod, url ve istegin yapildigi zaman) yakalayip konsola loglayan express middleware katmani

const logger = (req, res, next) => {
    const timestamp = new Date().toISOString();
    // formati su sekildedir --> [yyyy-mm-dd h:m:s:ms] req type : url 
    console.log(`[${timestamp}] ${req.method} isteği geldi: ${req.originalUrl}`);
    next();
};

module.exports = logger;