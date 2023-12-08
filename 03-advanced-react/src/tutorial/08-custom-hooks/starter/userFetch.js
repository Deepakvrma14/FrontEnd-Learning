import {useState, useEffect} from 'react'

const useFetch =(url) =>{
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() =>{
        const getUser = async () =>{
            try{
                const response = await fetch(url);
                if(!response.ok){
                    setIsError(true);
                    setIsLoading(false);
                    return;
                }
                const user = await response.json();
                setUser(user);

            } catch(error){
                console.log(error);
                setIsError(true);
            }
            setIsLoading(false);
        };
        getUser();
    },[]);
    return {isLoading, isError, user};
};
export default useFetch;