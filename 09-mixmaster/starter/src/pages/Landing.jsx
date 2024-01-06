import { useLoaderData } from "react-router-dom";
import axios from "axios";  
import SearchForm from "../components/SearchForm";
import CocktailList from "../components/CocktailList";


const cocktailSearchUrl ='https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const loader = async ({ request }) => {
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get('search') || '';
    const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
    return { drinks: response.data.drinks, searchTerm };
  };
const Landing = () =>{
    const {drink, searchTerm} = useLoaderData();
    // console.log(drink);
    return(
        <SearchForm searchTerm={searchTerm} />,
        <CocktailList drinks = {drink} />
    );
};
export default Landing;