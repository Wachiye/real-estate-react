const formatToCurrency = (value) => {
    return new Intl.NumberFormat( undefined, {
        style:"currency",
        currency:"Ksh"
    }).format(value);
}

export default formatToCurrency;