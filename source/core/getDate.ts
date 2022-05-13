const formatDate = (date: Date) => {
    return date.toJSON().slice(0, 10).replace(/-/g, '/');
};

const getDayFromDate = (date: string) => {
    const splittedArray = date.split('/');
    return splittedArray[splittedArray.length - 1];
};

const getDate = () => {
    const date = new Date();
    return formatDate(date);
};

const getDateType = (date: string) => {
    const unix = new Date(date);
    return unix;
};

const getStreakDates = () => {
    const today = () => new Date();

    const tomorrow = new Date(today().setDate(today().getDate() + 1));
    const inTwoDays = new Date(today().setDate(today().getDate() + 2));
    const inThreeDays = new Date(today().setDate(today().getDate() + 3));
    const yesterday = new Date(today().setDate(today().getDate() - 1));
    const twoDaysAgo = new Date(today().setDate(today().getDate() - 2));
    const threeDaysAgo = new Date(today().setDate(today().getDate() - 3));

    const dateArray = [
        threeDaysAgo,
        twoDaysAgo,
        yesterday,
        today(),
        tomorrow,
        inTwoDays,
        inThreeDays,
    ];

    return dateArray.map((item) => formatDate(item));
};

export { getDate, getStreakDates, getDayFromDate, getDateType };
