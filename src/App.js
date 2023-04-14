
import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Slider from "./components/Slider.js"
import Offers from "./components/Offers.js"
import data from "./data/data.json"
import Heading from './components/Heading';
import StarProduct from './components/StarProduct';
import HotAccessoriesMenu from './components/HotAccessoriesMenu';
import HotAccessories from './components/HotAccessories.js';
import ProductReviews from './components/ProductReviews';
import Video from "./components/Video.js"
import Banner from './components/Banner.js';
import Footer from './components/Footer.js';
import NavOption from './components/NavOption.js';


function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <NavOption miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio} accessories={data.accessories} />
      <Slider start={data.banner.start} />
      <Offers offers={data.offer} />
      <Heading text="STAR PRODUCTS" />
      <StarProduct starProduct={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />
      <Routes>
        <Route exact path='/music' element={
          <HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />} />
        <Route exact path='/smartdevice' element={
          <HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />} />
        <Route exact path='/home' element={
          <HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />} />
        <Route exact path='/lifestyles' element={
          <HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle} />} />
        <Route exact path='/mobileaccessories' element={
          <HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />} />
      </Routes>
      <Heading text="PRODUCT REVIEWS" />
      <ProductReviews productreview={data.productReviews} />
      <Heading text="VIDEOS" />
      <Video videos={data.videos} />
      <Heading text="IN THE PRESS" />
      <Banner banner={data.banner.end} />
      <Footer footer={data.footer} />

    </Router>
  );
}

export default App;
