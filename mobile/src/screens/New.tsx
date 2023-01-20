import { useState } from "react";
import { ScrollView, View, Text, TextInput, TouchableOpacity } from "react-native";
import { BackButton } from "../components/BackButton";
import { Checkbox } from "../components/Checkbox";
import { Feather } from "@expo/vector-icons";
import  colors  from "tailwindcss/colors";


const availableWeekDays = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado']

export function New() {
const [weekDays, setWeekDays] = useState<number[]>([])

function handleToggleWeekday(weekDayIndex: number){
    if(weekDays.includes(weekDayIndex)){
        setWeekDays(prevState => prevState.filter(weekDay => weekDay !== weekDayIndex));
    } else {
        setWeekDays(prevState => [...prevState, weekDayIndex]);
    }
}
  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView 
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 100}}
      >
        <BackButton />
        <Text className="mt-6 text-white font-extrabold text-3xl text-left">Criar hábito</Text>
        <Text className="mt-12 text-white font-extrabold text-base">Qual seu comprometimento?</Text>
        <TextInput placeholder="Exercícios, dormir bem, etc..." placeholderTextColor={colors.zinc[400]} className="h-12 pl-4 rounded-lg mt-3 bg-zinc-900 border-2 border-zinc-800 focus:border-violet-700 text-white"/>
        <Text className="font-semibold mt-12 mb-3 text-white text-base">
            Qual a recorrência?
        </Text>
        {availableWeekDays.map((weekDay, index) => (
            <Checkbox checked={weekDays.includes(index)}
            key={weekDay} title={weekDay} onPress= {() => handleToggleWeekday(index)} />
        ))
        }
       
       <TouchableOpacity className="w-full h-14 flex-row items-center justify-center bg-green-600 rounded-md mt-12">
        <Feather name="check" size={20} color={colors.white}/>
        <Text className="font-semibold text-base text-white ml-2">Confirmar</Text>
       </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
