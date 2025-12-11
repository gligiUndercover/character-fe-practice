export interface Stats {
    strength: number;
    agility: number;
    intelligence: number;
}

export interface Item {
    id: string;
    name: string;
    type: string;
    icon: string;
}

export interface Hero {
    id: string;
    name: string;
    class: string;
    avatar: string;
    stats: Stats;
    inventory: Item[];
}