import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Slider from './components/Slider.jsx';
import Image from './components/Image.jsx';
import ImgText from './components/ImgText.jsx';
import Card from './components/Card.jsx';
import Banner from './components/Banner.jsx';
import Text from './components/Text.jsx';
import Footer from './components/Footer.jsx';
import Contents from './components/Contents.jsx';


function App() {
  return (
    <>
      <Header fonts ="nexon"/>
      <Contents>
        <Slider fonts ="nexon"/>
        <Image skill={["section", "nexon"]}/>
        <ImgText skill={["section", "nexon", "gray"]}/>
        <Card  skill={["section", "nexon"]}/>
        <Banner  skill={["section", "gmarket"]}/>
        <Text  skill={["section", "nexon"]}/>
      </Contents>
      <Footer skill={["section", "nexon", "gray"]}/>
    </>
  );
}

export default App;
