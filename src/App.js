import './App.css';

function App() {
	const BASE_URL =
		'https://docs.google.com/gview?embedded=true&url=https://hygear-mobile.s3.amazonaws.com/assets/header/menu-compressed.pdf';

	return (
		<div class="bg-black h-screen justify-center items-center flex">
			<iframe
				width="100%"
				height="100%"
				title="PDF Viewer"
				src={BASE_URL}
				type="application/pdf"
			/>
		</div>
	);
}

export default App;
