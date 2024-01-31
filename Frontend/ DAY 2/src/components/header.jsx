import { useState } from 'react';
import { Box, useBreakpointValue } from '@chakra-ui/react';
import Header from '../components/header';
import Sidebar from './components/Sidebar';
import { ChevronRightIcon } from '@chakra-ui/icons';

interface SidebarPageProps {
  onShowSidebar: () => void;
  showSidebarButton?: boolean;
}

const smVariant = { navigation: 'drawer', navigationButton: true };
const mdVariant = { navigation: 'sidebar', navigationButton: false };

export default function Sidebarpage() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const variants = useBreakpointValue({ base: smVariant, md: mdVariant });

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <>
      <Sidebar variant={variants?.navigation} isOpen={isSidebarOpen} onClose={toggleSidebar} />
      <Box ml={!variants?.navigationButton && 200}>
        <Header showSidebarButton={variants?.navigationButton} onShowSidebar={toggleSidebar} />
      </Box>
    </>
  );
}

interface SidebarProps {
  variant?: string; // adjust the type based on what variant can be
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ variant, isOpen, onClose }) => {
  // Your Sidebar component logic here

  return (
    // JSX for your Sidebar component
    <div>
      {/* Example usage of ChevronRightIcon */}
      {isOpen && <ChevronRightIcon />}
      {/* Rest of your Sidebar component JSX */}
    </div>
  );
};
