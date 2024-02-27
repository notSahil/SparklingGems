
// export const data=[

//         const dispatch = useDispatch();
//         const [data, setData] = useState([]);
      
//         const handleFetchProducts = async () => {
//           try {
//             const response = await axios.get('http://localhost:5454/api/products/all');
//             console.log(response.data);
//             setData(response.data); 
//             if (!response.ok) {
//               throw new Error('Failed to fetch products');
//             }
            
//             dispatch({ type: 'UPDATE_PRODUCTS', payload: response.data });
//           } catch (error) {
//             console.error('Error fetching products:', error.message);
//           }}
// ]