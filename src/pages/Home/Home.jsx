import React from 'react';
import { motion } from 'framer-motion';
import Countdown from '../../components/Countdown';
import EventSection from '../../components/EventSection';
import Timeline from '../../components/Timeline';
import ImageSlider from '../../components/ImageSlider';
import RSVP from '../../components/RSVP';
import WeddingGift from '../../components/WeddingGift';
import GuestBook from '../../components/GuestBook';
import Navigation from '../../components/Navigation';
import { ChurchIcon, ChampagneIcon } from '../../components/Icons';
// Sử dụng hình ảnh thật từ folder assets
const heroImage = '/assets/4.jpg';
const bottomImage = '/assets/5.jpg';
import styles from './Home.module.scss';

const Home = () => {
  const handleLocationClick = (location) => {
    // Mock function - in real app would open maps
    console.log(`Opening location: ${location}`);
    window.open(`https://maps.google.com/?q=${encodeURIComponent(location)}`, '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://instagram.com/thanhan_thuyvi', '_blank');
  };

  return (
    <div className={styles.home}>
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section with Couple Photo */}
      <section id="hero" className={styles.hero}>
        <div className={styles.heroImage} style={{ backgroundImage: `url(${heroImage})` }}>
          <div className={styles.heroOverlay}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={styles.heroContent}
            >
                             <h1 className={styles.announcement}>lỄ CƯỚI</h1>
               <h2 className={styles.coupleNames}>Thanh An & Thuy Vi</h2>
                             <p className={styles.date}>27.09.2025</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section id="countdown" className={styles.countdownSection}>
        <Countdown />
      </section>

      {/* Wedding Date Section */}
      <section id="date" className={styles.dateSection}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={styles.dateContent}
        >
                     <p className={styles.invitationText}>
             Chúng tôi mời bạn đến<br />
             dự lễ cưới của chúng tôi
           </p>
          <div className={styles.dateDisplay}>
            <div className={styles.dateLine}></div>
                         <span className={styles.dayName}>THỨ BẢY</span>
             <div className={styles.dateLine}></div>
             <span className={styles.dayNumber}>27</span>
             <div className={styles.dateLine}></div>
             <span className={styles.monthName}>THÁNG 9</span>
            <div className={styles.dateLine}></div>
          </div>
        </motion.div>
      </section>

      {/* Ceremony Section */}
      <section id="ceremony" className={styles.ceremonySection}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
                               <EventSection
            title="Lễ Cưới"
            time="15:00 giờ"
            location="Nhà thờ"
            address="6 Thống Nhất, Vũng Tàu, Bà Rịa - Vũng Tàu"
            icon={ChurchIcon}
            onButtonClick={() => handleLocationClick("6 Thống Nhất, Vũng Tàu, Bà Rịa - Vũng Tàu")}
          />
        </motion.div>
      </section>

      {/* Party Section */}
      <section id="party" className={styles.partySection}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
                               <EventSection
            title="Tiệc Cưới"
            time="18:30 giờ"
            location="Nhà hàng"
            address="119 Đ. Hoàng Hoa Thám, Phường Thắng Tam, Vũng Tàu, Bà Rịa - Vũng Tàu"
            icon={ChampagneIcon}
            onButtonClick={() => handleLocationClick("119 Đ. Hoàng Hoa Thám, Phường Thắng Tam, Vũng Tàu, Bà Rịa - Vũng Tàu")}
          />
        </motion.div>
      </section>

             {/* Timeline Section */}
       <section id="timeline" className={styles.timelineSection}>
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
         >
           <Timeline />
         </motion.div>
       </section>

      {/* RSVP Section */}
      <section id="rsvp" className={styles.rsvpSection}>
        <RSVP />
      </section>

      {/* Wedding Gift Section */}
      <section id="gift" className={styles.giftSection}>
        <WeddingGift />
      </section>

      {/* Guest Book Section */}
      <section id="guestbook" className={styles.guestBookSection}>
        <GuestBook />
      </section>

      {/* Bottom Couple Photo */}
      <section className={styles.bottomPhoto}>
        <div className={styles.bottomImage} style={{ backgroundImage: `url(${bottomImage})` }}></div>
      </section>

             {/* Image Slider Section */}
       <section id="gallery" className={styles.imageSliderSection}>
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
         >
           <ImageSlider />
         </motion.div>
       </section>
    </div>
  );
};

export default Home;
