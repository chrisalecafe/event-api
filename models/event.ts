import mongoose, { Schema, model, Model } from 'mongoose';
import { IEvent } from '../interfaces';


// create event schema & model
const EventSchema = new Schema({

    type: {
        type: String,
        enum: {
            values: ['Donation', "Survey", "Social event", "Other"],
            message: '{VALUE} is not valid'
        }
    },
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    description: {
        type: String,
        required: [true, 'Description is required']
    },
    start_date: {
        type: Date,
        required: [true, 'Start Date is required']
    },
    end_date: {
        type: Date,
        required: [true, 'End Date is required']
    },
    country: {
        type: String,
        required: [true, 'Country is required']
    },
    city: {
        type: String,
        required: [true, 'City is required']
    },
    state: {
        type: String,
        required: [true, 'State is required']
    },
    address: {
        type: String,
        required: [true, 'Address is required']
    },
    zip: {
        type: String,
        required: [true, 'Zip is required']
    },
    active: {
        type: Boolean,
        required: [true, 'Active state is required'],
        default: true
    },
    staff: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        name: { type: String }
    }],
    groups: [
        {
            name: {
                type: String,
                required: [true, 'Group name is required']
            },
            participants: [{
                employee: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "User"
                }
                ,
                isEmployees: {
                    type: Boolean,
                    required: [true, 'isEmployees is required'],
                    default: true
                },
                external: {
                    id: { type: String },
                    name: { type: String }
                }
            }
            ]
        }
    ]

});

const Event: Model<IEvent> = mongoose.models.Event || model('Event', EventSchema);
export default Event;
