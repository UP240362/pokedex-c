import { Text, View } from "react-native";
import { useEffect, useState } from "react";  

export default function Index() {

  const [result, setResults] = useState<any[]>([]);

  useEffect(() => {
  console.log("Entre en pantalla");
  getPokemons();
  }, []);
  
  useEffect(() =>{
    getPokemons();
  }, []);
  
    /*async correr todo al mismo tiempo */
    const getPokemons = async() => {
      try{
        const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
        const response = await fetch(URL, {
          method: "GET",
        });
        if (response.ok){
          console.log(response);
          const data = await response.json();
          setResults(data.results);
        }  else{
              console.log("Bard Request");
            }
            }catch(error){
              console.log("Ocurrio un error")
            }
    };  
  
  return (
    <View>
      <Text>{result.map((item) => {
        return <Text key={item.name}>{item.name}</Text>
      })} </Text>
    </View>
  );
}
