import { Router }from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();


//Create a tweet
router.post('/', async (req, res) => {
    const { content, image, userId } = req.body;
    try{
        const result = await prisma.tweet.create({
            data: {
               content,
                image,
                userId,
            },
        });
        res.json(result);
    } catch (e) {
        res.status(400).json({error: "Something went wrong"});
    }   
});

// List tweets
router.get('/', async (req, res) => {
    const allTweets = await prisma.tweet.findMany({ 
        //include: { user: true }
        select: {
            id: true,
            content: true,
            user: {
                select: {
                    id: true,
                    username: true,
                    image: true,
                },
            },
        },
    })
    res.json(allTweets);
});

// Get a single tweet
router.get('/:id', async (req, res) => {
    const {id} = req.params;
    const tweet = await prisma.tweet.findUnique({
        where: {
            id: Number(id),
        },
    });
    if (!tweet) {
        return res.status(404).json({error: "Tweet not found"});
    }
    res.json(tweet);
});

// Update a tweet
router.put('/:id', async (req, res) => {
    const {id} = req.params;
    const {content, image} = req.body;

    try{
        const updatedTweet = await prisma.tweet.update({
            where: {
                id: Number(id),
            },
            data: {
                content,
                image,
            },
        });
        res.json(updatedTweet);
    } catch (e) {
        res.status(400).json({error: "Failed to update the tweet"});
    }
});

// Delete a tweet
router.delete('/:id', async (req, res) => {
    const {id} = req.params;
    await prisma.tweet.delete({
        where: {
            id: Number(id),
        },
    });
    res.sendStatus(204);
});


export default router;