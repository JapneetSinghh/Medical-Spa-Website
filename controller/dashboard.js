exports.getDashboard = (req, res, next) => {
    return res.render('dashboard', {
        pageTitle: 'Dashboard',
        url:'/dashboard'
    })
}
exports.getAddService = (req, res, next) => {
    return res.render('addService', {
        pageTitle: 'Add New Service',
        url:'/addService'
    })
}