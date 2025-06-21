import '@/assets/styles/globals.css';
import NavBar from '@/components/Navbar';

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
      </body>
    </html>
  );
};

export default MainLayout;
