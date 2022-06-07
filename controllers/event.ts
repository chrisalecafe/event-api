import { Request, Response } from 'express';
import { Event } from '../models';


export const getEvents = async (req: Request, res: Response) => {

    try {

        const Events = await Event.find();

        if (!Events) {
            return res.status(400).json({
                message: 'No data '
            });
        }

        res.status(200).json({
            message: 'ok',
            Events
        });
    } catch (error) {
        return res.status(500).json({
            messsage: 'Not Found'
        })
    }
}

export const getEvent = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {

        const event = await Event.findById(id);

        if (!event) {
            return res.status(400).json({
                message: 'No data '
            });
        }

        res.status(200).json({
            message: 'ok',
            event
        });
    } catch (error) {
        return res.status(500).json({
            messsage: 'Not Found'
        })
    }
}

export const createEvent = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        console.log(body);
        const nuevo = new Event(body);
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

export const updateEvent = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;
    try {
        body.status = true;
        await Event.findOneAndUpdate({ id }, body, { new: true });
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

export const deleteEvent = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {

        await Event.findOneAndUpdate({ id }, { status: false }, { new: true });
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