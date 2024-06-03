const getTotalOrder = (data = []) => {
    let total = 0;
    data.forEach(
        ({
            price,
            order_item: {
                dataValues: { quantity },
            },
        }) => {
            total += price * quantity;
        }
    );
    return total;
};

module.exports = getTotalOrder ;