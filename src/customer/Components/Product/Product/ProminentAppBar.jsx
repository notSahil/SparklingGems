import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {API_BASE_URL} from '../../../../config/api'

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'whitesmoke', // Set background color to white
  color: '#000', // Set text color to black
  boxShadow: 'none', // Remove box shadow
  borderBottom: '1px solid #dadce0', // Add bottom border
  width: 'auto', 
  padding : '10px',
  marginTop : '4px',
  marginLeft : '25px',
  // border : '1px solid black'
}));
 
const ProductTitle = styled('div')(
  {
    padding : '5px',
    margin : '5px',
    fontWeight : 'bold',
    border: '1px solid grey',
    backgroundColor : '#F5F5DC',
    borderRadius : '2px'
  }
);

const SearchContainer = styled('div')({
  justifyContent: 'center',
  alignItems : 'center',
  width:"300px",
  position:'relative', // Adjusted padding for smaller area
  // marginBottom : '10px'
});

const SearchInput = styled(InputBase)(({ theme }) => ({
  width: '250px', // Adjusted width for smaller area
  backgroundColor: '#ebebb0', // Set background color to purple
  color: 'black', // Set text color to white
  borderRadius: '30px', // Add border radius
  padding: '6px 5px',
  alignItems : 'center',
  textAlign : 'center',
  justifyContent : 'center',
  position:'absolute', // Adjusted padding for smaller area
  marginLeft : '10px',
}));

const ProductListContainer = styled('div')({
  backgroundColor : 'white',
  padding : '5px',
  marginTop : '10px',
});
  
const Placeholder = styled('span')({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  pointerEvents: 'none',
  color: '#FFFFFF',
});

export default function ProminentAppBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/products/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchResults(response.data);
      setSearchPerformed(true);
    } catch (error) {
      console.error('Error searching products:', error);
    }
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setSearchQuery(''); // Clear search query when closing the search bar
    }
  };

  const handleItemClick = () => {
    setIsSearchOpen(false);
    setSearchResults([]); // Clear search results when an item is clicked
  };

  return (
    <div >
      <StyledAppBar position="static">
        <SearchContainer>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="open search"
            onClick={toggleSearch}
          >
            <SearchIcon />
          </IconButton>
          {isSearchOpen && (
            <SearchInput
              placeholder="          Search the Product"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSearch();
                }
              }}
            />
          )}
        </SearchContainer>
        {isSearchOpen && searchPerformed && (
          <ProductListContainer>
          {searchResults.length === 0 ? (
            <div>No products found</div>
          ) : (
            searchResults.map((product) => (
              <div key={product.id}>
                <Link
                  to={`/product/${product.id}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                  onClick={handleItemClick} // Add onClick event handler
                >
                  {/* Display the product title */}
                  <ProductTitle>{product.title}</ProductTitle>
                </Link>
              </div>
            ))
          )}
          </ProductListContainer>
        
        )}
      </StyledAppBar>
    </div>
  );
}
