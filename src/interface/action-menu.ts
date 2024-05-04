export enum Menu {
	ABOUT = 'about',
	EDUCATION = 'education',
	WORK_EXPERIENCE = 'workExperience',
	CONTACT = 'contact',
}

export interface IMenu {
	name: string
	display: string
	url?: string
}

export type ActionMenu =
	| Menu.ABOUT
	| Menu.EDUCATION
	| Menu.WORK_EXPERIENCE
	| Menu.CONTACT
