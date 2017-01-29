export interface PmNav {
	name: string;
	path: string;
	icon: string;
	match: {};
}

export interface PmSocial {
	svgIcon: string;
	tip: string;
}

export interface PmFeedback {
	id: number;
	message: string;
}

export interface PmSkills {
	category: string;
	list: Array<PmSkill>;
}

export interface PmSkill {
	name: string;
	level: number;
}