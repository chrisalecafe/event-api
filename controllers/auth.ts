import { Request, Response } from 'express';
import { User } from '../models';
import bcrypt from 'bcrypt';


export const auth = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ message: 'Username and password are required.' });

        }
        const foundUser = await User.findOne({ username: username });
        if (!foundUser) {
            res.sendStatus(401).json({ message: 'Unauthorized' });
            return;
        }
        const match = await bcrypt.compare(password, foundUser.password);
        if (match) {

            res.status(200).json({
                message: 'ok',
                user: foundUser
            });
            // res.json({ messsage: 'ok', user: foundUser });
            return;
        } else {
            res.sendStatus(401);
            return;
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            messsage: 'error',
            resp: body
        })
    }
}
