import { useRouteError } from "react-router-dom";

const SinglePageError = () => {
    const errror = useRouteError();
    console.log(errror);
    return (
        <div>
            <h3>Sorry, the page you tried cannot be found</h3>
        </div>
    );
};

export default SinglePageError;