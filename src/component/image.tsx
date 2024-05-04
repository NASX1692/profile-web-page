export interface image {
	url: string
}
const Image = ({ url }: image) => {
	return (
		<div className="flex border-r-10">
			<img
				src={url}
				alt="sectionimage"
				className="md:w-[250px] w-full h-full object-cover border-r-30"
			/>
		</div>
	)
}

export default Image
