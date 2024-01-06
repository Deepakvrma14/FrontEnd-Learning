import {Form, useNavigation} from 'react-router-dom'
import Wrapper from '../assets/wrappers/SearchForm'

const SearchForm = ({searchTerm}) =>{
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';

    return(
        <Wrapper>
            <Form className='form'>
        <input
          type='search'
          name='search'
          className='form-input'
          defaultValue={searchTerm}
        />
        <button type='submit' className='btn' disabled={isLoading} >
            {isLoading ? 'Loading...':'Search'}
        </button>
        
      </Form>
        </Wrapper>
    );
};
export default SearchForm;

