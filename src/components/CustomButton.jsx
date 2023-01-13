import { Button } from "react-native"

export default function CustomButton({text, sendData}){

  return(
    <Button title={text} onPress={sendData} />
  )
}
