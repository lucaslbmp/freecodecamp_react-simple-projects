import { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall from "../data";

export const FeatureFlagsContext = createContext(null);

export default function FeatureFlagsGlobalState({children}){
    const [loading, setLoading] = useState(false);
    const [enabledFlags, setEnabledFlags] = useState({});

    async function fetchFeatureFlags(){
        try{
            setLoading(true);
            const response = await featureFlagsDataServiceCall();
            //const data = await response.json();
            setEnabledFlags(response);
            setLoading(false);
        } catch(err){
            setLoading(false);
            console.log(err);
        }
    }

    useEffect(() => {
        fetchFeatureFlags()
    }, []);

    return(
        <FeatureFlagsContext.Provider value={{loading, enabledFlags}}>
           {children} 
        </FeatureFlagsContext.Provider>
    )
}