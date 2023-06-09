import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, name, message } = req.body;

        if (
            !email ||
            !email.includes('@') ||
            !name ||
            !name.trim() === ''
            || !message
            || !message.trim() === ''
        ) {
            res.status(422).json({ message: 'Invaid input' })
            return
        }

        const newMessage = {
            email,
            name,
            message
        }

        let client;

        try {
            client = await MongoClient.connect('mongodb+srv://suhail-007:Suhail1998@cluster0.y6s0gvs.mongodb.net/myblog?retryWrites=true&w=majority');
        } catch (error) {
            res.status(500).json({ message: 'Could not connect to Database ', error: error });
        }

        const db = client.db();

        try {
            const result = await db.collection('messages').insertOne(newMessage);
            newMessage.id = result.insertedId;
        } catch (error) {
            client.close();
            res.json(500).json({ message: 'Storing message failed', error: error });
            return
        }

        client.close()
        res.status(200).json({ message: 'Successfully stored message!', data: newMessage })
    }

}