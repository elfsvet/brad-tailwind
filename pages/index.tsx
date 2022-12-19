import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import Clipboard from './components/Clipboard';
import ImageGallery from './components/ImageGallery';
import LoginModal from './components/LoginModal';
import Packages from './components/Packages';
import ProductModal from './components/ProductModal';
import SpaCard from './components/SpaCard';

export default function Home() {
  return (
    <div>
      {/* <SpaCard/> */}
      {/* <Packages/> */}
      {/* <ProductModal /> */}
      {/* <ImageGallery/> */}
      {/* <LoginModal /> */}
      <Clipboard />
    </div>
  );
}
