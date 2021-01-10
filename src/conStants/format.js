export const   to_slug=(str)=>{
    str = str.toLowerCase();
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    str = str.replace(/(đ)/g, 'd');
    str = str.replace(/([^0-9a-z-\s])/g, '');
    str = str.replace(/(\s+)/g, '-');
    str = str.replace(/^-+/g, '');
    str = str.replace(/-+$/g, '');
    return str;
}
export const FORMAT_CURRENT=(price)=>{
    return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}

// quantityBill
export const quantityBill=(cart)=>{
    var tong=0;
    for(let i=0;i<cart.length;i++){
        tong+=cart[i].quantity;
    }
    return tong;
}
// TotalBill
export const totalBill=(cart)=>{
    var tong=0;
    for(let i=0;i<cart.length;i++){
        tong+=cart[i].quantity*(cart[i].cartProduct.price-(cart[i].cartProduct.price*((cart[i].cartProduct.priceSale/100))));
    }
    return tong;
}

//totalProduct
export const totalProduct=(quantity,cart)=>{
    var tong=0;
    tong+=quantity*(cart.price-(cart.price*(cart.priceSale/100)));

    return tong;
}