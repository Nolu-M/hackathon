import Header from '../components/Header'
import Navbar from '../components/Navbar'
import PropTypes from 'prop-types';

const MainLayout = ({ children }) => {
  return (
    <>
        <Header />
        <Navbar />
        {children}
    </>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout
