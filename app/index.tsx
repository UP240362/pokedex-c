import { Text, View } from "react-native";
import { useEffect } from "react";  
export default function Index() {
  useEffect(() => {
  console.log("Entre en pantalla");
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
          console.log("request ok");
        }  else{
              console.log("Bard Request");
            }
            }catch(error){
              console.log("Ocurrio un error")
            }
    };


    console.log("Entre en pantalla");

 // }, []);
  
  
  return (
    <View>
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
