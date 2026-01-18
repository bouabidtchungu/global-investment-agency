export type ProjectCategory = 'Infrastructure' | 'Energy' | 'Technology' | 'Real Estate';

export interface Project {
    id: string;
    title: string;
    category: ProjectCategory;
    location: string;
    value: string;
    image: string;
    description: string;
    status: 'Ongoing' | 'Completed' | 'Planned';
}

export const projects: Project[] = [
    {
        id: '1',
        title: 'Solar Energy Complex',
        category: 'Energy',
        location: 'Sahara Deserialize, North Africa',
        value: '$2.5B',
        image: '/images/renewable-energy-solar.png',
        description: 'A large-scale photovoltaic power station utilizing the latest solar technology to provide renewable energy to over 1 million homes.',
        status: 'Ongoing'
    },
    {
        id: '2',
        title: 'International Airport Expansion',
        category: 'Infrastructure',
        location: 'Southeast Asia',
        value: '$5.8B',
        image: '/images/infrastructure-airport.png',
        description: 'Expansion of the main terminal and addition of a third runway to increase capacity by 40% and support regional tourism growth.',
        status: 'Planned'
    },
    {
        id: '3',
        title: 'Smart City Pilot Zone',
        category: 'Technology',
        location: 'Gulf Region',
        value: '$12B',
        image: '/images/smart-city-infrastructure.png',
        description: 'Development of a fully integrated smart city district featuring autonomous transport, AI-driven energy management, and digital governance.',
        status: 'Ongoing'
    },
    {
        id: '4',
        title: 'Deep Water Port Logistics Hub',
        category: 'Infrastructure',
        location: 'South America',
        value: '$3.1B',
        image: '/images/infrastructure-port.png',
        description: 'Modernization of port facilities to handle post-Panamax vessels, creating a strategic logistics hub for the continent.',
        status: 'Completed'
    },
    {
        id: '5',
        title: 'Offshore Wind Farm',
        category: 'Energy',
        location: 'North Sea, Europe',
        value: '$4.2B',
        image: '/images/renewable-energy-solar.png', // reusing similar asset for now or placeholder
        description: 'Next-generation offshore wind farm contributing significantly to the region\'s carbon neutrality goals.',
        status: 'Ongoing'
    },
    {
        id: '6',
        title: 'Tech Innovation Park',
        category: 'Real Estate',
        location: 'East Asia',
        value: '$1.8B',
        image: '/images/smart-city-infrastructure.png',
        description: 'A sustainable commercial district designed to house leading tech companies and startups, with LEED Platinum certification.',
        status: 'Completed'
    }
];
