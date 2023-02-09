import NavBar from "./components/NavBar";
import Header from "./components/Header";
import ImageSection from "./components/ImgeSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
function App() {
	return (
		<div className='bg-main'>
			<NavBar />
			<Header />
			<ImageSection />
			<Workflow />
			<Footer />
		</div>
	);
}

export default App;
