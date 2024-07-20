exports.getHomePage = (req, res, next) => {
    return res.render('index', {
        pageTitle: 'Home'
    })
}
exports.getServicesPage = (req, res, next) => {
    return res.render('services', {
        pageTitle: 'Home'
    })
}
exports.getServiceDetailsPage = (req, res, next) => {
    return res.render('serviceDetails', {
        pageTitle: 'Home'
    })
}

exports.getAboutPage = (req, res, next) => {
    return res.render('about', {
        pageTitle: 'Home'
    })
}

exports.getContactPage = (req, res, next) => {
    return res.render('contact', {
        pageTitle: 'Contact'
    })
}