import { useState, useEffect } from "react";

export const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFecth] = useState(false);
    const [loading, setLoading]= useState(false);
    const [error, setError] = useState(null);
    const [itemId, setItemId] = useState(null);

    const httpConfig = (data, method) => {
        if (method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(data),
            });
        } else if (method === "DELETE") {
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json",
                },
            });
            setMethod(method);
            setItemId(data);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                console.log(url);
                const res = await fetch(url);
                const json = await res.json();
                console.log(url);
                setData(json);
            }catch(error){
                console.log(error.message);
                setError("Houve algum erro ao carregar os dados!");
            }
            setLoading(false);
        };
        fetchData();
    },[url, callFetch]);

    useEffect(() => {
        const httpRequest = async () => {
            let json;
            if (method === "POST"){
                let fetchOptions = [url, config];
                const res = await fetch(...fetchOptions);
                json = await res.json();
            } else if (method === "DELETE"){
                const deleteUrl = `${url}/${itemId}`;
                const res = await fetch(deleteUrl, config);
                json = await res.json();
            }
            setCallFecth(json);
        };
        httpRequest();
    }, [config, itemId, method, url]);

    return {data, httpConfig, loading, error};
}