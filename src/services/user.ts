import axios from "axios";

export async function login(accountCode: string, password: string) {
    try {
        const req = await axios.post(`${process.env.REACT_APP_API_URL}/user/login`, {
            
                accountCode: accountCode,
                password: password
            
        })
        
        return req.data
    } catch (error) {
        console.log(error);
    }
    

}   