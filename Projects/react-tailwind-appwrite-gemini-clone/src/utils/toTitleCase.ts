

export default function toTitleCase(text: string) {
 return text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}