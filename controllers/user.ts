import { Request, Response } from 'express';
import { seedData } from '../database/seed-data';
import { User } from '../models';


export const getUsers = async (req: Request, res: Response) => {

    try {

        const Users = await User.find();

        if (!Users) {
            return res.status(400).json({
                message: 'No data '
            });
        }

        res.status(200).json({
            message: 'ok',
            Users
        });
    } catch (error) {
        return res.status(500).json({
            messsage: 'Not Found'
        })
    }
}

export const getUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {

        const user = await User.findById(id);

        if (!user) {
            return res.status(400).json({
                message: 'No data '
            });
        }

        res.status(200).json({
            message: 'ok',
            user
        });
    } catch (error) {
        return res.status(500).json({
            messsage: 'Not Found'
        })
    }
}

export const createUser = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        console.log(body);
        const nuevo = new User(body);
        await nuevo.save();
        res.json({
            message: 'ok',
            nuevo
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            messsage: 'error',
            resp: body
        })
    }
}

export const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;
    try {
        body.status = true;
        await User.findOneAndUpdate({ id }, body, { new: true });
        res.json({
            message: 'ok',
            body
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            messsage: 'Error'
        })
    }
}
export const seddUser = async (req: Request, res: Response) => {
    const { body } = req.body;
    try {
        await User.deleteMany();
        await User.insertMany(seedData.users);
        res.json({
            message: 'Created successfully',
            body
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            messsage: 'Error'
        })
    }
}
export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {

        await User.findOneAndUpdate({ id }, { status: false }, { new: true });
        res.json({
            message: 'ok',
            id
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            messsage: 'Error'
        })
    }
}