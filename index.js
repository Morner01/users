const getMenCountByYear = (users) => { 
    const obj = {}
    for (const user of users) {
        if (user.gender === 'male') {
            const year = user.birthday.slice(0, 4);
            obj[year] = (obj[year] || 0) + 1;
        }
    }
    return obj;
}
export default getMenCountByYear;
