import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  HomeIcon, 
  ClockIcon, 
  CalendarIcon, 
  ChurchIcon, 
  ChampagneIcon, 
  ListIcon, 
  MailIcon, 
  GiftIcon, 
  BookIcon, 
  CameraHeartIcon 
} from '../Icons';
import styles from './Navigation.module.scss';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);

  const sections = [
    { id: 'hero', label: 'Trang chủ', icon: HomeIcon },
    { id: 'countdown', label: 'Đếm ngược', icon: ClockIcon },
    { id: 'date', label: 'Ngày cưới', icon: CalendarIcon },
    { id: 'ceremony', label: 'Lễ cưới', icon: ChurchIcon },
    { id: 'party', label: 'Tiệc cưới', icon: ChampagneIcon },
    { id: 'timeline', label: 'Lịch trình', icon: ListIcon },
    { id: 'rsvp', label: 'RSVP', icon: MailIcon },
    { id: 'gift', label: 'Quà cưới', icon: GiftIcon },
    { id: 'guestbook', label: 'Sổ lưu bút', icon: BookIcon },
    { id: 'gallery', label: 'Thư viện ảnh', icon: CameraHeartIcon }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      // Check which section is currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }

      // Show navigation after scrolling down a bit
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <motion.div 
      className={styles.navigation}
      initial={{ x: -100, opacity: 0 }}
      animate={{ 
        x: isVisible ? 0 : -100, 
        opacity: isVisible ? 1 : 0 
      }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.timelineContainer}>
        {/* Main vertical line */}
        <div className={styles.timelineLine}></div>
        
        {/* Navigation items */}
        <nav className={styles.timelineNav}>
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              className={styles.timelineItem}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Timeline dot */}
              <div className={`${styles.timelineDot} ${activeSection === section.id ? styles.active : ''}`}></div>
              
              {/* Horizontal branch line */}
              <div className={`${styles.branchLine} ${activeSection === section.id ? styles.active : ''}`}></div>
              
              {/* Navigation button */}
              <motion.button
                className={`${styles.navButton} ${activeSection === section.id ? styles.active : ''}`}
                onClick={() => scrollToSection(section.id)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title={section.label}
              >
                <span className={styles.navIcon}>
                  <section.icon />
                </span>
                <span className={styles.navLabel}>{section.label}</span>
              </motion.button>
            </motion.div>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};

export default Navigation;
