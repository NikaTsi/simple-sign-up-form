function logDataFromLocalStorage() {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
        const userData = JSON.parse(storedData);
        console.log(userData);
    }
}

logDataFromLocalStorage()