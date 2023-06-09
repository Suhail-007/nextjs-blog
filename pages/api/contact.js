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
        const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.y6s0gvs.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`

        try {
            client = await MongoClient.connect(connectionString);
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