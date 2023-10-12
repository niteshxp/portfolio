import { createContext } from 'react'

const UserContext = createContext({
    user: {
        name: "Nitesh",
        email: "abc@gmail.com"
    }
})

export default UserContext