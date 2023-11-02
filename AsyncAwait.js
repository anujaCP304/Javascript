function getCheese()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                const cheese = "I am Cheese"
                resolve(cheese);
        }, 2000);
    })
}

function getDough(cheese)
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dough = cheese + " dough";

            if(cheese == "Cheese")
            {
                resolve(dough);
            }
            else
            {
                reject("bad cheese");
            }
        }, 2000)

        
    })
}

async function makePizza()
{
    try
    {
        const cheese = await getCheese();
        console.log(cheese);

        const dough = await getDough(cheese);
        console.log(dough);
    }
    catch(err)
    {
        console.log("Error " + err);
    }
}

makePizza();
