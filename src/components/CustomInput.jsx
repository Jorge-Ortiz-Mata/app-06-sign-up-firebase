import { useState } from "react"
import { TextInput } from "react-native"

export default function CustomInput({handleCredentials, name}){

  return(
    <TextInput
      className="border-2 border-gray-200"
      onChangeText={(value) => {
        handleCredentials(value, name)
      }}
    />
  )
}
