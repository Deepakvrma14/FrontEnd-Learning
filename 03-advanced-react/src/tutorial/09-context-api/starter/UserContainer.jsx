const UserContainer = ({name, logout}) => {
    return(
        <div className="user-container">
            {name ? (
               <>
                <h4>Hiii {name}</h4>
                <button onClick={logout}>Logout</button>
               </>
            ) : (
                <p>Please Login</p>
            )}
        </div>
    );
};
export default UserContainer;