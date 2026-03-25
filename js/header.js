import { textElement } from './share.js';

export default function createHeader() {
	const headerTitle = textElement('h1', "GREY'S ANATOMY", ['title']);
	return headerTitle;
}
