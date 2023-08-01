import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native'
import { s } from './src/theme/TodoTheme';
import { BottomTab, CardTodo, CreateTask, Header } from './src/components';
import { TodoProvider } from './src/context/TodoContext';
import { TaskDetail } from './src/components/TaskDetail';


export const App = () => {

  const [activeTabOption, setActiveTabOption] = useState('todoTasks')

  const handleScreenToShow = () => {
    switch(activeTabOption) {
      case 'todoTasks':
        return <CardTodo />;
      
      case 'createTask':
        return <CreateTask/>;

      case 'taskDetail':
        return <TaskDetail/>;
    }
  }

  return (
    <AppState>
      <SafeAreaProvider>
        <SafeAreaView style={s.app}>
          <View style={s.header}>
            <Header/>
          </View>
          <View style={s.body}>
            {handleScreenToShow()}
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={s.footer}>
        <BottomTab 
          activeTabOption={activeTabOption}
          onPress={setActiveTabOption}
        />
      </View>
    </AppState>
  )
}

const AppState = ({children}:{children:JSX.Element[]}) => {
  return (
    <TodoProvider>
      {children}
    </TodoProvider>
  )
}
