import { useEffect, useState } from "react";

const useItemInfo = itemId => {
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `https://lit-basin-85287.herokuapp.com/item/${itemId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));

    }, [itemId]);
    return [item]
}

export default useItemInfo;