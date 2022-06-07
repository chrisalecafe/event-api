import { Request, Response } from 'express';
import { Event } from '../models';
import bcrypt from 'bcrypt';

import mongoose from 'mongoose';

const validateAsignations = (id: any) => {
    return true;
}
export const createRegistration = async (req: Request, res: Response) => {
    const { body } = req;
    try {


        const id = body.id_user;
        const _id = body.id_event;
        const id_group = body.id_group;
        const event = await Event.findById(body.id_event);
        const groups = event?.groups;
        const group = groups?.find(x => x._id == body.id_group);
        console.log(body.id_external);
        const hashedExternalId = body.id_external ? await bcrypt.hashSync(body.id_external, 10) : null;
        if (!validateAsignations(body.id_user)) {
            return res.json({
                message: 'cannot register while in another event'
            });
        }
        let reg = {
            employee: new mongoose.Types.ObjectId(id),

            isEmployees: !body.isEmployees,
            external: body.isEmployees ?? {
                id: hashedExternalId,
                name: body.name
            }
        };

        event?.groups?.find(x => x._id == body.id_group)?.participants.push(reg);
        await event?.save();

        // await Event.findOneAndUpdate({ _id: _id, "groups": { _id: id_group } }, NewEvent, { new: true });
        res.json({
            message: 'ok',
            body
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            messsage: 'error',
            resp: body
        })
    }
}

export const updateRegistration = async (req: Request, res: Response) => {
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

