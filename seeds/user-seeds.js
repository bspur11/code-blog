const { User } = require('../models');

const userData = [
    {
        username: "stevo_bour",
        twitter: "stevob",
        github: "stevob",
        email: "stevo_b@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "kev_b",
        twitter: "kevb",
        github: "kevb",
        email: "kev_b@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "david_c",
        twitter: "david",
        github: "david",
        email: "david_c@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "deb_n",
        twitter: "debwho",
        github: "debwho",
        email: "deb_n@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "geffin_r",
        twitter: "geffinravi23",
        github: "geffinravi23",
        email: "geffin_r@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "randi",
        twitter: "randi_w",
        github: "randi",
        email: "randi@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;