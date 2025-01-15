export async function getData(route) {
    const req = await fetch(process.env.BASE_URL + route)

    if (req.status === 200) {
        const { data } = await req.json();
        return data;
    } else {
        console.log("Error fetching data :(");
    }
}