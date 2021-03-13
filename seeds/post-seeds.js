const { Post } = require('../models');

const postData = [
    {
        title: "What we learned!",
        post_content: "When they weren’t doing their forced walks and work, the men radically changed their habits. Instead of being active and engaged with life, they became totally lazy and spent most of their time sitting in bed. Even their minds became lazier. They reported not thinking as clearly, which happened because their brains had dialed back energy use (the brain uses a ton of energy).",
        user_id: 3
    },
    {
        title: "1 million subscribers!",
        post_content: "In November of 1944, 36 men entered a lab at the University of Minnesota. They were to be the guinea pigs in one of the most extreme and dangerous studies ever conducted.",
        user_id: 1
    },
    {
        title: "Scheduler tool now available!",
        post_content: "In this webinar, our Chief Analyst, Naeem Aslam, will walk you through all the major fundamentals and perform an in-depth sector analysis to find stocks that have good momentum.",
        user_id: 2

    },
    {
        title: "World War II!",
        post_content: "In the study, the men were forced to walk at least three miles and do two hours of physical labor every day. During the first 12 weeks, the men ate normally (about 3,200 calories a day). The researchers took baseline measurements of their weight, body fat, resting heart rate, blood panels, strength, psychological state, etc, etc, etc.",
        user_id: 5
    },
    {
        title: "This is what happens when we start eating less!",
        post_content: "Then the diet was abruptly cut in half, so the guys ate just 1,570 calories a day for 24 weeks straight. They had to keep walking and working and the scientists continued measuring. The above photos show just how profound the changes were from the outside",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;