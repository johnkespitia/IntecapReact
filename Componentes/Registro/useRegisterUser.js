import axios from "axios"
import { useState } from "react"


const useRegisterUser = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(false)

    const sendData = async(usuario) => {
        setLoading(true)
        setError(null)
        setSuccess(false)

        try {
            const response = await axios.post(
                "https://apitest.plgeducation.com/public/api/hr-management/students",
                usuario,
                {
                    headers:{
                        "Authorization": "Bearer 454|mhhtMIHurYq8FapWMvFXwHwzOFFxWDrLcQyhzoyC"
                    }
                }
            )
            setSuccess(true)
            return response.data
        } catch (error) {
            setError(error.message)
        }finally{
            setLoading(false)
        }
    }

    return { loading, error, sendData, success }
}

export default useRegisterUser