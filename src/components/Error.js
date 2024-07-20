import { useRouteError } from 'react-router-dom'; // this hook gives you exact error

const Error = () =>{
    const err = useRouteError();
    return (
        <div>
            <h1>Oops!</h1>
            <p1>{err.status}</p1>
        </div>
    )
}

export default Error;