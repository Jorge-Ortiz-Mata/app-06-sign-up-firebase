import { Button } from "react-native"

export default function CustomButton({text}){

  return(
    <Button title={text} onPress={() => { console.log('Pressed') }} />
  )
}
