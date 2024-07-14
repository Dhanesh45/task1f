exports.ensureAuthenticated = (req, res, next) => {
    if (req.session.user) {
        return next();
    }
    res.status(401).json({ msg: 'Unauthorized' });
};

exports.authorizeRoles = (roles) => {
    return (req, res, next) => {
        if (roles.includes(req.session.user.role)) {
            return next();
        }
        res.status(403).json({ msg: 'Forbidden' });
    };
};
