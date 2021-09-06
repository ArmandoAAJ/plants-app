export interface PlantProps {
    id: number;
    name: string;
    price: number;
    about: string;
    water_tips: string;
    photo: string;
    environments: [string];
    frequency: {
        times: number;
        repeat_every: string;
        watering: number;
        height: string;
        temperature: number;
    };
}
