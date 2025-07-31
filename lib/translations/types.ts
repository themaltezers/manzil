export type SectionWithLines = {
    title: string;
    items: {
        name?: string;
        lines: string[];
        price: string;
    }[];
};
