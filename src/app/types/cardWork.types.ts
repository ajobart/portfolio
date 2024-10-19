import BadgesList from "./badgesList.types";

export interface CardWorkItem {
    slug: string;
    title: string;
    summary: string;
    image: string;
    badges_list: Array<BadgesList>;
}