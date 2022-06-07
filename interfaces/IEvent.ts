export interface IEvent {
    _id: any;
    type: "Donation" | "Survey" | "Social event" | "Other";
    name: string;
    description: string;
    start_date: Date;
    end_date: Date;
    country: string;
    city: string;
    state: string;
    address: string;
    zip: string;


    active: boolean,
    staff: [{
        user: any;
        name: string;
    }],
    groups: [
        {
            _id: any;
            name: string;
            participants: [{
                employee: any;
                isEmployees: boolean;
                external: {
                    id: string;
                    name: string;
                }
            }
            ]
        }
    ]
}