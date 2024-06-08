import useFetch from "."

export default function TestUseFetchHook(){
    const {data, error, pending} = useFetch('https://dummyjson.com/products?limit=100', {});

    console.log(data.products)

    return(
        <div>
            <h1>Use fetch hook</h1>
            {
                pending && <div>Loading ...</div>
            }
            {
                data?.products && data?.products?.length && 
                data.products.map(p => <p key={p.id}>{p.title}</p>)
            }
            <button onClick={() => {}}></button>
        </div>
    )
}