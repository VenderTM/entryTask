import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Suspense } from "react";

export async function generateStaticParams() {
    const res = await fetch('<https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/{makeId}/modelyear/{year}?format=json>');
    const data = await res.json();

    const currentYear = new Date().getFullYear();
    const years: number[] = [];
    for (let year = 2015; year <= currentYear; year++) {
        years.push(year);
    }

    const paths = data.Results.flatMap((make: { MakeId: number }) =>
        years.map(year => ({
            params: { makeId: make.MakeId.toString(), year: year.toString() }
        }))
    );

    return paths;
}

const Loading = () => <div>Loading...</div>;

const ResultPage = () => {
const router = useRouter();
const {makeId, year} = router.query;
const [models, setModels] = useState<{ Model_ID: string; Model_Name: string }[]>([]);
const [error, setError] = useState(null);


useEffect(() => {
    if(makeId && year) {
        fetch(`<https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/{makeId}/modelyear/{year}?format=json>`)
        .then(response => response.json())
        .then(data => setModels(data.Results))
        .catch(err => setError(err.message))
    }
}, [makeId, year]);

if(error){
    return <div>Error: {error}</div>
}

return (
  <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4">Vehicle Models</h1>
    <Suspense fallback ={<Loading />}>
    {models.length > 0 ? (
      <ul className="list-disc pl-5">
        {models.map(model => (
          <li key={model.Model_ID} className="mb-2">
            {model.Model_Name}
          </li>
        ))}
      </ul>
    ) : (
      <Loading/>
    )}
    </Suspense>
  </div>
);
};

export default ResultPage;