'use client';
interface Props {
	pcn?: string;
	text: string;
	dcn?: string;
}
const TextSection = (props: Props) => {
	return (
		<div className={`${props.dcn}`}>
			<p className={`${props.pcn}`}>{props.text}</p>
		</div>
	);
};
export default TextSection;
