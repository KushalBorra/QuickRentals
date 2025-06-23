import '@/assets/styles/globals.css';
import NavBar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Quick Rentals',
  keywords: 'rental, property, real estate', // for SEO
  description: 'Search for the perfect rental properties'
}

const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
