exports.success = function(req, res, mensaje, status){
    const statusCode = status || 200;
    const messajeOk = mensaje || '';
    res.status(statusCode).send( {error: false, status: statusCode, body: messajeOk});
}

exports.error = function(req, res, mensaje, status){
    const statusCode = status || 500;
    const messajeError = mensaje || 'Internal Server Error';
    res.status(statusCode).send( {error: true, status: statusCode, body: messajeError});
}