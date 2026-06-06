const ProductPrice = ({Value, className}:{Value: number; className?: string}) => {
    const price = Value.toFixed(2);
    const [intPrice, floatPrice] = price.split(".");
    return ( 
        <p className={`text-2xl ${className}`}>
            <span className="text-xs align-super">$</span>
            {intPrice}
            <span className="text-xs align-super">.{floatPrice}</span>
        </p>
     );
}
 
export default ProductPrice;