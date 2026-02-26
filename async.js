function fetchData() {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            resolve('Data fetched successfully');
        },5000)
    });
}

async function getData() {
    console.log('fetching data');

    try {
        const result = await fetchData();
        console.log(result);
    } catch(error) {
        console.error('Error:', error);
    } finally {
        console.log("process completed");
    }
}