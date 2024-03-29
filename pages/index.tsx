import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import Clipboard from './components/Clipboard';
import ImageGallery from './components/ImageGallery';
import LoginModal from './components/LoginModal';
import LoopStudios from './components/LoopStudios';
import Packages from './components/Packages';
import ProductModal from './components/ProductModal';
import ShortlyWebsite from './components/ShortlyWebsite';
import SpaCard from './components/SpaCard';
import TestimonialGrid from './components/TestimonialGrid';

export default function Home() {
  return (
    <div>
      {/* <SpaCard/> */}
      {/* <Packages/> */}
      {/* <ProductModal /> */}
      {/* <ImageGallery/> */}
      {/* <LoginModal /> */}
      {/* <Clipboard /> */}
      {/* <LoopStudios /> */}
      {/* <ShortlyWebsite /> */}
      <TestimonialGrid />
    </div>
  );
}
