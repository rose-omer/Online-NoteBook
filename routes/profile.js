const express = require('express');
const router = express.Router();

// Sabit kullanıcı bilgileri
const user = {
    username: "ömer",
    password: "1234",
};

// Profil görüntüleme
router.get("/", (req, res) => {
    if (req.session.loggedIn) {
        res.render("profile", { 
            title: "Profil", 
            username: user.username 
        });
    } else {
        res.redirect("/auth/login");
    }
});

// Profil güncelleme
router.post('/update', (req, res) => {
    const { username, oldPassword, newPassword } = req.body;

    if (user.password === oldPassword) {
        user.username = username;
        user.password = newPassword;
        res.render('profile', {
            title: 'Profil',
            username: user.username,
            success: 'Profil güncellendi.'
        });
    } else {
        res.render('profile', {
            title: 'Profil',
            username: user.username,
            error: 'Eski şifre yanlış.'
        });
    }
});

module.exports = router;
