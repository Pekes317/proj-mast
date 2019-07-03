export interface PmNav {
	name: string;
	path: string;
	icon: string;
	match: {};
}

export interface PmSocial {
	svgIcon: string;
	tip: string;
	link: string;
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
	context: string;
}

export interface PmGraphicSlide {
	title: string;
	pic: string;
	desc: string;
}

export interface PmWebSlide {
	title: string;
	pic: string;
	desc: string;
	url: string;
}