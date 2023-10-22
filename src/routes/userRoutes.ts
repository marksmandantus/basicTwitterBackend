import { Router }from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

router.post('/', async (req, res) => {
    const {name, email, username} = req.body;
    try{
        const result = await prisma.user.create({
            data: {
                name,
                email,
                username,
                bio: "Hello",
            },
        });
        res.json(result);
    } catch (e) {
        res.status(400).json({error: "Something went wrong"});
    }    
});

router.get('/', async (req, res) => {
    const allUsers = await prisma.user.findMany({
        select: {
            id: true,
            username: true,
            image: true,
        }})
    res.json(allUsers);
});

router.get('/:id', async (req, res) => {
    const {id} = req.params;

    const user = await prisma.user.findUnique({
        where: {
            id: Number(id),
        },
        include: {
            tweets: true,
        },
    });
    res.json(user);
});

router.put('/:id', async (req, res) => {
    const {id} = req.params;
    const {bio, name, image} = req.body;

    try{
        const updatedUser = await prisma.user.update({
            where: {
                id: Number(id),
            },
            data: {
                bio,
                name,
                image,
            },
        });
        res.json(updatedUser);
    } catch (e) {
        res.status(400).json({error: "Failed to update the user"});
    }
});

router.delete('/:id', async (req, res) => {
    const {id} = req.params;
    await prisma.user.delete({
        where: {
            id: Number(id),
        },
    });
    res.sendStatus(204);
});


export default router;