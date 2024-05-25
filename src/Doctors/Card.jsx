

const Card = ( { doctors }) => {

    const {image , name } = doctors;
    return (
        <div>
            <div className="bg-pink-500 ">
            <img src={image} alt="" />
            </div>
        </div>
    );
};

export default Card;