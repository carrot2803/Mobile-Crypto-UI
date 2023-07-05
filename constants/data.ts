import { bitcoin, etherium, ripple } from "./assets";

export interface currProps {
	id: number;
	name: string;
	bal: string;
	truebal: string;
	percent: string;
	diff: string;
	decreased: boolean;
	img: any;
}

export const Currencies = [
	{
		id: 1,
		name: "Bitcoin",
		bal: "3.5290123123 BTC",
		truebal: "$19.53",
		percent: "+ 4.32%",
		diff: "$ 5.44",
		decreased: false,
		img: bitcoin,
	},
	{
		id: 2,
		name: "Etherium",
		bal: "12.5290123123 ETH",
		truebal: "$19.53",
		percent: "+ 4.32%",
		decreased: false,
		diff: "$ 3.44",
		img: etherium,
	},
	{
		id: 3,
		name: "Ripple",
		bal: "3.5290123123 XRP",
		truebal: "$19.53",
		percent: "- 4.32%",
		decreased: true,
		diff: "$ 7.44",
		img: ripple,
	},
];
