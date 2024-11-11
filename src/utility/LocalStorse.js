import { toast } from "react-toastify";

const getCartFromLocalStore = () => {
    const storedListStr = localStorage.getItem('cart');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    } else {
        return [];
    }
}

const addCartToLocalSorage = (id) => {
    const storeList = getCartFromLocalStore();
    if (storeList.includes(id)) {
        // console.log(id, "already exists in the read list")
        toast('Product already exists')
    }
    else {
        storeList.push(id);
        const storedListStr = JSON.stringify(storeList);
        localStorage.setItem('cart',storedListStr);

        toast('Product add in your cart')
    }
}
const getfavouriteFromLocalStore = () => {
    const storedListStr = localStorage.getItem('favourite');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    } else {
        return [];
    }
}

const addfabriteToLocalSorage = (id) => {
    const storeList = getfavouriteFromLocalStore();
    if (storeList.includes(id)) {
        // console.log(id, "already exists in the read list")
        toast('Product already exists in favourite list')
    }
    else {
        storeList.push(id);
        const storedListStr = JSON.stringify(storeList);
        localStorage.setItem('favourite',storedListStr);

        toast('Product add in your favourite list')
    }
}




export {addCartToLocalSorage,getCartFromLocalStore,addfabriteToLocalSorage,getfavouriteFromLocalStore}